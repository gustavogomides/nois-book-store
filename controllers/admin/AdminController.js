(function () {
    'use strict';

    var app = angular.module('admin');
    app.controller('AdminController', AdminController);

    AdminController.$inject = ['$scope', '$routeParams', 'AdminService'];

    function AdminController($scope, $routeParams, AdminService) {
        var vm = this;
        $scope.adminController = vm;
    }

    app.directive('navbarheaderadmin', function(){
		return {
			restrict: 'AE',
			templateUrl: '././views/admin/navbarheaderadmin.html'
		}
	});

})();