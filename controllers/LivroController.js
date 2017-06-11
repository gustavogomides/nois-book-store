(function () {
	'use strict';

	angular.module('app')
		.controller('LivroController', LivroController);

	LivroController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies'];

	function LivroController($scope, $routeParams, MainService, $cookies) {
		var vm = this;
		$scope.controller = vm;

		vm.listarLivrosByCategoria = listarLivrosByCategoria;
		vm.getLivro = getLivro;
		vm.listLivro = listLivro;
		vm.searchBooks = searchBooks;
		
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
			$scope.livrosInicio.forEach(function(data){
				data.description = doTruncarStr(data.description, 100);
			});
		}

		function doTruncarStr(str, size){
			if (str==undefined || str=='undefined' || str =='' || size==undefined || size=='undefined' || size ==''){
				return str;
			}
			
			var shortText = str;
			if(str.length >= size+3){
				shortText = str.substring(0, size).concat('...');
			}
			return shortText;
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
	}

})();