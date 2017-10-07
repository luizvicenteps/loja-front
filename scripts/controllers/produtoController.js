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
    /* Abrir Modal para edição*/

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
                console.log("Antes Index");
                var index = listaProdutosFactory.produtos.indexOf(item);
                console.log("Antes splice");
                listaProdutosFactory.produtos.splice(index,1);
                console.log("Depois");
                toastr.success('Produto Removido com Sucesso!');
                $scope.fecharModal();
            })
        .catch(
            function(){
                toastr.error('Falha ao remover');
            }
        )

    }
    
    $scope.adicionarProduto = function(item){
        produtoService.adicionarProduto(item)
        .then(
            function(){
                toastr.sucess('Produto Inserido com Sucesso!');
                $scope.fecharModal();
            }
        )

    }

}]);