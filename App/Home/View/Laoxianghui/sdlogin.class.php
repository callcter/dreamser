<?php
    require_once 'sqlhelper.class.php';
    //������һ��ҵ���߼������࣬�������Ҫ��ɶ�admin��Ĳ���
	class AdminService{

		//�ṩһ����֤�û��Ƿ�Ϸ��ķ���
		public function checkAdmin($id,$password){
			$sql="select password,user from `sdmanager` where id=$id";
			//����һ��SlHelper����

			$sqlhelper=new SqlHelper();
			$res=$sqlhelper->execute_dql($sql);
			if($row=mysql_fetch_assoc($res)){
				if(md5($password)==$row['password']){
					return $row['user'];
				}
			}
			//�ͷ���Դ
			mysql_free_result($res);
			//�ر�����
			$sqlhelper->close_connect();
			return "";
	
		}
	}

?>