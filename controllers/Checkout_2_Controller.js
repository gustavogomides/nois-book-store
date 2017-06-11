(function () {
	'use strict';

	angular.module('app')
		.controller('Checkout_2_Controller', Checkout_2_Controller);

	Checkout_2_Controller.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function Checkout_2_Controller($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;
        $scope.customer = {};

        vm.processarPedido= processarPedido;

        $scope.quantidadeCheckout2 = 0;
		if($cookies.getObject('infoLivro') != null){
			$cookies.getObject('infoLivro').forEach(function(data){
				$scope.quantidadeCheckout2 += data.quantidade;
			});
		}

        getCustomer($routeParams.email);

        function getCustomer(email){
            MainService.getCustomer(email, function(result){
                if(result == 'Nenhum customer encontrado'){
                    $scope.customer.info = 'Benvido ao nosso site -- Por favor, forneça um endereço para entrega';
                }else{
                    $scope.customer.info = 'Benvindo de volta -- Por favor, confirme seu endereço de entrega';
                    $scope.customer.custID = result.custID;
                    $scope.customer.email = result.email;
                    $scope.customer.nome = result.fname;
                    $scope.customer.sobrenome = result.lname;
                    $scope.customer.rua = result.street;
                    $scope.customer.cidade = result.city;
                    $scope.customer.estado = result.state;
                    $scope.customer.cep = result.zip;
                }                
            });
        }

        function processarPedido(customer){
            MainService.validEmail(customer.email, function(result){
                if(result == 'Email valido!'){
                    MainService.validState(customer.estado, function(resposta){
                        if(resposta == 'State valido!'){
                            if(customer.custID != null){ // já foi cadastrado anteriormente
                                MainService.updateCustomer(customer, function(response){
                                    $location.url('/checkout03/' + customer.custID + '/' + customer.nome + '/' + customer.sobrenome
                                        + '/' + customer.rua + '/' +customer.cidade + '/' + customer.estado + '/' + customer.cep
                                        + '/' + customer.email);
                                });
                            }else{
                                MainService.insertCustomer(customer, function(response){
                                    var custID = parseInt(response);
                                    $location.url('/checkout03/' + custID + '/' + customer.nome + '/' + customer.sobrenome
                                        + '/' + customer.rua + '/' +customer.cidade + '/' + customer.estado + '/' + customer.cep
                                        + '/' + customer.email);
                                });
                            }
                        }else{
                            swal("Estado inválido!", "Por favor digite um estado válido!", "error");
                        }
                    });
                }else{
                    swal("E-mail inválido!", "Por favor digite um e-mail válido!", "error");
                }
            });
        }
        
        // TABELA bookcustomers
        // CREATE TABLE `sandvigbookstore`.`bookcustomers` ( `custID` INT(11) NOT NULL AUTO_INCREMENT , `fname` VARCHAR(20) NOT NULL , 
        // `lname` VARCHAR(20) NOT NULL , `email` VARCHAR(50) NOT NULL , `street` VARCHAR(25) NOT NULL , `city` VARCHAR(30) NOT NULL , 
        // `state` VARCHAR(2) NOT NULL , `zip` VARCHAR(9) NOT NULL , PRIMARY KEY (`custID`)) ENGINE = InnoDB;
	}

})();