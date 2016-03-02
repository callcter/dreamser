//添加鼠标滑动监听，根据event.delta判断滚动方向，delta>0向上,<0向下
var domScroll = (function(window,undefined){
    var _eventCompatiable = function(event){
        if(event.wheelDelta){
            event.delta = event.wheelDelta/120;
        }else{
            event.delta = -(event.detail||0)/3;
        }
        return event;
    }
    return function(fn){
        var type = "mousewheel";
        if(typeof document.mozHidden !== "undefined"){
            type = "DOMMouseScroll";
        }
        document.body.addEventListener(type,function(event){
            fn.call(this,_eventCompatiable(event));
        })
    }
})(window);
//页面滚动到某一高度动画
function runScrollTo(target) {
    var top = document.documentElement.scrollTop || document.body.scrollTop,
        time = 0.2 * 1000, // total time
        stepCount = 100, // scroll times
        posSteps = (target - top) / stepCount,
        i = 1,
        timer;

    timer = setInterval(function () {
        window.scrollTo(0, top + posSteps * i);
        if (i == stepCount) {
            clearInterval(timer);
        }
        i++;
    }, time / stepCount);
}

function DSAnimate(ele,options,time){
    this.stepCount = 60;
    this.ele = ele;
    this.options = new Array();
    for(var i=0;i<options.length;i++){
        var attr = new Object();
        attr.attribute = options[i].attribute;
        attr.from = this.ele.style.options[i].attribute;
        attr.step = (options[i].to - attr.from)/this.stepCount;
        this.options.push(attr);
    }
    this.time = time;
}

DSAnimate.prototype.do = function(){
    var timer;
    var i = 1;
    timer = setInterval(function(){
        
        for(var j=0;j<this.options.length;j++){
            this.ele.style[this.options[j].attribute] = this.options[j].from + this.options[j].step * i;
        }
        
        if(i == stepCount){
            clearInterval(timer);
        }
        i++;
    },this.time/this.stepCount);
}

//轮播图
var Carousel = function(config){
    this.speed = config.speed;
    this.source = config.source;
}

Carousel.prototype.scroll = function(){
}

Carousel.prototype.auto = function(){
    
}


//移除元素节点，通过查找父节点然后删除子节点的方法
function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
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
//自某一天起过去了多少天
Date.prototype.diff = function(date){
    return (this.getTime()-date.getTime())/(24*60*60*1000);
}

function winSize(){
    
}