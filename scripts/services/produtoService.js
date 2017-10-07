angular.module("lojaApp").service("produtoService", ["$http",function($http){

return {
    adicionarProduto: function (produto) {

        return $http({
            url: HOST_API,
            method: "POST",
            data: produto,
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    editarProduto: function (produto) {
        var url = HOST_API + produto.Id;

        return $http({
            url: url,
            method: "PUT",
            data: produto,
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    removerProduto: function (produtoId) {
        var url = HOST_API + produtoId;

        return $http({
            url: url,
            method: "DELETE"
        });
    },

    listarProdutos: function (){
        return $http({
            url: HOST_API,
            method: "GET"
        })
    }
}

}]);