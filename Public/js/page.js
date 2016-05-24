var Page = function(config){
    this.elem = config.elem;
    this.pageSize = config.pageSize;
    this.total = 0;
    this.pageNum = 0;
    this.showNum = config.showNum;
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
    init: function(){
      var _this = this;
        _this.clearHTML();
        this.pageNow = 1;
        if(_this.total==0){
            return false;
        }else{
            var preLi = document.createElement('li');
            preLi.style.display='none';
            var nextLi = document.createElement('li');
            if(_this.pageNum==1){
                nextLi.style.display = 'none';
            }
            var pageDir = document.createElement('span');
            pageDir.innerHTML = _this.pageNow+'/'+_this.pageNum;
            var pageInput = document.createElement('input');
            pageInput.setAttribute('type','text');
            var pageBtn = document.createElement('button');
            pageBtn.innerHTML = '跳转';
            preLi.innerHTML = '上一页';
            nextLi.innerHTML = '下一页';
            _this.elem.appendChild(preLi);
            _this.elem.appendChild(nextLi);
            _this.elem.appendChild(pageDir);
            _this.elem.appendChild(pageInput);
            _this.elem.appendChild(pageBtn);
            if(_this.pageNum<=_this.showNum){
                for(var i=1;i<=_this.pageNum;i++){
                    var pageLi = document.createElement('li');
                    pageLi.innerHTML = i;
                    _this.elem.insertBefore(pageLi,nextLi);
                }
            }else{
                for(var i=1;i<=_this.showNum;i++){
                    var pageLi = document.createElement('li');
                    pageLi.innerHTML = i;
                    _this.elem.insertBefore(pageLi,nextLi);
                }
            }
            var pageLis = _this.elem.getElementsByTagName('li');
            for(var i=0;i<_this.showNum;i++){
                if(parseInt(pageLis[i].innerHTML)==_this.pageNow){
                    pageLis[i].className = 'active';
                    break;
                }
            }
            preLi.onclick = function(event){
                if(pageLis.length<3||_this.pageNow<2){
                    return false;
                }else{
                    _this.pageNow--;
                    _this.remote(function(){
                        _this.reset();
                    });
                }
            }
            nextLi.onclick = function(event){
                if(pageLis.length<3||_this.pageNow==_this.pageNum){
                    return false;
                }else{
                    _this.pageNow++;
                    _this.remote(function(){
                        _this.reset();
                    });
                }
            }
            for(var i=1;i<(pageLis.length-1);i++){
                pageLis[i].onclick = function(event){
                    _this.pageNow = this.innerHTML;
                    _this.remote(function(){
                        _this.reset();
                    });
                }
            }
            pageBtn.onclick = function(event){
                if(pageInput.value){
                    var inputNum = pageInput.value;
                    var totalNum = parseInt(pageDir.innerHTML.split('/')[1]);
                    if(inputNum<1||inputNum>totalNum){
                        alert('请输入正确的页码');
                    }else{
                        _this.pageNow = inputNum;
                        _this.remote(function(){
                            _this.reset();
                        });
                    }
                }else{
                    return false;
                }
            }
        }
    },
    reset: function(){
        var pageLis = this.elem.getElementsByTagName('li');
        if(this.pageNow==1){
            pageLis[0].style.display="none";
        }else{
            pageLis[0].style.display="inline-block";
        }
        if(this.pageNow==this.pageNum){
            pageLis[this.min(this.showNum,this.pageNum)+1].style.display="none";
        }else{
            pageLis[this.min(this.showNum,this.pageNum)+1].style.display="inline-block";
        }
        for(var i=0;i<pageLis.length;i++){
            pageLis[i].className = '';
        }
        if(this.pageNum<=this.showNum){
            for(var i=1;i<=this.pageNum;i++){
                pageLis[i].innerHTML = i;
            }
        }else{
            if(this.pageNow-Math.floor(this.showNum/2)<=0){
                for(var i=1;i<=this.showNum;i++){
                    pageLis[i].innerHTML = i;
                }
            }else if(parseInt(this.pageNow)+Math.floor(this.showNum/2)>this.pageNum){
                for(var i=1;i<=this.showNum;i++){
                    pageLis[i].innerHTML = this.pageNum-this.showNum+i;
                }
            }else{
                for(var i=1;i<=this.showNum;i++){
                    pageLis[i].innerHTML = this.pageNow-Math.floor(this.showNum/2)+i;
                }
            }
        }
        for(var i=1;i<=this.showNum;i++){
            if(parseInt(pageLis[i].innerHTML)==this.pageNow){
                pageLis[i].className = 'active';
                break;
            }
        }
        var pageDir = this.elem.getElementsByTagName('span')[0];
        pageDir.innerHTML = this.pageNow+'/'+pageDir.innerHTML.split('/')[1];
    },
    //远程连接
    remote: function(callback){
        this.rFn(this.pageNow,this.pageSize,callback);
    },
    clearHTML: function(){
        this.elem.innerHTML = '';
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