<?php
    
	//工具类
class SqlHelper{
	public $link;

	public function __construct(){

        $this->link = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
        if (!$this->link) {
            die('Could not connect: ' . mysql_error());
        }
		mysql_select_db(SAE_MYSQL_DB, $this->link) or die ('Can\'t use $dbname : ' . mysql_error());
	}

    //执行dql语句
    public function execute_dql($sql){

		$res=mysql_query($sql,$this->link) or die(mysql_error());
		return $res;
	}

	//执行dql语句,资源可以立即释放
	public function execute_dql2($sql){

		$arr=array();
		$res=mysql_query($sql,$this->link) or die(mysql_error());
		$i=0;
		//把$res=>$arr
		while($row=mysql_fetch_assoc($res)){
			$arr[$i++]=$row;
		}
		//这里马上就可以关闭$res
		mysql_free_result($res);
		return $arr;
	}

	//考虑分页情况的查询
	//$sql1="select * from table limit "
	//$sql2="select count(id) from "
	public function execute_dql_fenye($sql1,$sql2,$fenyepage){

		$res=mysql_query($sql1,$this->link) or die(mysql_error());
		$arr=array();
		while($row=mysql_fetch_assoc($res)){
			$arr[]=$row;
		}
		mysql_free_result($res);

		$res2=mysql_query($sql2,$this->link) or die(mysql_error());

		if($row=mysql_fetch_row($res2)){
			$fenyepage->pagecount=ceil('$row[0]/$pagefenye->pagesize');
			$fenyepage->rowcount=$row[0];
		}

		mysql_free_result($res2);
		
		//封装导航
		if($fenyepage->pagenow>1){
		    $prepage=$fenyepage->pagenow-1;
		    $navigate="<a href='sdsearch.php?pagenow=$prepage'>上一页</a>&nbsp;";
	    }
	    if($fenyepage->pagenow<$fenyepage->pagecount){
		    $nextpage=$fenyepage->pagenow+1;
		    $navigate="<a href='sdsearch.php?pagenow=$nextpage'>下一页</a>&nbsp;";
	    }
		
		$fenyepage->res_array=$arr;
		$fenyepage->navigate=$navigate;
	}

	//执行dml语句
	public function execute_dml($sql){

		$b=mysql_query($sql,$this->link) or die(mysql_error());
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
    
	//关闭连接
	public function close_connect(){

		if(!empty($this->link)){
			mysql_close($this->link);
		}
	}
}

?>