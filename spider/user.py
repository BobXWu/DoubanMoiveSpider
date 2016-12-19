#coding=utf-8
import sys
import requests
import threading
import Queue
import time
from BeautifulSoup import BeautifulSoup as bs
import configure
import mongo_conn

reload(sys) 
sys.setdefaultencoding('utf8') 

def getScore(movie_id):
	result = requests.get("https://movie.douban.com/subject/"+ movie_id +"/comments")
	soup = bs(result.text)
	comment_info = soup.findAll("span",attrs={"class":"comment-info"})
	for info in comment_info:
		uid = getID( info.a['href'].split('/')[-2] )
		score = int(info.findAll('span')[1]['class'][7:9])


def getID(name):
	result = requests.get("https://api.douban.com/v2/user/"+name).json()
	return result['id']

if __name__ == '__main__':
	getScore("3541415");