<?php
// 应用入口文件

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');

define('BIND_MODULE','Home');
define('APP_DEBUG',True);
define('APP_PATH','./App/');
require './ThinkPHP/ThinkPHP.php';