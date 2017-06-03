(function () {

	'use strict',

	angular.module('admin').config(adminConfig);

	adminConfig.$inject = ['$routeProvider'];

	function adminConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '././views/admin/login.html',
			controller: 'LoginController as LoginController'
		});
		$routeProvider.when('/dashboard', {
			templateUrl: '././views/admin/index.html',
			controller: 'LoginController as LoginController'
		});
		
	}

})();