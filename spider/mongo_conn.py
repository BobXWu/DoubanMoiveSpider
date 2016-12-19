from pymongo import MongoClient

#mongodb connection
def getConn(host,db_name,db_user,db_pwd):
    conn=MongoClient(host)
    conn[db_name].authenticate(db_user,db_pwd,mechanism='SCRAM-SHA-1')
    return conn