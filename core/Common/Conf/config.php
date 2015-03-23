<?php
return array(
	//其他配置
	'URL_CASE_INSENSITIVE' =>true,//url大小写过滤
	'SESSION_AUTO_START' =>  true, //是否开启session
	'URL_MODEL'        =>  '2', //URL模式
	
	//数据库配置信息
	'DB_TYPE'   => 'mysql', // 数据库类型
	'DB_HOST'   => 'localhost', // 服务器地址
	'DB_NAME'   => 'proj_hotel', // 数据库名
	'DB_USER'   => 'root', // 用户名
	'DB_PWD'    => 'admin', // 密码
	'DB_PORT'   => 3306, // 端口
	'DB_PREFIX' => '', // 数据库表前缀 
	'DB_CHARSET'=> 'utf8', // 字符集
	'DB_DEBUG'  =>  TRUE, // 数据库调试模式 开启后可以记录SQL日志 3.2.3新增
);