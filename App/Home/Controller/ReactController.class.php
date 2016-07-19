<?php
namespace Home\Controller;
use Think\Controller;

class ReactController extends Controller {
  public function index(){
    $this->display();
  }
  public function recommend(){
    $Memory = M('memory');
    $data=$Memory->select();
    $res = json_encode($data);
    echo $res;
  }
}