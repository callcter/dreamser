<?php
    
	$id=1;
	//����
	$password=$_POST['password'];

    //ʹ�÷ֲ�

	//ʵ����һ��AdminService����
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