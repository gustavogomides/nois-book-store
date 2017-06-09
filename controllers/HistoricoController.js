(function () {
	'use strict';

	angular.module('app')
		.controller('HistoricoController', HistoricoController);

	HistoricoController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function HistoricoController($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;
		
        
       
	}

})();