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
  public function mequerytest(){
    $condition['date'] = '2016-08-15';
    $Memory = M('memory');
    $data=$Memory->where($condition)->select();
    $res = json_encode($data);
    echo $res;
	}	
	public function MDQuery(){
    $item = json_decode(file_get_contents("php://input"));
    $condition['uid'] = $item->uid;
    $condition['date'] = $item->date;
    $Memory = M('memory');
    $data=$Memory->where($condition)->select();
    $res = json_encode($data);
    echo $res;
	}
	public function MEQuery(){
    $item = json_decode(file_get_contents("php://input"));
		$condition->email = session('email');
		$User = M('user');
		$search->uid = $User->where($condition)->getField('id');
		$Activity = M('activity');
		$offset = $item->offset;
		$limit = $item->offset+$item->limit;
		$data = $Activity->where($search)->limit($offset,$limit)->select();
		if(count($data)>0){
			$result->result = true;
		}else{
			$result->result = true;
		}
		$result->data = $data;
 		header('Content-Type:application/json');
		echo json_encode($result);
	}
}
