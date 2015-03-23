/**
 *
 *	admin
 *
 */
define(function(require, exports, module) {

	var config = require("./config");
	var employeTables = null;
	var initDataTableHandler = function() {
		employeTables = $('#employeTable').dataTable({
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
					var htmlStr = '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="edit">编辑</a>';
					htmlStr += '<a class="btn btn-default" href="javascript:;" data-id="' + data + '" data-type="delete">删除</a>';
					return htmlStr;
				}
			}],
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


	var editRowHandler = function(obj){
		console.log(obj);
		console.log(11);
	}

	/**
	 *  注册相关事件
	 */
	module.exports = {
		initDataTable: initDataTableHandler,
		editItemHandler:editRowHandler
	};
	exports.employeTable = employeTables;

})