/**
* js通用方法集合
* dreamser.com
* update @ 2016/4/20
**/

//终止事件冒泡
function stopProgapation(e){
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}
//获取左边的绝对位置
function getAbsoluteLeft(o){
    oLeft = o.offsetLeft;
    while(o.offsetParent!=null) {
        oParent = o.offsetParent;
        oLeft += oParent.offsetLeft;
        o = oParent;
    }
    return oLeft;
}
//获取顶部的绝对位置
function getAbsoluteTop(o){
    oTop = o.offsetTop;
    while(o.offsetParent!=null){
    oParent = o.offsetParent;
    oTop += oParent.offsetTop;
    o = oParent;
    }
    return oTop;
}
//添加事件绑定
function addEvent(obj,event,fn){
    if(obj.attachEvent){
        obj.attachEvent("on"+event,function(){
            fn.call(obj);
        });
    }else if(obj.addEventListener){
        obj.addEventListener(event,fn,false);
    }else{
        obj["on"+event] = fn;
    }
}
//移除事件绑定
function removeEvent(obj,event,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(event,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+event,function(){
            fn.call(obj);
        });
    }else{
        obj["on"+event] = null;
    }
}
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
// function setStyle(obj,attr){
//     obj.style[attr]
// }