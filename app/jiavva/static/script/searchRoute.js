//搜索条件，全局使用
var data = new Object();
window.onload = function () {
    checkBox();
    selectList();
    departureSelect();
    destinationSelect();
    goodTypeSelect();
    rankList();
    search();
    
}

//服务类型选择下拉列表样式自定义
var selectList = function () {
    var serviceType = document.getElementById("serviceType");
    var selectList = document.getElementById("selectList");
    var lis = selectList.getElementsByTagName("li");
    var selected = document.getElementById("selected");
    addEvent(serviceType, "mouseover", function () {
        selectList.style.display = "block";
    });
    addEvent(serviceType, "mouseout", function () {
        selectList.style.display = "none";
    });
    addEvent(selectList, "mouseover", function () {
        selectList.style.display = "block";
    });
    addEvent(selectList, "mouseout", function () {
        selectList.style.display = "none";
    });
    for (var i = 0; i < lis.length; i++) {
        addEvent(lis[i], "click", function () {
            selected.innerHTML = this.innerHTML;
            if (this.innerHTML == "安装") {
                document.getElementById("startPlaceBox").className = "startP disabled";
            } else {
                document.getElementById("startPlaceBox").className = "startP";
            }
        });
        addEvent(lis[i], "mouseover", function () {
            this.className = "activeS";
        });
        addEvent(lis[i], "mouseout", function () {
            this.className = "";
        });
    }
}
var departureSelect = function () {
    var box = document.getElementById("departure");
    var selectBox = document.getElementById("selectBox1");
    var popularList = document.getElementById("popularList");
    var boxS = document.getElementById("startPlaceBox");
    data.departure = new Object();
    addEvent(boxS, "click", function () {
        selectBox.style.top = this.offsetHeight + this.offsetTop + "px";
        selectBox.style.left = this.offsetLeft + "px";
        if (selectBox.style.display == "block") {
            selectBox.style.display = "none";
            popularList.style.display = "none";
        } else {
            selectBox.style.display = "block";
            popularList.style.display = "block";
        }
    });
    for(var l=0;l<popularAddr.length;l++){
        var pLi = document.createElement("li");
        pLi.innerHTML = popularAddr[l].text;
        popularList.appendChild(pLi);
        addEvent(pLi,"click",function(){
            box.innerHTML = this.innerHTML;
            data.departure.cityCode = popularAddr[liNum(this)].value;
            selectBox.style.display = "none";
            popularList.style.display = "none";
        });
        addEvent(pLi,"mouseover",function(){
            this.className = "activeT";
        });
        addEvent(pLi, "mouseout", function () {
            this.className = "";
        });
    }
}
var destinationSelect = function () {
    var box = document.getElementById("destination");
    var selectBox = document.getElementById("selectBox2");
    var selectTabs = document.getElementById("selectTab2").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList20");
    var selectList1 = document.getElementById("selectList21");
    var selectList2 = document.getElementById("selectList22");
    var boxS = document.getElementById("endPlaceBox");
    var note = "";
    var options = address;
    var selected = box;
    data.destination = new Object();
    addEvent(boxS, "click", function () {
        note = "";
        selectBox.style.top = this.offsetHeight + this.offsetTop + "px";
        selectBox.style.left = this.offsetLeft + "px";
        if (selectBox.style.display == "block") {
            selectBox.style.display = "none";
            selectList0.style.display = "none";
            selectList1.style.display = "none";
            selectList2.style.display = "none";
        } else {
            selectBox.style.display = "block";
            selectList0.style.display = "block";
        }
        selectTabs[2].className = "";
        selectTabs[0].className = "active";
    });
    for (var i = 0; i < options.length; i++) {
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi, "click", function () {
            note += this.innerHTML;
            data.destination.provinceCode = options[liNum(this)].value;
            selected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(selectList1);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = options[liNum(this)].children;
            for (var j = 0; j < options[liNum(this)].children.length; j++) {
                var sLi = document.createElement("li");
                sLi.innerHTML = options[liNum(this)].children[j].text;
                selectList1.appendChild(sLi);
                addEvent(sLi, "click", function () {
                    note += "-" + this.innerHTML;
                    data.destination.cityCode = firstListArray[liNum(this)].value;
                    selected.innerHTML = note;
                    //清空三级商品列表
                    removeAllChild(selectList2);
                    for (var k = 0; k < firstListArray[liNum(this)].children.length; k++) {
                        var tLi = document.createElement("li");
                        tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                        selectList2.appendChild(tLi);
                        var secondListArray = firstListArray[liNum(this)].children;
                        addEvent(tLi, "click", function () {
                            note += "-" + this.innerHTML;
                            data.destination.districtCode = secondListArray[liNum(this)].value;
                            selected.innerHTML = note;
                            selectList2.style.display = "none";
                            selectBox.style.display = "none";
                        });
                        addEvent(tLi, "mouseover", function () {
                            this.className = "activeT";
                        });
                        addEvent(tLi, "mouseout", function () {
                            this.className = "";
                        });
                    }
                    selectList1.style.display = "none";
                    selectList2.style.display = "block";
                    selectTabs[1].className = "";
                    selectTabs[2].className = "active";
                });
                addEvent(sLi, "mouseover", function () {
                    this.className = "activeT";
                });
                addEvent(sLi, "mouseout", function () {
                    this.className = "";
                });
            }
            selectList0.style.display = "none";
            selectList1.style.display = "block";
            selectTabs[0].className = "";
            selectTabs[1].className = "active";
        });
        addEvent(fLi, "mouseover", function () {
            this.className = "activeT";
        });
        addEvent(fLi, "mouseout", function () {
            this.className = "";
        });
    }
}
var goodTypeSelect = function () {
    var box = document.getElementById("goodSelected");
    var selectBox = document.getElementById("selectBox3");
    var selectTabs = document.getElementById("selectTab3").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList30");
    var selectList1 = document.getElementById("selectList31");
    var selectList2 = document.getElementById("selectList32");
    var boxS = document.getElementById("goodsList");
    var note = "";
    var options = goodType[0].children;
    var selected = box;
    data.valuation = new Object();
    addEvent(boxS, "click", function () {
        note = "";
        selectBox.style.top = this.offsetHeight + this.offsetTop + "px";
        selectBox.style.left = this.offsetLeft + "px";
        if (selectBox.style.display == "block") {
            selectBox.style.display = "none";
            selectList0.style.display = "none";
            selectList1.style.display = "none";
            selectList2.style.display = "none";
        } else {
            selectBox.style.display = "block";
            selectList0.style.display = "block";
        }
        selectTabs[2].className = "";
        selectTabs[0].className = "active";
    });
    for (var i = 0; i < options.length; i++) {
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi, "click", function () {
            note += this.innerHTML;
            selected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(selectList1);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = options[liNum(this)].children;
            for (var j = 0; j < options[liNum(this)].children.length; j++) {
                var sLi = document.createElement("li");
                sLi.innerHTML = options[liNum(this)].children[j].text;
                selectList1.appendChild(sLi);
                addEvent(sLi, "click", function () {
                    note += "-" + this.innerHTML;
                    selected.innerHTML = note;
                    //清空三级商品列表
                    removeAllChild(selectList2);
                    var secondListArray = firstListArray[liNum(this)].children;
                    for (var k = 0; k < firstListArray[liNum(this)].children.length; k++) {
                        var tLi = document.createElement("li");
                        tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                        selectList2.appendChild(tLi);
                        addEvent(tLi, "click", function () {
                            note += "-" + this.innerHTML;
                            data.valuation.productCategory = parseInt(secondListArray[liNum(this)].value);
                            selected.innerHTML = note;
                            selectList2.style.display = "none";
                            selectBox.style.display = "none";
                        });
                        addEvent(tLi, "mouseover", function () {
                            this.className = "activeT";
                        });
                        addEvent(tLi, "mouseout", function () {
                            this.className = "";
                        });
                    }
                    selectList1.style.display = "none";
                    selectList2.style.display = "block";
                    selectTabs[1].className = "";
                    selectTabs[2].className = "active";
                });
                addEvent(sLi, "mouseover", function () {
                    this.className = "activeT";
                });
                addEvent(sLi, "mouseout", function () {
                    this.className = "";
                });
            }
            selectList0.style.display = "none";
            selectList1.style.display = "block";
            selectTabs[0].className = "";
            selectTabs[1].className = "active";
        });
        addEvent(fLi, "mouseover", function () {
            this.className = "activeT";
        });
        addEvent(fLi, "mouseout", function () {
            this.className = "";
        });
    }
}
//复选框勾选样式定义
var checkBox = function () {
    var field1 = document.getElementById("checkbox1");
    var field2 = document.getElementById("checkbox2");
    var labels1 = field1.getElementsByTagName("label");
    var labels2 = field2.getElementsByTagName("label");
    var inputs1 = field1.getElementsByTagName("input");
    var inputs2 = field2.getElementsByTagName("input");
    var nolimit1 = document.getElementById("nolimit1");
    var nolimit2 = document.getElementById("nolimit2");
    addEvent(nolimit1, "click", function () {
        for (var i = 0; i < labels1.length; i++) {
            labels1[i].className = "checkLabel";
            inputs1[i].checked = false;
        }
        nolimit1.className = "nolimit";
    });
    addEvent(nolimit2, "click", function () {
        for (var i = 0; i < labels2.length; i++) {
            labels2[i].className = "checkLabel";
            inputs2[i].checked = false;
        }
        nolimit2.className = "nolimit";
    });
    for (var i = 0; i < labels1.length; i++) {
        labels1[i].index = i;
        addEvent(labels1[i], "click", function () {
            if (this.className == "checkLabel") {
                this.className = "checkLabel checked";
//                inputs1[this.index].checked = true;
            } else {
                this.className = "checkLabel";
//                inputs1[this.index].checked = false;
            }
            nolimit1.className = "";
        });
    }
    for (var i = 0; i < labels2.length; i++) {
        labels2[i].index = i;
        addEvent(labels2[i], "click", function () {
            if (this.className == "checkLabel") {
                this.className = "checkLabel checked";
//                inputs2[this.index].checked = true;
            } else {
                this.className = "checkLabel";
//                inputs2[this.index].checked = false;
            }
            nolimit2.className = "";
        });
    }
}
//评估费用详细弹出框
var priceList = function (obj) {
    var tanchu = document.getElementById("priceDetailBox");
    var top = 0;
    var priceSums = getElementsByClassName(document.body, 'priceSum');
    for (var i = 0; i < priceSums.length; i++) {
        addEvent(priceSums[i], "mouseover", function (event) {
            top = this.offsetParent.offsetParent.offsetParent.offsetTop + this.offsetParent.offsetParent.offsetParent.offsetHeight / 2 + this.offsetParent.offsetHeight / 2 - 5;
            tanchu.style.top = top + "px";
            
            document.getElementById("transportationPrice").innerHTML = obj[liNum(this.parentNode.parentNode.parentNode.parentNode)].transportationPrice;
            document.getElementById("distributionPrice").innerHTML = obj[liNum(this.parentNode.parentNode.parentNode.parentNode)].distributionPrice;
            document.getElementById("installationPrice").innerHTML = obj[liNum(this.parentNode.parentNode.parentNode.parentNode)].installationPrice;
            
            tanchu.style.display = "block";
        });
    }
    for (var i = 0; i < priceSums.length; i++) {
        addEvent(priceSums[i], "mouseout", function (event) {
            tanchu.style.display = "none";
        });
    }
}
//排序按钮
var rankList = function () {
    var title = document.getElementById("title");
    var lis = title.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        addEvent(lis[i], "click", function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "";
            }
            this.className = "active";
            
            switch(this.innerHTML){
                case "价格":
                    data.sort = "priceByVolume";
                    break;
                case "时效":
                    data.sort = "time";
                    break;
                case "成交量":
                    data.sort = "orderCount";
                    break;
            }
            //然后再次请求
            
        });
    }
}
//搜索
var search = function(){
    var searchBtn = document.getElementById("searchBtn");
    addEvent(searchBtn,"click",function(){
        //验证，始发地、目的地必填
        if($("#departure").text()=="请选择始发地点"){
            alert("请选择始发地点");
            return;
        }
        if($("#destination").text()=="请选择目的地点"){
            alert("请选择目的地点");
            return;
        }
        if($("#departure").text()=="同城"){
            data.departure = data.destination;
        }
        //验证，家居品类必填
        if($("#goodSelected").text()=="请选择家具类别"){
            alert("请选择家具类别");
            return;
        }
        console.log(searchRoute());
        routeCreate(test);
        priceList(test);
        var url = "";
        var dataJson = JSON.stringify(searchRoute());
//        $.ajax({
//            url: url,
//            data: dataJson,
//            dataType: "json",
//            type: "POST",
//            success: function(result){
//                var obj = eval("("+result+")");
//                routeCreate(obj);
//            }
//        });
    });
}
//依赖jQuery
var searchRoute = function(){
    switch($("#selected").text()){
        case "物流":
            data.serviceType = "logistics";
            break;
        case "安装":
            data.serviceType = "install";
            break;
        case "物流+安装":
            data.serviceType = "logisticsInstall";
            break;
    }
    //收集产品类型和服务类型checkbox
    data.productType = new Array();
    data.services = new Array();
    for(var i=0;i<3;i++){
        if(document.getElementById("checkbox1"+(i+1)).checked){
            data.productType.push(i+1);
        }
    }
    for(var i=0;i<4;i++){
        if(document.getElementById("checkbox2"+(i+1)).checked){
            data.services.push(i+1);
        }
    }
    if(data.productType.length == 0){
        data.productType = [1,2,3];
    }
    if(data.services.length == 0){
        data.services = [1,2,3,4];
    }
    data.valuation.num = $("#num").val();
    data.valuation.weight = $("#weight").val();
    data.valuation.volume = $("#volume").val();
    data.sort = "priceByVolume";
    return data;
}
//循环生成路线
var routeCreate = function (resObj) {
    var content = document.getElementById("content");
    var list = "";
    var listSub = "";
    var stars = new Array();
    var serviceType = "";
    for(var i=0;i<resObj.length;i++){
        listSub = "";
        for(var j=0;j<resObj[i]. solutions.length;j++){
            
            //星级评定
            for(var k=0;k<5;k++){
                if(k<resObj[i].solutions[j].serviceProviderRating){
                    stars[k] = "yes";
                }else{
                    stars[k] = "no";
                }
            }
            
            //提供服务类型
            var serv = resObj[i].solutions[j].services.split(",");
            serviceType = "";
            for(var l=0;l<serv.length;l++){
                switch(serv[l]){
                    case "保险":
                        serviceType += "<span><img src='../static/image/baoxian.png'></span>";
                        break;
                    case "上门提货":
                        serviceType += "<span><img src='../static/image/tiqu.png'></span>";
                        break;
                    case "送货上门":
                        serviceType += "<span><img src='../static/image/songzhuang.png'></span>";
                        break;
                    case "送货上楼":
                        serviceType += "<span><img src='../static/image/songzhuang.png'></span>";
                        break;
                    case "软体":
                        serviceType += "<span><img src='../static/image/ruanti.png'></span>";
                        break;
                    case "定制":
                        serviceType += "<span><img src='../static/image/dingzhi.png'></span>";
                        break;
                    case "板式":
                        serviceType += "<span><img src='../static/image/banshi.png'></span>";
                        break;
                }
            }
            
            listSub += "<li><div class='d1'><p>" +
            resObj[i].solutions[j].serviceProvider +
            "</p><ul class='icon'><li><img src='../static/image/star-" +
            stars[0] +
            ".png'></li><li><img src='../static/image/star-" +
            stars[1] +
            ".png'></li><li><img src='../static/image/star-" +
            stars[2] +
            ".png'></li><li><img src='../static/image/star-" +
            stars[3] +
            ".png'></li><li><img src='../static/image/star-" +
            stars[4] +
            ".png'></li></ul></div><div class='d2'><p class='route'>从：" +
            resObj[i].solutions[j].departure +
            //"（<a href='#'>查看网点</a>）"+
            "</p><p class='route'>从：" +
            resObj[i].solutions[j].destination +
            //"（<a href='#'>查看网点</a>）"+
            "</p><p class='icons'>" +
            serviceType +"</p>"+
            //"<p class='type orange'>送装一体</p>"+
            "</div><div class='d3'>"+
            "<p class='time'>"+resObj[i].solutions[j].timeLimitType+"："+resObj[i].solutions[j].timeLimit+"</p>"+
            "<p class='type orange'>" +
            resObj[i].solutions[j].transportWay +
            "</p></div><div class='d4'><p>轻货：￥" +
            resObj[i].solutions[j].priceByVolume +
            " /立方米</p><p>重货：￥" +
            resObj[i].solutions[j].priceByWeight +
            " /立方米</p><p>配送：￥" +
            resObj[i].solutions[j].distributionPrice +
            " /立方米</p><p>安装：￥" +
            resObj[i].solutions[j].installationPrice +
            " /组</p><p>保底：￥" +
            resObj[i].solutions[j].limitPrice +
            " /票</p></div><div class='d5'><div class='buIcon'><img src='../static/image/searchRoute/butie.png'></div><span> " +
            (1-resObj[i].solutions[j].discount)*100+"%" +
            "</span></div><div class='d6'><p>已成交<span class='redWord'>" +
            resObj[i].solutions[j].orderNum +
            "</span>笔</p>"+
            //"<p><a href='#'>33条评价</a></p>"+
            "</div></li>"
        }
        list += "<li><ul class='listDetail'>" + listSub +
        "</ul><div class='listSummary'><div class='s1'><p>预估费用：<span class='redWord'>￥</span><span class='priceSum'>" +
        resObj[i].totalPrice +
        "</span></p></div><div class='s2'><div class='confirmBtn'>下单</div>"+
        //"<div class='collect'><div id='collected'><div class='collectIcon'><img src='../static/image/iconfont-" +
        //"shoucang-wancheng" +
        //".png'></div><span>" +
        //" 已收藏" +
        //"</span></div></div>"+
        "</div></div>" +
        //"<div class='hotroute'><img src='../static/image/searchRoute/hotroute.png'></div>"+
        "</li>";
    }
    content.innerHTML = list;
    document.getElementById("routeCount").innerHTML = resObj.length;
}