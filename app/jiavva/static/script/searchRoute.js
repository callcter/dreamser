window.onload = function(){
    checkBox();
//    priceList();
    selectList();
    goodsList();
    rankList();
    routeCreate();
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
//循环生成路线
var routeCreate = function(){
    var content = document.getElementById("content");
    var list = "<li><ul class='listDetail'>"+
            "<li><div class='d1'><p>"+
            "一智通家具"+
            "</p><ul class='icon'><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "iconxingjikongxin"+
            ".png'></li></ul></div><div class='d2'><p class='route'>从："+
            "佛山市-顺德区"+
            "（<a href='#'>查看网点</a>）</p><p class='route'>从："+
            "长沙市-岳麓区"+
            "（<a href='#'>查看网点</a>）</p><p class='icons'>"+
            "<span><img src='../static/image/baoxian.png'></span>"+
            "<span><img src='../static/image/tiqu.png'></span>"+
            "<span><img src='../static/image/songzhuang.png'>"+
            "</span><span><img src='../static/image/ruanti.png'></span>"+
            "<span><img src='../static/image/dingzhi.png'></span>"+
            "<span><img src='../static/image/banshi.png'></span>"+
            "<span><img src='../static/image/shimu.png'></span>"+
            "</p><p class='type orange'>"+
            "送装一体"+
            "</p></div><div class='d3'><p class='time'>物流："+
            "1-3天"+
            "</p><p class='time'>安装："+
            "1-2天"+
            "</p><p class='type orange'>"+
            "零担，普通汽运"+
            "</p></div><div class='d4'><p>轻货：￥"+
            "100"+
            " /立方米</p><p>重货：￥"+
            "120"+
            " /立方米</p><p>配送：￥"+
            "90"+
            " /立方米</p><p>安装：￥"+
            "30"+
            " /组</p><p>保底：￥"+
            "60"+
            " /票</p></div><div class='d5'><div class='buIcon'><img src='../static/image/searchRoute/butie.png'></div><span>"+
            "20%"+
            "</span></div><div class='d6'><p>已成交<span class='redWord'>"+
            "150"+
            "</span>笔</p><p><a href='#'>"+
            "33"+
            "条评价</a></p></div></li>"+"</ul><div class='listSummary'><div class='s1'><p>预估费用：<span class='redWord'>￥</span><span class='priceSum'>"+
            "290"+
            "</span></p></div><div class='s2'><div class='confirmBtn'>下单</div><div class='collect'><div id='collected'><div class='collectIcon'><img src='../static/image/iconfont-"+
            "shoucang-wancheng"+
            ".png'></div><span>"+
            " 已收藏"+
            "</span></div></div></div></div>"+
            "<div class='hotroute'><img src='../static/image/searchRoute/hotroute.png'></div></li>";
    content.innerHTML = list;
    
}
//评估费用详细弹出框
var priceList = function(){
    var tanchu = document.getElementById("priceDetailBox");
    var top = 0;
    var priceSums = getElementsByClassName(document.body,'priceSum');
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
//后天链接，动态生成路线列表
(function($){
    var data = new Object();
    switch($("#selected").text()){
        case "异地配送":
            data.serviceType = "t";
            break;
        case "异地送装":
            data.serviceType = "t";
            break;
        case "同城配送":
            data.serviceType = "t";
            break;
        case "同城送装":
            data.serviceType = "t";
            break;
        case "安装":
            data.serviceType = "t";
            break;
        case "维修":
            data.serviceType = "t";
            break;
    }
    var url = "";
    var dataJson = JSON.stringify(data);
    $.ajax({
        url: url,
        data: json,
        dataType: "json",
        type: "POST",
        success: function(result){
            var obj = eval("("+result+")");
            
            "<ul class='listDetail'>"+
            "<li><div class='d1'><p>"+
            "一智通家具"+
            "</p><ul class='icon'><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "xingji"+
            ".png'></li><li><img src='../static/image/iconfont-"+
            "iconxingjikongxin"+
            ".png'></li></ul></div><div class='d2'><p class='route'>从："+
            "佛山市-顺德区"+
            "（<a href='#'>查看网点</a>）</p><p class='route'>从："+
            "长沙市-岳麓区"+
            "（<a href='#'>查看网点</a>）</p><p class='icons'>"+
            "<span><img src='../static/image/baoxian.png'></span>"+
            "<span><img src='../static/image/tiqu.png'></span>"+
            "<span><img src='../static/image/songzhuang.png'>"+
            "</span><span><img src='../static/image/ruanti.png'></span>"+
            "<span><img src='../static/image/dingzhi.png'></span>"+
            "<span><img src='../static/image/banshi.png'></span>"+
            "<span><img src='../static/image/shimu.png'></span>"+
            "</p><p class='type orange'>"+
            "送装一体"+
            "</p></div><div class='d3'><p class='time'>物流："+
            "1-3天"+
            "</p><p class='time'>安装："+
            "1-2天"+
            "</p><p class='type orange'>"+
            "零担，普通汽运"+
            "</p></div><div class='d4'><p>轻货：￥"+
            "100"+
            " /立方米</p><p>重货：￥"+
            "120"+
            " /立方米</p><p>配送：￥"+
            "90"+
            " /立方米</p><p>安装：￥"+
            "30"+
            " /组</p><p>保底：￥"+
            "60"+
            " /票</p></div><div class='d5'><div class='buIcon'><img src='../static/image/searchRoute/butie.png'></div><span>"+
            "20%"+
            "</span></div><div class='d6'><p>已成交<span class='redWord'>"+
            "150"+
            "</span>笔</p><p><a href='#'>"+
            "33"+
            "条评价</a></p></div></li>"+"</ul><div class='listSummary'><div class='s1'><p>预估费用：<span class='redWord'>￥</span><span class='priceSum'>"+
            "290"+
            "</span></p></div><div class='s2'><div class='confirmBtn'>下单</div><div class='collect'><div id='collected'><div class='collectIcon'><img src='../static/image/iconfont-"+
            "shoucang-wancheng"+
            ".png'></div><span>"+
            "已收藏"+
            "</span></div></div></div></div>"+
            "<div class='hotroute'><img src='../static/image/searchRoute/hotroute.png'></div>";
        }
    });
})(jquery);