(function () {
    'use strict';

    var app = angular.module('admin');
    app.controller('AdminController', AdminController);

    AdminController.$inject = ['$scope', '$routeParams', 'AdminService'];

    function AdminController($scope, $routeParams, AdminService) {
        var vm = this;
        $scope.adminController = vm;

        vm.listarLivros = listarLivros;
        vm.listarAutores = listarAutores;
        vm.listarCategorias = listarCategorias;
        
        vm.addCategoria = addCategoria;





        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        /// listar livros
		function listarLivros() {
			AdminService.getSomething('livro', listarLivrosSuccessCallback, errorCallback);
		}

		function listarLivrosSuccessCallback(data) {
			$scope.listaDeLivros = data.livros;
		}

        /// listar autores
		function listarAutores() {
			AdminService.getSomething('autor', listarAutoresSuccessCallback, errorCallback);
		}

		function listarAutoresSuccessCallback(data) {
			$scope.listaDeAutores = data.autores;
		}

        /// listar categorias
		function listarCategorias() {
			AdminService.getSomething('categoria', listarCategoriasSuccessCallback, errorCallback);
		}

		function listarCategoriasSuccessCallback(data) {
			$scope.listaDeCategorias = data.categorias;
		}








        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        var categoria = { nome : $scope.nome };

        /// inserir categoria
		function addCategoria() {
			AdminService.insertSomething('categoria', categoria, inserirCategoriasSuccessCallback, errorCallback);
		}

		function inserirCategoriasSuccessCallback(data) {
            console.log(data);
		}

		function errorCallback(error) {
			console.log(error);
		}

















    }

    app.directive('navbarheaderadmin', function(){
		return {
			restrict: 'AE',
			templateUrl: '././views/admin/navbarheaderadmin.html'
		}
	});

    app.directive('navbarleft', function(){
		return {
			restrict: 'AE',
			templateUrl: '././views/admin/navbarleft.html'
		}
	});

})();