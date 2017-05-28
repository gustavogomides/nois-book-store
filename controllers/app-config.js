(function() {

	'use strict',

	angular.module('app').config(appConfig);

	appConfig.$inject = ['$routeProvider'];

	function appConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '././views/index.html',
			controller: 'LivroController as LivroController'
		});
		$routeProvider.when('/listar/:categoria', {
			templateUrl: '././views/listarLivrosByCategoria.html',
			controller: 'LivroController as LivroController'
		});
		$routeProvider.when('/listar/livro/:nome', {
			templateUrl: '././views/livro-descricao.html',
			controller: 'LivroController as LivroController'
		});
		$routeProvider.when('/search/:search', {
			templateUrl: '././views/buscarLivros.html',
			controller: 'LivroController as LivroController'
		});
		$routeProvider.when('/shopping', {
			templateUrl: '././views/shoppingCart.html',
			controller: 'LivroController as LivroController'
		});
	}

})();
