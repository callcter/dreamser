<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en" ng-app="testApp">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta name="format-detection" content="telephone=no">
	<meta name="format-detection" content="email=no">
	<title>dreamser angularJs-index</title>
    <!--<link rel="stylesheet" href="framework/bootstrap-3.3.5/css/bootstrap.min.css">-->
	<link rel="stylesheet" href="http://apps.bdimg.com/libs/fontawesome/4.2.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/global.css">
	<link rel="stylesheet" href="css/body.css">
	<link rel="stylesheet" href="css/pages.css">
	<link rel="stylesheet" href="css/animates.css">
	<link rel="stylesheet/less" href="css/demo1.less">
	
</head>

<body>

	<div ng-include="'templates/header.html'"></div>
	<div class="container view-slide-in" ui-view></div>
	<div ng-include="'templates/footer.html'"></div>
	
    <script src="framework/jquery-2.1.4.min.js"></script>
	<script src="framework/angular-1.3.18/angular.min.js"></script>
	<script src="framework/angular-ui-router.min.js"></script>
	<script src="framework/angular-1.3.18/angular-animate.min.js"></script>
	<script src="framework/angular-1.3.18/angular-touch.min.js"></script>
	<script src="js/animates.js"></script>
	<script src="framework/angular-1.3.18/angular-cookies.min.js"></script>
	<script src="framework/CryptoJS v3.1.2/rollups/sha256.js"></script>
	<script src="framework/less-1.3.1.min.js"></script>
	
	<script src="js/app.js"></script>
	<script src="js/services.js"></script>
	<script src="js/controllers.js"></script>
	<script src="js/directives.js"></script>
	<script src="js/effect.js"></script>

</body>

</html>