#接口设计
##1.注册
	请求体{
		username:用户名,  //[a-zA-z0-9_]{6,16}
		password:密码     //[a-zA-Z0-9]{6,16} md5加密后,32位
		age: 年龄  		 //18-100
		job: 工作		 //
	}
	
	响应体{
		code: 200
		reason: 失败原因 	//code为112时才有
		//当result为false时才有
		//reason为1，用户名或密码格式错误
		//reason为2，用户名已经存在
	}

##2.登录 url
	请求体{
		username: 用户名  
		password: 密码
	}
	
	响应体{
		code: 200
		reason: 失败原因 	//code为112时才有
		//result为false
		//reason为1，用户名不存在
		//reason为2，密码错误
	}

##3.获取评价最高的电影
	请求体{
	
	}
	
	响应体
		[
			{
				_id: 电影的id (豆瓣网上电影的id),
				title:  电影名称,
				summary: 电影简介,
				rating:{max:最高分，min:最低分，average：平均评分},
				genres:[]	影片类型，最多提供3个,
				countries:[]	制片国家/地区	,
			},
		....
		]

##3.打分
	请求体
	{
		[
			{
				movie_id: 电影id
				score:	电影评分		10-50 五颗星方式
			},
			...
		]
	}

	响应体
	{
		code: 200
		movies:[
			{
				_id: 电影的id (豆瓣网上电影的id),
				title:  电影名称,
				summary: 电影简介,
				rating:{max:最高分，min:最低分，average：平均评分},
				genres:[]	影片类型，最多提供3个,
				countries:[]	制片国家/地区	,
			},
		....
		]
	}