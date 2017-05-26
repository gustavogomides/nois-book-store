(function(){
	angular.module('app')
		.service('MainService', MainService);
	
	MainService.$inject = ['$http'];

	function MainService($http){
		var vm = this;

		vm.getList = getList;
		vm.getLivroByCategoria = getLivroByCategoria;
		vm.getLivro = getLivro;

		function getList(url, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/' + url + "/list")
				.then(
		            function(response) {
		                successCallback && successCallback(response.data);	                
		            },
		            function(error){
		                errorCallback && errorCallback(error);
	            	}
            	);
		}

		function getLivroByCategoria(categoriaNome, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/livro/categoria/' + categoriaNome)
				.then(
		            function(response) {
		                successCallback && successCallback(response.data);	                
		            },
		            function(error){
		                errorCallback && errorCallback(error);
	            	}
            	);
		}

		function getLivro(livro, successCallback, errorCallback){
			$http.get('http://localhost/api-nois-book-store/livro/titulo/' + livro)
				.then(
		            function(response) {
		                successCallback && successCallback(response.data);	                
		            },
		            function(error){
		                errorCallback && errorCallback(error);
	            	}
            	);
		}

	}


})();