#视频推荐系统
	视频智能推荐系统可以获取多家在线视频网站提供的视频内容信息，并对相
	关视频内容进行分析，基于用户个性化推荐，根据每个用户的兴趣、年龄等多个
	维度进行个性化推荐。推荐内容不仅包括狭义上的电影、电视剧，还可以包括音
	乐、新闻、游戏、教育、旅游、购物等多种与视频相关的资源，为用户提供便利。

##项目说明

* 前端模块： html, javascript, css, 使用框架包括bootstrap, material-design, jQuery, angularJS等

* 推荐算法模块: java 使用框架包括hadoop 基于物品的协同过滤算法

* 后端模块: java 使用框架包括Spring

* 爬虫模块: python 使用框架包括request, BeautifulSoup 根据标签爬取豆瓣网上的电影和用户评分

* 推荐流程说明(只针对新用户)
	1.	新用户登录后返回评价较高的电影给用户
	2.	用户评完分后，评分信息传给服务端处理
	3.	前端展示推荐结果

##文件结构说明

```bash
.
├── build.gradle
├── settings.gradle             # gradle 配置文件
├── classes
├── code                        # 后端程序存放
├── conf                        # 服务器配置
│   
├── docs                        # 项目文档 
│   ├── db_design.md            # 数据库设计文件
│   ├── interface.md            # 接口文件
│   ├── system_require.md       # 系统需求
│   └── user_require.md         # 用户需求分析
│   
├── hadoop                      # hadoop 输入输出文件
│   
├── log                         # 日志文件
├── README.md
├── spider
└── view                        # web 前端文件
```

##项目分工

 <table>
 <tr><th>组员</th><th>负责部分</th></tr>
 <tr><td>吴小宝</td><td>网络爬虫</td></tr>
<tr><td>冯裕浩</td><td>推荐算法部分</td></tr>
<tr><td>祁辉</td><td>服务端架构</td></tr>
<tr><td>吴小宝 侯安</td><td>web前端</td></tr>
 </table>

##待完成的提交文件
* 演示视频
	*	演示打分，显示推荐结果的过程
* 展示ppt
	*	推荐原理介绍
		*	基于物品的协同过滤推荐
	*	效果展示
	*	项目亮点
		*	hadoop分布式框架
		*	电影信息爬虫有选择性
		*	提供前端界面
* 架构图

##未完成功能
1.	爬虫后台管理员
	*	管理员可以查看电影信息
	*	管理员可以修正电影的某个信息项(名字，年份，简介)
2.	用户行为分析中的观看时长，搜索习惯。因为系统无法直接提供视频资源，所以不能收集用户行为数据
3.	自然语言处理