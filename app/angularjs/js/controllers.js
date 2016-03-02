var testCtrls = angular.module('testCtrls',[]);

testCtrls.controller('phoneListCtrl',function($scope,$http,$state,$stateParams){
    $http({
        method: 'GET',
        url:　'model/phones.json'
    }).success(function(result){
        $scope.phones = result;
    });
    $scope.orderProp='age';
});

testCtrls.controller('formCtrl',function($scope,$rootScope,$http,$state,$cookieStore){

    $scope.person = {};

    $scope.query = function(){

        $http({
            method: 'POST',
            url: 'php/dbQuery.php',
            data: $scope.key,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).success(function(result){
            for(var i=0;i<result.length;i++){
                alert('username:'+result[i].username+'\nemail:'+result[i].email+'\nother:'+result[i].other);
            }
        })
    }
    
    $scope.logout = function(){
        $cookieStore.put('log','');
        $scope.log = $cookieStore.get('log');
        alert('退出成功');
        $rootScope.logFlag = '';
        $state.go('index',{},{reload:true});
    }
    
    $scope.refresh = function(){
        $scope.log = $cookieStore.get('log');
    }

});

testCtrls.controller('signupCtrl',function($scope,$rootScope,$http,$state,$cookieStore){
    $scope.user = {};
    $scope.signupSubmit = function(){
        $http({
            method: 'POST',
            url: 'php/dbCreate.php',
            data: $scope.user,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).success(function(result){
            if(result==1){
                alert('注册成功！');
                $cookieStore.put('log','true');
                $rootScope.username = $scope.user.username;
                $rootScope.logFlag = 'true';
                $state.go('index',{},{reload:true});
            }else{
                alert('注册失败！');
                $state.go('signup',{},{reload:true});
            }
        });
    }
});

testCtrls.controller('loginCtrl',function($scope,$rootScope,$http,$state,$cookieStore){
    $scope.loginIn = {};
    var expireDate = new Date();
    $scope.login = function(){
        
        expireDate.setDate(expireDate.getDate() + 1);

        $http({
            method: 'POST',
            url: 'php/loginIn.php',
            data: $scope.loginIn,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).success(function(result){
            if(CryptoJS.SHA256($scope.loginIn.password)==result[0].password){
                $cookieStore.put('log','true',{'expires':expireDate});
                $rootScope.username = $scope.loginIn.username;
                alert('ok');
                $rootScope.logFlag = 'true';
                $state.go('index',{},{reload:true});
            }else{
                $cookieStore.put('log','false');
                alert('error');
            }
        })
    }
});

testCtrls.controller('demo3Ctrl',function($scope,fileReader){
    
    $scope.getFile = function(){
        fileReader.readAsDataUrl($scope.file,$scope).then(function(result){
            $scope.imageSrc = result;
        })
    }
})