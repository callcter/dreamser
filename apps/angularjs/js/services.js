var testFactorys = angular.module('testFactorys',[]);

testFactorys.factory('fileReader',['$q','$log',function($q,$log){
    var onLoad = function(reader,deferred,scope){
        return function(){
            scope.$apply(function(){
                deferred.resolve(reader.result);
            });
        }
    }
    var onError = function(reader,deferred,scope){
        return function(){
            scope.$apply(function(){
                deferred.reject(reader.result);
            });
        }
    }
    var getReader = function(deferred,scope){
        var reader = new FileReader();
        reader.onload = onLoad(reader,deferred,scope);
        reader.onError = onError(reader,deferred,scope);
        return reader;
    }
    var readerAsDataURL = function(file,scope){
        var deferred = $q.defer();
        var reader = getReader(deferred,scope);
        reader.readAsDataURL(file);
        return deferred.promise;
    }
    return {
        readAsDataUrl: readerAsDataURL
    }
}])