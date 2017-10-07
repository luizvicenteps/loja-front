angular.module("lojaApp").controller("produtoCtrl", ["$scope", "$uibModalInstance", "item", "listaProdutosFactory",
function($scope,$uibModalInstance, item, listaProdutosFactory){

    $scope.item = item;

    $scope.fecharModal = function (){
        $uibModalInstance.close();
    };

}]);