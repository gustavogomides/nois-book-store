(function(){
	'use strict';

	var app = angular.module('app');
	app.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$location', 'MainService', '$cookies'];

	function MainController($scope, $location, MainService, $cookies) {
		var vm = this;
		$scope.controller = vm;

		$scope.categoriasTeste = [];
		$scope.searchQuery = '';

		$scope.onClickLogin = onClickLogin;

		$scope.quantidadeCarrinho = 0;
		if($cookies.getObject('infoLivro') != null){
			$cookies.getObject('infoLivro').forEach(function(data){
				$scope.quantidadeCarrinho += data.quantidade;
			});
		}
		
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