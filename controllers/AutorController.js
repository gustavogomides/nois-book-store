(function () {
	'use strict';

	angular.module('app')
		.controller('AutorController', AutorController);

	AutorController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies'];

	function AutorController($scope, $routeParams, MainService, $cookies) {
		var vm = this;
		$scope.controller = vm;
		
        $scope.livrosAutor = {};
		var livrosArray = [];

		getLivrosAutor();


        function getLivrosAutor(){
            MainService.getLivrosAutor($routeParams.autor, function(response){
                $scope.autor = $routeParams.autor;
                $scope.quantidadeLivrosAutor = response.length;
                
                if($scope.quantidadeLivrosAutor == 1){
                    $scope.quantidadeLivrosAutor += ' livro encontrado do autor <b>'+$routeParams.autor+'</b>';
                }else if($scope.quantidadeLivrosAutor > 1) {
                    $scope.quantidadeLivrosAutor += ' livros encontrados do autor <b>'+$routeParams.autor+'</b>';
                }

                response.forEach(function(data){
                    livrosArray.push({
                        isbn: data.ISBN,
                        titulo: data.title,
                        descricao: doTruncarStr(data.description, 200)
                    });
                    $scope.livrosAutor = livrosArray;
                });
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
	}

})();