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

        // TABELA bookcustomers
        // CREATE TABLE `sandvigbookstore`.`bookcustomers` ( `custID` INT(11) NOT NULL AUTO_INCREMENT , `fname` VARCHAR(20) NOT NULL , 
        // `lname` VARCHAR(20) NOT NULL , `email` VARCHAR(50) NOT NULL , `street` VARCHAR(25) NOT NULL , `city` VARCHAR(30) NOT NULL , 
        // `state` VARCHAR(2) NOT NULL , `zip` VARCHAR(9) NOT NULL , PRIMARY KEY (`custID`)) ENGINE = InnoDB;
	}

})();