var Page = function(config){
    this.elem = config.elem;
    this.pageSize = config.pageSize;
    this.total = 0;
    this.pageNum = 0;
    // this.showNum = config.showNum;
    this.lang = config.lang;
    this.pageNow = 1;
    this.rFn = config.remote;
}
Page.prototype = {
    setTotal: function(num){
        this.total = num;
        this.pageNum = Math.ceil(this.total/this.pageSize);
    },
    setPageNow: function(now){
        this.pageNow = now;
    },
    //初始化
    init: function(){
        this.clearHTML();
        if(this.total==0){
            return false;
        }else{
            var preLi = document.createElement('li');
            var nextLi = document.createElement('li');
            switch(this.lang){
                case 'cn':
                    preLi.innerHTML = '上一页';
                    nextLi.innerHTML = '下一页';
                    break;
                case 'en':
                    preLi.innerHTML = 'prev';
                    nextLi.innerHTML = 'next';
                    break;
            }
            this.elem.appendChild(preLi);
            this.elem.appendChild(nextLi);
            for(var i=1;i<=this.pageNum;i++){
                var pageLi = document.createElement('li');
                pageLi.innerHTML = i;
                this.elem.insertBefore(pageLi,nextLi);
            }
            var pageLis = this.elem.getElementsByTagName('li');
            pageLis[this.pageNow].className = 'active';
            this.addEvent(preLi,'click',function(event){
                if(pageLis.length<3||event.pageNow<2){
                    return false;
                }else{
                    event.pageNow--;
                    for(var j=0;j<pageLis.length;j++){
                        pageLis[j].className = '';
                    }
                    pageLis[event.pageNow].className = 'active';
                    event.remote();
                }
            },this);
            this.addEvent(nextLi,'click',function(event){
                if(pageLis.length<3||event.pageNow==(pageLis.length-1)){
                    return false;
                }else{
                    event.pageNow++;
                    for(var j=0;j<pageLis.length;j++){
                        pageLis[j].className = '';
                    }
                    pageLis[event.pageNow].className = 'active';
                    event.remote();
                }
            },this);
            for(var i=1;i<(pageLis.length-1);i++){
                this.addEvent(pageLis[i],'click',function(event){
                    event.pageNow = this.innerHTML;
                    for(var j=0;j<pageLis.length;j++){
                        pageLis[j].className = '';
                    }
                    pageLis[event.pageNow].className = 'active';
                    event.remote();
                },this);
            }
        }
    },
    //远程连接
    remote: function(){
        this.rFn(this.pageNow,this.pageSize);
    },
    clearHTML: function(){
        this.elem.innerHTML = '';
    },
    // setEventParam: function(pp){
    //     thisP = pp;
    // },
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
    }
}