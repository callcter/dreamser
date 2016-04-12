<?php
namespace Home\Controller;
use Think\Controller;

class LovenoteController extends Controller {
    public function index(){
        // $this->display();
        $Memory = M('memory');
        $data=$Memory->select();
        dump($data);
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
        $item = json_decode(file_get_contents("php://input"));
        // $memory = new Model('memory');
        // $data=$memory->select();
        $res = json_encode($item);
        echo $res;
    }
}