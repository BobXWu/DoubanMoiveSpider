#接口设计
##1.登录
	请求体{
		username:用户名,  //[a-zA-z0-9_]{6,16}
		password:密码     //md5加密,32位
	}
	
	响应体{
		result: 是否成功
		reason: 失败原因
		//当result为false时才有
		//reason为1，用户名或密码格式错误
		//reason为2，用户名已经存在
	}