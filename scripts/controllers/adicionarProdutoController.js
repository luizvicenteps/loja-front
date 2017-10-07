angular.module("lojaApp").controller("adicionarProdutoCtrl", ["produtoService", "produtoFactory", "$scope", "toastr",
"$uibModalInstance",function(produtoService, produtoFactory, $scope, $uibModalInstance, toastr){

$scope.adicionar = function (novoProduto){
    produtoService.adicionarProduto(novoProduto)
    .then(function (retorno){
        novoProduto.Id = retorno.Id;
        produtoFactory.push(novoProduto);
    })
    .catch(function(){
        toastr.error("Falha ao inserir produto");
        $scope.fechar();
    });
};

$scope.fechar = function (){
    $uibModalInstance.close();
};

}]);