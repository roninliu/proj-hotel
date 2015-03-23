/**
 *
 *	login模块
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	/**
	 * [validity description]
	 * @param  {[type]} username [description]
	 * @param  {[type]} password [description]
	 * @return {[type]}          [description]
	 */
	var validity = function(username, password) {
		var msg = null;
		if (username == "") {
			msg = {
				type: false,
				msg: "用户名不能为空!"
			}
			return msg;
		} else if (password == "") {
			msg = {
				type: false,
				msg: "密码不能为空!"
			}
			return msg;
		} else {
			msg = {
				type: true,
				msg: ""
			}
			return msg;
		}
	}



	/**
	 * [alertTips 登录提示]
	 * @param  {[type]} msg [description]
	 * @return {[type]}     [description]
	 */
	var alertTips = function(msg) {
		$("#login_tips").text(msg.msg);
		if (msg.type) {
			$("#login_tips").hide();
		} else {
			$("#login_tips").show();
		}

	}
	/**
	 * [loginHandler description]
	 * @param  {[type]} username [description]
	 * @param  {[type]} password [description]
	 * @return {[type]}          [description]
	 */
	var loginHandler = function(username,password){
		var user = {
			username:username,
			password:password
		}
		$.ajax({
			url:config.ROOT_PATH+"login",
			data:user,
			type: "POST",			
			success: function(data) {
				if(!data.type){
					alertTips(data);
				}else{
					window.location.href="./admin/dashboard.php";  
				}				
			},
			error: function(err) {
				console.log(err);
			}
		})
	}



	/**
	 * [init 初始化方法]
	 * 注册相关事件
	 */
	exports.init = function() {
		var loginBtn = $("#login_btn");
		console.log(config.ROOT_PATH);
		loginBtn.on("click", function() {
			var username = $("#username").val();
			var password = $("#password").val();
			var validityType = validity(username, password);
			if (validityType.type) {
				loginHandler(username,password);
			} else {
				alertTips(validityType);
			}
		})
	}

})