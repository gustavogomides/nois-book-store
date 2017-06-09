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
		vm.validEmail = validEmail;
		vm.validState = validState;
		vm.getCustomer = getCustomer;
		vm.insertCustomer = insertCustomer;
		vm.updateCustomer = updateCustomer;
		vm.insertBookOrder = insertBookOrder;
		vm.insertBookOrderItem = insertBookOrderItem;
		vm.enviarEmail = enviarEmail;

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

		function validEmail(email, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/checkout/valid-email/' + email)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function validState(state, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/checkout/valid-state/' + state)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function getCustomer(email, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/checkout/getCustomer/' + email)
				.then(
					function (response) {
						successCallback && successCallback(response.data);
					},
					function (error) {
						errorCallback && errorCallback(error);
					}
				);
		}

		function insertCustomer(customer, successCallback, errorCallback) {
			var url = 'http://localhost/api-nois-book-store/checkout/customer/insert';
			var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
			$http.post(url, customer, config).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function updateCustomer(customer, successCallback, errorCallback) {
			var url = 'http://localhost/api-nois-book-store/checkout/customer/update';
			var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
			$http.put(url, customer, config).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function insertBookOrder(custID, successCallback, errorCallback){
			var bookOrder = {
				custID: custID
			};

			var url = 'http://localhost/api-nois-book-store/checkout/bookorders/insert';
			var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
			$http.post(url, bookOrder, config).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function insertBookOrderItem(orderID, isbn, qty, successCallback, errorCallback){
			var bookOrderItem = {
				orderID: orderID,
				isbn: isbn,
				qty: qty
			};

			var url = 'http://localhost/api-nois-book-store/checkout/bookorderitems/insert';
			var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
			$http.post(url, bookOrderItem, config).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function enviarEmail(email, successCallback){
			var url = 'http://localhost/api-nois-book-store/checkout/email/enviar';
			var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
			$http.post(url, email, config).then(
				function (response) {
					successCallback && successCallback();
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}
	}


})();