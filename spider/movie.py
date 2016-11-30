#coding=utf-8
from pymongo import MongoClient
import requests
import threading
import Queue
import time
import re
from BeautifulSoup import BeautifulSoup as bs
import configure

SHARE_Q = Queue.Queue()
_WORKER_THREAD_NUM =3


class MyThread(threading.Thread):
	def __init__(self, func):
		super(MyThread, self).__init__()
		self.func = func
	def run(self):
		self.func()

#数据库连接
def getConn(host,db_name,db_user,db_pwd):
    conn=MongoClient(host)
    # conn[db_name].authenticate(db_user,db_pwd,mechanism='SCRAM-SHA-1')
    return conn

def worker():
	global SHARE_Q
	conn = getConn('127.0.0.1:28001','recommend','wxb','123456')
	while not SHARE_Q.empty():
		movie_id = SHARE_Q.get()
		data = detail(movie_id)

		if(data.has_key('id')):
			data['_id'] = data['id']
			del data['id']
			if conn['recommend']['movie_info'].find_one({'_id':data['_id']}) is None:
				conn['recommend']['movie_info'].insert_one(data)
				print 'insert one ',data['title']
			else:
				print "duplicate "+data['title']
		else:
			print "no movie message returned from API"
		SHARE_Q.task_done()
		print 'Queue: ',SHARE_Q.qsize()
		time.sleep(20)
	conn.close()

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

def getTag(tag='剧情'):
	global SHARE_Q
	for x in xrange(0,3):
		url ='https://movie.douban.com/tag/'+tag+'?start='+ str(x*20) +'&type=T'
		result = requests.get(url)
		soup = bs(result.text)
		ids = soup.findAll('a',attrs={'class':'nbg'})
		for x in ids:
			SHARE_Q.put( x['href'].split('/')[-2])
	print SHARE_Q.qsize(),' movie to be stored totally'
	multiThreadSpider()

if __name__ == '__main__':
	getTag('动画短片')