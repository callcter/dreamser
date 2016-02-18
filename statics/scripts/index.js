function onloaded(){
    carousel();
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
            src = "statics/images/carousel"+(this.index+1)+".jpg";
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
        src = "statics/images/carousel"+flag+".jpg";
        carousel.setAttribute("src",src);
        
        flag++;
        
    },2000);
    
}