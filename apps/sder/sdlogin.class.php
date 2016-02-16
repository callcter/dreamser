<?php
    require_once 'sqlhelper.class.php';
    //该类是一个业务逻辑处理类，这个类主要完成对admin表的操作
	class AdminService{

		//提供一个验证用户是否合法的方法
		public function checkAdmin($id,$password){
			$sql="select password,user from `sdmanager` where id=$id";
			//创建一个SlHelper对象

			$sqlhelper=new SqlHelper();
			$res=$sqlhelper->execute_dql($sql);
			if($row=mysql_fetch_assoc($res)){
				if(md5($password)==$row['password']){
					return $row['user'];
				}
			}
			//释放资源
			mysql_free_result($res);
			//关闭连接
			$sqlhelper->close_connect();
			return "";
	
		}
	}

?>