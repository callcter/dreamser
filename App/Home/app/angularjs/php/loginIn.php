<?php

$input = file_get_contents('php://input', 'r');
$arrays = json_decode($input,true);

$username = $arrays['username'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "select * from `angularjs` where username='$username'";
$res = $sqlHelper->executeDql($sql);

echo json_encode($res);

?>