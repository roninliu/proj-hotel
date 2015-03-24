<?php
session_start();
?>
<?php
$userid = $_SESSION["id"];
$username = $_SESSION["name"];
if ($username == null) {
	header("Location: ../login.php");
	exit;
}
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>酒店多媒体系统</title>
    <!-- Bootstrap Core CSS -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">
    <script src="../assets/lib/jquery-2.1.0.min.js"></script>
    <script src="../assets/lib/jquery.dataTables.min.js"></script>
    <script src="../assets/lib/sea.js"></script>
</head>

<body>
        <!-- Navigation -->
        <div class="navbar navbar-default navbar-static-top" role="navigation">
            <a class="navbar-brand" href="#">酒店多媒体系统</a>
            <ul class="nav navbar-top-links navbar-left menu" id="menu">
               <li  class="menu-multimedia"><a href="#"><i class="fa fa-table fa-fw"></i> 多媒体信息</a></li>
               <li  class="menu-machine"><a href="../admin/machine.php"><i class="fa fa-wrench fa-fw"></i> 设备管理</a></li>
               <li  class="meun-employe"><a href="../admin/employe.php"><i class="fa fa-sitemap fa-fw"></i> 员工管理</a></li>
            </ul>
            <ul class="nav navbar-top-links navbar-right">
               <li><a href="#"><i class="fa fa-user fa-fw"></i> <span data-id="<?php echo $userid;?>"><?php echo $username;?></span>  </a></li>
               <li><a href="#"><i class="fa fa-sign-out fa-fw"></i> 退出</a></li>
            </ul>
        </div>



