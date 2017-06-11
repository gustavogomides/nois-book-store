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
		vm.formatData = formatData;
		vm.listarAutorById = listarAutorById;
		vm.listarCategoriaById = listarCategoriaById;
		vm.listarLivroById = listarLivroById;
		vm.updateAutor = updateAutor;
		vm.updateCategoria = updateCategoria;
		vm.updateLivro = updateLivro;

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

		/// listar autor pela ID
		function listarAutorById() {
			AdminService.getSomethingById('autor', $routeParams.id, listarAutoresByIdSuccessCallback, errorCallback);
		}

		function listarAutoresByIdSuccessCallback(data) {
			$scope.autor = data;
		}

		/// listar categoria pela ID
		function listarCategoriaById() {
			AdminService.getSomethingById('categoria', $routeParams.id, listarCategoriasByIdSuccessCallback, errorCallback);
		}

		function listarCategoriasByIdSuccessCallback(data) {
			$scope.categoria = data;
		}

		/// listar livro pela ID
		function listarLivroById() {
			AdminService.getSomethingById('livro', $routeParams.id, listarLivrosByIdSuccessCallback, errorCallback);
		}

		function listarLivrosByIdSuccessCallback(data) {
			data.pubdate = new Date(data.pubdate.replace(',',''))
			$scope.livro = data;
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


		/// atualizar categoria
		function updateCategoria(categoria) {
			AdminService.updateSomething('categoria', categoria, errorCallback, atualizarCategoriasSuccessCallback);
		}

		function atualizarCategoriasSuccessCallback(data) {
			$location.path("/categorias");
			swal("Sucesso", "A Categoria foi Atualizado!", "success");
		}

		/// inserir autor
		function addAutor(autor) {
			AdminService.insertSomething('autor', autor, errorCallback, inserirAutoresSuccessCallback);
		}

		function inserirAutoresSuccessCallback(data) {
			$location.path("/autores");
			swal("Sucesso", "O novo Autor for inserido!", "success");
		}

		/// atualizar autor
		function updateAutor(autor) {
			AdminService.updateSomething('autor', autor, errorCallback, atualizarAutoresSuccessCallback);
		}

		function atualizarAutoresSuccessCallback(data) {
			$location.path("/autores");
			swal("Sucesso", "O Autor foi Atualizado!", "success");
		}

		function formatData(data) {
			var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var oldDate = new Date(data);
			return monthArray[oldDate.getMonth()] + ' ' + oldDate.getDay() + ', ' + oldDate.getFullYear();
		}

		/// inserir livro
		function addLivro(livro) {
			var categoria = $scope.listaDeCategorias.filter(function (data) {
				return data.CategoryName == livro.CategoryName;
			});
			livro.CategoryID = categoria[0].CategoryID;

			var autor = $scope.listaDeAutores.filter(function (data) {
				var split = livro.nameL.split(" ");
				return data.nameF == split[0] && data.nameL == split[1];
			});
			livro.price = parseFloat(livro.price);
			livro.AuthorID = autor[0].AuthorID;
			livro.pubdate = formatData(livro.pubdate);
						console.log(JSON.stringify(livro))

			AdminService.insertSomething('livro', livro, inserirLivrosSuccessCallback, errorCallback);
		}

		function inserirLivrosSuccessCallback(data) {
			if (data == 'Livro inserido com sucesso!') {
				swal("Sucesso", "O novo livro foi inserido!", "success");
				$location.path("/livros");
			} else {
				swal("Erro", "O livro não foi inserido!", "error");
			}
		}

				/// inserir livro
		function updateLivro(livro) {
			var categoria = $scope.listaDeCategorias.filter(function (data) {
				return data.CategoryName == livro.CategoryName;
			});

			var autor = $scope.listaDeAutores.filter(function (data) {
				return data.nameL == livro.nameL;
			});
		
			livro.CategoryID = categoria[0].CategoryID;
			livro.AuthorID = autor[0].AuthorID;
			livro.pubdate = formatData(livro.pubdate);
			console.log(livro)
			AdminService.updateSomething('livro', livro, updateLivrosSuccessCallback, updateLivrosSuccessCallback);
		}

		function updateLivrosSuccessCallback(data) {
			if (data == 'Livro Atualizado com sucesso!') {
				swal("Sucesso", "O livro foi atualizado!", "success");
				$location.path("/livros");
			} else {
				swal("Sucesso", "O livro foi atualizado!", "success");
				$location.path("/livros");
			}
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

	app.directive("ckEditor", ["$timeout", function ($timeout) {
		return {
			require: '?ngModel',
			link: function ($scope, element, attr, ngModelCtrl) {
				var editor = CKEDITOR.replace(element[0]);

				editor.on("change", function () {
					$timeout(function () {
						ngModelCtrl.$setViewValue(editor.getData());
					});
				});

				ngModelCtrl.$render = function (value) {
					editor.setData(ngModelCtrl.$modelValue);
				};
			}
		};
	}]);

	app.directive("fileread", [function () {
		return {
			scope: {
				fileread: "="
			},
			link: function (scope, element, attributes) {
				element.bind("change", function (changeEvent) {
					var reader = new FileReader();
					reader.onload = function (loadEvent) {
						scope.$apply(function () {
							scope.fileread = loadEvent.target.result;
						});
					}
					reader.readAsDataURL(changeEvent.target.files[0]);
				});
			}
		}
	}]);

})();