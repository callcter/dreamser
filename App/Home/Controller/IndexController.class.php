<?php
namespace Home\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index(){
        $this->display();
    }
    public function customservice(){
    	$this->display();
    }
    public function about(){
        $this->display();
    }
    public function specifications(){
    	$this->display();
    }
}