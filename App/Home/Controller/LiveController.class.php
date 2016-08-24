<?php
namespace Home\Controller;
use Think\Controller;

class LiveController extends Controller {
	public function index(){
		$this->display();
	}
	public function douyu(){
		$reg = '/\<head>';
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, 'http://m.douyu.com/639471');
		curl_setopt($curl, CURLOPT_HEADER, false);
		curl_setopt($curl, CURLOPT_NOBODY, false);
		curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25");
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		$data = curl_exec($curl);
		preg_match_all($reg, $data, $list);
		curl_close($curl);
		var_dump($list);
	}
}
