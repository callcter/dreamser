function indexWrapper(){
    var height = $(window).height();
    $(".index_wrapper").css("height", height);
}
function page_2_wrapper(){
    var wrapperWidth = $(window).width() - 20;
    $(".wish_back").css("width", wrapperWidth);
    $(".tip").css("width", wrapperWidth);
    $(".wish_back").css("height", wrapperWidth);
    $(".details").css("width",$(window).width()*0.9-60);
    $(".pics").css("top",170+$(".tip2").height());
    var tab = document.getElementById("tab");
    var tabs = tab.getElementsByTagName("li");
    for(var i=0;i<tabs.length;i++){
        tabs[i].addEventListener("click",function(){
            for(var j=0;j<tabs.length;j++){
                $(tabs[j]).removeClass("active");
            }
            $(this).addClass("active");
            for(var j=0;j<tabs.length;j++){
                $("#list"+j).css("display","none");
            }
            $("#list"+$(this).index()).css("display","block");
        });
    }
}
//如果弹出验证弹窗，使Y轴滚动失效
function disabledScrollY(){
    $("body").css("overflowY","hidden");
}
function enabledScrollY(){
    $("body").css("overflowY","auto");
}
//愿望榜举报按钮
function reportWrapper(){
    var dots = document.getElementsByClassName("dot");
    for(var i=0;i<dots.length;i++){
        dots[i].addEventListener("click",function(){
            if(this.innerHTML == ""){
                for(var j=0;j<dots.length;j++){
                    dots[j].innerHTML = "";
                }
                var point = document.createElement("div");
                $(point).addClass("point");
                this.appendChild(point);
            }else{
                this.innerHTML = "";
            }
            
        });
    }
}

function wishListWrapper(){
    $(".menu").click(function(){
        $(".navigation").toggle();
    });
    $(".details").css("width",$(window).width()*0.9-45);
    $(".friends").css("width",$(".friends").children().length*50+10);
}

function shareWrapper(){
    var height = $(window).height();
    $(".share_wrapper").css("height", height);
}

function rockWishWrapper(){
    $("body").css("background","#5b2a8a");
    $(".carousel").css("height", $(window).width()*0.8*1.35);
    touch();
}
function wishWrapper(){
    $("body").css("background","#5b2a8a");
    $(".carousel").css("height", $(window).width()*0.8*1.35);
    $(".menu").click(function(){
        $(".navigation").toggle();
    });
    touch();
}
//自动轮播 
function carousel(){
    var flag = 0;
    var carouselInterval = setInterval(function(){
        if(flag == 4){
            flag = 1;
        }
        if(flag == 1){
            $("#c1").css("zIndex","1");
            $("#c2").css("zIndex","5");
            $("#c3").css("zIndex","5");
            $("#c1").animate({
                left: "95%"
            },250);
            $("#c2").animate({
                left: "-65%",
                top: "30px",
                width: "70%"
            },500);
            $("#c3").animate({
                left: "10%",
                top: "0",
                width: "80%"
            },500);
        }else if(flag==2){
            $("#c1").css("zIndex","5");
            $("#c2").css("zIndex","1");
            $("#c3").css("zIndex","5");
            $("#c1").animate({
                left: "10%",
                top: "0",
                width: "80%"
            },500);
            $("#c2").animate({
                left: "95%"
            },250);
            $("#c3").animate({
                left: "-65%",
                top: "30px",
                width: "70%"
            },500);
        }else if(flag==3){
            $("#c1").css("zIndex","5");
            $("#c2").css("zIndex","5");
            $("#c3").css("zIndex","1");
            $("#c1").animate({
                left: "-65%",
                top: "30px",
                width: "70%"
            },500);
            $("#c2").animate({
                left: "10%",
                top: "0",
                width: "80%"
            },500);
            $("#c3").animate({
                left: "95%"
            },250);
        }
        flag += 1;
    },3000);
}
//手指滑动轮播
function touch(){
    var box = document.getElementById("carousel");
    var start_left = $(box).offset().left;
    var end_left = 0;
    var flag = 1;

    box.addEventListener("touchstart", function (event) {
        event.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            start_left = touch.pageX;
        }
    });

    box.addEventListener("touchmove", function (event) {
        event.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            end_left = touch.pageX - start_left;
        }
    });
    
    box.addEventListener("touchend", function (event) {
        if(end_left>50){
            if(flag == 4){
                flag = 1;
            }
            if(flag == 1){
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","1");
                $("#c1").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c2").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c3").animate({
                    left: "-65%"
                },500);
            }else if(flag==2){
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","1");
                $("#c3").css("zIndex","5");
                $("#c1").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c2").animate({
                    left: "-65%"
                },500);
                $("#c3").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
            }else if(flag==3){
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","1");
                $("#c1").animate({
                    left: "-65%"
                },500);
                $("#c2").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c3").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
            }
            flag += 1;
        }else if(end_left<-50){
            if(flag == 4){
                flag = 1;
            }
            if(flag == 1){
                $("#c1").css("zIndex","1");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c1").animate({
                    left: "95%"
                },500);
                $("#c2").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c3").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
            }else if(flag==2){
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","1");
                $("#c3").css("zIndex","5");
                $("#c1").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c2").animate({
                    left: "95%"
                },500);
                $("#c3").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
            }else if(flag==3){
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","1");
                $("#c1").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c2").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c3").animate({
                    left: "95%"
                },500);
            }
            flag += 1;
        }
        event.stopPropagation();
    });
}