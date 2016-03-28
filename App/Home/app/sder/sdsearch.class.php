<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://dreamser.com/css/sder.css" type="text/css" />
<meta http-equiv="content-type" content="text/html;charset=utf-8;" \>
<title>山东驻华科老乡会欢迎你！</title>
</head>
<?php

    require_once 'sqlhelper.class.php';

	//echo $spost.$searchone;

	class searchService{
	//获取总共有多少页
	function getPageCount($pagesize){
        
		//需要查询$rowcount
		$sql="select count(id) from `shandonger`";
		$sqlhelper=new SqlHelper();
		$res=$sqlhelper->execute_dql($sql);
		
		//这样就可以计算$pagecount
		if($row=mysql_fetch_row($res)){
			$rowcount=$row[0];
		}
		$pagecount=ceil($row[0]/$pagesize);

		//释放资源关闭连接
		mysql_free_result($res);
		$sqlhelper->close_connect();
		return $pagecount;
	}

	//可以获取应当显示的用户信息
	function getEmpListByPage($pagenow,$pagesize){
        
	        $sql="select * from `shandonger` limit ".($pagenow-1)*$pagesize.",".$pagesize;

		$sqlhelper=new SqlHelper();
		$res=$sqlhelper->execute_dql2($sql);

		//释放资源关闭连接
		//mysql_free_result();
		$sqlhelper->close_connect();
		return $res;
	}

	function getuser($spost,$searchone,$pagenow,$pagesize){

		$sql="select * from `shandonger` where `$spost` like '%$searchone%' limit ".($pagenow-1)*$pagesize.",".$pagesize;
		//$sql="select * from `shandonger` where name='刘杭'";

		$sqlhelper=new SqlHelper();
		$res=$sqlhelper->execute_dql2($sql);

		//释放资源关闭连接
		//mysql_free_result();
		$sqlhelper->close_connect();
		return $res;
	}

	//分装方式完成分页
	function getFenyePage($fenyepage){

		$sqlhelper=new SqlHelper();
		$sql1="select * from `shandonger` limit ".($fenyepage->pagenow-1)*($fenyepage->pagesize).",".$fenyepage->pagesize;
		$sql2="select count(id) from `shandonger`";
		$sqlhelper->execute_dql_fenye($sql1,$sql2,$fenyepage);
	}

}

?>
</html>