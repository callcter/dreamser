$(function(){
    var swiper = new Swiper('#horizontal', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        direction: 'horizontal',
        autoplay: 1000,
        loop: true,
//        prevButton:'.swiper-button-prev',
//        nextButton:'.swiper-button-next'
    });
})