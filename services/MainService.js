(function () {
	angular.module('app')
		.service('MainService', MainService);

	MainService.$inject = ['$http'];

	function MainService($http) {
		var vm = this;

		vm.getList = getList;
		vm.getLivroByCategoria = getLivroByCategoria;
		vm.getLivro = getLivro;
		vm.searchBooks = searchBooks;
		vm.shoppingCart = shoppingCart;
		vm.getLivroByIsbn = getLivroByIsbn;

		function getList(url, successCallback, errorCallback) {
			$http.get('http://localhost/api-nois-book-store/' + url + "/list")
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function getLivroByCategoria(categoriaNome, successCallback, errorCallback) {
			$http.get('http://localhost/api-nois-book-store/livro/categoria/' + categoriaNome)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function getLivro(livro, successCallback, errorCallback) {
			$http.get('http://localhost/api-nois-book-store/livro/titulo/' + livro)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function searchBooks(query, successCallback, errorCallback) {
			$http.get('http://localhost/api-nois-book-store/search/' + query)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function getLivroByIsbn(isbn, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/livro/' + isbn)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function shoppingCart(isbn, successCallback, errorCallback) {
			var url = 'http://localhost/api-nois-book-store/shopping/' + isbn;
			// console.log(url);
			$http.get(url)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}
	}


})();