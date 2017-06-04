(function () {

	'use strict',

	angular.module('admin').config(adminConfig);

	adminConfig.$inject = ['$routeProvider'];
	
	function adminConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '././views/admin/login.html',
			controller: 'AdminController as AdminController'
		});
		$routeProvider.when('/dashboard', {
			templateUrl: '././views/admin/dashboard.html',
			controller: 'AdminController as AdminController'
		});
		$routeProvider.when('/livros', {
			templateUrl: '././views/admin/livros/livros.html',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/categorias', {
			templateUrl: '././views/admin/categorias/categorias.html',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/autores', {
			templateUrl: '././views/admin/autores/autores.html',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/livro', {
			templateUrl: '././views/admin/livros/addLivros.html',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/categoria', {
			templateUrl: '././views/admin/categorias/addCategorias.html',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/autor', {
			templateUrl: '././views/admin/autores/addAutores.html',
			controller: 'AdminController as AdminController'
		});		
	}

})();