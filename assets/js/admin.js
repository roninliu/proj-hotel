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
		employe.getDepHandler();
		$("#employeTable tbody").on("click", ".btn", function() {
			var data = $(this).data();
			if (data.type == "edit") {
				var target = $(this).parents("tr");
				employe.editItemHandler(data, target);
			} else if (data.type == "delete") {
				if(confirm("确定删除该员工？\n注意：删除后信息无法恢复")){
					employe.deleteEmployeHandler(data.id);
				}
			}
		})
		$("#saveBtn").click(function() {
			var saveObj = {
				id: $("#targetId").val(),
				employe_id: $("#employeId").val(),
				nickname: $("#employeName").val(),
				depart: $("#departList").val(),
				email: $("#employeEmail").val(),
				enabled: $("input[type=radio][name=optionsRadiosInline]").val()
			}
			employe.saveEmployeHandler(saveObj);
		})
		$("#cancelBtn").click(function() {
			$("#ePanel").addClass("none");
			$("#ePanelHeader").text("");
			$("#targetId").val("");
			$("#employeId").val("");
			$("#employeName").val("");
			$("#departList").val("");
			$("#employeEmail").val("");
			$("#optionsRadiosInline1").attr("checked", true);
			$("#optionsRadiosInline2").attr("checked", false);
		})
		$("#addBtn").click(function(){
			$("#ePanelHeader").text("添加新员工");
			$("#ePanel").removeClass("none");
			var employId = employe.getEmployNewId();
			console.log(employeId);
		})
	}

})
