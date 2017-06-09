(function () {
	'use strict';

	angular.module('app')
		.controller('HistoricoController', HistoricoController);

	HistoricoController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function HistoricoController($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;
		
		$scope.historico = {};
		var historicoArray = [];

        MainService.getHistorico($routeParams.custID, function(response){
			response = response.historico;
			console.log(response);
			response.forEach(function(data){
				historicoArray.push({
					isbn: data.isbn,
					orderID: data.orderID,
					orderdate: data.orderdate,
					qty: data.qty,
					title: data.title
				});
			});
			$scope.historico = historicoArray;
		});
	}

})();