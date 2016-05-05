/**
* addressSelector by callcter
* dreamser.com
* update @ 2016/4/20
**/

var SelectList = function(event,arr){
	
}
function getFocus(event){
	var src = event.target || window.event.srcElement;
	if(src.nodeName=='I'){
		var node = src.parentNode;
	}else{
		var node = src;
	}
	node.previousSibling.focus();
	stopProgapation(event);
}
function selectList(event,arr){
	var src = event.target || window.event.srcElement;
	if(document.getElementById('selectlist')){
		var listParent = document.getElementById('selectlist').parentNode;
		listParent.removeChild(document.getElementById('selectlist'));
	}
	stopProgapation(event);
	// var left = getAbsoluteLeft(src)-1;
	var left = src.offsetLeft-1;
	// var top = getAbsoluteTop(src)+src.offsetHeight;
	var top = src.offsetTop+src.offsetHeight;
	var ul = document.createElement('ul');
	ul.style.width = src.offsetWidth+'px';
	// ul.style.left = left+'px';
	// ul.style.marginLeft = left+'px';
	// ul.style.top = top+'px';
	// ul.style.marginTop = top+'px';
	ul.className = 'selectList';
	ul.setAttribute('id','selectlist');
	for(var i=0;i<arr.length;i++){
		var li = document.createElement('li');
		li.innerHTML = arr[i];
		addEvent(li,'click',function(){
			src.value = this.innerHTML;
			src.parentNode.removeChild(document.getElementById('selectlist'));
			removeEvent(document,'click',function(){
				src.parentNode.removeChild(document.getElementById('selectlist'));
			});
		});
		addEvent(li,'mouseover',function(){
			this.className = 'active';
		});
		addEvent(li,'mouseout',function(){
			this.className = '';
		});
		ul.appendChild(li);
	}
	src.parentNode.appendChild(ul);
	addEvent(document,'click',function(){
		if(document.getElementById('selectlist')!=undefined){
			var listParent = document.getElementById('selectlist').parentNode;
			listParent.removeChild(document.getElementById('selectlist'));
		}
	});
	ul.onclick = function(e){
		stopProgapation(e);
	}
	src.onclick = function(e){
		stopProgapation(e);
	}
}
function stopProgapation(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}
function getAbsoluteLeft(o){
    oLeft = o.offsetLeft;
    while(o.offsetParent!=null) {
        oParent = o.offsetParent;
        oLeft += oParent.offsetLeft;
        o = oParent;
    }
    return oLeft;
}
function getAbsoluteTop(o){
    oTop = o.offsetTop;
    while(o.offsetParent!=null){
    oParent = o.offsetParent;
    oTop += oParent.offsetTop;
    o = oParent;
    }
    return oTop;
}
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