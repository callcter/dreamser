$(function(){
    $("#leftMenu").click(function(){
        if($("#menu").css("left")=="-100px"){
            $("#menu").animate({
                left: 0
            },500);
        }else{
            $("#menu").animate({
                left: "-100px"
            },500);
        }
    });
    $("#menu").click(function(){
        $("#menu").animate({
            left: "-100px"
        },500);
    });
    $("#dropMenu").click(function(){
        if($("#labels").css("width")=="120px"){
            $("#back").css("display","none");
            $("#labels").animate({
                width: 0,
                height: 0,
                opacity: 0
            },500);
        }else{
            $("#back").css("display","block");
            $("#labels").animate({
                width: "120px",
                height: "160px",
                opacity: 1
            },500);
        }
    });
    $("#back").click(function(){
        $("#back").css("display","none");
        $("#labels").animate({
            width: 0,
            height: 0,
            opacity: 0
        },500);
    });
});