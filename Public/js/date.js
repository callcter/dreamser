function Dsdate(options){
  this.src = null;
  this.srcPN = null;
  this.date = null;
  this.showTime = options.showTime;
}

Dsdate.prototype = {
  init: function(event){
    this.stopEvent(event);
    this.date = new Date();
    this.src = event.target || window.event.srcElement;
    this.srcPN = this.src.parentNode;
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
    if(this.showTime){
      var time = document.createElement('p');
      time.className = 'time';
      this.timeInit(time);
    }
    var btns = document.createElement('p');
    btns.className = 'btns';
    this.btnsInit(btns);
    box.appendChild(year);
    box.appendChild(week);
    box.appendChild(day);
    if(this.showTime){
      box.appendChild(time);
    }
    box.appendChild(btns);

    //box定位
    box.style.left = this.src.offsetLeft+'px';
    box.style.top = this.src.offsetTop+this.src.offsetHeight+'px';
    this.setIndex(this.srcPN);

    this.srcPN.appendChild(box);
    document.getElementById('year').value = this.date.getFullYear();
    document.getElementById('month').value = this.date.getMonth()+1;
    var days = document.getElementById('day').getElementsByTagName('li');
    for(var i=0;i<days.length;i++){
      if(days[i].innerHTML==this.date.getDate()){
        days[i].className = 'today';
        break;
      }
    }
    if(this.showTime){
      document.getElementById('hour').value = this.date.getHours();
      document.getElementById('minute').value = this.date.getMinutes();
      document.getElementById('second').value = this.date.getSeconds();
    }

    var list_box = document.createElement('ul');
    list_box.className = 'list-box';
    box.appendChild(list_box);

    var _this = this;
    document.onclick = function(){
      if(document.getElementById('dsdate')){
        _this.clearIndex(_this.srcPN);
        _this.srcPN.removeChild(document.getElementById('dsdate'));
      }
    }
    //事件冒泡处理
    box.onclick = function(event){
      _this.stopEvent(event);
    }
    this.src.onclick = function(event){
      _this.stopEvent(event);
    }

    document.getElementById('nextMonth').onclick = function(){
      _this.nextMonth(document.getElementById('month'),day);
    }
    document.getElementById('preMonth').onclick = function(){
      _this.preMonth(document.getElementById('month'),day);
    }
    document.getElementById('nextYear').onclick = function(){
      _this.nextYear(document.getElementById('year'),day);
    }
    document.getElementById('preYear').onclick = function(){
      _this.preYear(document.getElementById('year'),day);
    }
    if(this.showTime){
      document.getElementById('hour').onfocus = function(){
        _this.hourSelect(list_box,document.getElementById('hour'),box);
      }
      document.getElementById('minute').onfocus = function(){
        _this.minuteSelect(list_box,document.getElementById('minute'),box);
      }
      document.getElementById('second').onfocus = function(){
        _this.secondSelect(list_box,document.getElementById('second'),box);
      }
    }
    document.getElementById('month').onfocus = function(){
      _this.monthSelect(list_box,document.getElementById('month'),box,day);
    }
    document.getElementById('year').onfocus = function(){
      _this.yearSelect(list_box,document.getElementById('year'),box,day);
    }
    var output = null;
    document.getElementById('closeBtn').onclick = function(){
      _this.clearIndex(_this.srcPN);
      _this.srcPN.removeChild(box);
    }
    document.getElementById('todayBtn').onclick = function(){
      _this.date = new Date();
      if(_this.showTime){
        output = _this.date.getFullYear()+'-'+_this.format(_this.date.getMonth()+1)+'-'+_this.format(_this.date.getDate())+' '+_this.format(_this.date.getHours())+':'+_this.format(_this.date.getMinutes())+':'+_this.format(_this.date.getSeconds());
      }else{
        output = _this.date.getFullYear()+'-'+_this.format(_this.date.getMonth()+1)+'-'+_this.format(_this.date.getDate());
      }
      _this.src.value = output;
      _this.clearIndex(_this.srcPN);
      _this.srcPN.removeChild(box);
    }
    document.getElementById('confirmBtn').onclick = function(){
      if(_this.showTime){
        output = _this.date.getFullYear()+'-'+_this.format(_this.date.getMonth()+1)+'-'+_this.format(_this.date.getDate())+' '+_this.format(_this.date.getHours())+':'+_this.format(_this.date.getMinutes())+':'+_this.format(_this.date.getSeconds());
      }else{
        output = _this.date.getFullYear()+'-'+_this.format(_this.date.getMonth()+1)+'-'+_this.format(_this.date.getDate());
      }
      _this.src.value = output;
      _this.clearIndex(_this.srcPN);
      _this.srcPN.removeChild(box);
    }

  },
  yearInit: function(parent){
    parent.innerHTML = '<span id="preYear" class="btn"> < </span><input id="year" type="text"> 年<span id="nextYear" class="btn"> > </span> <span id="preMonth" class="btn"> < </span><input id="month" type="text"> 月<span id="nextMonth" class="btn"> > </span>';
  },
  weekInit: function(parent){
    parent.innerHTML = '<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>';
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
    var _this = this;
    for(var i=0;i<liNumber;i++){
      var ul = document.createElement("ul");
      parent.appendChild(ul);
      for(var j=0;j<7;j++){
        var li = document.createElement("li");
        if(monthArray[i][j]!=0){
          li.innerHTML = monthArray[i][j];
          li.onclick = function(){
            var lis = parent.getElementsByTagName('li');
            for(var i=0;i<lis.length;i++){
              lis[i].className = '';
            }
            this.className = "active";
            _this.date.setDate(parseInt(this.innerHTML));
          };
        }else{
            li.innerHTML = '.';
        }
        ul.appendChild(li);
      }
    }
  },
  timeInit: function(parent){
    parent.innerHTML = '<input id="hour" type="text"><input id="minute" type="text"><input id="second" type="text">';
  },
  btnsInit: function(parent){
    parent.innerHTML = '<button id="closeBtn">关闭</button><button id="todayBtn">今天</button><button id="confirmBtn">确定</button>';
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
  },
  nextMonth: function(con,day){
    if(this.date.getMonth()==11){
      this.date.setMonth(0);
    }else{
      this.date.setMonth(this.date.getMonth()+1);
    }
    con.value = this.date.getMonth()+1;
    this.dayInit(day);
  },
  preMonth: function(con,day){
    if(this.date.getMonth()==0){
      this.date.setMonth(11);
    }else{
      this.date.setMonth(this.date.getMonth()-1);
    }
    con.value = this.date.getMonth()+1;
    this.dayInit(day);
  },
  nextYear: function(con,day){
    this.date.setFullYear(this.date.getFullYear()+1);
    con.value = this.date.getFullYear();
    this.dayInit(day);
  },
  preYear: function(con,day){
    this.date.setFullYear(this.date.getFullYear()-1);
    con.value = this.date.getFullYear();
    this.dayInit(day);
  },
  hourSelect: function(con,hour,box){
    con.innerHTML = '';
    con.style.height = box.offsetHeight - 120 + 'px';
    con.style.display = 'block';
    var _this = this;
    for(var i=0;i<24;i++){
      var li = document.createElement('li');
      li.innerHTML = i;
      li.onclick = function(){
        hour.value = this.innerHTML;
        _this.date.setHours(this.innerHTML);
        con.style.display = 'none';
      }
      con.appendChild(li);
    }
  },
  minuteSelect: function(con,minute,box){
    con.innerHTML = '';
    con.style.height = box.offsetHeight - 120 + 'px';
    con.style.display = 'block';
    var _this = this;
    for(var i=0;i<60;i++){
      var li = document.createElement('li');
      li.innerHTML = i;
      li.onclick = function(){
        minute.value = this.innerHTML;
        _this.date.setMinutes(this.innerHTML);
        con.style.display = 'none';
      }
      con.appendChild(li);
    }
  },
  secondSelect: function(con,second,box){
    con.innerHTML = '';
    con.style.height = box.offsetHeight - 120 + 'px';
    con.style.display = 'block';
    var _this = this;
    for(var i=0;i<60;i++){
      var li = document.createElement('li');
      li.innerHTML = i;
      li.onclick = function(){
        second.value = this.innerHTML;
        _this.date.setSeconds(this.innerHTML);
        con.style.display = 'none';
      }
      con.appendChild(li);
    }
  },
  monthSelect: function(con,month,box,day){
    con.innerHTML = '';
    con.style.height = box.offsetHeight - 120 + 'px';
    con.style.display = 'block';
    var _this = this;
    for(var i=1;i<=12;i++){
      var li = document.createElement('li');
      li.innerHTML = i;
      li.onclick = function(){
        month.value = this.innerHTML;
        _this.date.setMonth(this.innerHTML);
        _this.dayInit(day);
        con.style.display = 'none';
      }
      con.appendChild(li);
    }
  },
  yearSelect: function(con,year,box,day){
    con.innerHTML = '';
    con.style.height = box.offsetHeight - 120 + 'px';
    var start_year = parseInt(year.value);
    con.style.display = 'block';
    var _this = this;
    for(var i=0;i<48;i++){
      var li = document.createElement('li');
      li.innerHTML = start_year+i-24;
      li.onclick = function(){
        year.value = this.innerHTML;
        _this.date.setFullYear(this.innerHTML);
        _this.dayInit(day);
        con.style.display = 'none';
      }
      con.appendChild(li);
    }
  },
  format: function(str){
    str = str.toString();
    if(str.length==1){
      return '0'+str;
    }else{
      return str;
    }
  },
  stopEvent: function(e){
    e = e || window.event;
    if(e.stopPropagation){
      e.stopPropagation();
    }else{
      e.cancelBubble = true;
    }
  },
  setIndex: function(o){
    while(o.offsetParent!=null){
      o.style.zIndex = 100;
      o = o.offsetParent;
    }
  },
  clearIndex: function(o){
    while(o.offsetParent!=null){
      o.style.zIndex = 0;
      o = o.offsetParent;
    }
  }
}