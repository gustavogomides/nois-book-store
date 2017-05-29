(function () {
	'use strict';

	angular.module('app')
		.controller('LivroController', LivroController);

	LivroController.$inject = ['$scope', '$routeParams', 'MainService'];

	function LivroController($scope, $routeParams, MainService) {
		var vm = this;
		$scope.controller = vm;

		vm.listarLivrosByCategoria = listarLivrosByCategoria;
		vm.getLivro = getLivro;
		vm.listLivro = listLivro;
		vm.searchBooks = searchBooks;
		vm.getCarrinho = getCarrinho;
		vm.atualizaQuantidade = atualizaQuantidade;

		/// listar livros por categoria
		function listarLivrosByCategoria() {
			MainService.getLivroByCategoria($routeParams.categoria, listarCategoriasSuccessCallback, listarCategoriasErrorCallback);
		}

		function listarCategoriasSuccessCallback(data) {
			$scope.livrosByCategoriaLista = data.livros;
		}

		function listarCategoriasErrorCallback() {
			console.log("Unable to read record.");
		}

		/// get livro
		function getLivro() {
			MainService.getLivro($routeParams.nome, getLivroSuccessCallback, getLivroErrorCallback);
		}

		function getLivroSuccessCallback(data) {
			$scope.livro = data;
		}

		function getLivroErrorCallback() {
			console.log("Unable to read record.");
		}

		// listar livros
		function listLivro() {
			MainService.getList('livro', listLivroSuccessCallback, listLivroErrorCallback);
		}

		function listLivroSuccessCallback(data) {
			$scope.livrosInicio = getUnique(data.livros, 3);
		}

		function listLivroErrorCallback() {
			console.log("Unable to read record.");
		}

		// search books
		function searchBooks() {
			MainService.searchBooks($routeParams.search, searchBooksSuccessCallback, searchBooksErrorCallback)
		}

		function searchBooksSuccessCallback(data) {
			$scope.livrosEncontrados = data.search;
		}

		function searchBooksErrorCallback() {
			console.log("Unable to read record.");
		}

		/// Adiciona livros ao carrinho
		function getCarrinho() {
			MainService.shoppingCart($routeParams.isbn, successCallback, errorCallback);
		}

		function successCallback(data) {
			console.log(data);
			$scope.cart = data;
		}

		function errorCallback() {
			console.log("Unable to read record.");
		}

		function getUnique(array, count) {
			// Make a copy of the array
			var tmp = array.slice(array);
			var ret = [];

			for (var i = 0; i < count; i++) {
				var index = Math.floor(Math.random() * tmp.length);
				var removed = tmp.splice(index, 1);
				// Since we are only removing one element
				ret.push(removed[0]);
			}
			return ret;
		}

		function atualizaQuantidade(isbn, add){
			if(add)
				isbn = "add"+isbn;
			else
				isbn = "rem"+isbn;

			MainService.shoppingCart(isbn, successCallback, errorCallback);
		}
	}



})();