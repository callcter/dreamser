<?php
namespace Home\Controller;
use Think\Controller;

class LovenoteController extends Controller {
    public function index(){
        $this->display();
    }
    public function calendar(){
    	$this->display();
    }
    public function lunaria(){
    	$this->display();
    }
    public function MDCreate(){
    	$this->display();
    }
    public function MECreate(){
    	$this->display();
    }
    public function MEDetail(){
    	$this->display();
    }
    //查询纪念日
    public function MDQuery(){
        $item = $_POST['date'];
        echo $item;
        $this->ajaxReturn($item,'见到了',1);
    }
}