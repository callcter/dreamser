<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cmn-Hans">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>dreamser开发者聚集地</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/Public/lib/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/Public/style/css/index.css">
    <!--[if lt IE 9]>
        <script src="/Public/lib/html5shiv.min.js"></script>
    <![endif]-->
    
</head>

<body>
    <header>
        <div class="h-wrapper">
            <span class="h-domain" id="domain">
                <a href="http://dreamser.com">
                    Dreamser
                </a>
            </span>
            <span class="h-link"><a href="#workShow">作品展示</a></span>
            <span class="h-link"><a href="#mobileApp">移动应用</a></span>
            <span class="h-link"><a href="#moduleDevelop">组件开发</a></span>
            <span class="h-link"><a href="view/customService.html">定制服务</a></span>
            <span class="h-link"><a href="view/contactManager.html">联系作者</a></span>
            <span class="h-link"><a href="view/supportManager.html">支持作者</a></span>
        </div>
    </header>
    <nav>
        <div class="navigator">
            首页
        </div>
    </nav>
    <div class="main">
        <div class="banner">
            <div class="carousel">
                <img id="carousel" src="/Public/image/carousel1.jpg">
                <ul class="index" id="carousel_index">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="thumbnail">
                <div class="avator">
                    <img src="/Public/image/avator.jpg">
                </div>
                <div class="nickname">
                    Callcter
                </div>
                <div class="motto">
                    <img src="/Public/image/dreamser.jpg" alt="dreamser微信公众号">
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <ul class="list">
            <li id="workShow">
                <p class="title-1">作品展示</p>
                <ul class="sub-list">
                    <li>
                        <p class="title-2">
                            DOTA英雄展示
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            DOTA2英雄头像展示，主要使用CSS3变换
                            <a href="app/dota/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            尾灯动画制作工具
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            按帧制作尾灯动画，可以播放、存储，可用canvas生成预览图
                            <a href="app/taillight/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            Google Map
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            使用Google地图和HighCharts做的海拔小Demo
                            <a href="app/googlemap/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            Angularjs Demos
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            Angularjs Demos，还在学习中
                            <a href="app/dota/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            React Demos
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            React Demos，还在学习中
                            <a href="app/dota/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            RequireJS Demos
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            RequireJS Demos，采用新的架构，还在学习中
                            <a href="app/dota/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                </ul>
            </li>
            <li id="mobileApp">
                <p class="title-1">移动应用</p>
                <ul class="sub-list">
                    <li>
                        <p class="title-2">
                            恋爱笔记
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            自用的恋爱小工具，包括时间线、纪念日、生理期等小功能
                            <a href="app/lovenote/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            圣诞节活动微信Webapp
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            包括圣诞树点灯小游戏、许愿、祝愿排行榜等
                            <a href="app/christmas/game.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            Data list by date
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            自己写的一个日历小插件，按日期查看数据，HighChart生成报表
                            <a href="app/datalistbydate/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            Jquery-mobile Demos
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            Jquery-mobile Demos，还在学习中
                            <a href="app/jquery-mobile/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                    <li>
                        <p class="title-2">
                            Touch Demos
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            为Webapp准备的一些功能插件
                            <a href="app/touch/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                </ul>
            </li>
            <li id="moduleDevelop">
                <p class="title-1">组件开发</p>
                <ul class="sub-list">
                    <li>
                        <p class="title-2">
                            地址选择
                            <span class="fa fa-angle-double-down fa-lg"></span>
                        </p>
                        <div class="detail">
                            做项目常用到的组件，为了复用封装了一下，选择的地址是国内地址，因为里面包含了国内的地址以及地址编号，所以体积比较大
                            <a href="app/lovenote/index.html"><span class="fa fa-link fa-lg"></span></a>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <footer>
        <p class="f-copy">&copy;Dreamser.com by Callcter</p>
        <p class="f-record"><a href="//www.miitbeian.gov.cn/">鲁ICP备 16006293</a></p>
    </footer>
</body>
    <script src="/Public/js/require.js"></script>
    <script src="/Public/js/index.js"></script>

</html>