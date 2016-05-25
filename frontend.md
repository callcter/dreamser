#一、基本规范
##1.开发方式
* 以**前后端分离**的开发方式为主，jsp 脚本为辅的开发方式
* 以 **json** 作为前后端数据交互的数据格式  
* 使用 **ajax** 方法作为前后端数据交互的方法
##2.开发流程
* 产品：分析需求出原型
* UI：根据原型设计，标注元素
* 前端：根据设计切出静态页面；对接后台接口
* 后台：根据原型设计数据库表，开发后台接口
#二、文件结构
##1. HTML文件
* 使用html5标签规范，通过html5shiv兼容IE9以下浏览器，引用如下
~~~
<!--[if lt IE 9]>
    <script src="/static/scripts/lib/html5shiv.min.js"></script>
<![endif]-->
~~~
* 页面模板
~~~
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <link rel="shortcut icon" href="/static/favicon.ico">
    <link rel="stylesheet" href="">
</head>
<body>
    <script src=""></script>
</body>
</html>
~~~

##2. Javascript文件
* 依赖 jQuery 文件，引用版本为1.x.x，以兼容IE9以下浏览器
* 公用方法在 common.js 文件中

##3. Less文件
###文件说明
* common.less：变量定义
* global.less：样式重置
* header.less：页面头部样式
* footer.less：页面尾部样式
* public.less：公用样式定义

###开发规范
* 所有页面需引用 public.css 样式文件
* 每个页面单独定义 less 文件，需 import common.less文件

#三、UI文档
##1.色彩
* <span style="color:#26b4d3">家哇蓝</span> #26b4d3 家哇的主题色
* <span style="color:#333;">黑色</span> #333 第一级字体颜色，禁止使用 #000
* <span style="color:#666;">淡黑</span> #666 第二级字体颜色
* <span style="color:#999;">灰色</span> #999 第三级字体颜色
* <span style="color:#ddd;">边框灰</span> #ddd  边框、input的placeholder
##2.字体
* 以 微软雅黑 （Microsoft YaHei） 为标准字体
##3.字号
* 14px：正文、列表
* 16px：标题

#四、组件文档
##1. 下拉列表
###实例
[链接](http://test.jiavva.com/views/examples.html)
###说明
~~~
//引用文件
//样式文件在public.css中，未单独定义
<script src="/static/lib/selectList/selectList.js"></script>
//html
<input class="selectList-input" placeholder="请选择" onfocus="selectList(event,['选项一','选项二','选项三'])">
<span class="selectList-btn" onclick="getFocus(event)"><i class="fa fa-angle-down"></i></span>
//js
//可以直接在html中绑定事件，也可以在js中绑定
~~~
##2. 地址选择
###实例
[链接](http://test.jiavva.com/views/examples.html)
###说明
~~~
//引用文件
<link rel="stylesheet" href="/static/lib/addressSelector/addressSeclector.css">
<script src="/static/lib/addressSelector/addressSeclector.js"></script>
//html
<input type="text" id="address" onfocus="addressSelector(event)" placeholder="地址选择">
//js
var address = document.getElementById('address');
//获取地址名称
var addr-name = address.value;
//获取地址编码
var addr-code = address.getAttribute('data-code');
~~~
##3. 商品选择
###实例
[链接](http://test.jiavva.com/views/examples.html)
###说明
~~~
//引用文件
<link rel="stylesheet" href="/static/lib/addressSelector/addressSeclector.css">
<script src="/static/scripts/goodSeclector.js"></script>
//html
<input type="text" id="address" onfocus="goodSelector(event)" placeholder="商品选择">
//js
//采用异步的方式，在页面加载时向数据库请求商品品类列表
var goodLib = new Array();
window.onload = function () {
    $.ajax({
        url: '/productCategory',
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (goods) {
            goodLib = goods;
        },
        error: function (error) {
            console.log(error);
        }
    });
    ……
}
//使用方法
var goodSelector = document.getElementById('goodSelector');
//获取地址名称
var good-name = goodSelector.value;
//获取地址编码
var good-code = goodSelector.getAttribute('data-code');
//后台CURD仅使用第四个商品编码
var product-code = good-code.split('-')[3];
~~~

##4. 分页
###实例
[链接](http://test.jiavva.com/views/examples.html)
###说明
~~~
//引用文件
//样式文件在public.css中
<script src="/static/lib/page/page.js"></script>
//html
<ul id="page" class="page"></ul>
//js
//初始化分页组件
page = new Page({
	elem: document.getElementById('page'),
	pageSize: 20,
	showNum: 6,
	remote: function(pageN,pageS,callback){
	    //分页请求参数
		condition.page.pageNo = pageN;
		condition.page.pageSize = pageS;
		//清空列表
		$('table tr:gt(0)').remove();
		//显示过渡动画
		$('#loading').show();
		$.ajax({
			url: '/orders/f/searchResult',
			data: JSON.stringify(condition),
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			success: function(res){
			    //关闭过渡动画
				$('#loading').hide();
				result = res;
				listTables(res);
				//重置页码
				page.setTotal(result.count);
				callback();
			},
			error: function(err){
				console.log(err);
			}
		});
	}
});
//执行分页方法
page.remote(function(){
	page.init();
});
~~~

##5. 日期选择
###实例
[链接](http://test.jiavva.com/views/examples.html) 
###说明
~~~
//引用文件
<link rel="stylesheet" href="/static/lib/dsdate/date.css">
<script src="/static/lib/dsdate/date.js"></script>
//html
<input id="condition_date_start" placeholder="日期" readonly="true">
//js
//初始化组件
dsdate = new Dsdate({
	showTime: true     //是否显示时间
});
$('#condition_date_start').on('click',function(event){
	dsdate.init(event);
});
~~~