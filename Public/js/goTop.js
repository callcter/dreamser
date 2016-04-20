//回到顶部
function goTop(id){
    var btn = document.getElementById(id);
    btn.addEventListener("click",function(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    });
}