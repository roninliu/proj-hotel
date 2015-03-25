/**
 *
 *	admin
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	var common = require("./common");
	var employe = require('./employe');
	var machine = require('./machine');


	/**
	 * [init 初始化方法]
	 * 注册相关事件
	 */
	exports.init = function() {
		/*初始化页面*/
		common.initMenu();
		employe.initDataTable();
		employe.getDepHandler();
		machine.initDataTable();
		/*事件处理*/
		/* employe 模块*/
		$(".employe #employeTable tbody").on("click", ".btn", function() {
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
		$(".employe #saveBtn").click(function() {
			var saveObj = {
				id: $("#targetId").val(),
				employe_id: $("#employeId").val(),
				nickname: $("#employeName").val(),
				depart: $("#departList").val(),
				email: $("#employeEmail").val(),
				username:$("#username").val(),
				enabled: $("input[type=radio][name=optionsRadiosInline]").val()
			}
			employe.saveEmployeHandler(saveObj);
		})
		$(".employe #cancelBtn").click(function() {
			$("#ePanel").addClass("none");
			$("#ePanelHeader").text("");
			$("#targetId").val("");
			$("#employeId").val("");
			$("#username").val("");
			$("#employeName").val("");
			$("#departList").val("");
			$("#employeEmail").val("");
			$("#optionsRadiosInline1").attr("checked", true);
			$("#optionsRadiosInline2").attr("checked", false);
		})
		$(".employe #addBtn").click(function(){
			$("#ePanelHeader").text("添加新员工");
			$("#ePanel").removeClass("none");
			employe.getEmployNewId();
		})


		/* machine 模块*/
		$(".machine #addBtn").click(function(){
			$("#mPanelHeader").text("添加新设备");
			$("#mPanel").removeClass("none");
		})

		$(".machine #saveBtn").click(function() {
			var saveObj = {
				id: $("#targetId").val(),
				name: $("#machineName").val(),
				ip: $("#machinip").val(),
				description: $("#machineDesc").val(),
				enable: $("input[type=radio][name=machineLine]").val()
			}
			machine.saveMachineHandler(saveObj);
		})
		$(".machine #cancelBtn").click(function() {
			$("#mPanel").addClass("none");
			$("#mPanelHeader").text("");
			$("#targetId").val("");
			$("#machineName").val("");
			$("#machinip").val("");
			$("#machineDesc").val("");
			$("#machineOnline").attr("checked", true);
			$("#machineOffline").attr("checked", false);
		})

		$(".machine #machineTable tbody").on("click", ".btn", function() {
			var data = $(this).data();
			if (data.type == "edit") {
				var target = $(this).parents("tr");
				machine.editItemHandler(data, target);
			} else if (data.type == "delete") {
				if(confirm("确定删除该设备？\n注意：删除后信息无法恢复")){
					machine.deleteMachineHandler(data.id);
				}
			}
		})

	}

})
