<?php  
    session_start();    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>SB Admin 2 - Bootstrap Admin Theme</title>
    <!-- Bootstrap Core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/login.css">
    <script src="assets/lib/jquery-2.1.0.min.js"></script>
    <script src="assets/lib/sea.js"></script>
</head>

<body>
<div class="container login">
        <div class="row">

            <div class="col-md-4 col-md-offset-4">
            <div class="alert alert-danger" id="login_tips"></div>
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">请登录</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="用户名" id="username" name="username" type="text" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="密码" id="password" name="password" type="password" value="">
                                </div>
                                <a href="javascript:;" class="btn btn-lg btn-success btn-block" id="login_btn">登录</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
<script type="text/javascript">
    seajs.use("./assets/js/login",function(app){
        app.init();
    })
</script>

