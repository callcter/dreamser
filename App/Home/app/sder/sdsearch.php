<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://dreamser.com/css/sder.css" type="text/css" />
<meta http-equiv="content-type" content="text/html;charset=utf-8;" \>
<title>山东驻华科老乡会欢迎你！</title>
</head>
<body>
<div id="divt">
<div id="logo"><a href="http://dreamser.com"><img src="http://dreamser.com/img/logo.png" /></a></div>
<div id="pict">
<script type"text/javascript">
    function confirmDele(val){
		window.confirm("是否要删除id="+val+"的用户");
}
</script>
<script>
document.write("<p>&nbsp;</p><p>&nbsp;</p><b><span id=time></span></b>") //输出显示时间日期的容器
setInterval(function(){
with(new Date)
time.innerText=(getMonth()+1)+"月"+getDate()+"日 星期"+"日一二三四五六".charAt(getDay())+" "+getHours()+":"+getMinutes()+":"+getSeconds()
//设置 id 为 time 的对象内的文本为当前日期时间
},1000)       //每1000毫秒(即1秒) 执行一次本段代码
</script>
</div>
</div>
<div id="menu">&nbsp;</div>

<div id="main2">
<div id="search">
<form action="search.php" method="post">
<a href="sder.php">返回到前一页面</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="spost">
    <option value="name">按姓名</option>
    <option value="from">按籍贯</option>
    <option value="subject">按院系</option>
</select>

<input type="text" name="searchone"/>

<input type="submit" value="搜索" />
</form>
</div>
<div>
<?php
    require_once 'sdsearch.class.php';

	$pagesize=11;//每一页包含的记录条数
	$rowcount=0;//共有多少条记录，从数据库获取	
	$pagenow=1;//显示第几页

	//需要判断是否有数据发送过来,如果没有，默认显示第一页

	if(!empty($_GET['pagenow'])){
	     $pagenow=$_GET['pagenow'];
	}
    
	//使用类方法代替原代码
	$empservice=new searchService();
	$pagecount=$empservice->getPageCount($pagesize);
	$res2=$empservice->getEmpListByPage($pagenow,$pagesize);
	
	echo "<table border='1px' bordercolor='red' cellspacing='0px' width='700px'>";
	echo "<tr><th>姓名</th><th>籍贯</th><th>专业</th><th>详细</th></tr>";

	for($i=0;$i<count($res2);$i++){
		$row=$res2[$i];
		echo "<tr><td>{$row['name']}</td><td>{$row['from']}</td><td>{$row['subject']}</td><td><a href='sdintroduce.php?id={$row['id']}'>详细</a></td></tr>";
	}
		echo "<h1>用户信息</h1>";
		echo "</table>";

    echo "<br/>";
	//显示上一页和下一页
	if($pagenow>1){
		$prepage=$pagenow-1;
		echo "<a href='sdsearch.php?pagenow=$prepage'>上一页</a>&nbsp;";
	}
	if($pagenow<$pagecount){
		$nextpage=$pagenow+1;
		echo "<a href='sdsearch.php?pagenow=$nextpage'>下一页</a>&nbsp;";
	}
	
	//以10页为单位进行翻页
	$page_whole=10;
	$start=floor(($pagenow-1)/$page_whole)*$page_whole+1;
	$index=$start;
	if($pagenow>$page_whole){
	    echo " <a href='emplist.php?pagenow=".($start-1)."'>前".$page_whole."页</a> ";
	}
	//确定start
	for(;$start<$index+$page_whole;$start++){
		echo "<a href='sdsearch.php?pagenow=$start'>[$start]</a>";
	}
	echo " <a href='sdsearch.php?pagenow=$start'>后".$page_whole."页</a>";

	//显示当前页，和共有多少页
	echo "      当前页$pagenow/共{$pagecount}页";

	//跳转到某一页
	echo "<br/><br/>";
?>
</div>
<div id="go">
<form action='sdsearch.php'>
    跳转到：<input type="text" name="pagenow"/>
	<input type="submit" value="GO">
</form></div>
</br>
</div>
</body>
</html>