//圣诞游戏初始页面
function christmas(){
    var height = $(window).height();
    var width = $(window).width();
    $(".christmas_wrapper").css("height", height);
    $(".tree").css("height",width*0.7*795/520);
}
//圣诞游戏
function game(){
    var red = 0,green = 0,blue = 0,orange = 0,yellow = 0,purple = 0,sum = 0,count = 5,time = 60,shineNum = 1;
    var height = $(window).height();
    var width = $(window).width();
    var luckyNum = document.getElementById("luckyNum");
    var countDownBox = document.getElementById("countDown");
    var timeBox = document.getElementById("time");
    $(".christmas_wrapper").css("height", height);
    $(".tree").css("height",width*0.9*795/520);
    var lights = document.getElementsByClassName("lightIn");
    var tree = document.getElementById("tree");
    for(var i=0;i<lights.length;i++){
        lights[i].style.display = "none";
        lights[i].addEventListener("click",function(){
            
            var star = document.createElement("div");
            star.className = "s"+this.className.substring(10);
            var starImg = document.createElement("img");
            
            var num = parseInt(this.className.substring(10))%6;
            sum++;
            switch(num){
                case 1:
                    red++;
                    $(starImg).attr("src","img/redstar.gif");
                    break;
                case 2:
                    yellow++;
                    $(starImg).attr("src","img/yellowstar.gif");
                    break;
                case 3:
                    blue++;
                    $(starImg).attr("src","img/bluestar.gif");
                    break;
                case 4:
                    green++;
                    $(starImg).attr("src","img/greenstar.gif");
                    break;
                case 5:
                    purple++;
                    $(starImg).attr("src","img/purplestar.gif");
                    break;
                case 0:
                    orange++;
                    $(starImg).attr("src","img/orangestar.gif");
                    break;
                default:
                    break;
            }
            star.appendChild(starImg);
            tree.appendChild(star);
            $(star).animate({
                top: -tree.offsetTop+40,
                marginLeft: 0
            },1000,"swing",function(){
                $(star).remove();
            });
            
            this.style.display = "none";
            var change = setTimeout(function(){
                document.getElementById("luckNumBack").style.backgroundImage = "url(img/lucknum_back1.gif)";
                var changeBack = setTimeout(function(){
                    luckyNum.innerHTML = sum;
                    document.getElementById("luckNumBack").style.backgroundImage = "url(img/lucknum_back2.gif)";
                    clearTimeout(changeBack);
                },800);
                clearTimeout(change);
            },500);
            
//            luckyNum.innerHTML = sum;
            
        });
    }
    var countDown = setInterval(function(){
        countDownBox.innerHTML = --count;
        if(count==0){
            clear(countDown);
            $(".backBox").css("display","none");
            $(".countDown").css("display","none");
            
            
            var randomNum = setInterval(function(){
                var randomnum = shineNum;
                
                
                var shining0 = setTimeout(function(){
                    $(".LI"+(randomnum+0)).css("display","block");
                    
                    var shining1 = setTimeout(function(){
                        $(".LI"+(randomnum+1)).css("display","block");
                        
                        var shining2 = setTimeout(function(){
                            $(".LI"+(randomnum+2)).css("display","block");
                            
                            var shining3 = setTimeout(function(){
                                $(".LI"+(randomnum+3)).css("display","block");
                                
                                var shining4 = setTimeout(function(){
                                    $(".LI"+(randomnum+4)).css("display","block");
                                    
                                    var shining5 = setTimeout(function(){
                                        $(".LI"+(randomnum+5)).css("display","block");
                                        
                                        var shining6 = setTimeout(function(){
                                            $(".LI"+(randomnum+0)).css("display","none");
                                            $(".LI"+(randomnum+1)).css("display","none");
                                            $(".LI"+(randomnum+2)).css("display","none");
                                            $(".LI"+(randomnum+3)).css("display","none");
                                            $(".LI"+(randomnum+4)).css("display","none");
                                            $(".LI"+(randomnum+5)).css("display","none");
                                            clearTimeout(shining6);
                                        },400);
                                        
                                        clearTimeout(shining5);
                                    },100);
                                    
                                    clearTimeout(shining4);
                                },100);
                                
                                clearTimeout(shining3);
                            },100);
                            
                            clearTimeout(shining2);
                        },100);
                        
                        clearTimeout(shining1);
                    },100);
                    
                    clearTimeout(shining0);
                },100);
                
                shineNum += 6;
                if(shineNum>24){
                    shineNum = 1;
                }
            },1000);
            
            
            var timeDown = setInterval(function(){
                timeBox.innerHTML = "00:"+(--time);
                if(time==0){
                    clear(timeDown);
                    clear(randomNum);
                    
                    $("#sum").text("");
                    $("#red").text("");
                    $("#green").text("");
                    $("#blue").text("");
                    $("#orange").text("");
                    $("#purple").text("");
                    $("#yellow").text("");
                    $("#red").append(red);
                    $("#green").append(green);
                    $("#sum").append(sum);
                    $("#blue").append(blue);
                    $("#orange").append(orange);
                    $("#purple").append(purple);
                    $("#yellow").append(yellow);
                    
                    $(".backBox").css("display","block");
                    $(".back").css("display","block");
                }
            },1000);
        }
    },1000);
}

function clear(interval){
    var no = clearInterval(interval);
}
//许愿
function wish(){
    var time = 10;
    $(".carousel").css("height", $(window).width()*0.8*1.35);
    $(".menu-icon").click(function(){
        $(".menu").toggle("fast");
    });
    $("#close").click(function(){
        $(".wish_pop").css("display","none");
    });
    var timeDown = setInterval(function(){
        --time;
        $("#closeTime").text("");
        $("#closeTime").append(time);
        if(time==0){
            $(".wish_pop").css("display","none");
            clear(timeDown);
        }
    },1000);
    touchCarousel();
}
//愿望池&愿望榜
function wishes(){
    
    $(".close_icon").click(function(){
        $(".bot").toggle();
    });
    var time = 10;
    var timeCount = setInterval(function(){
        --time;
        $("#time").text("");
        $("#time").append(time);
        if(time==0){
            $(".bot").css("display","none");
            clear(timeCount);
        }
    },1000);
    
    $(".menu-icon").click(function(){
        $(".menu").toggle("fast");
    });
    $(".details").css("width",$(window).width()*0.9-45);
    $(".friends").css("width",$(".friends").children().length*50+10);
    
    //分享按钮
    $(".share").click(function(){
        $(".share_box").css("top",$(window).height()-180);
        $(".shareTo").toggle();
        $("body").css("overflowY","hidden");
    });
    //举报按钮
    $(".point").click(function(){
        location.href = "report.html";
    });
    $(".btn_cancel").click(function(){
        $(".shareTo").toggle();
        $("body").css("overflowY","auto");
    });
    
    //header tab切换
    $(".tab1").click(function(){
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        
        //传递给后台请求愿望池数据
        console.log("愿望池");
    });
    $(".tab2").click(function(){
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        
        //传递给后台请求愿望榜数据
        console.log("愿望榜");
    });
    
    //navigation tab 切换
    var navi = document.getElementById("navigation");
    var lis = navi.getElementsByTagName("li");
//    var url = document.getElementById("wish_pic").src;
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className = "";
            }
            this.className = "active";
            
            //此索引值传递给后台请求不同愿望的排名数据
            switch($(this).index()+1){
                case 1:
                    $("#wish_pic").attr("src","img/shengdan_wish.jpg");
                    break;
                 case 2:
                    $("#wish_pic").attr("src","img/aiqing_wish.jpg");
                    break;
                 case 3:
                    $("#wish_pic").attr("src","img/pingan_wish.jpg");
                    break;
                 case 4:
                    $("#wish_pic").attr("src","img/jiankang_wish.jpg");
                    break;
                 case 5:
                    $("#wish_pic").attr("src","img/shiye_wish.jpg");
                    break;
                 case 6:
                    $("#wish_pic").attr("src","img/shiye_wish.jpg");
                    break;
                 case 7:
                    $("#wish_pic").attr("src","img/caifu_wish.jpg");
                    break;
                 default:
                    break;
            }
            
        });
    }
}
//愿望详情
function detail(){
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
    
    $(".close").click(function(){
        $(".popup").toggle();
    });
    $(".confirm_btn").click(function(){
        $(".popup").toggle();
    });
    
}
//举报
function report(){
    $("body").css("background","#f0f0f0");
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
//分享愿望
function share(){
    var height = $(window).height();
    $(".share_wrapper").css("height", height);
    var shareIcon = document.getElementById("shareIcon");
    var icons = shareIcon.getElementsByTagName("li");
    for(var i=0;i<icons.length;i++){
        icons[i].addEventListener("click",function(){
            $(".back").toggle();
        });
    }
    $(".knowBtn").click(function(){
        $(".back").toggle();
    });
}
//我的
function mine(){
    $(".menu-icon").click(function(){
        $(".menu").toggle("fast");
    });
    $(".details").css("width",$(window).width()*0.9-45);
    $(".friends").css("width",$(".friends").children().length*50+10);
}
//账号绑定
function account(){
    var height = $(window).height();
    $(".account_wrapper").css("height", height);
}
//关注公众号
function public(){
    $(".logo").css("width",$(window).width());
    $(".logo").css("height",$(window).height()-40);
}
//许愿页滑动
function touchCarousel(){
    var box = document.getElementById("carousel");
    var title = document.getElementById("nav_title");
    var wish = document.getElementById("wish_content");
    var start_left = $(box).offset().left;
    var end_left = 0;
    var flag_r = 1;
    var flag_l = 1;

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
        if(end_left>100){
            if(flag_r == 8){
                flag_r = 1;
            }
            if(flag_r == 1){
                flag_l = 7;
                title.innerHTML = "发财愿";
                wish.innerHTML = "关公：诚信重义 招财进宝";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","1");
                $("#c7").css("zIndex","5");
                $("#c7").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c1").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c2").animate({left: "170%"},500);
                $("#c3").animate({left: "245%"},500);
                $("#c4").animate({left: "320%"},500);
                $("#c5").animate({left: "395%"},500);
                $("#c6").animate({left: "-65%"},500);
            }else if(flag_r==2){
                flag_l = 6;
                title.innerHTML = "学业愿";
                wish.innerHTML = "文曲星：文曲下凡 金榜题名";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","1");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c6").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c7").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c1").animate({left: "170%"},500);
                $("#c2").animate({left: "245%"},500);
                $("#c3").animate({left: "320%"},500);
                $("#c4").animate({left: "395%"},500);
                $("#c5").animate({left: "-65%"},500);
            }else if(flag_r==3){
                flag_l = 5;
                title.innerHTML = "健康愿";
                wish.innerHTML = "药师佛：拔众生苦 医众生病";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","1");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c5").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c6").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c7").animate({left: "170%"},500);
                $("#c1").animate({left: "245%"},500);
                $("#c2").animate({left: "320%"},500);
                $("#c3").animate({left: "395%"},500);
                $("#c4").animate({left: "-65%"},500);
            }else if(flag_r==4){
                flag_l = 4;
                title.innerHTML = "平安愿";
                wish.innerHTML = "观世音菩萨：一家人安心健康";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","1");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c4").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c5").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c6").animate({left: "170%"},500);
                $("#c7").animate({left: "245%"},500);
                $("#c1").animate({left: "320%"},500);
                $("#c2").animate({left: "395%"},500);
                $("#c3").animate({left: "-65%"},500);
            }else if(flag_r==5){
                flag_l = 3;
                title.innerHTML = "事业愿";
                wish.innerHTML = "大日如来菩萨：光明普照 事业必成";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","1");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c3").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c4").animate({
                    left: "95%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c5").animate({left: "170%"},500);
                $("#c6").animate({left: "245%"},500);
                $("#c7").animate({left: "320%"},500);
                $("#c1").animate({left: "395%"},500);
                $("#c2").animate({left: "-65%"},500);
            }else if(flag_r==6){
                flag_l = 2;
                title.innerHTML = "爱情愿";
                wish.innerHTML = "月老：千里姻缘一线牵";
                $("#c1").css("zIndex","1");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
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
                $("#c4").animate({left: "170%"},500);
                $("#c5").animate({left: "245%"},500);
                $("#c6").animate({left: "320%"},500);
                $("#c7").animate({left: "395%"},500);
                $("#c1").animate({left: "-65%"},500);
            }else if(flag_r==7){
                flag_l = 1;
                title.innerHTML = "圣诞愿";
                wish.innerHTML = "圣诞老人：专给好孩子送礼物";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","1");
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
                $("#c3").animate({left: "170%"},500);
                $("#c4").animate({left: "245%"},500);
                $("#c5").animate({left: "320%"},500);
                $("#c6").animate({left: "395%"},500);
                $("#c7").animate({left: "-65%"},500);
            }
            flag_r += 1;
        }else if(end_left<-100){
            if(flag_l == 8){
                flag_l = 1;
            }
            if(flag_l==1){
                flag_r = 7;
                title.innerHTML = "爱情愿";
                wish.innerHTML = "月老：千里姻缘一线牵";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","1");
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
                $("#c3").animate({left: "95%"},500);
                $("#c4").animate({left: "170%"},500);
                $("#c5").animate({left: "245%"},500);
                $("#c6").animate({left: "320%"},500);
                $("#c7").animate({left: "395%"},500);
            }else if(flag_l==2){
                flag_r = 6;
                title.innerHTML = "事业愿";
                wish.innerHTML = "大日如来菩萨：光明普照 事业必成";
                $("#c1").css("zIndex","1");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
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
                $("#c4").animate({left: "95%"},500);
                $("#c5").animate({left: "170%"},500);
                $("#c6").animate({left: "245%"},500);
                $("#c7").animate({left: "320%"},500);
                $("#c1").animate({left: "395%"},500);
            }else if(flag_l==3){
                flag_r = 5;
                title.innerHTML = "平安愿";
                wish.innerHTML = "观世音菩萨：一家人安心健康";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","1");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c3").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c4").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c5").animate({left: "95%"},500);
                $("#c6").animate({left: "170%"},500);
                $("#c7").animate({left: "245%"},500);
                $("#c1").animate({left: "320%"},500);
                $("#c2").animate({left: "395%"},500);
            }else if(flag_l==4){
                flag_r = 4;
                title.innerHTML = "健康愿";
                wish.innerHTML = "药师佛：拔众生苦 医众生病";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","1");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c4").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c5").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c6").animate({left: "95%"},500);
                $("#c7").animate({left: "170%"},500);
                $("#c1").animate({left: "245%"},500);
                $("#c2").animate({left: "320%"},500);
                $("#c3").animate({left: "395%"},500);
            }else if(flag_l==5){
                flag_r = 3;
                title.innerHTML = "学业愿";
                wish.innerHTML = "文曲星：文曲下凡 金榜题名";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","1");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c5").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c6").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c7").animate({left: "95%"},500);
                $("#c1").animate({left: "170%"},500);
                $("#c2").animate({left: "245%"},500);
                $("#c3").animate({left: "320%"},500);
                $("#c4").animate({left: "395%"},500);
            }else if(flag_l==6){
                flag_r = 2;
                title.innerHTML = "发财愿";
                wish.innerHTML = "关公：诚信重义 招财进宝";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","1");
                $("#c6").css("zIndex","5");
                $("#c7").css("zIndex","5");
                $("#c6").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c7").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c1").animate({left: "95%"},500);
                $("#c2").animate({left: "170%"},500);
                $("#c3").animate({left: "245%"},500);
                $("#c4").animate({left: "320%"},500);
                $("#c5").animate({left: "395%"},500);
            }else if(flag_l==7){
                flag_r = 1;
                title.innerHTML = "圣诞愿";
                wish.innerHTML = "圣诞老人：专给好孩子送礼物";
                $("#c1").css("zIndex","5");
                $("#c2").css("zIndex","5");
                $("#c3").css("zIndex","5");
                $("#c4").css("zIndex","5");
                $("#c5").css("zIndex","5");
                $("#c6").css("zIndex","1");
                $("#c7").css("zIndex","5");
                $("#c7").animate({
                    left: "-65%",
                    top: "30px",
                    width: "70%"
                },500);
                $("#c1").animate({
                    left: "10%",
                    top: "0",
                    width: "80%"
                },500);
                $("#c2").animate({left: "95%"},500);
                $("#c3").animate({left: "170%"},500);
                $("#c4").animate({left: "245%"},500);
                $("#c5").animate({left: "320%"},500);
                $("#c6").animate({left: "395%"},500);
            }
            flag_l += 1;
        }
        event.stopPropagation();
    });
}
