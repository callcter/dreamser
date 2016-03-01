window.onload = function(){
    checkBox();
    priceList();
    selectList();
    goodsList();
    rankList();
}

//服务类型选择下拉列表样式自定义
var selectList = function(){
    var serviceType = document.getElementById("serviceType");
    var selectList = document.getElementById("selectList");
    var lis = selectList.getElementsByTagName("li");
    var selected = document.getElementById("selected");
    addEvent(serviceType,"mouseover",function(){
        selectList.style.display = "block";
    });
    addEvent(serviceType,"mouseout",function(){
        selectList.style.display = "none";
    });
    addEvent(selectList,"mouseover",function(){
        selectList.style.display = "block";
    });
    addEvent(selectList,"mouseout",function(){
        selectList.style.display = "none";
    });
    for(var i=0;i<lis.length;i++){
        addEvent(lis[i],"click",function(){
            selected.innerHTML = this.innerHTML;
            if(this.innerHTML=="安装"){
                document.getElementById("startPlaceBox").className = "startP disabled";
                document.getElementById("startPlace").setAttribute("disabled","disabled");
            }else{
                document.getElementById("startPlaceBox").className = "startP";
                document.getElementById("startPlace").removeAttribute("disabled");
            }
        });
        addEvent(lis[i],"mouseover",function(){
            this.className = "activeS";
        });
        addEvent(lis[i],"mouseout",function(){
            this.className = "";
        });
    }
}
//商品类型列表样式自定义
var goodsList = function(){
    var goodSelected = document.getElementById("goodSelected");
    var good = document.getElementById("goods");
    var tabs = document.getElementById("goodsTab").getElementsByTagName("li");
    var firstList = document.getElementById("firstList");
    var secondList = document.getElementById("secondList");
    var thirdList = document.getElementById("thirdList");
    var listBtn = document.getElementById("goodsList");
    var note = "";
    var goods = goodType[0].children;
    addEvent(listBtn,"click",function(){
        note = "";
        if(good.style.display == "block"){
            good.style.display = "none";
            firstList.style.display = "none";
            secondList.style.display = "none";
            thirdList.style.display = "none";
        }else{
            good.style.display = "block";
            firstList.style.display = "block";
        }
        tabs[2].className = "";
        tabs[0].className = "activeTab";
    });
    for(var i=0;i<goods.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = goods[i].text;
        firstList.appendChild(fLi);
        addEvent(fLi,"click",function(){
            note += this.innerHTML;
            goodSelected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(secondList);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = goods[liNum(this)].children;
            for(var j=0;j<goods[liNum(this)].children.length;j++){
                var sLi = document.createElement("li");
                sLi.innerHTML = goods[liNum(this)].children[j].text;
                secondList.appendChild(sLi);
                addEvent(sLi,"click",function(){
                     note += "-"+this.innerHTML;
                     goodSelected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(thirdList);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         thirdList.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note += "-"+this.innerHTML;
                             goodSelected.innerHTML = note;
                             thirdList.style.display = "none";
                             good.style.display = "none";
                            if(this.innerHTML=="一米"){
                                document.getElementById("ge").setAttribute("disabled","disabled");
                            }else{
                                document.getElementById("ge").removeAttribute("disabled");
                            }
                         });
                         addEvent(tLi,"mouseover",function(){
                             this.className = "activeT";
                         });
                         addEvent(tLi,"mouseout",function(){
                             this.className = "";
                         });
                     }
                    secondList.style.display = "none";
                    thirdList.style.display = "block";
                    tabs[1].className = "";
                    tabs[2].className = "activeTab";
                });
                addEvent(sLi,"mouseover",function(){
                    this.className = "activeT";
                });
                addEvent(sLi,"mouseout",function(){
                    this.className = "";
                });
            }
            firstList.style.display = "none";
            secondList.style.display = "block";
            tabs[0].className = "";
            tabs[1].className = "activeTab";
        });
        addEvent(fLi,"mouseover",function(){
            this.className = "activeT";
        });
        addEvent(fLi,"mouseout",function(){
            this.className = "";
        });
    }
}
//复选框勾选样式定义
var checkBox = function(){
    var field1 = document.getElementById("checkbox1");
    var field2 = document.getElementById("checkbox2");
    var labels1 = field1.getElementsByTagName("label");
    var labels2 = field2.getElementsByTagName("label");
    var inputs1 = field1.getElementsByTagName("input");
    var inputs2 = field2.getElementsByTagName("input");
    var nolimit1 = document.getElementById("nolimit1");
    var nolimit2 = document.getElementById("nolimit2");
    addEvent(nolimit1,"click",function(){
        for(var i=0;i<labels1.length;i++){
            labels1[i].className = "checkLabel";
            inputs1[i].checked = false;
        }
        nolimit1.className = "nolimit";
    });
    addEvent(nolimit2,"click",function(){
        for(var i=0;i<labels2.length;i++){
            labels2[i].className = "checkLabel";
            inputs2[i].checked = false;
        }
        nolimit2.className = "nolimit";
    });
    for(var i=0;i<labels1.length;i++){
        labels1[i].index = i;
        addEvent(labels1[i],"click",function(){
            if(this.className == "checkLabel"){
                this.className = "checkLabel checked";
            }else{
                this.className = "checkLabel";
            }
            nolimit1.className = "";
        });
    }
    for(var i=0;i<labels2.length;i++){
        labels2[i].index = i;
        addEvent(labels2[i],"click",function(){
            if(this.className == "checkLabel"){
                this.className = "checkLabel checked";
            }else{
                this.className = "checkLabel";
            }
            nolimit2.className = "";
        });
    }
}
//评估费用详细弹出框
var priceList = function(){
    var tanchu = document.getElementById("priceDetailBox");
    var top = 0;
//    if(document.getElementsByClassName("priceSum")){
//        var priceSums = document.getElementsByClassName("priceSum");
//    }else{
        var priceSums = getElementsByClassName(document.body,'priceSum');
//    }
    for(var i=0;i<priceSums.length;i++){
        addEvent(priceSums[i],"mouseover",function(event){
            top = this.offsetParent.offsetParent.offsetParent.offsetTop+this.offsetParent.offsetParent.offsetParent.offsetHeight/2+this.offsetParent.offsetHeight/2-5;
            tanchu.style.top = top+"px";
            tanchu.style.display = "block";
        });
    }
    for(var i=0;i<priceSums.length;i++){
        addEvent(priceSums[i],"mouseout",function(event){
            tanchu.style.display = "none";
        });
    }
}
//排序按钮
var rankList = function(){
    var title = document.getElementById("title");
    var lis = title.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){
        addEvent(lis[i],"click",function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className = "";
            }
            this.className = "active";
        });
    }
}