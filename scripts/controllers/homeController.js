angular.module("lojaApp").controller("homeCtrl",["$scope","$uibModal","listaProdutosFactory","produtoService","toastr",
 function($scope, $uibModal, listaProdutosFactory, produtoService, toastr){

    $scope.produtoModel = listaProdutosFactory;

    $scope.buscarProdutos = function (){
        // $scope.produtoModel.produtos = [
        //     {
        //         "Id": 1,
        //         "Nome": "mouse usb",
        //         "ImageUrl": "http://placehold.it/500x400",
        //         "Valor": 25.00,
        //         "Descricao": "Look, just because I don't be givin'" 
        //     }           
        // ];

        produtoService.listarProdutos()
        .then(function(retorno){
            $scope.produtoModel.produtos = retorno.data;
        })
        .catch(function(){
            toastr.error("não foi possivel listar os produtos.");
        })
    };

    $scope.editarProduto = function (item){
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

    $scope.adicionarProduto = function () {
        $uibModal.open({
            templateUrl: "views/novoProduto.html",
            controller: "adicionarProdutoCtrl",
            size: "bg",
            backdrop: "static"
        });      
    }
}]);