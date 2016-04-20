var Page = function(config){
    this.elem = config.elem;
    this.pageSize = config.pageSize;
    this.total = 0;
    this.pageNum = 0;
    this.showNum = config.showNum;
    this.lang = config.lang;
    this.pageNow = 1;
    this.rFn = config.remote;
}
Page.prototype = {
    constructor: Page,
    setTotal: function(num){
        this.total = num;
        this.pageNum = Math.ceil(this.total/this.pageSize);
    },
    setPageNow: function(now){
        this.pageNow = now;
    },
    //初始化
    init: function(obj){
        obj.clearHTML();
        if(obj.total==0){
            return false;
        }else{
            var preLi = document.createElement('li');
            preLi.style.display='none';
            var nextLi = document.createElement('li');
            var pageDir = document.createElement('span');
            pageDir.innerHTML = obj.pageNow+'/'+obj.pageNum;
            var pageInput = document.createElement('input');
            pageInput.setAttribute('type','text');
            var pageBtn = document.createElement('button');
            pageBtn.innerHTML = '跳转';
            switch(obj.lang){
                case 'cn':
                    preLi.innerHTML = '上一页';
                    nextLi.innerHTML = '下一页';
                    break;
                case 'en':
                    preLi.innerHTML = 'prev';
                    nextLi.innerHTML = 'next';
                    break;
            }
            obj.elem.appendChild(preLi);
            obj.elem.appendChild(nextLi);
            obj.elem.appendChild(pageDir);
            obj.elem.appendChild(pageInput);
            obj.elem.appendChild(pageBtn);
            if(obj.pageNum<=obj.showNum){
                for(var i=1;i<=obj.pageNum;i++){
                    var pageLi = document.createElement('li');
                    pageLi.innerHTML = i;
                    obj.elem.insertBefore(pageLi,nextLi);
                }
            }else{
                for(var i=1;i<=obj.showNum;i++){
                    var pageLi = document.createElement('li');
                    pageLi.innerHTML = i;
                    obj.elem.insertBefore(pageLi,nextLi);
                }
            }
            var pageLis = obj.elem.getElementsByTagName('li');
            for(var i=0;i<obj.showNum;i++){
                if(parseInt(pageLis[i].innerHTML)==obj.pageNow){
                    pageLis[i].className = 'active';
                    break;
                }
            }
            obj.addEvent(preLi,'click',function(event){
                if(pageLis.length<3||event.pageNow<2){
                    return false;
                }else{
                    event.pageNow--;
                    event.remote(function(){
                        obj.reset(obj);
                    });
                }
            },obj);
            obj.addEvent(nextLi,'click',function(event){
                if(pageLis.length<3||event.pageNow==(pageLis.length-1)){
                    return false;
                }else{
                    event.pageNow++;
                    event.remote(function(){
                        obj.reset(obj);
                    });
                }
            },obj);
            for(var i=1;i<(pageLis.length-1);i++){
                obj.addEvent(pageLis[i],'click',function(event){
                    event.pageNow = this.innerHTML;
                    event.remote(function(){
                        obj.reset(obj);
                    });
                },obj);
            }
            obj.addEvent(pageBtn,'click',function(event){
                if(pageInput.value){
                    var inputNum = pageInput.value;
                    var totalNum = parseInt(pageDir.innerHTML.split('/')[1]);
                    if(inputNum<1||inputNum>totalNum){
                        alert('请输入正确的页码');
                    }else{
                        event.pageNow = inputNum;
                        event.remote(function(){
                            obj.reset(obj);
                        });
                    }
                }else{
                    return false;
                }
            },obj);
        }
    },
    reset: function(obj){
        var pageLis = obj.elem.getElementsByTagName('li');
        if(obj.pageNow==1){
            pageLis[0].style.display="none";
        }else{
            pageLis[0].style.display="inline-block";
        }
        if(obj.pageNow==obj.pageNum){
            pageLis[obj.min(obj.showNum,obj.pageNum)+1].style.display="none";
        }else{
            pageLis[obj.min(obj.showNum,obj.pageNum)+1].style.display="inline-block";
        }
        for(var i=0;i<pageLis.length;i++){
            pageLis[i].className = '';
        }
        if(obj.pageNum<=obj.showNum){
            for(var i=1;i<=obj.pageNum;i++){
                pageLis[i].innerHTML = i;
            }
        }else{
            if(obj.pageNow-Math.floor(obj.showNum/2)<=0){
                for(var i=1;i<=obj.showNum;i++){
                    pageLis[i].innerHTML = i;
                }
            }else if(parseInt(obj.pageNow)+Math.floor(obj.showNum/2)>obj.pageNum){
                for(var i=1;i<=obj.showNum;i++){
                    pageLis[i].innerHTML = obj.pageNum-obj.showNum+i;
                }
            }else{
                for(var i=1;i<=obj.showNum;i++){
                    pageLis[i].innerHTML = obj.pageNow-Math.floor(obj.showNum/2)+i;
                }
            }
        }
        for(var i=1;i<=obj.showNum;i++){
            if(parseInt(pageLis[i].innerHTML)==obj.pageNow){
                pageLis[i].className = 'active';
                break;
            }
        }
        var pageDir = obj.elem.getElementsByTagName('span')[0];
        pageDir.innerHTML = obj.pageNow+'/'+pageDir.innerHTML.split('/')[1];
    },
    //远程连接
    remote: function(callback){
        this.rFn(this.pageNow,this.pageSize,callback);
    },
    clearHTML: function(){
        this.elem.innerHTML = '';
    },
    addEvent: function(obj,event,fun,pp){
        var fn = fun;
        fn = function(e){
            fun.call(this,pp);
        }
        if(obj.attachEvent){
            obj.attachEvent("on"+event,fn);
        }else if(obj.addEventListener){
            obj.addEventListener(event,fn,false);
        }else{
            obj["on"+event] = fn;
        }
    },
    insertAfter: function(newEl, targetEl){
        var parentEl = targetEl.parentNode;
        if(parentEl.lastChild == targetEl){
            parentEl.appendChild(newEl);
        }else{
            parentEl.insertBefore(newEl,targetEl.nextSibling);
        }
    },
    min: function(a,b){
        if(a<b){
            return a;
        }else{
            return b;
        }
    }
}