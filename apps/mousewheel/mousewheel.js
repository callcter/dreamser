window.onload = function(){
    
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    
    var wrapper = document.getElementById('wrapper');
    var content = document.getElementById('content');
    var sections = content.getElementsByTagName('section');
    
    var j = 0;
    
    wrapper.addEventListener("mousewheel",function(event){
        if(event.wheelDelta>0){
            j--;
            if(j == -1){ j = sections.length-1; }
//            window.scrollTo(0,winHeight*j);//无过渡效果
//            $('html,body').animate({scrollTop: winHeight*j}, 800);//jquery animate方法实现
            runScrollTo(winHeight*j);
        }else{
            j++;
            if(j == sections.length){ j = 0; }
//            window.scrollTo(0,winHeight*j);
//            $('html,body').animate({scrollTop: winHeight*j}, 800);
            runScrollTo(winHeight*j);
        }
//        alert(j);
    },false);
    
    for(var i=0;i<sections.length;i++){
        sections[i].style.width = winWidth+'px';
        sections[i].style.height = winHeight+'px';
    }
    
}

//动画实现
function runScrollTo(target) {
    var top = document.documentElement.scrollTop || document.body.scrollTop,
        time = 0.2 * 1000, // total time
        stepCount = 100, // scroll times
        posSteps = (target - top) / stepCount,
        i = 1,
        timer;

    timer = setInterval(function () {
        window.scrollTo(0, top + posSteps * i);
        if (i == stepCount) {
            clearInterval(timer);
        }
        i++;
    }, time / stepCount);
}