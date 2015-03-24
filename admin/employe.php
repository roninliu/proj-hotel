<?php include "../public/header.inc.php";?>
<div class="page-title" data-name="employe" id="page_name">
	<div class="pull-right">
        <button type="button" id="addBtn" class="btn btn-success btn-sm">添加新员工</button>
    </div>
    <h4 class="page-header">员工管理</h4>
</div>
<div class="page-container">
	<table id="employeTable" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>员工ID</th>
                <th>员工名称</th>
                <th>员工部门</th>
                <th>员工邮箱</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
<div class="panel panel-primary employe-panel none" id="ePanel">
    <div class="panel-heading" id="ePanelHeader"></div>
    <div class="panel-body">
        <form role="form">
            <div class="form-group none">
                <input class="form-control" id="targetId" disabled>
            </div>
            <div class="form-group">
                <label>员工ID：</label>
                <input class="form-control" placeholder="员工ID" id="employeId" disabled>
            </div>
            <div class="form-group">
                <label>员工名称：</label>
                <input class="form-control" placeholder="员工名称" id="employeName">
            </div>
            <div class="form-group">
                <label>员工部门：</label>
                <select class="form-control" id="departList">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label>员工邮箱：</label>
                <input class="form-control" placeholder="员工邮箱" id="employeEmail">
            </div>
            <div class="form-group">
                <label>员工状态：</label>
                <label class="radio-inline">
                    <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="1" checked="">启用
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="0">禁用
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
