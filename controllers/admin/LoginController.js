(function () {
    'use strict';

    angular.module('admin')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$routeParams', 'MainService'];

    function LoginController($scope, $routeParams, MainService) {
        var vm = this;
        $scope.loginController = vm;
    }



})();