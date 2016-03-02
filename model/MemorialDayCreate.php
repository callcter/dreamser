<?php

$input = file_get_contents('php://input','r');
$arrays = json_decode($input, true);
$date = $arrays['date'];
$event = $arrays['event'];
$uid = $arrays['uid'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "insert into `memorial_days` (`uid`,`date`,`event`) values ('$uid','$date','$event')";
$res = $sqlHelper->executeDml($sql);

echo $res;

?>