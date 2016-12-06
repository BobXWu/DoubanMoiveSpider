#coding=utf-8
import sys
from pymongo import MongoClient
import requests
import threading
import Queue
import time
from BeautifulSoup import BeautifulSoup as bs
import configure

reload(sys) 
sys.setdefaultencoding('utf8') 

SHARE_Q = Queue.Queue()
_WORKER_THREAD_NUM =3
FILE_LOCK = threading.Lock()
Spider_conf = configure.read("../conf/spider.conf")
print Spider_conf

class MyThread(threading.Thread):
	def __init__(self, func):
		super(MyThread, self).__init__()
		self.func = func
	def run(self):
		self.func()

#数据库连接
def getConn(host,db_name,db_user,db_pwd):
    conn=MongoClient(host)
    conn[db_name].authenticate(db_user,db_pwd,mechanism='SCRAM-SHA-1')
    return conn

#线程run函数
def worker():
	global SHARE_Q
	conn = getConn(Spider_conf['mongo']['host'],\
		Spider_conf['mongo']['db_name'],Spider_conf['mongo']['db_user'],Spider_conf['mongo']['db_pwd'])
	while not SHARE_Q.empty():
		movie_id = SHARE_Q.get()
		data = detail(movie_id)
		
		if(data.has_key('id')):
			data['_id'] = data['id']
			del data['id']
			if conn['recommend']['movie_info'].find_one({'_id':data['_id']}) is None:
				conn['recommend']['movie_info'].insert_one(data)
				print 'insert one ',data['title']
				writeLog('insert one  ' + data['title'])
			else:
				print "duplicate "+data['title']
		else:
			print "no movie message returned from API"
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
		multiThreadSpider()
	else:
		print 'no result from top250'

def detail(movie_id):
	data = requests.get("https://api.douban.com/v2/movie/subject/"+movie_id).json()
	return data

def multiThreadSpider():
	global SHARE_Q
	threads = []
	for x in xrange(_WORKER_THREAD_NUM):
		thread = MyThread(worker)
		thread.start()
		threads.append(thread)
	for thread in threads:
		thread.join()

	SHARE_Q.join()
	print "All done"

#根据标签
def getTag(tag='剧情'):
	global SHARE_Q
	for x in xrange(11,12):
		url ='https://movie.douban.com/tag/'+tag+'?start='+ str(x*20) +'&type=T'
		result = requests.get(url)
		soup = bs(result.text)
		ids = soup.findAll('a',attrs={'class':'nbg'})
		for x in ids:
			SHARE_Q.put( x['href'].split('/')[-2])
	print SHARE_Q.qsize(),' movies to be stored totally'
	multiThreadSpider()

def writeLog(str):
	current_time = time.strftime( '%Y-%m-%d %X', time.localtime( time.time() ) )
	FILE_LOCK.acquire(True)
	with open('../log/spider.log','a') as log:
		log.write( str.decode('utf-8') + " " + current_time + "\n" )
		FILE_LOCK.release()

if __name__ == '__main__':
	getTag('爱情')