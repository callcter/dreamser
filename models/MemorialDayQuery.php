<?php

$date = $_POST['date'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "select * from `memorial_days` where date='$date'";
$res = $sqlHelper->executeDql($sql);

echo json_encode($res);

?>