/**
 *
 *	admin
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	var eTables = null;
	var initDataTableHandler = function() {
			eTables = $('#employeTable').dataTable({
				"oLanguage": {
					"sLengthMenu": "每页显示 _MENU_ 条记录",
					"sZeroRecords": "抱歉， 没有检索到数据",
					"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
					"sInfoEmpty": "没有数据",
					"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
					"oPaginate": {
						"sFirst": "首页",
						"sPrevious": "前一页",
						"sNext": "后一页",
						"sLast": "尾页"
					},
					"sSearch": "搜索："
				},
				"aLengthMenu": [20, 50, 100],
				"iDisplayLength": 20,
				"fnServerData": function(sSource, aDataSet, fnCallback) {
					$.ajax({
						"type": "GET",
						"url": sSource,
						"data": aDataSet,
						"success": function(resp) {
							fnCallback(resp);
						}
					});
				},
				"columns": [{
					"data": "employe_id"
				}, {
					"data": "nick_name"
				}, {
					"data": "name"
				}, {
					"data": "email"
				}, {
					"data": "id"
				}],
				"columnDefs": [{
					"width": "15%",
					"targets": 4,
					"render": function(data) {
						var htmlStr = '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="edit"><i class="fa fa-edit"></i> 编辑</a>';
						htmlStr += '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="delete"><i class="fa fa-times"></i> 删除</a>';
						return htmlStr;
					}
				}],
				"bSort": false,
				"bProcessing": true,
				"bDestroy": true,
				"bServerSide": true, //开启服务端处理模式
				"sPaginationType": "full_numbers",
				"bFilter": true, //搜索栏
				"bInfo": true,
				"sProcessing": "<img src='../images/loading.gif' />",
				"sZeroRecords": "没有检索到数据",
				"sAjaxSource": config.ROOT_PATH + "getEmployeHandler"
			});
		}
		/**
		 * [getDepartmentHandler description]
		 * @return {[type]} [description]
		 */
	var getDepartmentHandler = function() {
		$.ajax({
			url: config.ROOT_PATH + "getDepHandler",
			type: "GET",
			success: function(data) {
				var depart = $("#departList");
				var innerStr = "<option value='0'>---请选择部门---</option>"
				if (data != null) {
					for (var i = 0; i < data.length; i++) {
						innerStr += "<option value='" + data[i].id + "' data-val='" + data[i].number + "'>" + data[i].name + "</option>";
					};
				}
				depart.html(innerStr);
			},
			error: function(err) {
				console.log(err);
			}
		})
	}

	/**
	 * [editRowHandler description]
	 * @param  {[type]} data    [description]
	 * @param  {[type]} element [description]
	 * @return {[type]}         [description]
	 */
	var editRowHandler = function(data, element) {
			var sData = eTables.fnGetData(element);
			$("#ePanelHeader").text("编辑员工信息");
			$("#targetId").val(sData.id);
			$("#employeId").val(sData.employe_id);
			$("#employeName").val(sData.nick_name);
			$("#departList").val(sData.d_id);
			$("#employeEmail").val(sData.email);
			if (sData.enable == 1) {
				$("#optionsRadiosInline1").attr("checked", true);
			} else {
				$("#optionsRadiosInline2").attr("checked", true);
			}
			$("#ePanel").removeClass("none");
		}
		/**
		 * [saveEmployeHandler description]
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
	var saveEmployeHandler = function(data) {
		if (data != null) {
			$.ajax({
				url: config.ROOT_PATH + "saveEmployeHandler",
				type: "POST",
				data: data,
				success: function(data) {
					if (data) {
						alert("更新成功！");
						$("#ePanel").addClass("none");
						$("#ePanelHeader").text("");
						$("#targetId").val("");
						$("#employeId").val("");
						$("#employeName").val("");
						$("#departList").val("");
						$("#employeEmail").val("");
						$("#optionsRadiosInline1").attr("checked", true);
						$("#optionsRadiosInline2").attr("checked", false);

						eTables.fnClearTable();
						eTables.fnDraw();
					} else {
						alert("更新失败，服务器异常！");
					}
				},
				error: function(err) {
					console.log(err);
				}
			})
		} else {
			return false;
		}
	}
	/**
	 * [deleteEmployeHandler description]
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	var deleteEmployeHandler = function(id) {
		$.ajax({
			url: config.ROOT_PATH + "deleteEmployeHandler",
			type: "POST",
			data: {
				id: id
			},
			success: function(data) {
				if (data) {
					alert("删除成成功！");
					eTables.fnClearTable();
					eTables.fnDraw();
				} else {
					alert("更新失败，服务器异常！");
				}
			},
			error: function(err) {
				console.log(err);
			}
		})
	}

	var getEmployNewId = function(){
		$.ajax({
			url: config.ROOT_PATH + "getEmployNewId",
			type: "GET",
			success: function(data) {
				$("#employeId").val(data);
			},
			error: function(err) {
				console.log(err);
			}
		})
	}

	/**
	 *  注册相关事件
	 */
	module.exports = {
		initDataTable: initDataTableHandler,
		editItemHandler: editRowHandler,
		getDepHandler: getDepartmentHandler,
		saveEmployeHandler: saveEmployeHandler,
		deleteEmployeHandler: deleteEmployeHandler,
		getEmployNewId:getEmployNewId
	};
})
