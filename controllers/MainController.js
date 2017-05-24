(function(){
	'use strict';

	var app = angular.module('app');
	app.controller('MainController', MainController);

	MainController.$inject = ['$scope', 'MainService'];

	function MainController($scope, MainService) {
		var vm = this;
		$scope.controller = vm;

		$scope.categoriasTeste = [];

		list();

			function list(){
			MainService.getList('categoria', function(data){
				$scope.categoriasTeste = data.categorias;
			}, listarCategoriasErrorCallback);
		}

		function listarCategoriasErrorCallback(){
			console.log("Unable to read record.");
		}

	}

	app.directive('navbarheader', function(){
		return {
			restrict: 'AE',
			templateUrl: '././views/navbarheader.html'
		}
	});


})();