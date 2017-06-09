(function () {
	angular.module('admin')
		.service('AdminService', AdminService);

	AdminService.$inject = ['$http'];

	function AdminService($http) {
		var vm = this;

		vm.getSomething = getSomething;
		vm.insertSomething = insertSomething;
		vm.deleteSomething = deleteSomething;
		vm.updateSomething = updateSomething;
		vm.getSomethingById = getSomethingById;

		function getSomething(url, successCallback, errorCallback) {
			var API = 'http://localhost/api-nois-book-store/' + url + "/list";
			$http.get(API).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function getSomethingById(url, id, successCallback, errorCallback) {
			var API = 'http://localhost/api-nois-book-store/' + url + "/list/" + id;
			$http.get(API).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}


		function insertSomething(url, data, successCallback, errorCallback) {
			var API = 'http://localhost/api-nois-book-store/' + url + "/insert";
			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			};
			$http.post(API, data, config).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function deleteSomething(url, id, successCallback, errorCallback) {
			var API = 'http://localhost/api-nois-book-store/' + url + "/delete/" + id;
			$http.delete(API).then(
				function (response) {
					successCallback && successCallback(response.data);
				},
				function (error) {
					errorCallback && errorCallback(error);
				}
			);
		}

		function updateSomething(url, data, successCallback, errorCallback) {
			var API = 'http://localhost/api-nois-book-store/' + url + "/update";
			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			};
			$http.post(API, data, config).then(
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