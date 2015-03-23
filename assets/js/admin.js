/**
 *
 *	admin
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	var common = require("./common");
	var employe = require('./employe');

	/**
	 * [init 初始化方法]
	 * 注册相关事件
	 */
	exports.init = function() {
		common.initMenu();
		employe.initDataTable();
		$("#employeTable tbody").on("click",".btn",function(){
			var _that = $(this);
			var data = $(_that).data();
			if(data.type == "edit"){
				_that.parents("tr");
				console.log($("#employeTable").fnGetData(_that.parents("tr")));
			}else if(data.type == "delete"){

			}
		})
	}

})