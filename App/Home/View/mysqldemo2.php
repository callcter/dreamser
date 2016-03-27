<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>数据库测试3——增删改</title>
</head>
<body>
<?php

$hostname = SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT;
$dbuser = SAE_MYSQL_USER;
$dbpass = SAE_MYSQL_PASS;
$dbname = SAE_MYSQL_DB;
$link = mysql_connect($hostname, $dbuser, $dbpass);
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully<br/>';
//select db
mysql_select_db($dbname, $link) or die ('Can\'t use dbname : ' . mysql_error());
echo 'Select db '.$dbname.' successfully';


$mysql = new SaeMysql();

        $name = '啦啦';
        $password = md5('12345');
		$email = 'll@sohu.com';
		$age = 14;
        $sql = "insert into mysqldemo1(name,password,email,age)values('$name','$password','$email','$age')";
        $mysql->runSql($sql);

$sql = "select * from mysqldemo1 limit 1";
$result = $mysql->getLine($sql);
var_dump($result);
//发现这个已经是按数组的方式返回的
echo "<hr>";
//查询多条数据
$sql = "select * from mysqldemo1";
$mut_data = $mysql->getData($sql);
var_dump($mut_data);
//发现这个就是按二维数组输出的了，下面一个foreach输出
echo "<hr>";
foreach($mut_data as $small)
{
        echo "No ".$small['id']." Content:".$small['name'].' Timeline:'.$small['password'].$small['email'].$small['age'].'<br>';
}

/*
    $hostname = SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT;
    $dbuser = SAE_MYSQL_USER;
    $dbpass = SAE_MYSQL_PASS;
    $dbname = SAE_MYSQL_DB;
    $link = mysql_connect($hostname, $dbuser, $dbpass);
	if (!$link) {
    die('Could not connect: ' . mysql_error());
    }
    echo 'Connected successfully<br/>';
    //select db
    mysql_select_db($dbname, $link) or die ('Can\'t use dbname : ' . mysql_error());
    echo 'Select db '.$dbname.' successfully';

	mysql_query('set names utf8');

    //增删改
	$sql='insert into mysqldemo1 (name,password,email,age) values('啦啦',md5('12345'),'mm@sohu.com',15)';
	//$sql="delete from mysqldemo1 where id=5";
	//$sql="update mysqldemo1 set age=16 where id=2";

	$res=mysql_query($sql,$link);

	if(!$res){
		die('操作失败'.mysql_error());
	}
	if(mysql_affected_rows($link)>0){
		echo '操作成功';
	}else{
		echo '没有影响到行数';
	}

	mysql_close($link);

*/

	/*
	require_once "sqltoolclass.php";

	$sql="insert into mysqldemo1 (name,password,email,age) values('么么',md5('12345'),'mm@sohu.com',15)";

	$sqltoll=new SqlTool();

	$res=$sqltool->execute_dml($sql);

	if($res==0){echo "failed";}
	else if($res==1){echo "success";}
	else if($res==2){echo "nothing";}
	*/
?>