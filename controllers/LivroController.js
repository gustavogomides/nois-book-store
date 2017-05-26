(function(){
	'use strict';

	angular.module('app')
		.controller('LivroController', LivroController);
	
	LivroController.$inject = ['$scope', '$routeParams', 'MainService'];

	function LivroController($scope, $routeParams, MainService){
		var vm = this;
		$scope.controller = vm;
		
		vm.listarLivrosByCategoria = listarLivrosByCategoria;
		vm.getLivro = getLivro;
		vm.listLivro = listLivro;


		/// listar livros por categoria
		function listarLivrosByCategoria(){
			MainService.getLivroByCategoria($routeParams.categoria, listarCategoriasSuccessCallback, listarCategoriasErrorCallback);
		}

		function listarCategoriasSuccessCallback(data){
			$scope.livrosByCategoriaLista = data.livros;
		}

		function listarCategoriasErrorCallback(){
			console.log("Unable to read record.");
		}

		/// get livro
		function getLivro(){
			MainService.getLivro($routeParams.nome, getLivroSuccessCallback, getLivroErrorCallback);
		}

		function getLivroSuccessCallback(data){
			$scope.livro = data;
		}

		function getLivroErrorCallback(){
			console.log("Unable to read record.");
		}

		// listar livros
		function listLivro(){
			MainService.getList('livro', listLivroSuccessCallback, listLivroErrorCallback);
		}

		function listLivroSuccessCallback(data){
			$scope.livrosInicio = getUnique(data.livros, 3);
		}

		function listLivroErrorCallback(){
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