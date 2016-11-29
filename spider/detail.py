#coding=utf-8
#爬取电影详细页面的信息

import requests
import sys
from BeautifulSoup import BeautifulSoup as bs
reload(sys)
sys.setdefaultencoding('UTF-8')

def getDetail(movie_id):
	result = requests.get("https://movie.douban.com/subject/"+movie_id)
	# print result.text

	soup = bs(result.text)

	#电影名称
	title = soup.find('h1')
	name = title.find('span').string

	#年份
	year = title.find(attrs={'class':'year'}).string

	#评分
	score = soup.find('strong',attrs={'property':'v:average'}).string

	#标签
	labels = []
	labelsItem = soup.findAll('span',attrs={'property':'v:genre'})
	for label in labelsItem:
		labels.append((label.string))

	del labelsItem

	#海报的url

	url = soup.find('a',attrs={'class':'nbgnbg'}).img['src']

	#视频链接
	video_links = []
	playBtns = soup.findAll('a',attrs={'class':'playBtn'})
	for a in playBtns:
		video_links.append( {'name':a['data-cn'],'url':a['href']} )

	#简介
	intro = (soup.find('span',attrs={'property':'v:summary'})).contents[0]
	# intro = intro.decode('utf-8')

	return {
		'_id': movie_id,
		'name': name,
		'year': year,
		'intro': intro,
		'score': score,
		'labels': labels,
		'url': url,
		'video_links': video_links
	}

# if __name__ == '__main__':
	# print getDetail('25662329')

data = requests.get("https://api.douban.com/v2/movie/subject/1764796")
print data.json()