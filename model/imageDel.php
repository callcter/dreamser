<?php

    $url = $_POST[""];
    $s = new SaeStorage();
    $r = $s->delete("love",$url);

    if(!$r){
        //处理一下文件不存在了的sae删除返回错误
        if (stripos($s->errmsg(),"success")===false){
            $this->error = '文件删除失败'.$s->errmsg();
            return false;
        }else{
            return true;
        } 
    }else{
        
    }

    echo $url;

?>