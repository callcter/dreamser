<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scaleable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no">
    <title>爱的纪念册</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/Public/lib/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/Public/style/css/public-mobile.css">
    <link rel="stylesheet" href="/Public/style/css/lovenote.css">

</head>

<body onload="index()">
    <header>
<!--        <div class="h-left fa fa-angle-left fa-2x"></div>-->
        <div class="h-middle">爱的纪念册</div>
        <div class="h-right fa fa-bars fa-lg" id="menu"></div>
    </header>
    <div class="menu" id="menu">
        <div class="arrow-up"></div>
        <div class="clear"></div>
        <ul>
            <a href="calendar.html"><li><i class="fa fa-calendar fa-lg"></i> 日历</li></a>
            <a href="lunaria.html"><li><i class="fa fa-female fa-lg"></i> 例假</li></a>
            <a href="MECreate.html"><li><i class="fa fa-photo fa-lg"></i> 时间线</li></a>
            <a href="MDCreate.html"><li><i class="fa fa-pencil fa-lg"></i> 纪念日</li></a>
        </ul>
    </div>
    <div class="wrapper">
        <div class="loveDays">
            <span id="loveDays"></span>
        </div>
        <div class="memorialDay" id="mD">
            今天是 <span id="memorialDay"></span> 的日子
        </div>
        <ul class="timeline" id="timeline"></ul>
    </div>
    <footer></footer>
</body>

    <script src="/Public/js/lib/jquery-2.1.4/jquery.min.js"></script>
    <script src="/Public/js/global.js"></script>
    <script src="/Public/js/common.js"></script>
    <script src="/Public/js/lovenote.js"></script>

</html>