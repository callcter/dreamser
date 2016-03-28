$(function(){
    var tabsSwiper = new Swiper('.swiper-container',{
//        autoplay: 1000,//自动播放
        speed:500,
        onSlideChangeStart: function(){
            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
        }
    });

    $(".tabs a").on('click',function(e){
        e.preventDefault()
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.slideTo($(this).index());
    });

    $(".tabs a").click(function(e){
        e.preventDefault();
    });
});
//$(function () {
//    var e = new Swiper(".swiper-container", {
//        direction: "vertical",
//        pagination: ".swiper-pagination",
//        nextButton: ".arrow-down"
//    });
//    e.on("slideChangeStart", function () {
//        var t;
//        switch (e.activeIndex) {
//            case 0:
//            case 1:
//                t = 1;
//                break;
//            case 2:
//            case 3:
//            case 4:
//                t = 2;
//                break;
//            case 9:
//                t = 10;
//                break;
//            default:
//                t = 3
//        }
//        0 == e.activeIndex && $(".m-topbar").slideDown("slow"), $(".m-nav-btn").find("li[channel ='" + t + "']").addClass("active").siblings().removeClass("active"), 10 == t ? $("#nextPage").hide() : $("#nextPage").show()
//    }), e.on("SlideChangeEnd", function () {
//        0 != e.activeIndex && $(".m-topbar").slideUp("slow")
//    }), $(".m-nav-btn").find("li").bind("click", function (t) {
//        switch (t.preventDefault(), $(this).index()) {
//            case 0:
//                e.slideTo(0, 500);
//                break;
//            case 1:
//                e.slideTo(2, 500);
//                break;
//            default:
//                e.slideTo(5, 500)
//        }
//    });
//    var t = (new Swiper(".newslide", {
//        autoplay: 2500
//    }), $.ajax({
//        type: "get",
//        dataType: "json",
//        url: "/getNews"
//    }));
//    t.done(function (e) {
//        var t = "",
//            i = "";
//        t += "<div class='news'>", t += "<h1 class='news-tit'>" + e[0].title + "</h1>", t += e[0].content, t += "</div>", i += "<div class='news'>", i += "<h1 class='news-tit'>" + e[1].title + "</h1>", i += e[1].content, i += "</div>", $("#silde1").html(t), $("#silde2").html(i)
//    });
//    var i = $.ajax({
//        type: "get",
//        dataType: "json",
//        url: "/getData"
//    });
//    i.done(function (e) {
//        var t = e[0].bus,
//            i = e[0].subway,
//            a = e[0].people,
//            n = e[0].city;
//        $(".s1-city").html(n).digits(), $(".s1-bus").html(t).digits(), $(".s1-subway").html(i).digits(), $(".s1-people").html(a).digits()
//    }), $.fn.digits = function () {
//        return this.each(function () {
//            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
//        })
//    }
//});