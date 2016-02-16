<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://dreamser.com/css/sder.css" type="text/css" />
<meta http-equiv="content-type" content="text/html;charset=utf-8;" \>
<title>山东驻华科老乡会欢迎你！</title>
</head>
<body>
<div id="divt">
<div id="logo"><a href="http://dreamser.com"><img src="http://dreamser.com/img/logo.png" /></a></div>
<div id="pict">
<script>
document.write("<p>&nbsp;</p><p>&nbsp;</p><b><span id=time></span></b>") //输出显示时间日期的容器
setInterval(function(){
with(new Date)
time.innerText=(getMonth()+1)+"月"+getDate()+"日 星期"+"日一二三四五六".charAt(getDay())+" "+getHours()+":"+getMinutes()+":"+getSeconds()
//设置 id 为 time 的对象内的文本为当前日期时间
},1000)       //每1000毫秒(即1秒) 执行一次本段代码
</script>
</div>
</div>
<div id="menu">&nbsp;</div>

<div id="main">

<div id="sdlogo">&nbsp;<!--<img width="200px" src="http://dreamser.com/img/sdlogo.png"/>--></div>

<div id="mima">
<form action="loginprocess.php" method="post">
<input type="password" name="password" size="20"/>
<input type="submit" value="登陆"/>
</form>
</div>

</div>
</body>
<?php
    if(!empty($_GET['errno'])){
		$errno=$_GET['errno'];
		if($errno==1){
			echo "<br/><font color='red' size='3'>密码错误</font>";
		}

}
?>
</html>