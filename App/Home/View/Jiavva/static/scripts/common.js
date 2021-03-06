//返回li的序号
function liNum(li){
    var flag = 0;
    while(li.previousSibling){
        flag ++;
        li = li.previousSibling;
    }
    return flag;
}
//删除所有子元素
function removeAllChild(ul)
{
    while(ul.hasChildNodes())
    {
        ul.removeChild(ul.firstChild);
    }
}
//为保证IE8下可以使用
function getElementsByClassName(node, classname) {
    var a = [];
    var re = new RegExp('(^| )' + classname + '( |$)');
    var els = node.getElementsByTagName("*");
    for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
    return a;
}
//添加事件绑定，兼容所有
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
//移除事件监听
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
//URL处理，返回name、value的url对象
function urlString(){
    var str = location.href;
    var num = str.indexOf("?");
    str = str.substring(num+1);
    var arrTmp = str.split("&");
    var urls = new Array(arrTmp.length);
    for(var i=0;i<arrTmp.length;i++){
        var url = new Object();
        var nameValue = arrTmp[i].split("=");
        url.name = nameValue[0];
        url.value = nameValue[1];
        urls[i] = url;
    }
    return urls;
}
//获取屏幕宽高
function getScreen(){
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    return {
        width: winWidth,
        heihgt: winHeight
    };
}

function stopProgapation(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

function numFormat(num){
    return Math.round(num*100)/100;
}
function getAbsoluteLeft(objectId){
    o = document.getElementById(objectId);
    oLeft = o.offsetLeft;
    while(o.offsetParent!=null) {
        oParent = o.offsetParent;
        oLeft += oParent.offsetLeft;
        o = oParent;
    }
    return oLeft-10;
}
function getAbsoluteTop(objectId){
    o = document.getElementById(objectId);
    oTop = o.offsetTop;
    while(o.offsetParent!=null){
    oParent = o.offsetParent;
    oTop += oParent.offsetTop;
    o = oParent;
    }
    return oTop-10;
}