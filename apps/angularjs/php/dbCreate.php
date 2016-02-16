<?php

$input = file_get_contents('php://input', 'r');
$arrays = json_decode($input, true);
$username = $arrays['username'];
$password = hash('sha256',$arrays['password']);
$email = $arrays['email'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "insert into `angularjs` (`username`,`password`,`email`) values ('$username','$password','$email')";
$res = $sqlHelper->executeDml($sql);

echo $res;

?>