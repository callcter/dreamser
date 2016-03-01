//返回li的序号
function liNum(li){
    var lis = li.offsetParent.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        if(lis[i]==li){
            return i;
        }
    }
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
//事件绑定，兼容所有
function addEvent(obj,event,fn){
    if(obj.attachEvent){
        obj.attachEvent("on"+event,function(){
            fn.call(obj);
        });
    }else{
        obj.addEventListener(event,fn,false);
    }
}