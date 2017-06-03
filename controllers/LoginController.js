(function () {
    'use strict';

    angular.module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$routeParams', 'MainService'];

    function ShoppingCartController($scope, $routeParams, MainService) {
        var vm = this;
        $scope.controller = vm;
    }



})();