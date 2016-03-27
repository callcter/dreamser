<?php
namespace Home\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index(){
        echo C('URL_MODEL').'<br>';
        //U('模块/方法',array('id'=>1),'xxx html htm',true/false,'localhost')
        echo U('Index/user',array('id'=>1),'html',true,'localhost');
    }
    
    public function user(){
        echo 'id is:'.$_GET['id'].'<br>';
        echo '这里是Index模块的user方法';
    }
}