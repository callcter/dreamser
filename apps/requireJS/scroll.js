define(["jquery"],function($){
    var toTop = function(){
        $(".toTop").click(function(){
            $('body,html').animate({scrollTop:0},"fast");
        });
    };
    return {
        toTop: toTop
    };
});