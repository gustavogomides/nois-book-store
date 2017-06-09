(function () {
	'use strict';

	angular.module('app')
		.controller('Checkout_3_Controller', Checkout_3_Controller);

	Checkout_3_Controller.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function Checkout_3_Controller($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;
		vm.redirecionar = redirecionar;

		var bookArray = [];
		var body = "";
		setDataCustomer();
		processarPedido();		

		function processarPedido(){
			$scope.quantidadeCheckout3 = 0;
			if($cookies.getObject('infoLivro') != null){
				bookArray = $cookies.getObject('infoLivro');
				
				bookArray.forEach(function(data){
					$scope.quantidadeCheckout2 += data.quantidade;
				});

				$cookies.remove('infoLivro');

				if(bookArray.length > 0){
					var livrosInfo = [];
					MainService.insertBookOrder($routeParams.custID, function(orderID){
						body += "Obrigado pela compra! Essa é sua ordem de confirmacao do pedido: " + orderID;
						body += "\nEndereço de envio: " + $scope.rua + ", " + $scope.cidade + ", " + $scope.estado + ", " + $scope.cep + "\n\n";
						var cont = 0;
						bookArray.forEach(function(data){
							cont++;
							if(cont == bookArray.length){
								insertBookOrder(livrosInfo, orderID, data, true);
							}else{
								insertBookOrder(livrosInfo, orderID, data, false);
							}
						});
					});
				}
			}
		}

		function insertBookOrder(livrosInfo, orderID, data, sendEmail){
			MainService.insertBookOrderItem(orderID, data.isbn, data.quantidade, function(response){
					$scope.orderID = orderID;
					MainService.getLivroByIsbn(data.isbn, function(resposta){
						body += "Titulo do Livro: " + resposta.title + ", Preco: R$" + resposta.price  + ", Quantidade: " + data.quantidade + "\n";

						livrosInfo.push({
							titulo: resposta.title,
							quantidade: data.quantidade,
							preco: parseInt(resposta.price),
							subTotal: parseInt(resposta.price * data.quantidade),
							frete: (data.quantidade - 1) * 3 + 5,
							total: parseInt(resposta.price * data.quantidade) + ((data.quantidade - 1) * 3 + 5)
						});
						
						$scope.cartCheckout = livrosInfo;
						$scope.cartCheckout.subTotal = 0;
						$scope.cartCheckout.frete = 0;
						$scope.cartCheckout.total = 0;
						livrosInfo.forEach(function(liv){
							$scope.cartCheckout.subTotal += liv.subTotal;
							$scope.cartCheckout.frete += liv.frete;
							$scope.cartCheckout.total += liv.total;
						});
						if(sendEmail){
							enviarEmail();
						}
					});								
				});
		}
		function enviarEmail(){
			body += "\n\nSubTotal: R$ " + $scope.cartCheckout.subTotal 
				+ "\nFrete: R$ " + $scope.cartCheckout.frete
				+ "\nTotal: R$ " + $scope.cartCheckout.total;
			var objEmail = {
				body: body,
				email: $routeParams.email
			};

			MainService.enviarEmail(objEmail, function(){
				console.log('Email enviado');
			});
		}

		function setDataCustomer(){
			$scope.nome = $routeParams.nome;
			$scope.sobrenome = $routeParams.sobrenome;
			$scope.rua = $routeParams.rua;
			$scope.cidade = $routeParams.cidade;
			$scope.estado = $routeParams.estado;
			$scope.cep = $routeParams.cep;
		}

		function redirecionar(){
			$location.url('/historico/' + $routeParams.custID);
		}

    // TABELA bookorders
    // CREATE TABLE `sandvigbookstore`.`bookorders` ( `orderID` INT NOT NULL AUTO_INCREMENT , `custID` INT(6) NOT NULL , 
    // `orderdate` INT(11) NOT NULL , PRIMARY KEY (`orderID`)) ENGINE = InnoDB;


    // TABELA bookorderitems
    // CREATE TABLE `sandvigbookstore`.`bookorderitems` ( `orderID` INT NOT NULL , `ISBN` VARCHAR(11) NOT NULL , 
    // `qty` INT(4) NOT NULL , `price` DOUBLE(6,2) NOT NULL , PRIMARY KEY (`orderID`, `ISBN`)) ENGINE = InnoDB;
       
	}

})();