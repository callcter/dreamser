$(function(){
    $("#press").click(function(){
        if($("#pressImg").attr("src")=="up_icon.png"){
            $("#pressImg").attr("src","down_icon.png");
        }else{
            $("#pressImg").attr("src","up_icon.png");
        }
        $(".btn1").toggle("fast");
        $(".btn2").toggle("fast");
    });
});