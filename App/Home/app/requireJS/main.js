require.config({
    paths: {
        jquery: "../../statics/frameworks/jquery-2.1.4/jquery.min",
        scroll: "scroll"
    }
});

require(["jquery","scroll"],function($,scroll){
    scroll.toTop();
});