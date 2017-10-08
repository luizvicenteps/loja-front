angular.module("lojaApp").controller("produtoCtrl", ["$scope", "$uibModalInstance","$uibModal", "item", "listaProdutosFactory","produtoService","toastr",
function($scope,$uibModalInstance, $uibModal, item, listaProdutosFactory, produtoService, toastr){

    $scope.item = item;

    $scope.fecharModal = function (){
        $uibModalInstance.close();
    };

    $scope.editarProduto = function(item){
        produtoService.editarProduto(item)
        .then(
            function(){
                toastr.success('Produto Editado com Sucesso!');
                $scope.fecharModal();
            }
        )

    }

    $scope.modalEditarProduto = function (item){
        $uibModal.open({
            templateUrl: "views/editarProduto.html",
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
    
    $scope.removerProduto = function(item){
        produtoService.removerProduto(item.Id)
        .then(
            function(){
                var index = listaProdutosFactory.produtos.indexOf(item);
                listaProdutosFactory.produtos.splice(index,1);
                toastr.success('Produto Removido com Sucesso!');
                $scope.fecharModal();
            })
        .catch(
            function(){
                toastr.error('Falha ao remover');
            }
        )

    }

    $scope.modalRemoverProduto = function (item){
        $scope.fecharModal();
        $uibModal.open({
            templateUrl: "views/modalExlusaoProduto.html",
            controller: "produtoCtrl",
            size: "",
            backdrop: "static",
            resolve: {
                item: function (){
                    return item;
                }
            }
        });
    };

    $scope.adicionarProduto = function(item){
        produtoService.adicionarProduto(item)
        .then(
            function(response){
                item.Id = response.data.Id
                listaProdutosFactory.produtos.push(item)
                toastr.success('Produto Inserido com Sucesso!');
                $scope.fecharModal();

            }
        )
        .catch(
            function(){
                toastr.error('Falha ao Inserir');
            }
            
        )

    }
}]);