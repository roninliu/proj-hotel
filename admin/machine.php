<?php include "../public/header.inc.php";?>
<div class="page-title" data-name="machine" id="page_name">
	<div class="pull-right">
		<button type="button" data-toggle="modal" data-target="#machineModal" id="addBtn" class="btn btn-success btn-sm">添加新设备</button>
	</div>
	<h4 class="page-header">设备管理</h4>
</div>
<div class="page-container">
	<table id="machineTable" class="display" cellspacing="0" width="100%">
		<thead>
			<tr>
				<th>设备名称</th>
				<th>设备IP</th>
				<th>设备描述</th>
				<th>设备状态</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>
</div>
<div class="panel panel-primary machine-panel none" id="mPanel">
    <div class="panel-heading" id="mPanelHeader"></div>
    <div class="panel-body">
        <form role="form">
            <div class="form-group none">
                <input class="form-control" id="targetId" disabled>
            </div>
            <div class="form-group">
                <label>设备名称：</label>
                <input class="form-control" placeholder="设备名称" id="machineName">
            </div>
            <div class="form-group">
                <label>设备IP：</label>
                <input class="form-control" placeholder="设备IP" id="machinip">
            </div>
            <div class="form-group">
                <label>设备描述：</label>
                <textarea class="form-control" rows="3" id="machineDesc"></textarea>
            </div>
            <div class="form-group">
                <label>设备状态：</label>
                <label class="radio-inline">
                    <input type="radio" name="machineLine" id="machineOnline" value="1" checked="">在线
                </label>
                <label class="radio-inline">
                    <input type="radio" name="machineLine" id="machineOffline" value="0">离线
                </label>
            </div>
        </form>
    </div>
    <div class="panel-footer">
        <button type="button" id="saveBtn" class="btn btn-primary">保存</button>
        <button type="reset" id="cancelBtn" class="btn btn-default">取消</button>
    </div>
</div>
<link rel="stylesheet" type="text/css" href="../assets/css/admin.css">
<script type="text/javascript">
	seajs.use("../assets/js/admin",function(app){
		app.init();
	})
</script>
<?php include "../public/footer.inc.php";?>
