#视频推荐系统
	视频智能推荐系统可以获取多家在线视频网站提供的视频内容信息，并对相
	关视频内容进行分析，基于用户个性化推荐，根据每个用户的兴趣、年龄等多个
	维度进行个性化推荐。推荐内容不仅包括狭义上的电影、电视剧，还可以包括音
	乐、新闻、游戏、教育、旅游、购物等多种与视频相关的资源，为用户提供便利。

##项目说明

* 前端模块： html, javascript, css, 使用框架包括bootstrap, material-design, jQuery， angularJS等

* 推荐算法模块: java 使用框架包括hadoop 基于物品的协同过滤算法

* 后端模块: java 使用框架包括Spring

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

| 组员         | 负责部分     |
| :-----   : | :----- : |
| 吴小宝        | 网络爬虫     |
| 冯裕浩, 吴小宝   | 推荐算法部分   |
| 祁辉         | web 后端   |
| 吴小宝, 侯安    | web 前端   |
