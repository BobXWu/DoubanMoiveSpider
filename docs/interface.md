#接口设计
##1.注册
	请求体{
		username:用户名,  //[a-zA-z0-9_]{6,16}
		password:密码     //[a-zA-Z0-9]{6,16} md5加密后,32位
		age: 年龄  		 //18-100
		job: 工作		 //
	}
	
	响应体{
		result: 是否成功
		reason: 失败原因
		//当result为false时才有
		//reason为1，用户名或密码格式错误
		//reason为2，用户名已经存在
	}

##2.登录
	请求体{
		username: 用户名  
		password: 密码
	}
	
	响应体{
		result: 是否成功
		reason: 失败原因
		//result为false
		//reason为1，用户名不存在
		//reason为2，密码错误
	}

##3.打分
	请求体
	{
		[
			{
				movie_id: 电影id
				score:	电影评分		
			},
			...
		]
	}

	响应体
	{
		result: 成功	
	}

##4.获得推荐电影
	请求体
		{
			
		}
	
	响应体
		[
			{
				move_id: 电影的id (豆瓣网上电影的id),
				name:  电影名称,
				intro: 电影简介,
				score: 电影评分,
				labels: [ label1, label2, ... ], 
				url:   电影海报的url,
				video_link:
						[
							{
								name: 视频网站的名称,
								url: 链接地址
							},
							...
						]
				
			}
		]
	