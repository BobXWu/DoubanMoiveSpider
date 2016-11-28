var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	  var data=[{
			  	move_id: "3541415",
				name:  "盗梦空间 Inception",
				intro: "道姆·柯布（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）与同事阿瑟（约瑟夫·戈登-莱维特 Joseph Gordon-Levitt 饰）和纳什（卢卡斯·哈斯 Lukas Haas 饰）在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔（希里安·墨菲 Cillian Murphy 饰）的深层潜意识中种下放弃家族公司、自立门户的想法。为了重返美国，柯布偷偷求助于岳父迈尔斯（迈克尔·凯恩 Michael Caine 饰），吸收了年轻的梦境设计师艾里阿德妮（艾伦·佩吉 Ellen Page 饰）、梦境演员艾姆斯（汤姆·哈迪 Tom Hardy 饰）和药剂师约瑟夫（迪利普·劳 Dileep Rao 饰）加入行动。在一层层递进的梦境中，柯布不仅要对付费希尔潜意识的本能反抗，还必须直面已逝妻子梅尔（玛丽昂·歌迪亚 Marion Cotillard 饰）的处处破坏，实际情况远比预想危险得多……",
				score: 9.2,
				labels: [ "剧情" ,"动作","科幻","悬疑","冒险" ], 
				url:  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg",
				video_links:
						[
							{
								name: "优酷",
								url: "http://youku.com"
							},
							{
								name: "土豆",
								url: "http://tudou.com"
							}
						]
	  		},
	  		{
			  	move_id: "3541415",
				name:  "盗梦空间 Inception",
				intro: "道姆·柯布（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）与同事阿瑟（约瑟夫·戈登-莱维特 Joseph Gordon-Levitt 饰）和纳什（卢卡斯·哈斯 Lukas Haas 饰）在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔（希里安·墨菲 Cillian Murphy 饰）的深层潜意识中种下放弃家族公司、自立门户的想法。为了重返美国，柯布偷偷求助于岳父迈尔斯（迈克尔·凯恩 Michael Caine 饰），吸收了年轻的梦境设计师艾里阿德妮（艾伦·佩吉 Ellen Page 饰）、梦境演员艾姆斯（汤姆·哈迪 Tom Hardy 饰）和药剂师约瑟夫（迪利普·劳 Dileep Rao 饰）加入行动。在一层层递进的梦境中，柯布不仅要对付费希尔潜意识的本能反抗，还必须直面已逝妻子梅尔（玛丽昂·歌迪亚 Marion Cotillard 饰）的处处破坏，实际情况远比预想危险得多……",
				score: 9.2,
				labels: [ "剧情" ,"动作","科幻","悬疑","冒险" ], 
				url:  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg",
				video_links:
						[
							{
								name: "优酷",
								url: "http://youku.com"
							},
							{
								name: "土豆",
								url: "http://tudou.com"
							}
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