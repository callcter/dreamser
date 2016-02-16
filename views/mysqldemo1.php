<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>数据库测试2——读取表内容</title>
</head>
<body>
<?php
    //获取链接（SAE获得数据库连接，默认主机+借口，用户名，密码）
	$con=mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
	if(!$con){
		die("连接失败".mysql_error());
	}
	//选择数据库
	mysql_select_db(SAE_MYSQL_DB, $con); 
	//设置操作编码（建议有）
    mysql_query("set names utf8");
	//发送指令（ddl数据定义语言，dml数据操作语言，dql select，dtl数据事务语句）
	$sql="select * from mysqldemo1";
	$res=mysql_query($sql,$con);
	//接收返回的结果，并处理
	//var_dump($res);
	while($row=mysql_fetch_row($res)){
		echo "<br /> $row[0]--$row[1]--$row[2]--$row[3]--$row[4]";
	}
	//释放资源，关闭连接   
	mysql_free_result($res);
	mysql_close($con);
?>

</body>
</html>