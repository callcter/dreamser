<?php

$input = file_get_contents('php://input','r');
$arrays = json_decode($input, true);
$uid = $arrays['uid'];
//$uid = 5201314;
$eventContent = $arrays['eventContent'];
$imgUrls = $arrays['imgUrls'];
$date = $arrays['date'];
$position = $arrays['position'];

require_once 'database.php';
$sqlHelper = new SqlHelper();
$sql = "insert into `memorial_events` (`uid`,`eventContent`,`imgUrls`,`date`,`position`) values ('$uid','$eventContent','$imgUrls','$date','$position')";
$res = $sqlHelper->executeDml($sql);

echo $res;

?>