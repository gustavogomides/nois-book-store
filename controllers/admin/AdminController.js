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
        vm.addAutor = addAutor;
        vm.addLivro = addLivro;
        vm.remove = remove;

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
        /// inserir categoria
		function addCategoria(categoria) {
			console.log(categoria);
			AdminService.insertSomething('categoria', categoria, inserirCategoriasSuccessCallback, errorCallback);
		}

		function inserirCategoriasSuccessCallback(data) {
            console.log(data);
		}

        /// inserir autor
		function addAutor(autor) {
			console.log(autor);
			AdminService.insertSomething('autor', autor, inserirAutoresSuccessCallback, errorCallback);
		}

		function inserirAutoresSuccessCallback(data) {
            console.log(data);
		}

        /// inserir livro
		function addLivro(livro) {
			console.log(livro);
			AdminService.insertSomething('livro', livro, inserirLivrosSuccessCallback, errorCallback);
		}

		function inserirLivrosSuccessCallback(data) {
            console.log(data);
		}
        /// inserir categoria
		function remove(route, id) {
            AdminService.deleteSomething(route, id, deleteSuccessCallback, errorCallback);
		}

		function deleteSuccessCallback(data) {
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