<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="http://dreamser.com/css/sder.css" type="text/css" />
<meta http-equiv="content-type" content="text/html;charset=utf-8;" />
<title>山东驻华科老乡会欢迎你！</title>
<script language="JavaScript"> 
<!--
window.onload=function() {
    strYYYY = document.sdadd.YYYY.outerHTML;
    strMM = document.sdadd.MM.outerHTML;
    strDD = document.sdadd.DD.outerHTML;
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //先给年下拉框赋内容
    var y = new Date().getFullYear();
    var str = strYYYY.substring(0, strYYYY.length - 9);
    for (var i = (y - 80); i < (y + 2); i++) //以今年为准，前30年，后30年
    {
        str += "<option value='" + i + "'> " + i + " 年" + "</option>\r\n";
    }
    document.sdadd.YYYY.outerHTML = str + "</select>";
    //赋月份的下拉框
    var str = strMM.substring(0, strMM.length - 9);
    for (var i = 1; i < 13; i++) {
        str += "<option value='" + i + "'> " + i + " 月" + "</option>\r\n";
    }
    document.sdadd.MM.outerHTML = str + "</select>";
    document.sdadd.YYYY.value = y;
    document.sdadd.MM.value = new Date().getMonth() + 1;
    var n = MonHead[new Date().getMonth()];
    if (new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
    writeDay(n); //赋日期下拉框
    document.sdadd.DD.value = new Date().getDate();
}
function YYYYMM(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var MMvalue = document.sdadd.MM.options[document.sdadd.MM.selectedIndex].value;
    if (MMvalue == "") {
        DD.outerHTML = strDD;
        return;
    }
    var n = MonHead[MMvalue - 1];
    if (MMvalue == 2 && IsPinYear(str)) n++;
    writeDay(n)
}
function MMDD(str) //月发生变化时日期联动
{
    var YYYYvalue = document.sdadd.YYYY.options[document.sdadd.YYYY.selectedIndex].value;
    if (str == "") {
        DD.outerHTML = strDD;
        return;
    }
    var n = MonHead[str - 1];
    if (str == 2 && IsPinYear(YYYYvalue)) n++;
    writeDay(n)
}
function writeDay(n) //据条件写日期的下拉框
{
    var s = strDD.substring(0, strDD.length - 9);
    for (var i = 1; i < (n + 1); i++) s += "<option value='" + i + "'> " + i + " 日" +

"</option>\r\n";
    document.sdadd.DD.outerHTML = s + "</select>";
}
function IsPinYear(year) //判断是否闰平年
{
    return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0))
}
//-->
</script>
    <script language="javascript" >
/*  
**    ====================================
**    类名：CLASS_LIANDONG_YAO  
**    功能：多级连动菜单  
**    作者：YAODAYIZI     
**/  	
  function CLASS_LIANDONG_YAO(array)
  {
   //数组，联动的数据源
  	this.array=array; 
  	this.indexName='';
  	this.obj='';
  	//设置子SELECT
	// 参数：当前onchange的SELECT ID，要设置的SELECT ID
      this.subSelectChange=function(selectName1,selectName2)
  	{
  	//try
  	//{
    var obj1=document.all[selectName1];
    var obj2=document.all[selectName2];
    var objName=this.toString();
    var me=this;
    obj1.onchange=function()
    {
    	me.optionChange(this.options[this.selectedIndex].value,obj2.id)
    }
  	}
  	//设置第一个SELECT
	// 参数：indexName指选中项,selectName指select的ID
  	this.firstSelectChange=function(indexName,selectName)  
  	{
  	this.obj=document.all[selectName];
  	this.indexName=indexName;
  	this.optionChange(this.indexName,this.obj.id)
  	}
  // indexName指选中项,selectName指select的ID
  	this.optionChange=function (indexName,selectName)
  	{
    var obj1=document.all[selectName];
    var me=this;
    obj1.length=0;
    obj1.options[0]=new Option(" 请 选 择 ",'');
    for(var i=0;i<this.array.length;i++)
    {	
    	if(this.array[i][1]==indexName)
    	{
    	//alert(this.array[i][1]+" "+indexName);
      obj1.options[obj1.length]=new Option(this.array[i][2],this.array[i][0]);
    	}
    }
  	}	
  }
  </script>
</head>
<body>
<div id="divt">
<div id="logo"><a href="http://dreamser.com"><img src="http://dreamser.com/img/logo.png" /></a>
</div>
<div id="pict">
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

<div id="sdadd">
<form action="sdadd.class.php" method="post" name="sdadd">
&nbsp;&nbsp;&nbsp;姓&nbsp;名：&nbsp;<input type="text" name="name" size="40" /><br/><br/>
&nbsp;&nbsp;&nbsp;性&nbsp;别：&nbsp;<input type="radio" name="sex" checked="checked" value="男"/>男
      <input type="radio" name="sex" value="女"/>女<br/><br/>
&nbsp;&nbsp;&nbsp;生&nbsp;日：<!--<input type="text" name="birth" size="20" />格式：19XX-XX-XX<br/>-->
    <select name="YYYY" onchange="YYYYMM(this.value)">
        <option value="">&nbsp;选&nbsp;择 年&nbsp;</option>&nbsp;
    </select>
    <select name="MM" onchange="MMDD(this.value)">
        <option value="">&nbsp;选&nbsp;择 月&nbsp;</option>&nbsp;
    </select>
    <select name="DD">
        <option value="">&nbsp;选&nbsp;择 日&nbsp;</option>
    </select><br/><br/>
&nbsp;&nbsp;&nbsp;来&nbsp;自：<!--<input type="text" name="from" size="20" />格式：地级市-县（区）<br/>-->
    <SELECT ID="s1" NAME="s1" >
    <OPTION selected></OPTION>
  	</SELECT>
  	<SELECT ID="s2" NAME="s2"  >
    <OPTION selected></OPTION>
  	</SELECT><br/><br/>
&nbsp;&nbsp;&nbsp;专&nbsp;业：
    <select name="s3" >
	    <option value="机械科学与工程学院">机械科学与工程学院</option>
		<option value="计算机科学与技术学院">计算机科学与技术学院</option>
		<option value="生命科学与技术学院">生命科学与技术学院</option>
	    <option value="电气与电子工程学院">电气与电子工程学院</option>
		<option value="材料科学与工程学院">材料科学与工程学院</option>
		<option value="传播与海洋工程学院">传播与海洋工程学院</option>
	    <option value="能源与动力工程学院">能源与动力工程学院</option>
	    <option value="自动化学院">自动化学院</option>
	    <option value="光学与电子信息学院">光学与电子信息学院</option>
		<option value="水电与数学化工程学院">水电与数学化工程学院</option>
	    <option value="软件学院">软件学院</option>
		<option value="环境科学与工程学院">环境科学与工程学院</option>
		<option value="电子与信息工程系">电子与信息工程系</option>
		<option value="建筑与城市规划学院">建筑与城市规划学院</option>
		<option value="土木工程与力学学院">土木工程与力学学院</option>
	    <option value="化学与化工学院">化学与化工学院</option>
		<option value="数学与统计学院">数学与统计学院</option>
		<option value="物理学院">物理学院</option>
	    <option value="公共管理学院">公共管理学院</option>
		<option value="经济学院">经济学院</option>
		<option value="管理学院">管理学院</option>
	    <option value="人文学院">人文学院</option>
		<option value="哲学系">哲学系</option>
		<option value="中文系">中文系</option>
	    <option value="新闻与信息传播学院">新闻与信息传播学院</option>
		<option value="马克思主义学院">马克思主义学院</option>
		<option value="社会学系">社会学系</option>
	    <option value="法学院">法学院</option>
		<option value="外国语学院">外国语学院</option>
		<option value="基础医学院">基础医学院</option>
	    <option value="药学院">药学院</option>
		<option value="医药卫生管理学院">医药卫生管理学院</option>
		<option value="公共卫生学院">公共卫生学院</option>
	    <option value="法医学系">法医学系</option>
		<option value="护理学系">护理学系</option>
		<option value="计划生育研究所">计划生育研究所</option>
	    <option value="第一临床学院">第一临床学院</option>
		<option value="第二临床学院">第二临床学院</option>
		<option value="第三临床学院">第三临床学院</option>
	    <option value="大学生艺术团">大学生艺术团</option>
		<option value="教育科学研究院">教育科学研究院</option>
		<option value="国际教育学院">国际教育学院</option>
	    <option value="历史研究所">历史研究所</option>
		<option value="国学研究院">国学研究院</option>
		<option value="体育部">体育部</option>
	    <option value="中欧清洁与可再生能源学院">中欧清洁与可再生能源学院&nbsp;&nbsp;</option>
		<option value="远程与继续教育学院">远程与继续教育学院</option>
		<option value="武汉光电国家实验室">武汉光电国家实验室</option>
	</select>
    <select name="s4">
	    <option value="10级">10级&nbsp;&nbsp;&nbsp;</option>
	    <option value="11级">11级</option>
	    <option value="12级">12级</option>
	    <option value="13级">13级</option>
	    <option value="14级">14级</option>
	    <option value="15级">15级</option>
	    <option value="16级">16级</option>
	    <option value="17级">17级</option>
	    <option value="18级">18级</option>
	    <option value="19级">19级</option>
	    <option value="20级">20级</option>
	</select><br/><br/>
&nbsp;&nbsp;&nbsp;电&nbsp;话：&nbsp;<input type="text" name="phone" size="40" /><br/><br/>
&nbsp;&nbsp;&nbsp;企&nbsp;鹅：&nbsp;<input type="text" name="qq" size="40" /><br/><br/>
&nbsp;&nbsp;&nbsp;微&nbsp;信：&nbsp;<input type="text" name="wxin" size="40" /><br/><br/>
&nbsp;&nbsp;&nbsp;邮&nbsp;箱：&nbsp;<input type="text" name="email" size="40" /><br/><br/>
自我介绍：<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<textarea rows="4" cols="36" name="introduce">
介绍一下你自己吧，亲！
</textarea><br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="提交" />&nbsp;&nbsp;
<input type="reset" value="重置" />
</form>
<?php
    if(!empty($_GET['errno'])){
		$errno=$_GET['errno'];
		if($errno==1){
			echo "<br/><font color='red' size='3'>提交成功</font>";
		}else{
			echo "<br/><font color='red' size='3'>提交失败</font>";
		}

}
?>
</br>
</div>
<div id="sdlogo2"><img width="300px" src="http://dreamser.com/img/sdlogo.png" /><br/><br/><a href="sder.php">返回上一页</a></div>
</div>
</body>
<script language="javascript">
    //数据源
    var array=new Array();
    array[0]=new Array("济南市","根目录","济南市"); //数据格式 ID，父级ID，名称
    array[1]=new Array("青岛市","根目录","青岛市");
    array[2]=new Array("淄博市","根目录","淄博市");
    array[3]=new Array("枣庄市","根目录","枣庄市");
    array[4]=new Array("东营市","根目录","东营市");
    array[5]=new Array("烟台市","根目录","烟台市");
    array[6]=new Array("潍坊市","根目录","潍坊市");
    array[7]=new Array("济宁市","根目录","济宁市");
    array[8]=new Array("泰安市","根目录","泰安市");
    array[9]=new Array("威海市","根目录","威海市");
    array[10]=new Array("日照市","根目录","日照市");
    array[11]=new Array("莱芜市","根目录","莱芜市");
    array[12]=new Array("临沂市","根目录","临沂市");
    array[13]=new Array("德州市","根目录","德州市");
    array[14]=new Array("聊城市","根目录","聊城市");
    array[15]=new Array("滨州市","根目录","滨州市");
    array[16]=new Array("菏泽市","根目录","菏泽市");
    array[17]=new Array("历下区","济南市","历下区");
    array[18]=new Array("市中区","济南市","市中区");
    array[19]=new Array("槐荫区","济南市","槐荫区");
    array[20]=new Array("天桥区","济南市","天桥区");
    array[21]=new Array("历城区","济南市","历城区");
    array[22]=new Array("长清区","济南市","长清区");
    array[23]=new Array("章丘市","济南市","章丘市");
    array[24]=new Array("平阴县","济南市","平阴县");
    array[25]=new Array("济阳县","济南市","济阳县");
    array[26]=new Array("商河县","济南市","商河县");
    array[27]=new Array("市南区","青岛市","市南区");
    array[28]=new Array("市北区","青岛市","市北区");
    array[29]=new Array("黄岛区","青岛市","黄岛区");
    array[30]=new Array("崂山区","青岛市","崂山区");
    array[31]=new Array("李沧区","青岛市","李沧区");
    array[32]=new Array("城阳区","青岛市","城阳区");
    array[33]=new Array("胶州市","青岛市","胶州市");
    array[34]=new Array("即墨市","青岛市","即墨市");
    array[35]=new Array("平度市","青岛市","平度市");
    array[36]=new Array("莱西市","青岛市","莱西市");
    array[37]=new Array("淄川区","淄博市","淄川区");
    array[38]=new Array("张店区","淄博市","张店区");
    array[39]=new Array("博山区","淄博市","博山区");
    array[40]=new Array("临淄区","淄博市","临淄区");
    array[41]=new Array("周村区","淄博市","周村区");
    array[42]=new Array("桓台县","淄博市","桓台县");
    array[43]=new Array("高青县","淄博市","高青县");
    array[44]=new Array("沂源县","淄博市","沂源县");
    array[45]=new Array("市中区","枣庄市","市中区");	
    array[46]=new Array("薛城区","枣庄市","薛城区");	
    array[47]=new Array("峄城区","枣庄市","峄城区");	
    array[48]=new Array("台儿庄区","枣庄市","台儿庄区");	
    array[49]=new Array("山亭区","枣庄市","山亭区");	
    array[50]=new Array("滕州市","枣庄市","滕州市");	
    array[51]=new Array("东营区","东营市","东营区");
    array[52]=new Array("河口区","东营市","河口区");
    array[53]=new Array("垦利县","东营市","垦利县");
    array[54]=new Array("利津县","东营市","利津县");
    array[55]=new Array("广饶县","东营市","广饶县");
    array[56]=new Array("芝罘区","烟台市","芝罘区");
    array[57]=new Array("福山区","烟台市","福山区");
    array[58]=new Array("牟平区","烟台市","牟平区");
    array[59]=new Array("莱山区","烟台市","莱山区");
    array[60]=new Array("龙口市","烟台市","龙口市");
    array[61]=new Array("莱阳市","烟台市","莱阳市");
    array[62]=new Array("莱州市","烟台市","莱州市");
    array[63]=new Array("蓬莱市","烟台市","蓬莱市");
    array[64]=new Array("招远市","烟台市","招远市");
    array[65]=new Array("栖霞市","烟台市","栖霞市");
    array[66]=new Array("海阳市","烟台市","海阳市");
    array[67]=new Array("长岛县","烟台市","长岛县");
    array[68]=new Array("潍城区","潍坊市","潍城区");
    array[69]=new Array("寒亭区","潍坊市","寒亭区");
    array[70]=new Array("坊子区","潍坊市","坊子区");
    array[71]=new Array("奎文区","潍坊市","奎文区");
    array[72]=new Array("青州市","潍坊市","青州市");
    array[73]=new Array("诸城市","潍坊市","诸城市");
    array[74]=new Array("寿光市","潍坊市","寿光市");
    array[75]=new Array("安丘市","潍坊市","安丘市");
    array[76]=new Array("高密市","潍坊市","高密市");
    array[77]=new Array("昌邑市","潍坊市","昌邑市");
    array[78]=new Array("临朐县","潍坊市","临朐县");
    array[79]=new Array("昌乐县","潍坊市","昌乐县");
    array[80]=new Array("任城区","济宁市","任城区");
    array[81]=new Array("兖州市","济宁市","兖州市");
    array[82]=new Array("曲阜市","济宁市","曲阜市");
    array[83]=new Array("邹城市","济宁市","邹城市");
    array[84]=new Array("微山县","济宁市","微山县");
    array[85]=new Array("鱼台县","济宁市","鱼台县");
    array[86]=new Array("金乡县","济宁市","金乡县");
    array[87]=new Array("嘉祥县","济宁市","嘉祥县");
    array[88]=new Array("汶上县","济宁市","汶上县");
    array[89]=new Array("泗水县","济宁市","泗水县");
    array[90]=new Array("梁山县","济宁市","梁山县");
    array[91]=new Array("泰山区","泰安市","泰山区");
    array[92]=new Array("岱岳区","泰安市","岱岳区");
    array[93]=new Array("新泰市","泰安市","新泰市");
    array[94]=new Array("肥城市","泰安市","肥城市");
    array[95]=new Array("宁阳县","泰安市","宁阳县");
    array[96]=new Array("东平县","泰安市","东平县");
    array[97]=new Array("环翠区","威海市","环翠区");
    array[98]=new Array("文登市","威海市","文登市");
    array[99]=new Array("荣成市","威海市","荣成市");
    array[100]=new Array("乳山市","威海市","乳山市");
    array[101]=new Array("东港区","日照市","东港区");
    array[102]=new Array("岚山区","日照市","岚山区");
    array[103]=new Array("五莲县","日照市","五莲县");
    array[104]=new Array("莒县","日照市","莒县");
    array[105]=new Array("莱城区","莱芜市","莱城区");
    array[106]=new Array("钢城区","莱芜市","钢城区");
    array[107]=new Array("兰山区","临沂市","兰山区");
    array[108]=new Array("罗庄区","临沂市","罗庄区");
    array[109]=new Array("河东区","临沂市","河东区");
    array[110]=new Array("沂南县","临沂市","沂南县");
    array[111]=new Array("郯城县","临沂市","郯城县");
    array[112]=new Array("沂水县","临沂市","沂水县");
    array[113]=new Array("苍山县","临沂市","苍山县");
    array[114]=new Array("费县","临沂市","费县");
    array[115]=new Array("平邑县","临沂市","平邑县");
    array[116]=new Array("莒南县","临沂市","莒南县");
    array[117]=new Array("蒙阳县","临沂市","蒙阳县");
    array[118]=new Array("临沭县","临沂市","临沭县");
    array[119]=new Array("德城区","德州市","德城区");
    array[120]=new Array("乐陵市","德州市","乐陵市");
    array[121]=new Array("禹城市","德州市","禹城市");
    array[122]=new Array("陵县","德州市","陵县");
    array[123]=new Array("宁津县","德州市","宁津县");
    array[124]=new Array("庆云县","德州市","庆云县");
    array[125]=new Array("临邑县","德州市","临邑县");
    array[126]=new Array("齐河县","德州市","齐河县");
    array[127]=new Array("平原县","德州市","平原县");
    array[128]=new Array("夏津县","德州市","夏津县");
    array[129]=new Array("武城县","德州市","武城县");
    array[130]=new Array("东昌府区","聊城市","东昌府区");
    array[131]=new Array("临清市","聊城市","临清市");
    array[132]=new Array("阳谷县","聊城市","阳谷县");
    array[133]=new Array("莘县","聊城市","莘县");
    array[134]=new Array("茌平县","聊城市","茌平县");
    array[135]=new Array("东阿县","聊城市","东阿县");
    array[136]=new Array("冠县","聊城市","冠县");
    array[137]=new Array("高唐县","聊城市","高唐县");
    array[138]=new Array("滨城区","滨州市","滨城区");
    array[139]=new Array("惠民县","滨州市","惠民县");
    array[140]=new Array("阳信县","滨州市","阳信县");
    array[141]=new Array("无棣县","滨州市","无棣县");
    array[142]=new Array("沾化县","滨州市","沾化县");
    array[143]=new Array("博兴县","滨州市","博兴县");
    array[144]=new Array("邹平县","滨州市","邹平县");
    array[145]=new Array("牡丹区","菏泽市","牡丹区");
    array[146]=new Array("曹县","菏泽市","曹县");
    array[147]=new Array("单县","菏泽市","单县");
    array[148]=new Array("成武县","菏泽市","成武县");
    array[149]=new Array("巨野县","菏泽市","巨野县");
    array[150]=new Array("郓城县","菏泽市","郓城县");
    array[151]=new Array("鄄城县","菏泽市","鄄城县");
    array[152]=new Array("定陶县","菏泽市","定陶县");
    array[153]=new Array("东明县","菏泽市","东明县");
    //--------------------------------------------
    //这是调用代码
    var liandong=new CLASS_LIANDONG_YAO(array) //设置数据源
    liandong.firstSelectChange("根目录","s1"); //设置第一个选择框
    liandong.subSelectChange("s1","s2"); //设置子级选择框
  </script>
</html>