(function () {
    'use strict';

    angular.module('app')
        .controller('ShoppingCartController', ShoppingCartController);

    ShoppingCartController.$inject = ['$scope', '$routeParams', 'MainService'];

    function ShoppingCartController($scope, $routeParams, MainService) {
        var vm = this;
        $scope.controller = vm;

        vm.getCarrinho = getCarrinho;

        /// Adiciona livros ao carrinho
        function getCarrinho() {
            MainService.shoppingCart($routeParams.isbn, successCallback, errorCallback);
        }

        function successCallback(data) {
            console.log('aq')
            $scope.cart = data.booklist;
        }

        function errorCallback() {
            console.log("Unable to read record.");
        }
    }



})();