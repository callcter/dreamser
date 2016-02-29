//首页js
window.onload = function(){
    searchBox();

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
        tabs[i].addEventListener("click",function(){
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

//商品类型列表样式自定义
var goodsList = function(){
    var origin = document.getElementById("origin");
    var goodTypeBox = document.getElementById("goodTypeBox");
    var tabs = document.getElementById("goodsTab").getElementsByTagName("li");
    var firstList = document.getElementById("firstList");
    var secondList = document.getElementById("secondList");
    var thirdList = document.getElementById("thirdList");
    var listBtn = document.getElementById("goodsList");
    var note = "";
    listBtn.addEventListener("click",function(){
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
        fLi.innerHTML = goods[i].name;
        firstList.appendChild(fLi);
        fLi.addEventListener("click",function(){
            note += this.innerHTML;
            goodSelected.innerHTML = note;
            //清空二级商品列表
            removeAllChild(secondList);
            //作为三级商品列表向上访问时二级列表的缓存
            var firstListArray = goods[liNum(this)].sub;
            for(var j=0;j<goods[liNum(this)].sub.length;j++){
                var sLi = document.createElement("li");
                sLi.innerHTML = goods[liNum(this)].sub[j].name;
                secondList.appendChild(sLi);
                sLi.addEventListener("click",function(){
                     note += "-"+this.innerHTML;
                     goodSelected.innerHTML = note;
                     //清空三级商品列表
                     removeAllChild(thirdList);
                     for(var k=0;k<firstListArray[liNum(this)].sub.length;k++){
                         var tLi = document.createElement("li");
                         tLi.innerHTML = firstListArray[liNum(this)].sub[k].name;
                         thirdList.appendChild(tLi);
                         tLi.addEventListener("click",function(){
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
                         tLi.addEventListener("mouseover",function(){
                             this.className = "activeT";
                         });
                         tLi.addEventListener("mouseout",function(){
                             this.className = "";
                         });
                     }
                    secondList.style.display = "none";
                    thirdList.style.display = "block";
                    tabs[1].className = "";
                    tabs[2].className = "activeTab";
                });
                sLi.addEventListener("mouseover",function(){
                    this.className = "activeT";
                });
                sLi.addEventListener("mouseout",function(){
                    this.className = "";
                });
            }
            firstList.style.display = "none";
            secondList.style.display = "block";
            tabs[0].className = "";
            tabs[1].className = "activeTab";
        });
        fLi.addEventListener("mouseover",function(){
            this.className = "activeT";
        });
        fLi.addEventListener("mouseout",function(){
            this.className = "";
        });
    }
}