<?php

$key = file_get_contents('php://input', 'r');

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "select * from `angularjs` where username='$key'";
$res = $sqlHelper->executeDql($sql);

echo json_encode($res);

?>