#coding=utf-8
import sys
import re
import requests
import threading
import Queue
import time
from BeautifulSoup import BeautifulSoup as bs
import configure
import mongo_conn
reload(sys) 
sys.setdefaultencoding('utf8') 

SHARE_Q = Queue.Queue()
_WORKER_THREAD_NUM =3
FILE_LOCK = threading.Lock()
Spider_conf = configure.read("../conf/spider.conf")

class MyThread(threading.Thread):
	def __init__(self, func):
		super(MyThread, self).__init__()
		self.func = func
	def run(self):
		self.func()

#线程run函数
def worker():
	global SHARE_Q
	conn = mongo_conn.getConn(Spider_conf['mongo']['host'],\
		Spider_conf['mongo']['db_name'],Spider_conf['mongo']['db_user'],Spider_conf['mongo']['db_pwd'])
	while not SHARE_Q.empty():
		movie_id = SHARE_Q.get()
		if conn['recommend']['movie_info'].find_one({'_id': movie_id}) is None:
			data = detail(movie_id)
			if data.has_key('id'):
				data['_id'] = data['id']
				del data['id']
				conn['recommend']['movie_info'].insert_one(data)
				print 'insert one ',data['title']

				writeLog('insert one  ' + data['title'])
				insertScore(data["_id"], conn)	#写入一些评分数据
			elif(data['code'] == 112):
				print data['msg']
				break
		else:
			print "duplicate "+data['title']

		SHARE_Q.task_done()
		print 'Queue: ',SHARE_Q.qsize()
		time.sleep(20)
	conn.close()

#获得top250的电影
def getTop250():
	global SHARE_Q
	result = requests.get("https://api.douban.com/v2/movie/top250?start=0&count=100").json()
	if(result.has_key('subjects')):
		print len(result['subjects'])
		for movie in result['subjects']:
			SHARE_Q.put(movie['id'])

		singleThreadSpider()
	else:
		print 'no result from top250'

def detail(movie_id):
	data = requests.get("https://api.douban.com/v2/movie/subject/"+movie_id).json()
	return data

def getUserID(name):
	result = requests.get("https://api.douban.com/v2/user/"+name).json()
	return result

def multiThreadSpider():
	global SHARE_Q
	threads = []
	for x in xrange(_WORKER_THREAD_NUM):
		thread = MyThread(worker)
		thread.start()
		threads.append(thread)
	for thread in threads:
		thread.join()

	# SHARE_Q.join()
	print "All done"

def singleThreadSpider():
	worker()
	# SHARE_Q.join()
	print "worker done"
	

#根据标签
def getTag(tag='剧情', start=0, end=3):
	global SHARE_Q
	for x in xrange(start,end):
		url ='https://movie.douban.com/tag/'+tag+'?start='+ str(x*20) +'&type=T'
		result = requests.get(url)
		soup = bs(result.text)
		ids = soup.findAll('a',attrs={'class':'nbg'})
		for x in ids:
			SHARE_Q.put( x['href'].split('/')[-2])
	print SHARE_Q.qsize(),' movies to be stored totally'
	singleThreadSpider()

def writeLog(str):
	current_time = time.strftime( '%Y-%m-%d %X', time.localtime( time.time() ) )
	FILE_LOCK.acquire(True)
	with open('../log/spider.log','a') as log:
		log.write( str.decode('utf-8') + " " + current_time + "\n" )
		FILE_LOCK.release()

def insertScore(movie_id, conn):
	m = re.compile(r"\d\d")
	for x in xrange(0,3):
		print "insert scores, start from ", x*20

		result = requests.get("https://movie.douban.com/subject/"+ movie_id +"/comments?start="+str(x*20) )
		soup = bs(result.text)
		comment_info = soup.findAll("span",attrs={"class":"comment-info"})

		for info in comment_info:
			name = info.a['href'].split('/')[-2]
			data = getUserID(name)
			if data.has_key('id'):
				uid = data['id']
				score = m.findall( info.findAll('span')[1]['class'] )
				if score:
					score = int(score[0])
					if conn['recommend']['score_info'].find_one({"user_id":uid, "movie_id":movie_id}) is None:
						conn['recommend']['score_info'].insert_one({"user_id":uid,"movie_id":movie_id,"score":score})
						print "    insert one score"
				else:
					print "    score error"
			elif( data['code'] == 112):
				print data['msg']
				return
			time.sleep(20)
	print "inserting scores done"

def help():
	print "Please input i, start and end\
		\ni means which tag of movies.\
		\nstart means the start page and end ,the same way"

if __name__ == '__main__':
	# getTag('悬疑')  #获取电影id 添加到队列中
	# SHARE_Q.put("1307542")
	# multiThreadSpider()
	tags=["爱情","喜剧","动画","剧情", "科幻","动作","经典","悬疑","青春"\
		"犯罪","惊悚","文艺"]
	i=0
	start=0
	end=3
	try:
		i = int(sys.argv[1])
		start = int(sys.argv[2])
		end = int(sys.argv[3])
		if i<0 or i>11 or start>=end or start<0:
			help()
			sys.exit(1)
	except Exception,e:
		print str(e)
		help()
		sys.exit(1)
	getTag(tags[i], start, end)

