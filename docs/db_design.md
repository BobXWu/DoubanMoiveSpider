#数据库设计
>  说明: 使用mongodb

##用户表
	{
		username: 用户名,
		password: 密码,
		age:	年龄,
		job:	工作
	}

	job:
		0：其他 
		1：学生
		2：老师
		3：白领
		4：工人

##用户电影评分表
	{
		user_id: 用户id,
		movie_id: 电影id,
		score: 用户对该电影的评分
	}

##电影信息表
	{
		move_id: 电影的id (豆瓣网上电影的id),
		name:  电影名称,
		intro: 电影简介,
		score: 电影评分,
		labels: [ label1, label2, ... ],  
		url:   电影海报的url,
		video_links:
				[
					{
						name: 视频网站的名称,
						url: 链接地址
					},
					...
				]
	}


