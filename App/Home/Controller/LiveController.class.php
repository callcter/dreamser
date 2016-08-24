<?php
namespace Home\Controller;
use Think\Controller;

class LiveController extends Controller {
	public function index(){
		$this->display();
	}
	public function douyu(){
		echo('hi');	
	}
}
