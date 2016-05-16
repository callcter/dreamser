var swiper;
$(function(){
    loaded();
    swiper = new Swiper('#horizontal', {
        direction: 'horizontal'
    });
    $("#day_list").css("margin-top",$("#horizontal").css("height"));
    dataList();
});

function loaded(){
    var now = new Date();
    dateArray(now);
    var winH = $(window).height();
    var hH = $("#horizontal").height();
    $(".day-list").height(winH-hH);
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    year.innerHTML = now.getFullYear();
    month.innerHTML = now.getMonth()+1;
    next(now);
}
//数据列表生成
function dataList(){
    var list = document.getElementById("ul_list");
    $.ajax({
        url: "date.json",
        method: "GET",
        dateType: "json",
        success: function(result){
            list.innerHTML = '';
            for(var i=0;i<result.length;i++){
                var li = document.createElement("li");
                li.addEventListener("click",function(){
                    //查看某条数据的具体信息，跳转到图表页，待完善-----------------------------------
                    swiper.slideTo(1);
                });
                list.appendChild(li);
                var title = document.createElement("div");
                title.className = "title";
                title.innerHTML = result[i].id;
                var content = document.createElement("div");
                content.className = "content";
                content.innerHTML = result[i].created_at;
                li.appendChild(title);
                li.appendChild(content);
            }
            $("#chart_container").css("height",$("#horizontal").css("height"));
            loadChart(result[0].distance.segs);
        }
    });
}
//前后翻页
function next(now){
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var left = document.getElementById("left");
    var right = document.getElementById("right");

    left.addEventListener("click",function(){
        var nYear = now.getFullYear();
        var nMonth = now.getMonth();
        if(nMonth==0){
            nMonth = 12;
        }
        year.innerHTML = nYear;
        month.innerHTML = nMonth;
        now.setMonth(now.getMonth()-1);
        dateArray(now);
        $("#day_list").css("margin-top",$("#horizontal").css("height"));
        //查询某月的数据待完善--------------------------------------------------------------------
    });

    right.addEventListener("click",function(){
        var nYear = now.getFullYear();
        var nMonth = now.getMonth()+2;
        if(nMonth==13){
            nMonth = 1;
        }
        year.innerHTML = nYear;
        month.innerHTML = nMonth;
        now.setMonth(now.getMonth()+1);
        dateArray(now);
        $("#day_list").css("margin-top",$("#horizontal").css("height"));
        //查询某月的数据待完善--------------------------------------------------------------------
    });
}
//构成日历二维数组并渲染产生日历
function dateArray(date){
    var today = date.getDate();
    var days_count = daysCount(date.getFullYear(),date.getMonth());//某个月的天数
    var day_week_number = dayWeekNumber(date.getFullYear(),date.getMonth());//某个月第一天是周几
    var liNumber = Math.ceil((days_count+day_week_number)/7);//某个月要分为多少行
    var monthArray = new Array();
    var num = 1;
    for(var i=0;i<liNumber;i++){
        monthArray[i] = [0,0,0,0,0,0,0];
        for(var j=0;j<7;j++){
            if(i==0&&j<day_week_number){
                continue;
            }else if(i==liNumber-1&&num>days_count){
                continue;
            }
            monthArray[i][j] = num;
            num++;
        }
    }
    var days =document.getElementById("days");
    days.innerHTML = "";
    for(var i=0;i<liNumber;i++){
        var ul = document.createElement("ul");
        days.appendChild(ul);
        for(var j=0;j<7;j++){
            var li = document.createElement("li");
            //根据该天是否有数据来决定样式和添加监听事件，待完善---------------------------------------
            if(monthArray[i][j]!=0){
                li.innerHTML = monthArray[i][j];
                li.addEventListener("click",function(){
                    var theDate = $("#year").html()+"-"+$("#month").html()+"-"+this.innerHTML;
                    //点击后的某天具体骑行数据的查询条目，待完善--------------------------------------
                    var li_active = document.getElementsByClassName("active");
                    if(li_active.length!=0){
                        li_active[0].className = "full";
                    }
                    this.className = "active";
                    alert(theDate);
                });
            }
//            if(li.innerHTML==today){
//                li.className = "today";
//            }
            ul.appendChild(li);
        }
    }
}
//获取某个月有多少天
function daysCount(year,month){
    var d = new Date(year,month+1,0);
    return d.getDate();
}
//获取某个月的第一天是周几
function dayWeekNumber(year,month){
    var d = new Date(year,month,1);
    return d.getDay();
}

function loadChart(data) {
    var distance = 0.0;
    var xydata = [];
    xydata[0] = [0, 0];
    for (var i = 0; i < data.length; i++){
        distance += data[i] * 10;
        xydata[i+1] = [];
        xydata[i+1][0] = parseFloat((distance/1000).toFixed(2));
        xydata[i+1][1] = parseFloat((data[i] * 0.6).toFixed(2));
    }
    $('#chart_container').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: 'rgba(0,0,0,0)'//背景透明
        },
        credits: {//版权
            enabled: false
        },
        legend: {//图例
            enabled: false
        },
        title: {
            text: '速度(km/h)',
            align: 'left',
            style: {
                fontSize: '14px',
                color: "#fff",
                textShadow: '1px 2px 1px #333'
            }
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            min: 0,
            title: {
                align: 'low',
                text: '里程(km)',
                x: -25,
                y: -20,
                style:{
                    color: '#fff',
                    textShadow: '1px 2px 1px #333'
                }
            },
            labels:{
                style:{
                    color:"#fff",
                    textShadow: '1px 2px 1px #333'
                }
            },
            lineColor: '#fff',
            tickColor: '#fff',
            tickWidth: 0,     //刻度宽度设置为0，即不显示
            showFirstLabel: false,
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: 'null',
            labels:{
                style:{
                    color:"#fff",
                    textShadow: '1px 2px 1px #333'
                }
            },
            lineWidth: 2,
            tickColor: '#fff',
            tickInterval: 10,
            tickPosition: 'inside',
            tickLength: 5
        },
        plotOptions: {
            areaspline: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, 'rgba(255,255,255,0.7)'],
                        [1, 'rgba(255,255,255,0)']
                    ]
                },
                marker: {
                    radius: 0
                },
                lineWidth: 0,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            data: xydata
        }]
    });
}
