window.onload = function(){
    carousel();
    titleClick();
}

function carousel(){
    var flag = 1;
    var src;
    carousel = document.getElementById("carousel");
    indexs = document.getElementById("carousel_index").getElementsByTagName("li");
    for(var j=0;j<3;j++){
        indexs[j].index = j;
        indexs[j].addEventListener("click",function(){
            
            for(var i=0;i<3;i++){
                indexs[i].className = "";
            }
            
            indexs[this.index].className = "active";
            src = "static/image/carousel"+(this.index+1)+".jpg";
            carousel.setAttribute("src",src);
            flag = this.index+1;
        });
    }
    
    var timer = setInterval(function(){
        
        for(var i=0;i<3;i++){
            indexs[i].className = "";
        }
        
        if(flag==4){
            flag = 1;
        }
        
        indexs[flag-1].className = "active";
        src = "static/image/carousel"+flag+".jpg";
        carousel.setAttribute("src",src);
        
        flag++;
        
    },3000);
}

function titleClick(){
    var titles = document.getElementsByClassName("title-2");
    for(var i=0;i<titles.length;i++){
        titles[i].addEventListener("click",function(){
            var angle = this.getElementsByTagName("span")[0];
            var detail = this.parentNode.getElementsByClassName("detail")[0];
            if(angle.className=="fa fa-angle-double-down fa-lg"){
                angle.className = "fa fa-angle-double-up fa-lg";
                detail.style.display = "block";
            }else{
                angle.className = "fa fa-angle-double-down fa-lg";
                detail.style.display = "none";
            }
        },false);
    }
}