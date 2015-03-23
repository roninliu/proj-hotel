<?php include("../public/header.inc.php");?>
<div class="page-title" data-name="employe" id="page_name">
	<h5 class="page-header">员工管理</h5>
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
<link rel="stylesheet" type="text/css" href="../assets/css/admin.css">
<script type="text/javascript">
    seajs.use("../assets/js/admin",function(app){
        app.init();
    })
</script>
<?php include("../public/footer.inc.php");?>
