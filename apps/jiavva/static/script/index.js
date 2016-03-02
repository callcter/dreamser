//首页js
window.onload = function(){
    searchBox();
    selectList1();
    selectList2();
    selectList3();
    selectList4();
    carousel();
}
//首页查询框
var searchBox = function(){
    var tabs = document.getElementById("searchTab").getElementsByTagName("li");
    var active = document.getElementById("tabActive");
    var box0 = document.getElementById("searchTab0");
    var box1 = document.getElementById("searchTab1");
    var box2 = document.getElementById("searchTab2");
    for(var i=0;i<tabs.length;i++){
        tabs[i].index = i;
        addEvent(tabs[i],"click",function(){
            for(var j=0;j<tabs.length;j++){
                tabs[j].className = "";
            }
            this.className = "active";
            active.style.left = 30+this.index*100+"px";
            
            switch(this.index){
                case 0:
                    box0.style.display = "block";
                    box1.style.display = "none";
                    box2.style.display = "none";
                    break;
                case 1:
                    box0.style.display = "none";
                    box1.style.display = "block";
                    box2.style.display = "none";
                    break;
                case 2:
                    box0.style.display = "none";
                    box1.style.display = "none";
                    box2.style.display = "block";
                    break;
                default:
                    break;
            }
        });
    }
}
var selectList1 = function(){
    var box = document.getElementById("origin");
    var selectBox = document.getElementById("selectBox1");
    var selectTabs = document.getElementById("selectTab1").getElementsByTagName("li");
    var selectList0 = document.getElementById("selectList10");
    var selectList1 = document.getElementById("selectList11");
    var selectList2 = document.getElementById("selectList12");
    var boxS = document.getElementById("originSelect");
    var note = "";
    var options = address;
    var selected = box;
    addEvent(boxS,"click",function(){
        note = "";
        selectBox.style.top = this.offsetHeight+this.offsetTop+"px";
        selectBox.style.left = this.offsetLeft+"px";
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
        selectTabs[0].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
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
                     note += "-"+this.innerHTML;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note += "-"+this.innerHTML;
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
    addEvent(boxS,"click",function(){
        note = "";
        selectBox.style.top = this.offsetHeight+this.offsetTop+"px";
        selectBox.style.left = this.offsetLeft+"px";
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
        selectTabs[0].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
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
                     note += "-"+this.innerHTML;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note += "-"+this.innerHTML;
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
    addEvent(boxS,"click",function(){
        note = "";
        selectBox.style.top = this.offsetHeight+this.offsetTop+"px";
        selectBox.style.left = this.offsetLeft+"px";
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
        selectTabs[0].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
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
                     note += "-"+this.innerHTML;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note += "-"+this.innerHTML;
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
    addEvent(boxS,"click",function(){
        note = "";
        selectBox.style.top = this.offsetHeight+this.offsetTop+"px";
        selectBox.style.left = this.offsetLeft+"px";
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
        selectTabs[0].className = "active";
    });
    for(var i=0;i<options.length;i++){
        var fLi = document.createElement("li");
        fLi.innerHTML = options[i].text;
        selectList0.appendChild(fLi);
        addEvent(fLi,"click",function(){
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
                     note += "-"+this.innerHTML;
                     selected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(selectList2);
                     for(var k=0;k<firstListArray[liNum(this)].children.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].children[k].text;
                         selectList2.appendChild(tLi);
                         addEvent(tLi,"click",function(){
                             note += "-"+this.innerHTML;
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
        if(index==pics.length-5){
            index = 0;
        }
        $("#carousel").animate({
            left: -pics[index].offsetLeft+"px"
        },"slow");
        index++;
    },2000);
}