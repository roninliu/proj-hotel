<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2014 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

//定义安全文件
define('BUILD_DIR_SECURE', false);//不生成安全文件
//define('DIR_SECURE_FILENAME', 'default.html');//生成安全文件

// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
define('APP_DEBUG',True);

//定义应用模式
define("APP_MODE", "API");//定义项目为API模式，无view

//定义公用模块
define('COMMON_PATH','./Common/');

//当前入口文件
define('BIND_MODULE','SDK');//绑定当前入口模块
define('BIND_CONTROLLER','SDK'); // 绑定当前入口控制器
define('BUILD_CONTROLLER_LIST','SDK'); // 生成控制器
define('BUILD_MODEL_LIST','User');//生成模型

// 定义应用目录
define('APP_PATH','./Application/');

// 引入ThinkPHP入口文件
require './ThinkPHP/ThinkPHP.php';

// 亲^_^ 后面不需要任何代码了 就是如此简单