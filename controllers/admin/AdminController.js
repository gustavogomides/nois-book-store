(function () {
	'use strict';

	var app = angular.module('admin');
	app.controller('AdminController', AdminController);

	AdminController.$inject = ['$scope', '$routeParams', 'AdminService', '$location'];

	function AdminController($scope, $routeParams, AdminService, $location) {
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
			AdminService.insertSomething('categoria', categoria, errorCallback, inserirCategoriasSuccessCallback);
		}

		function inserirCategoriasSuccessCallback(data) {
			$location.path("/categorias");
			swal("Sucesso", "A nova Categoria foi inserida!", "success");
		}

		/// inserir autor
		function addAutor(autor) {
			AdminService.insertSomething('autor', autor, errorCallback, inserirAutoresSuccessCallback);
		}

		function inserirAutoresSuccessCallback(data) {
			$location.path("/autores");
			swal("Sucesso", "O novo Autor for inserido!", "success");
		}

		/// inserir livro
		function addLivro(livro) {
			AdminService.insertSomething('livro', livro, errorCallback, inserirLivrosSuccessCallback);
		}

		function inserirLivrosSuccessCallback(data) {
			$location.path("/livros");
			swal("Sucesso", "O novo livro foi inserido!", "success");
		}
		/// inserir categoria
		function remove(route, id) {
			swal({
					title: "Você tem certeza?",
					text: "Essa ação não poderá ser desfeita!",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Sim, exclua isso!",
					cancelButtonText: "Não!",
					closeOnConfirm: false,
					closeOnCancel: false
				},
				function (isConfirm) {
					if (isConfirm) {
						AdminService.deleteSomething(route, id, errorCallback, deleteSuccessCallback);

						if (route == 'categoria') {
							var index = $scope.listaDeCategorias.map(e => {
								return e.CategoryID;
							}).indexOf(id);
							$scope.listaDeCategorias.splice(index, 1);
						} else if (route == 'autor') {
							var index = $scope.listaDeAutores.map(e => {
								return e.AuthorID;
							}).indexOf(id);
							$scope.listaDeAutores.splice(index, 1);
						} else if (route == 'livro') {
							var index = $scope.listaDeLivros.map(e => {
								return e.ISBN;
							}).indexOf(id);
							$scope.listaDeLivros.splice(index, 1);
						}
						swal("Excluído!", "O registro excluído!", "success");
					} else {
						swal("Cancelado", "Seu registro está seguro :)", "error");
					}
				});
		}

		function deleteSuccessCallback(data) {
			console.log(data);
		}

		function errorCallback(error) {
			swal("Opsss", "Alguma coisa deu errado!", "error");
		}
	}

	app.directive('navbarheaderadmin', function () {
		return {
			restrict: 'AE',
			templateUrl: '././views/admin/navbarheaderadmin.html'
		}
	});

	app.directive('navbarleft', function () {
		return {
			restrict: 'AE',
			templateUrl: '././views/admin/navbarleft.html'
		}
	});

})();