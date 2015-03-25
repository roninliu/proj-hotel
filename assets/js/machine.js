/**
 *
 *	admin
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	var mTables = null;
	/**
	 * [initDataTableHandler description]
	 * @return {[type]} [description]
	 */
	var initDataTableHandler = function() {
			mTables = $('#machineTable').dataTable({
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
				"aLengthMenu": [15, 20, 50, 100],
				"iDisplayLength": 15,
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
					"data": "name"
				}, {
					"data": "ip"
				}, {
					"data": "description"
				}, {
					"data": "enable"
				}, {
					"data": "id"
				}],
				"columnDefs": [{
					"width": "14%",
					"targets": 4,
					"render": function(data) {
						var htmlStr = '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="edit"><i class="fa fa-edit"></i> 编辑</a>';
						htmlStr += '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="delete"><i class="fa fa-times"></i> 删除</a>';
						return htmlStr;
					}
				}, {
					"width": "55%",
					"targets": 2,
					"render": function(data) {
						var htmlStr = '<p class="txtoverflow">' + data + '</p>';
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
				"sAjaxSource": config.ROOT_PATH + "getMachineHandler"
			});
		}
		/**
		 * [saveMachineHandler description]
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
	var saveMachineHandler = function(data) {
			if (data != null) {
				$.ajax({
					url: config.ROOT_PATH + "saveMachineHandler",
					type: "POST",
					data: data,
					success: function(data) {
						if (data) {
							alert("操作成功！");
							$("#machineName").val("");
							$("#machinip").val("");
							$("#machineDesc").val("");
							$("#mPanel").addClass("none");
							mTables.fnClearTable();
							mTables.fnDraw();
						} else {
							alert("操作失败！服务器异常！");
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
		 * [deleteMachineHandler description]
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
	var deleteMachineHandler = function(id) {
		$.ajax({
			url: config.ROOT_PATH + "deleteMachineHandler",
			type: "POST",
			data: {
				id: id
			},
			success: function(data) {
				if (data) {
					alert("删除成成功！");
					mTables.fnClearTable();
					mTables.fnDraw();
				} else {
					alert("更新失败，服务器异常！");
				}
			},
			error: function(err) {
				console.log(err);
			}
		})
	}
	var editItemHandler = function(data, element) {
			var sData = mTables.fnGetData(element);
			$("#ePanelHeader").text("编辑设备信息");
			$("#targetId").val(sData.id);
			$("#machineName").val(sData.name);
			$("#machinip").val(sData.ip);
			$("#machineDesc").val(sData.description);
			if (sData.enable == "在线") {
				$("#machineOnline").attr("checked", true);
			} else {
				$("#machineOffline").attr("checked", true);
			}
			$("#mPanel").removeClass("none");
		}
		/**
		 *  注册相关事件
		 */

	module.exports = {
		initDataTable: initDataTableHandler,
		saveMachineHandler: saveMachineHandler,
		deleteMachineHandler: deleteMachineHandler,
		editItemHandler: editItemHandler
	};
})
