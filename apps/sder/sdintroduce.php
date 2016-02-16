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
<div id="main2">
<?php
    
	require_once 'sqlhelper.class.php';

	$id=$_GET['id'];

	$sqlhelper=new SqlHelper;

	$sql="select * from `shandonger` where id=$id";
	$res=mysql_query($sql,$sqlhelper->link);
	while($row=mysql_fetch_row($res)){
		echo "<br />姓名：$row[1]<br/>性别：$row[2]<br/>生日：$row[3]<br/>籍贯：$row[4]<br/>专业：$row[5]<br/>电话：$row[6]<br/>企鹅：$row[7]<br/>微信：$row[8]<br/>邮箱：$row[9]<br/>自我介绍：$row[10]";
	}
?>

<?php
	//释放资源，关闭连接   
	mysql_free_result($res);
	mysql_close($sqlhelper->link);
?>
<br/></br><a href="sdsearch.php">返回到上一页</a>
</div>
</body>
</html>