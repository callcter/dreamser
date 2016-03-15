window.onload = function(){
    searchBox();
    departureSelect();
    selectList2();
    selectList3();
    selectList4();
    carousel();
    carousel1();
    search();
    play();
    stop();
    addEvent(document.getElementById("ddd"),"mouseover",function(){
        document.getElementById("erweima").style.display = "block";
    });
    addEvent(document.getElementById("ddd"),"mouseout",function(){
        document.getElementById("erweima").style.display = "none";
    });
    document.onclick = function(){
        document.getElementById("selectBox1").style.display = "none";
        document.getElementById("selectBox2").style.display = "none";
        document.getElementById("selectBox3").style.display = "none";
        document.getElementById("selectBox4").style.display = "none";
        document.getElementById("popularList").style.display = "none";
        document.getElementById("selectList20").style.display = "none";
        document.getElementById("selectList21").style.display = "none";
        document.getElementById("selectList22").style.display = "none";
        document.getElementById("selectList30").style.display = "none";
        document.getElementById("selectList31").style.display = "none";
        document.getElementById("selectList32").style.display = "none";
        document.getElementById("selectList40").style.display = "none";
        document.getElementById("selectList41").style.display = "none";
        document.getElementById("selectList42").style.display = "none";
    };
    document.getElementById("selectBox1").onclick = function(e){
        stopProgapation(e);
    }
    document.getElementById("selectBox2").onclick = function(e){
        stopProgapation(e);
    }
    document.getElementById("selectBox3").onclick = function(e){
        stopProgapation(e);
    }
    document.getElementById("selectBox4").onclick = function(e){
        stopProgapation(e);
    }
}
var dataFromIndex = new Object();
var search = function(){
    var box0 = $("#searchTab0");
    var box1 = $("#searchTab1");
    var box2 = $("#searchTab2");
    box0.css("display","block");
    box1.css("display","none");
    box2.css("display","none");
    $("#searchBtn").bind("click",function(){
        if(box0.css("display")=="block"&&box1.css("display")=="none"&&box2.css("display")=="none"){
            //验证，始发地、目的地必填
            if($("#departure").text()=="请选择始发地"){
                alert("请选择始发地");
                return;
            }
            if($("#destination").text().split("-").length<3){
                alert("请选择目的地");
                return;
            }
            window.location.href = "view/searchRoute.html?departure="+dataFromIndex.departure+"&provinceCode="+dataFromIndex.provinceCode+"&cityCode="+dataFromIndex.cityCode+"&districtCode="+dataFromIndex.districtCode+"&departureName="+document.getElementById("departure").innerHTML+"&destinationName="+document.getElementById("destination").innerHTML;
        }else if(box0.css("display")=="none"&&box1.css("display")=="block"&&box2.css("display")=="none"){
            if($("#goodType").text().split("-").length<3){
                alert("请选择始发地");
                return;
            }
            if($("#goodInstall").text().split("-").length<3){
                alert("请选择安装地点");
                return;
            }
            window.location.href = "view/searchRoute.html?productCategory="+dataFromIndex.productCategory+"&provinceCode="+dataFromIndex.provinceCode+"&cityCode="+dataFromIndex.cityCode+"&districtCode="+dataFromIndex.districtCode+"&goodTypeName="+document.getElementById("goodType").innerHTML+"&destinationName="+document.getElementById("goodInstall").innerHTML;
        }else if(box0.css("display")=="none"&&box1.css("display")=="none"&&box2.css("display")=="block"){
//            window.location.href = "view/searchRoute.html?";
            return;
        }
    });
}
var searchBox = function(){
    var box0 = $("#searchTab0");
    var box1 = $("#searchTab1");
    var box2 = $("#searchTab2");
    for(var i=0;i<3;i++){
        $("ul#searchTab li:eq("+i+")").bind("click",{index:i},function(event){
            for(var j=0;j<3;j++){
                $("ul#searchTab li:eq("+j+")").removeClass("active");
            }
            $(this).addClass("active");
            $("#tabActive").css("left",30+event.data.index*100+"px");
            switch(event.data.index){
                case 0:
                    box0.css("display","block");
                    box1.css("display","none");
                    box2.css("display","none");
                    break;
                case 1:
                    box0.css("display","none");
                    box1.css("display","block");
                    box2.css("display","none");
                    break;
                case 2:
                    box0.css("display","none");
                    box1.css("display","none");
                    box2.css("display","block");
                    break;
                default:
                    break;
            }
        });
    }
}
var departureSelect = function () {
    var box = document.getElementById("departure");
    var selectBox = document.getElementById("selectBox1");
    var popularList = document.getElementById("popularList");
    var boxS = document.getElementById("startPlaceBox");
    addEvent(boxS, "click", function (e) {
        stopProgapation(e);
        document.getElementById("selectList20").style.display = "none";
        document.getElementById("selectList21").style.display = "none";
        document.getElementById("selectList22").style.display = "none";
        document.getElementById("selectBox2").style.display = "none";
        selectBox.style.top = getAbsoluteTop("departure")+43+"px";
        selectBox.style.left = getAbsoluteLeft("departure")+"px";
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
        addEvent(pLi,"click",function(){
            box.innerHTML = this.innerHTML;
            dataFromIndex.departure = popularAddr[liNum(this)].value;
            selectBox.style.display = "none";
            popularList.style.display = "none";
        });
        addEvent(pLi,"mouseover",function(){
            $(this).addClass("activeT");
        });
        addEvent(pLi, "mouseout", function () {
            $(this).removeClass("activeT");
        });
        if(l==popularAddr.length-1){
            pLi.className = "tc";
        }
        popularList.appendChild(pLi);
    }
}
var selectList2 = function(){
    var box = document.getElementById("destination");
    var selectBox = document.getElementById("selectBox2");
    var selectTabs = document.getElementById("selectTab2").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList20");
    var selectList1 = document.getElementById("selectList21");
    var selectList2 = document.getElementById("selectList22");
    var boxS = document.getElementById("destinationSelect");
    var note = "";
    var options = address;
    var selected = box;
    addEvent(boxS,"click",function(e){
        document.getElementById("selectBox1").style.display = "none";
        document.getElementById("popularList").style.display = "none";
        selectBox.style.top = getAbsoluteTop("destination")+43+"px";
        selectBox.style.left = getAbsoluteLeft("destination")+"px";
        stopProgapation(e);
        if(selectBox.style.display == "block"){
            selectBox.style.display = "none";
            selectList0.style.display = "none";
            selectList1.style.display = "none";
            selectList2.style.display = "none";
        }else{
            selectBox.style.display = "block";
            selectList0.style.display = "block";
        }
        selectTabs[2].className = "";
        selectTabs[1].className = "";
        selectTabs[0].className = "active";
    });
    addEvent(selectTabs[0],"click",function(){
        selectList0.style.display = "block";
        selectList1.style.display = "none";
        selectList2.style.display = "none";
        selectTabs[0].className = "active";
        selectTabs[1].className = "";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[1],"click",function(){
        if(note==""){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "block";
        selectList2.style.display = "none";
        selectTabs[0].className = "";
        selectTabs[1].className = "active";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[2],"click",function(){
        if(note.split("-").length<2){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "none";
        selectList2.style.display = "block";
        selectTabs[0].className = "";
        selectTabs[1].className = "";
        selectTabs[2].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
            note = "";
            note += this.innerHTML;
            dataFromIndex.provinceCode = options[liNum(this)].value;
            selected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(selectList1);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = options[liNum(this)].children;
            for(var j=0;j<options[liNum(this)].children.length;j++){
                var sLi = document.createElement("li");
                sLi.innerHTML = options[liNum(this)].children[j].text;
                selectList1.appendChild(sLi);
                addEvent(sLi,"click",function(){
                     note = note.split("-")[0];
                     note += "-"+this.innerHTML;
                     dataFromIndex.cityCode = firstListArray[liNum(this)].value;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         var secondListArray = firstListArray[liNum(this)].children;
                         addEvent(tLi,"click",function(){
                             note = note.split("-")[0]+"-"+note.split("-")[1];
                             note += "-"+this.innerHTML;
                             dataFromIndex.districtCode = secondListArray[liNum(this)].value;
                             selected.innerHTML = note;
                             selectList2.style.display = "none";
                             selectBox.style.display = "none";
                         });
                         addEvent(tLi,"mouseover",function(){
                             this.className = "activeT";
                         });
                         addEvent(tLi,"mouseout",function(){
                             this.className = "";
                         });
                    }
                    selectList1.style.display = "none";
                    selectList2.style.display = "block";
                    selectTabs[1].className = "";
                    selectTabs[2].className = "active";
                });
                addEvent(sLi,"mouseover",function(){
                    this.className = "activeT";
                });
                addEvent(sLi,"mouseout",function(){
                    this.className = "";
                });
            }
            selectList0.style.display = "none";
            selectList1.style.display = "block";
            selectTabs[0].className = "";
            selectTabs[1].className = "active";
        });
        addEvent(fLi,"mouseover",function(){
            this.className = "activeT";
        });
        addEvent(fLi,"mouseout",function(){
            this.className = "";
        });
    }
}
var selectList3 = function(){
    var box = document.getElementById("goodType");
    var selectBox = document.getElementById("selectBox3");
    var selectTabs = document.getElementById("selectTab3").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList30");
    var selectList1 = document.getElementById("selectList31");
    var selectList2 = document.getElementById("selectList32");
    var boxS = document.getElementById("goodTypeSelect");
    var note = "";
    var options = goodType[0].children;
    var selected = box;
    addEvent(boxS,"click",function(e){
        stopProgapation(e);
        document.getElementById("selectBox4").style.display = "none";
        document.getElementById("selectList40").style.display = "none";
        document.getElementById("selectList41").style.display = "none";
        document.getElementById("selectList42").style.display = "none";
        selectBox.style.top = getAbsoluteTop("goodType")+43+"px";
        selectBox.style.left = getAbsoluteLeft("goodType")+"px";
        if(selectBox.style.display == "block"){
            selectBox.style.display = "none";
            selectList0.style.display = "none";
            selectList1.style.display = "none";
            selectList2.style.display = "none";
        }else{
            selectBox.style.display = "block";
            selectList0.style.display = "block";
        }
        selectTabs[2].className = "";
        selectTabs[1].className = "";
        selectTabs[0].className = "active";
    });
    addEvent(selectTabs[0],"click",function(){
        selectList0.style.display = "block";
        selectList1.style.display = "none";
        selectList2.style.display = "none";
        selectTabs[0].className = "active";
        selectTabs[1].className = "";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[1],"click",function(){
        if(note==""){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "block";
        selectList2.style.display = "none";
        selectTabs[0].className = "";
        selectTabs[1].className = "active";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[2],"click",function(){
        if(note.split("-").length<2){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "none";
        selectList2.style.display = "block";
        selectTabs[0].className = "";
        selectTabs[1].className = "";
        selectTabs[2].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
            note = "";
            note += this.innerHTML;
            selected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(selectList1);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = options[liNum(this)].children;
            for(var j=0;j<options[liNum(this)].children.length;j++){
                var sLi = document.createElement("li");
                sLi.innerHTML = options[liNum(this)].children[j].text;
                selectList1.appendChild(sLi);
                addEvent(sLi,"click",function(){
                    note = note.split("-")[0];
                    note += "-"+this.innerHTML;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     var secondListArray = firstListArray[liNum(this)].children;
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note = note.split("-")[0]+"-"+note.split("-")[1];
                             note += "-"+this.innerHTML;
                             dataFromIndex.productCategory = parseInt(secondListArray[liNum(this)].value);
                             selected.innerHTML = note;
                             selectList2.style.display = "none";
                             selectBox.style.display = "none";
                         });
                         addEvent(tLi,"mouseover",function(){
                             this.className = "activeT";
                         });
                         addEvent(tLi,"mouseout",function(){
                             this.className = "";
                         });
                     }
                    selectList1.style.display = "none";
                    selectList2.style.display = "block";
                    selectTabs[1].className = "";
                    selectTabs[2].className = "active";
                });
                addEvent(sLi,"mouseover",function(){
                    this.className = "activeT";
                });
                addEvent(sLi,"mouseout",function(){
                    this.className = "";
                });
            }
            selectList0.style.display = "none";
            selectList1.style.display = "block";
            selectTabs[0].className = "";
            selectTabs[1].className = "active";
        });
        addEvent(fLi,"mouseover",function(){
            this.className = "activeT";
        });
        addEvent(fLi,"mouseout",function(){
            this.className = "";
        });
    }
}
var selectList4 = function(){
    var box = document.getElementById("goodInstall");
    var selectBox = document.getElementById("selectBox4");
    var selectTabs = document.getElementById("selectTab4").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList40");
    var selectList1 = document.getElementById("selectList41");
    var selectList2 = document.getElementById("selectList42");
    var boxS = document.getElementById("goodInstallSelect");
    var note = "";
    var options = address;
    var selected = box;
    addEvent(boxS,"click",function(e){
        stopProgapation(e);
        document.getElementById("selectBox3").style.display = "none";
        document.getElementById("selectList30").style.display = "none";
        document.getElementById("selectList31").style.display = "none";
        document.getElementById("selectList32").style.display = "none";
        selectBox.style.top = getAbsoluteTop("goodInstall")+43+"px";
        selectBox.style.left = getAbsoluteLeft("goodInstall")+"px";
        note = "";
        if(selectBox.style.display == "block"){
            selectBox.style.display = "none";
            selectList0.style.display = "none";
            selectList1.style.display = "none";
            selectList2.style.display = "none";
        }else{
            selectBox.style.display = "block";
            selectList0.style.display = "block";
        }
        selectTabs[2].className = "";
        selectTabs[1].className = "";
        selectTabs[0].className = "active";
    });
    addEvent(selectTabs[0],"click",function(){
        selectList0.style.display = "block";
        selectList1.style.display = "none";
        selectList2.style.display = "none";
        selectTabs[0].className = "active";
        selectTabs[1].className = "";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[1],"click",function(){
        if(note==""){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "block";
        selectList2.style.display = "none";
        selectTabs[0].className = "";
        selectTabs[1].className = "active";
        selectTabs[2].className = "";
    });
    addEvent(selectTabs[2],"click",function(){
        if(note.split("-").length<2){
            return;
        }
        selectList0.style.display = "none";
        selectList1.style.display = "none";
        selectList2.style.display = "block";
        selectTabs[0].className = "";
        selectTabs[1].className = "";
        selectTabs[2].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
            note = "";
            note += this.innerHTML;
            dataFromIndex.provinceCode = options[liNum(this)].value;
            selected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(selectList1);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = options[liNum(this)].children;
            for(var j=0;j<options[liNum(this)].children.length;j++){
                var sLi = document.createElement("li");
                sLi.innerHTML = options[liNum(this)].children[j].text;
                selectList1.appendChild(sLi);
                addEvent(sLi,"click",function(){
                    note = note.split("-")[0];
                    note += "-"+this.innerHTML;
                    dataFromIndex.cityCode = firstListArray[liNum(this)].value;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         var secondListArray = firstListArray[liNum(this)].children;
                         addEvent(tLi,"click",function(){
                             note = note.split("-")[0]+"-"+note.split("-")[1];
                             note += "-"+this.innerHTML;
                             dataFromIndex.districtCode = secondListArray[liNum(this)].value;
                             selected.innerHTML = note;
                             selectList2.style.display = "none";
                             selectBox.style.display = "none";
                         });
                         addEvent(tLi,"mouseover",function(){
                             this.className = "activeT";
                         });
                         addEvent(tLi,"mouseout",function(){
                             this.className = "";
                         });
                     }
                    selectList1.style.display = "none";
                    selectList2.style.display = "block";
                    selectTabs[1].className = "";
                    selectTabs[2].className = "active";
                });
                addEvent(sLi,"mouseover",function(){
                    this.className = "activeT";
                });
                addEvent(sLi,"mouseout",function(){
                    this.className = "";
                });
            }
            selectList0.style.display = "none";
            selectList1.style.display = "block";
            selectTabs[0].className = "";
            selectTabs[1].className = "active";
        });
        addEvent(fLi,"mouseover",function(){
            this.className = "activeT";
        });
        addEvent(fLi,"mouseout",function(){
            this.className = "";
        });
    }
}

var carousel = function(){
    var container = document.getElementById("carousel");
    var pics = container.getElementsByTagName("li");
    var index = 0;
    var autoPlay = setInterval(function(){
        if(index==pics.length){
            index = 0;
        }
        $("#carousel").animate({
            left: (-index*1100)+"px"
        },"slow");
        index++;
    },3000);
}
var carousel1 = function(){
    var clientW = window.innerWidth;
    var container = document.getElementById("carousel1");
    var pics = container.getElementsByTagName("li");
    container.style.width = (clientW*4+10)+"px";
    for(var i=0;i<pics.length;i++){
        pics[i].style.width = clientW+"px";
    }
    var index = 0;
    var autoPlay = setInterval(function(){
        if(index==pics.length){
            index = 0;
        }
        $("#carousel1").animate({
            left: (-index*clientW)+"px"
        },"fast");
        index++;
    },3000);
}
var play = function(){
    var box = document.getElementById("videoBoxBack");
    var btn = document.getElementById("play");
    var video = document.getElementById("video");
    addEvent(btn,"click",function(){
        box.style.display = "block";
        video.currentTime = 0;
        video.play();
        document.documentElement.style.overflow='hidden';
    });
}
var stop = function(){
    var box = document.getElementById("videoBoxBack");
    var btn = document.getElementById("close");
    var video = document.getElementById("video");
    addEvent(btn,"click",function(){
        box.style.display = "none";
        video.pause();
        document.documentElement.style.overflow='auto';
    });
}