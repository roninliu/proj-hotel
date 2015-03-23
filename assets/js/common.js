/**
 *
 *	login模块
 *
 */
define(function(require, exports, module) {
	/**
	 * [initMenuhandler description]
	 * @return {[type]} [description]
	 */
	var initMenuHandler = function(){
		var menu = $("#menu").find("li");
		var pageName = $("#page_name").data().name;
		for(var i=0;i<menu.length;i++){
			var tempItem = menu[i].className;
			if(tempItem.indexOf(pageName) > -1){
				$("."+tempItem).addClass("open")
			}
		}
	}

	/**
	 * [init 初始化方法]
	 * 注册相关事件
	 */
	
	module.exports ={
		initMenu:initMenuHandler
	};

})