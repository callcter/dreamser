<?php
    
	class SqlTool{
		private $conn;
		private $host=SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT;
		private $usre=SAE_MYSQL_USER;
		private $password=SAE_MYSQL_PASS;
		private $db=SAE_MYSQL_DB;

		function SqlTool(){
			$this->conn=mysql_connect($this->host,$this->user,$this->password);
			if(!$this->conn){
				die("连接失败".mysql_error());
			}
			mysql_select_db($this->db,$this->conn);
			mysql_query("set names utf8");
		}
		public  function execute_dql($sql){
		}
		public  function execute_dml($sql){
			$b=mysql_query($sql,$this->conn);
			if(!$b){
				return 0;
			}else{
				if(mysql_affected_rows($this-conn)>0){
					return 1;
				}else{
					return 2;
				}
			}
		}
	}

?>