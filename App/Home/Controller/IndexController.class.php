<?php
namespace Home\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index(){
        echo C('URL_MODEL').'<br>';
        // //U('模块/方法',array('id'=>1),'xxx html htm',true/false,'localhost')
        echo U('Index/user',array('id'=>1),'html',true,'localhost');
        //show();
        $person = array(
        	1=>array('name'=>'a','age'=>18),
        	2=>array('name'=>'b','age'=>19),
        	3=>array('name'=>'c','age'=>17)
        );
        $this->assign('person',$person);
        $this->assign('person',14);
        $this->assign('name','xiaohuang');
        $this->display();
    }

    public function user(){
    	echo C('name');
        $this->display();
    }
}