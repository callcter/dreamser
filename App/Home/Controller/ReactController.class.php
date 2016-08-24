<?php
namespace Home\Controller;
use Think\Controller;

class ReactController extends Controller {
  public function index(){
    $this->display();
  }
  public function recommend(){
    $item = json_decode(file_get_contents("php://input"));
    $condition['uid'] = $item->uid;
    $Memory = M('memory');
    $data=$Memory->where($condition)->select();
    header('Content-Type:application/json');
    $res = json_encode($data);
    echo $res;
  }
}
