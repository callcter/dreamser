<?php

$uid = $_GET['uid'];
$offset = $_GET['offset'];
$limit = $_GET['limit'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "select * from `memorial_events` where uid='$uid' order by date desc";
$res = $sqlHelper->executeDql($sql);

echo json_encode($res);

?>