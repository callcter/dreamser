/***日历应用
*功能一：显示阳、阴历
*功能二：年、月可下拉选择
*功能三：天可添加标记
*功能四：以月为单位前后翻页
***/
window.onload = function(){
  var container = document.getElementById('container');
  var list = new Dsdate();
  list.init(container);
}

function Dsdate(){
  this.date = new Date();
}

Dsdate.prototype = {
  init: function(parent){
    var box = document.createElement('div');
    box.className = 'dsdate';
    box.setAttribute('id','dsdate');
    var year = document.createElement('div');
    year.className = 'year';
    this.yearInit(year);
    var week = document.createElement('ul');
    week.className = 'week';
    this.weekInit(week);
    var day = document.createElement('div');
    day.className = 'day';
    day.setAttribute('id','day');
    this.dayInit(day);
    var time = document.createElement('p');
    time.className = 'time';
    this.timeInit(time);
    var btns = document.createElement('p');
    btns.className = 'btns';
    this.btnsInit(btns);
    box.appendChild(year);
    box.appendChild(week);
    box.appendChild(day);
    box.appendChild(time);
    box.appendChild(btns);
    parent.appendChild(box);
  },
  yearInit: function(parent){
    parent.innerHTML = '<span id="preYear" class="btn"> < </span><input id="year" type="text"> 年<span id="nextYear" class="btn"> > </span><span id="preMonth" class="btn"> < </span><input id="month" type="text"> 月<span id="nextMonth" class="btn"> > </span>';
  },
  weekInit: function(parent){
    parent.innerHTML = '<li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><li>日</li>';
  },
  dayInit: function(parent){
    var today = this.date.getDate();
    var days_count = this.daysCount(this.date.getFullYear(),this.date.getMonth());//某个月的天数
    var day_week_number = this.dayWeekNumber(this.date.getFullYear(),this.date.getMonth());//某个月第一天是周几
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
    parent.innerHTML = "";
    for(var i=0;i<liNumber;i++){
      var ul = document.createElement("ul");
      parent.appendChild(ul);
      for(var j=0;j<7;j++){
        var li = document.createElement("li");
        if(monthArray[i][j]!=0){
          li.innerHTML = monthArray[i][j];
          li.addEventListener("click",function(){
            var theDate = $("#year").html()+"-"+$("#month").html()+"-"+this.innerHTML;
            var li_active = document.getElementsByClassName("active");
            if(li_active.length!=0){
              li_active[0].className = "full";
            }
            this.className = "active";
            alert(theDate);
          });
        }
        ul.appendChild(li);
      }
    }
  },
  timeInit: function(parent){
    parent.innerHTML = '<input id="hour" type="text"><input id="minute" type="text"><input id="second" type="text">';
  },
  btnsInit: function(parent){
    parent.innerHTML = '<button>关闭</button><button>今天</button><button>确定</button>';
  },
  //获取某个月有多少天
  daysCount: function(year,month){
    var d = new Date(year,month+1,0);
    return d.getDate();
  },
  //获取某个月的第一天是周几
  dayWeekNumber: function(year,month){
    var d = new Date(year,month,1);
    return d.getDay();
  }
}

//年下拉列表
function yearList(style){
    var now = new Date();
    var year = now.getFullYear();
    var div = document.getElementById("year");
    var mdiv = document.getElementById("month");

    div.addEventListener("change",function(){
        var value = div.options[div.selectedIndex].value;
        var mvalue = mdiv.options[mdiv.selectedIndex].value;
        now.setFullYear(value);
        now.setMonth(mvalue-1);
        date(now,style);
    });

    for(var i=1900;i<2101;i++){
        var option = document.createElement("option");
        option.innerHTML = i;
        if(i==year){
            option.setAttribute("selected","selected");
        }
        div.appendChild(option);
    }
}
//月下拉列表
function monthList(style){
    var now = new Date();
    var month = now.getMonth()+1;
    var div = document.getElementById("month");
    var ydiv = document.getElementById("year");

    div.addEventListener("change",function(){
        var yvalue = ydiv.options[ydiv.selectedIndex].value;
        var value = div.options[div.selectedIndex].value;
        now.setFullYear(yvalue);
        now.setMonth(value-1);
        date(now,style);
    });

    for(var i=1;i<13;i++){
        var option = document.createElement("option");
        option.innerHTML = i;
        if(i==month){
            option.setAttribute("selected","selected");
        }
        div.appendChild(option);
    }
}
//以月为单位前后翻页
function monthPage(style){
    var now = new Date();
    var yDiv = document.getElementById("year");
    var mDiv = document.getElementById("month");
    var pre = document.getElementById("preMonth");
    var next = document.getElementById("nextMonth");

    pre.addEventListener("click",function(){
        mDiv.options[mDiv.selectedIndex].removeAttribute("selected","selected");
        if(mDiv.options[mDiv.selectedIndex].value==1){
            yDiv.options[yDiv.selectedIndex].removeAttribute("selected","selected");
            yDiv.options[yDiv.selectedIndex-1].setAttribute("selected","selected");
            mDiv.options[11].setAttribute("selected","selected");
        }else{
            mDiv.options[mDiv.selectedIndex-1].setAttribute("selected","selected");
        }
        now.setFullYear(yDiv.options[yDiv.selectedIndex].value);
        now.setMonth(mDiv.options[mDiv.selectedIndex].value-1);
        date(now,style);
    });

    next.addEventListener("click",function(){
        mDiv.options[mDiv.selectedIndex].removeAttribute("selected","selected");
        if(mDiv.options[mDiv.selectedIndex].value==12){
            yDiv.options[yDiv.selectedIndex].removeAttribute("selected","selected");
            yDiv.options[yDiv.selectedIndex+1].setAttribute("selected","selected");
            mDiv.options[0].setAttribute("selected","selected");
        }else{
            mDiv.options[mDiv.selectedIndex+1].setAttribute("selected","selected");
        }
        now.setFullYear(yDiv.options[yDiv.selectedIndex].value);
        now.setMonth(mDiv.options[mDiv.selectedIndex].value-1);
        date(now,style);
    });
}
//构成日历二维数组并渲染产生日历
function date(date,style){
    //添加阴历的显示
    var year = date.getFullYear();
    var month = date.getMonth()+1;
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
            if(monthArray[i][j]!=0){
                switch(style){
                    case "solar":
                        var span = document.createElement("span");
                        span.innerHTML = monthArray[i][j];
                        li.appendChild(span);
                        break;
                    case "lunar":
                        var span = document.createElement("span");
                        span.innerHTML = calendar.solar2lunar(year,month,monthArray[i][j]).IDayCn;
                        li.appendChild(span);
                        break;
                    case "both":
                        var span = document.createElement("span");
                        span.innerHTML = monthArray[i][j];
                        li.appendChild(span);
                        var p = document.createElement("p");
                        p.innerHTML = calendar.solar2lunar(year,month,monthArray[i][j]).IDayCn;
                        li.appendChild(p);
                        break;
                    default:
                        break;
                }
                li.addEventListener("click",function(){
                    var li_active = document.getElementsByClassName("active");
                    if(li_active.length!=0){
                        li_active[0].className = "full";
                    }
                    this.className = "active";
                    alert(theDate);
                });
            }
            ul.appendChild(li);
        }
    }
}
//显示今天
function today(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var lunar = calendar.solar2lunar(year,month,day);

    var sBox = document.getElementById("solar");
    var lBox = document.getElementById("lunar");

    sBox.innerHTML = year+'年'+month+'月'+day+'日';
    lBox.innerHTML = lunar.IMonthCn+lunar.IDayCn+' - '+lunar.gzYear+'年'+lunar.gzMonth+'月'+lunar.gzDay+'日 属'+lunar.Animal;
}