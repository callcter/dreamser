<?php
namespace Home\Controller;
use Think\Controller;

class UserController extends Controller {
	public function index(){
		$this->display();
	}
	public function hasSignIn(){
		$email = session('?email');
		if($email==true){
			$result->result = true;
		}else{
			$result->result = $email;
		}
		header('Content-Type:application/json');
		echo json_encode($result);
	}
	//存在性验证
	public function exist(){
		$item = json_decode(file_get_contents("php://input"));
		$condition['email'] = $item->email;
		$User = M('user');
		$res = $User->where($condition)->count();
		if($res>0){
			$result->exist = true;
		}else{
			$result->exist = false;
		}
		header('Content-Type:application/json');
		echo json_encode($result);
	}
	public function sign(){
		$this->display('sign');
	}
	//注册
	public function signup(){
		$item = json_decode(file_get_contents("php://input"));
		$condition['email'] = $item->email;
		$condition['password'] = $item->password;
		$User = M('user');
		$User->data($condition)->add();
		$validate['email'] = $item->email;
		$res = $User->where($validate)->count();
		if($res>0){
			$result->success = true;
			$result->msg = '注册成功';
			session('email', $item->email);
		}else{
			$result->success = false;
			$result->msg = '注册失败';
		}
		header('Content-Type:application/json');
		echo json_encode($result);
	}
	//登录
	public function signintest(){
		$condition['email'] = 'callcter@163.com';
		$User = M("user");
		$lover_condition['id'] = $User->where($condition)->getField('lover');
		$User->where($condition)->find();
		$result->data = $User->data();
		unset($result->data['password']);
		$result->data['lovername'] = $User->where($lover_condition)->getField('username');
		header('Content-Type:application/json');
		echo json_encode($result);
	}
	public function signin(){
		$item = json_decode(file_get_contents("php://input"));
		$condition['email'] = $item->email;
		$User = M("user");
		$pwd1 = $item->password;
		$pwd2 = $User->where($condition)->getField('password');
		if($pwd1==$pwd2){
			$result->success = true;
			$result->msg = '登录成功';
			$lover_condition['id'] = $User->where($condition)->getField('lover');
			session('email', $item->email);
			$User->where($condition)->find();
			$result->data = $User->data();
			unset($result->data['password']);
			$result->data['lovername'] = $User->where($lover_condition)->getField('username');
		}else{
			$result->success = false;
			$result->msg = '邮箱或密码错误';
		}
		header('Content-Type:application/json');
		echo json_encode($result);
	}
	public function signOut(){
		session('email',null);
		$value = session('?email');
		if($value==false){
			$result->result = false;
		}else{
			$result->result = true;
		}
		header('Content-Type:application/json');
		echo json_encode($result);
	}
}
