//all post request

//1. 注册的post请求
function signupPost(username, password){
	
	jQuery.ajax({
	  url: '/action',
	  type: 'POST',
	  dataType: 'json',
	  data: {
	  	action_id: 1,
	  	username: username,
	  	password: hex_md5(password),
	  },


	  beforeSend: function(){

	  },
	  success: function(data, textStatus, xhr) {
	  	dealSignupReturn(data, username, password);
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    showWarningTips(textStatus);
	  }
	});
}

//2.登录的post请求
function loginPost(username,password){

	jQuery.ajax({
	  url: '/action',
	  type: 'POST',
	  dataType: 'json',
	  data: {
	  	action_id: 2,
	  	username: username,
	  	password: hex_md5(password) },
	  beforeSend: function(){

	  },
	  success: function(data, textStatus, xhr) {
	  	dealLoginReturn(data, username);
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    showWarningTips(textStatus);
	  }
	});
	
}

//3.