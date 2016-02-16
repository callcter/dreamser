<?php
    
    $name=$_POST['name'];
    $sex=$_POST['sex'];
	    $y=$_POST['YYYY'];
	    $m=$_POST['MM'];
	    $d=$_POST['DD'];
    $birth=$y."-".$m."-".$d;
	    $city=$_POST['s1'];
	    $tall=$_POST['s2'];
    $from=$city."-".$tall;
	    $yuan=$_POST['s3'];
	    $ji=$_POST['s4'];
    $subject=$yuan."-".$ji;
    $phone=$_POST['phone'];
    $qq=$_POST['qq'];
    $wxin=$_POST['wxin'];
    $email=$_POST['email'];
    $introduce=$_POST['introduce'];

	require_once 'sqlhelper.class.php';

	$sqlHelper=new SqlHelper();
    
	//$mysql = new SaeMysql();
	$sql="insert into `shandonger` (`name`,`sex`,`birth`,`from`,`subject`,`phone`,`qq`,`wxin`,`email`,`introduce`) values('$name','$sex','$birth','$from','$subject','$phone','$qq','$wxin','$email','$introduce')";
	//$mysql->runSql($sql);

	$res=$sqlHelper->execute_dml($sql);
    header("Location:sdadd.php?errno=$res");
	exit();
?>