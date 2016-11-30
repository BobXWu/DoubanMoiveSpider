var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	var data=[
			{
			  "rating": {
			    "max": 10,
			    "average": 8.4,
			    "stars": "45",
			    "min": 0
			  },
			  "reviews_count": 2434,
			  "wish_count": 27166,
			  "douban_site": "",
			  "year": "2016",
			  "images": {
			    "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393044761.jpg",
			    "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg",
			    "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393044761.jpg"
			  },
			  "alt": "https://movie.douban.com/subject/25921812/",
			  "id": "25921812",
			  "mobile_url": "https://movie.douban.com/subject/25921812/mobile",
			  "title": "驴得水",
			  "do_count": null,
			  "share_url": "https://m.douban.com/movie/subject/25921812",
			  "seasons_count": null,
			  "schedule_url": "https://movie.douban.com/subject/25921812/cinema/",
			  "episodes_count": null,
			  "countries": [
			    "中国大陆"
			  ],
			  "genres": [
			    "剧情",
			    "喜剧"
			  ],
			  "collect_count": 93810,
			  "casts": [
			    {
			      "alt": "https://movie.douban.com/celebrity/1362973/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1478066140.77.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1478066140.77.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1478066140.77.jpg"
			      },
			      "name": "任素汐",
			      "id": "1362973"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1355797/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1458442004.38.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1458442004.38.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
			      },
			      "name": "大力",
			      "id": "1355797"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1337891/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1392696207.67.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1392696207.67.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
			      },
			      "name": "刘帅良",
			      "id": "1337891"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1362975/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1475988686.98.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1475988686.98.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1475988686.98.jpg"
			      },
			      "name": "裴魁山",
			      "id": "1362975"
			    }
			  ],
			  "current_season": null,
			  "original_title": "驴得水",
			  "summary": "一群“品行不端”却怀揣教育梦想的大学教师，从大城市来到偏远乡村开办了一所小学校。学校待遇惨淡、生活艰苦，但老师们都自得其乐，每天嘻嘻哈哈打成一片。然而教育部特派员要来突击检查的消息打破了安宁，因为学校有一位“驴得水老师”隐藏着不可告人的秘密。就在所有人都担心丑事即将败露的时候，一个神奇天才的出现拯救了大家，然而谁能料到真正的麻烦才刚刚开始……",
			  "subtype": "movie",
			  "directors": [
			    {
			      "alt": "https://movie.douban.com/celebrity/1362256/",
			      "avatars": {
			        "small": "https://img3.doubanio.com/img/celebrity/small/1477663977.75.jpg",
			        "large": "https://img3.doubanio.com/img/celebrity/large/1477663977.75.jpg",
			        "medium": "https://img3.doubanio.com/img/celebrity/medium/1477663977.75.jpg"
			      },
			      "name": "周申",
			      "id": "1362256"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1362257/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1477663883.18.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1477663883.18.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1477663883.18.jpg"
			      },
			      "name": "刘露",
			      "id": "1362257"
			    }
			  ],
			  "comments_count": 43838,
			  "ratings_count": 89072,
			  "aka": [
			    "Mr. Donkey"
			  ]
			},
			{
			  "rating": {
			    "max": 10,
			    "average": 8.4,
			    "stars": "45",
			    "min": 0
			  },
			  "reviews_count": 2434,
			  "wish_count": 27166,
			  "douban_site": "",
			  "year": "2016",
			  "images": {
			    "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393044761.jpg",
			    "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg",
			    "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393044761.jpg"
			  },
			  "alt": "https://movie.douban.com/subject/25921812/",
			  "id": "25921812",
			  "mobile_url": "https://movie.douban.com/subject/25921812/mobile",
			  "title": "驴得水",
			  "do_count": null,
			  "share_url": "https://m.douban.com/movie/subject/25921812",
			  "seasons_count": null,
			  "schedule_url": "https://movie.douban.com/subject/25921812/cinema/",
			  "episodes_count": null,
			  "countries": [
			    "中国大陆"
			  ],
			  "genres": [
			    "剧情",
			    "喜剧"
			  ],
			  "collect_count": 93810,
			  "casts": [
			    {
			      "alt": "https://movie.douban.com/celebrity/1362973/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1478066140.77.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1478066140.77.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1478066140.77.jpg"
			      },
			      "name": "任素汐",
			      "id": "1362973"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1355797/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1458442004.38.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1458442004.38.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
			      },
			      "name": "大力",
			      "id": "1355797"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1337891/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1392696207.67.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1392696207.67.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
			      },
			      "name": "刘帅良",
			      "id": "1337891"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1362975/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1475988686.98.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1475988686.98.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1475988686.98.jpg"
			      },
			      "name": "裴魁山",
			      "id": "1362975"
			    }
			  ],
			  "current_season": null,
			  "original_title": "驴得水",
			  "summary": "一群“品行不端”却怀揣教育梦想的大学教师，从大城市来到偏远乡村开办了一所小学校。学校待遇惨淡、生活艰苦，但老师们都自得其乐，每天嘻嘻哈哈打成一片。然而教育部特派员要来突击检查的消息打破了安宁，因为学校有一位“驴得水老师”隐藏着不可告人的秘密。就在所有人都担心丑事即将败露的时候，一个神奇天才的出现拯救了大家，然而谁能料到真正的麻烦才刚刚开始……",
			  "subtype": "movie",
			  "directors": [
			    {
			      "alt": "https://movie.douban.com/celebrity/1362256/",
			      "avatars": {
			        "small": "https://img3.doubanio.com/img/celebrity/small/1477663977.75.jpg",
			        "large": "https://img3.doubanio.com/img/celebrity/large/1477663977.75.jpg",
			        "medium": "https://img3.doubanio.com/img/celebrity/medium/1477663977.75.jpg"
			      },
			      "name": "周申",
			      "id": "1362256"
			    },
			    {
			      "alt": "https://movie.douban.com/celebrity/1362257/",
			      "avatars": {
			        "small": "https://img1.doubanio.com/img/celebrity/small/1477663883.18.jpg",
			        "large": "https://img1.doubanio.com/img/celebrity/large/1477663883.18.jpg",
			        "medium": "https://img1.doubanio.com/img/celebrity/medium/1477663883.18.jpg"
			      },
			      "name": "刘露",
			      "id": "1362257"
			    }
			  ],
			  "comments_count": 43838,
			  "ratings_count": 89072,
			  "aka": [
			    "Mr. Donkey"
			  ]
			}
	];
  
	$scope.data = data;
});


// var qq_chat = true;
// function PlayJsAdPopWin() {
// 	if (qq_chat) {
// 		popwin = window.location.href = 'tencent://message/?uin=99682019&Site=localhost&Menu=yes';
// 	}
// };

// setTimeout("PlayJsAdPopWin()", 1000);