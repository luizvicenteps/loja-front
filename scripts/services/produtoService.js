angular.module("lojaApp").service("produtoService", ["$http",function($http){

return {
    adicionarProduto: function (item) {

        return $http({
            url: HOST_API,
            method: "POST",
            data: item,
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    editarProduto: function (item) {
        var url = HOST_API + item.Id;

        return $http({
            url: url,
            method: "PUT",
            data: item,
            headers: {
                "Content-Type": "application/json"
            }
        });
    },

    removerProduto: function (itemId) {
        var url = HOST_API + itemId;

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