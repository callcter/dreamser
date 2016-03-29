<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
  <head>
    <title>Google Map & Highcharts demo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="menu.css">
    <script src="../../frameworks/jquery-2.1.4.min.js"></script>
    <script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
    <script src="http://maps.google.cn/maps/api/js?v=3.9&sensor=false"></script>
    <script src="global.js"></script>
    <script src="menu.js"></script>
    <script src="route.js"></script>
  </head>
  <body onload="initialize()">
    <div id="map_canvas" style="width:1000px;height:500px;margin-left:auto;margin-right:auto;"></div>
    <div id="chart_container" style="width:1000px;height:200px;margin-left:auto;margin-right:auto;"></div>
  </body>
</html>