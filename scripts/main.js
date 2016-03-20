require.config({
    paths: {
        jquery: 'plugin/jquery',
        index: 'helper/index'
    }
});

require(['index'],function(index){
    index.carousel();
    index.titleClick();
});