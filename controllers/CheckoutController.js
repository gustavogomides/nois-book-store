(function () {
	'use strict';

	angular.module('app')
		.controller('CheckoutController', CheckoutController);

	CheckoutController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function CheckoutController($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;

        vm.validEmail = validEmail;

		$scope.quantidadeCheckout1 = 0;
		if($cookies.getObject('infoLivro') != null){
			$cookies.getObject('infoLivro').forEach(function(data){
				$scope.quantidadeCheckout1 += data.quantidade;
			});
		}

        function validEmail(email){
            MainService.validEmail(email, function(result){
                if(result == 'Email valido!'){
                    $location.url('/checkout02/' + email);
                }else{
                    swal("E-mail inválido!", "Por favor digite um e-mail válido!", "error");
                } 
            })
        }

    }

})();