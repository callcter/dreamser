require.config({
    paths: {
        jquery: "static/framework/jquery-2.1.4/jquery.min",
        scroll: "scroll"
    }
});

require(["jquery","scroll"],function($,scroll){
    scroll.toTop();
});