#数据库设计
>  说明: 使用mongodb

##用户表 user_info
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

##用户电影评分表 score_info
	{
		user_id: 用户id,
		movie_id: 电影id,
		score: 用户对该电影的评分
	}

##电影信息表 movie_info
	{
		_id:	条目id
		title:	中文名
		original_title:	原名
		aka:[aka1, aka2]	又名
		alt:	条目页URL
		mobile_url:	移动版条目页URL
		rating:{max:最高分，min:最低分，average：平均评分}
		ratings_count：	评分人数
		wish_count：	想看人数
		collect_count：看过人数
		do_count：在看人数，如果是电视剧，默认值为0，如果是电影值为null
		images：{}	电影海报图，分别提供288px x 465px(大)，96px x 155px(中) 64px x 103px(小)尺寸
		subtype: 条目分类, movie或者tv	str
		directors:	导演，数据结构为影人的简化描述，见附录	array
		casts:	主演，最多可获得4个，数据结构为影人的简化描述，
		writers:	编剧，数据结构为影人的简化描述，见附录
		website:	官方网站	
		douban_site:	豆瓣小站
		pubdates:	如果条目类型是电影则为上映日期，如果是电视剧则为首Ï日期
		mainland_pubdate:	大陆上映日期，如果条目类型是电影则为上映日期，如果是电视剧则为首播日期
		pubdate:	兼容性数据，未来会去掉，大陆上映日期，如果条目类型是电影则为上映日期，如果是电视剧则为首播日期
		year:	年代	str	Y	Y	Y	''
		languages:	语言	array
		durations	片长	array
		genres:[]	影片类型，最多提供3个
		countries:[]	制片国家/地区	
		summary:	简介	str
		comments_count:	短评数量	int	Y	Y	Y	0
		reviews_count:	影评数量	int	Y	Y	Y	0
		seasons_count:	总季数(tv only)	int	Y	Y	Y	0 / null
		current_season:	当前季数(tv only)	int	Y	Y	Y	0 / null
		episodes_count:	当前季的集数(tv only)	int	Y	Y	Y	0 / null
		schedule_url:	影讯页URL(movie only)	str	Y	Y	Y	''
		trailer_urls:	预告片URL，对高级用户以上开放，最多开放4个地址	array	N	Y	Y	[]
		photos:	电影剧照，前10张，见附录	array	N	Y	Y	[]
		popular_reviews:	影评，前10条，影评结构
	}

