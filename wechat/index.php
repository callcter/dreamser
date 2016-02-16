<?php
define("TOKEN", "dreamser");
//include_once "wxBizMsgCrypt.php";

$wechatObj = new wechatCallbackapiTest();
//$wechatObj->valid();
$wechatObj->responseMsg();

class wechatCallbackapiTest{
    
//    public $encodingAesKey = "AYatiBvF3Tv2sIEdJiDdkwI9c002bCYzA49sBAjSpOI";
//    public $encrypt_type = "";
//    public $appId = "wx1cfe62ab36876553";
//    public $wxcpt;
//    public $token = TOKEN;
    
	public function valid(){
        $echoStr = $_GET["echostr"];
        if($this->checkSignature()){
        	echo $echoStr;
        	exit;
        }
    }

    public function responseMsg(){
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
		if (!empty($postStr)){
                libxml_disable_entity_loader(true);
              	$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $keyword = trim($postObj->Content);
                $time = time();
                $textTpl = "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							<FuncFlag>0</FuncFlag>
							</xml>";             
				if(!empty( $keyword ))
                {
              		$msgType = "text";
                	$contentStr = "Welcome to wechat world!";
                	$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                	echo $resultStr;
                }else{
                	echo "Input something...";
                }
        }else {
        	echo "";
        	exit;
        }
    }
    
//    public function sendMsg($resultStr){
//        if($this->encrypt_type == "aes"){
//            $sEncryptMsg = "";
//            $timestamp = $_GET['timestamp'];
//            $nonce = $_GET['nonce'];
//            $errCode = $this->wxcpt->encryptMsg($resultStr,$timestamp,$nonce,$sEncryptMsg);
//            file_put_contents();
//        }
//    }
		
	private function checkSignature(){
        if (!defined("TOKEN")) {
            throw new Exception('TOKEN is not defined!');
        }
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
		$token = TOKEN;
		$tmpArr = array($token, $timestamp, $nonce);
		sort($tmpArr, SORT_STRING);
		$tmpStr = implode( $tmpArr );
		$tmpStr = sha1( $tmpStr );
		if( $tmpStr == $signature ){
			return true;
		}else{
			return false;
		}
	}
}

?>