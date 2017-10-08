angular.module("lojaApp").controller("homeCtrl",["$scope","$uibModal","listaProdutosFactory","produtoService","toastr",
 function($scope, $uibModal, listaProdutosFactory, produtoService, toastr){

    $scope.produtoModel = listaProdutosFactory;

    $scope.buscarProdutos = function (){
        produtoService.listarProdutos()
        .then(function(retorno){
            $scope.produtoModel.produtos = retorno.data;
        })
        .catch(function(){
            toastr.error("não foi possivel listar os produtos.");
        })
    };

    $scope.detalheProduto = function (item){
        $uibModal.open({
            templateUrl: "views/detalheProduto.html",
            controller: "produtoCtrl",
            size: "bg",
            backdrop: "static",
            resolve: {
                item: function (){
                    return item;
                }
            }
        });
    };

    $scope.modalAdicionarProduto = function (){
        $uibModal.open({
            templateUrl: "views/adicionarProduto.html",
            controller: "produtoCtrl",
            size: "md",
            backdrop: "static",
            resolve: {
                item: function (){
                    return null;
                }
            }
        });
    };
}]);