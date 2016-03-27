<?php

class SqlHelper{
	public $link;
	public function __construct(){
		$this->link = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
		if(!$this->link){
			die('Could not connect:'.mysql_error());
		}
		mysql_select_db(SAE_MYSQL_DB,$this->link) or die ('Can not use $dbname:'.mysql_error());
	}
	
	public function executeDql($sql){

    	$arr=array();
    	$res=mysql_query($sql,$this->link) or die(mysql_error());
    	$i=0;
    	while($row=mysql_fetch_assoc($res)){
    		$arr[$i++]=$row;
    	}
    	mysql_free_result($res);
    	return $arr;
    }
	
	public function executeDml($sql){
		$b = mysql_query($sql,$this->link) or die(mysql_error());
		if(!$b){
			return 0;
		}else{
			if(mysql_affected_rows($this->link)>0){
				return 1;
			}else{
				return 2;
			}
		}
	}
	
	public function closeConnect(){
		if(!empty($this->link)){
			mysql_close($this->link);
		}
	}
}

?>