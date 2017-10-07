angular.module("lojaApp").directive("app", function(){
    return {
        restrict: "E",
        templateUrl: "views/home.html",
        controller: "homeCtrl"
    }
});