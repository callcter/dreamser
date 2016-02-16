var testApp = angular.module('testApp',['ui.router','ngAnimate','ngCookies','ngTouch','testCtrls','testDirectives','testFactorys','testAnimations']);

testApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

testApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    
    $stateProvider.
        state('index',{
            url: '/index',
            templateUrl: 'views/index.html'
        }).
        state('signup',{
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'signupCtrl'
        }).
        state('login',{
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        }).
        state('about',{
            url: '/about',
            templateUrl: 'views/about.html'
        }).
        state('phoneList',{
            url: '/phoneList',
            templateUrl: 'views/phoneList.html',
            controller: 'phoneListCtrl'
        }).
        state('demo1',{
            url: '/demo1',
            templateUrl: 'views/demo1.html',
            controller: 'formCtrl'
        }).
        state('demo2',{
            url: '/demo2',
            templateUrl: 'views/demo2.html'
        }).
        state('demo2.tab1',{
            url: 'tab1',
            templateUrl: 'views/tab1.html'
        }).
        state('demo2.tab2',{
            url: 'tab2',
            templateUrl: 'views/tab2.html'
        }).
        state('demo3',{
            url: '/demo3',
            templateUrl: 'views/demo3.html',
            controller: 'demo3Ctrl'
        }).
        state('demo4',{
            url: '/demo4',
            templateUrl: 'views/demo4.html'
        }).
        state('demo5',{
            url: '/demo5',
            templateUrl: 'views/demo5.html'
        });
});