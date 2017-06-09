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
			templateUrl: '././views/admin/dashboard.php',
			controller: 'AdminController as AdminController'
		});
		$routeProvider.when('/livros', {
			templateUrl: '././views/admin/livros/livros.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/categorias', {
			templateUrl: '././views/admin/categorias/categorias.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/autores', {
			templateUrl: '././views/admin/autores/autores.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/livro', {
			templateUrl: '././views/admin/livros/addLivros.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/categoria', {
			templateUrl: '././views/admin/categorias/addCategorias.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/add/autor', {
			templateUrl: '././views/admin/autores/addAutores.php',
			controller: 'AdminController as AdminController'
		});
		$routeProvider.when('/edit/livro/:id', {
			templateUrl: '././views/admin/livros/editLivros.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/edit/categoria/:id', {
			templateUrl: '././views/admin/categorias/editCategorias.php',
			controller: 'AdminController as AdminController'
		});	
		$routeProvider.when('/edit/autor/:id', {
			templateUrl: '././views/admin/autores/editAutores.php',
			controller: 'AdminController as AdminController'
		});			
	}

})();