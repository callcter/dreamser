var testDirectives = angular.module('testDirectives',[]);

testDirectives.directive('hello',function(){
    return {
        restrict: 'E',
        replace: 'true',
        template: '<p style="background-color:{{color}}">Hello</p>',
        link:function(scope,elem,attrs){
            elem.bind('click',function(){
                elem.css('background-color','red');
                scope.$apply(function(){
                    scope.color = 'red';
                });
            });
            elem.bind('mouseover',function(){
                elem.css('cursor','pointer');
            });
        }
    };
})

testDirectives.directive('demo1',function(){
    return {
        restrict: 'E',
        replace: 'false',
        template: '<a><ul><li>首页</li></ul></a>',
        link: function(scope,elem){
            elem.addClass('demo1');
            elem.bind('click',function(){
                alert(elem.children().children());
            })
        }
    }
})

testDirectives.directive('fileModel',['$parse',function($parse){
    return{
        restrict: 'A',
        link: function(scope,element,attrs,ngModel){
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change',function(event){
                scope.$apply(function(){
                    modelSetter(scope,element[0].files[0]);
                });
                scope.file = (event.srcElement || event.target).files[0];
                scope.getFile();
            });
        }
    }
}]);