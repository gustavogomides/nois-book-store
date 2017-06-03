(function(){
	'use strict';

	var app = angular.module('app');
	app.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$location', 'MainService'];

	function MainController($scope, $location, MainService) {
		var vm = this;
		$scope.controller = vm;

		$scope.categoriasTeste = [];
		$scope.searchQuery = '';

		$scope.onClickLogin = onClickLogin;

		list();

		function list(){
			MainService.getList('categoria', function(data){
				$scope.categoriasTeste = data.categorias;
			}, listarCategoriasErrorCallback);
		}

		function listarCategoriasErrorCallback(){
			console.log("Unable to read record.");
		}

		function onClickLogin(path){
			console.log(path);
			// $location.url(path);
			window.location.href = 'http://localhost' + '/nois-book-store/' + path;
		}

	}

	app.directive('navbarheader', function(){
		return {
			restrict: 'AE',
			templateUrl: '././views/navbarheader.html'
		}
	});


})();