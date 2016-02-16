$(function(){
    var vswiper = new Swiper('#verital', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });
    var hswiper = new Swiper('#horizontal', {
        direction: 'horizontal'
    });
    $("#go_top").click(function(){
        vswiper.slideTo(0);
    });
})