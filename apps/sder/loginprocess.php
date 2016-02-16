<?php
    
	$id=1;
	//密码
	$password=$_POST['password'];

    //使用分层

	//实例化一个AdminService方法
	require_once 'sdlogin.class.php';
	$adminservice=new AdminService();
	$name=$adminservice->checkAdmin($id,$password);

	if($name!=""){
		header("Location:sder.php");
		exit();
	}else{
		header("Location:sdlogin.php?errno=1");
		exit();
    }
?>