import ConfigParser
import sys

def read(filename):
	res={"mongo":{}}
	config = ConfigParser.ConfigParser()
	try:
		config.read(filename)
		res['mongo']['host'] = config.get('mongo', 'host')
		res['mongo']['db_name'] = config.get('mongo', 'db_name')
		res['mongo']['db_user'] = config.get('mongo', 'db_user')
		res['mongo']['db_pwd'] = config.get('mongo', 'db_pwd')
	except Exception,e:
		print "fail to read configuration from %s"%(filename)
		print str(e)
		sys.exit(1)
	return res

if __name__ == '__main__':
	conf = read("../conf/spider.conf")
	print conf