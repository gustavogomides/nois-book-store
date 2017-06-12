(function () {
	'use strict';

	angular.module('app')
		.controller('CarrinhoController', CarrinhoController);

	CarrinhoController.$inject = ['$scope', '$routeParams', 'MainService', '$cookies'];

	function CarrinhoController($scope, $routeParams, MainService, $cookies) {
		var vm = this;
		$scope.controller = vm;

		vm.getCarrinho = getCarrinho;
		vm.atualizaQuantidade = atualizaQuantidade;

		var bookArray = [];

		if($cookies.getObject('infoLivro') != null){
			bookArray = $cookies.getObject('infoLivro');
            bookArray.forEach(function(data){
				$scope.quantidadeCarrinho += data.quantidade;
			});
		}else{
			bookArray = [];
		}

		// FUNÇÃO UTILIZADA PARA RECUPERAR OS LIVROS DO CARRINHO
        function getCarrinho() {
			$scope.cart = $cookies.getObject('infoLivro');
			if($scope.cart != null){
				$scope.cart.subTot = 0;
				$scope.cart.shipping = 0;
				$scope.cart.total = 0;
				$scope.cart.forEach(function(data){
					$scope.cart.subTot += data.subTotal;
					$scope.cart.shipping += data.frete;
					$scope.cart.total = $scope.cart.subTot + $scope.cart.shipping;
				});
			}
			console.log($scope.cart);
		}

		// FUNÇÃO UTILIZADA PARA ATUALIZAR A QUANTIDADE DE UM DETERMINADO LIVRO
		// E RECUPERAR AS INFORMAÇÕES DO LIVRO
		function atualizaQuantidade(isbn, add){
			if($routeParams.isbn.split("add")[1] == -1 && isbn == null){
				getCarrinho();
			}else{
				var existe = false;
				
				// variável auxiliar que armazena o isbn
				var auxIsbn = null;
				if(isbn == null){
					var split = $routeParams.isbn.split("add");
					auxIsbn = split[1];
				}else{
					auxIsbn = isbn;
				}
				
				// verificando se aquele livro já existe no carrinho de compras
				bookArray.forEach(function(data){
					if(data.isbn == auxIsbn){
						existe = true;
					}
				});
				
				if(existe){ // se aquele livro já está no carrinho de compras
					if(add){ // só incremento a quantidade
						bookArray.forEach(function(data){
							if(data.isbn == auxIsbn){
								data.quantidade += 1;
							}
						});
					} else { // só decremento a quantidade
						bookArray.forEach(function(data){
							if(data.isbn == auxIsbn){
								data.quantidade -= 1;
								if(data.quantidade <= 0){ // se a quantidade do livro se torna 0
									if(bookArray.length == 1){ // se só existe um livro no carrinho
										bookArray = bookArray.filter(function(book){
											return book.isbn != auxIsbn;
										});
										$cookies.remove('infoLivro');
										$scope.cart = {};
									}else{
										bookArray = bookArray.filter(function(book){
											return book.isbn != auxIsbn;
										});
									}
									
								}
							}
						});
					}			
				}else{ // se aquele livro não está no carrinho de compras
					if(add){ // crio um nova posição para o livro e incremento a quantidade
						bookArray.push({
							isbn: auxIsbn,
							quantidade: 0,
							titulo: '',
							preco: 0,
							total: 0,
							subTotal: 0,
							frete: 0
						});
						bookArray.forEach(function(data){
							if(data.isbn == auxIsbn){
								data.quantidade += 1;
							}
						});
					}
				}
				
				// obtendo a data atual para setar o tempo
				// de expiração do cookie
				var expirationDate = new Date();
				expirationDate.setDate(expirationDate.getDate() + 7);

				// obtendo as informações dos livros do carrinho de compras na API
				// e setando o cookie
				setShoppingCartInfo(function(){
					$cookies.putObject('infoLivro', bookArray, {
						expires: expirationDate
					});
					getCarrinho();
				});
	}
		}

		// FUNÇÃO RESPONSÁVEL POR RECUPERAR AS INFORMAÇÕES DOS LIVROS
		// DO CARRINHO NA API
		function setShoppingCartInfo(callback){
			var cont = 0;
			bookArray.forEach(function(data){
				MainService.getLivroByIsbn(data.isbn, function(result){
					cont++;
					if(cont == bookArray.length){
						setInfo(result, data);
						callback();
					}else{
						setInfo(result, data);
					}
				});
			});
		}

		// FUNÇÃO RESPONSÁVEL POR SETAR AS INFORMAÇÕES DOS LIVROS
		function setInfo(result, data){
			data.titulo = result.title;
			data.preco = parseInt(result.price);
			data.subTotal = result.price * data.quantidade;
			data.frete = (data.quantidade - 1) * 5 + 10;
			data.total = data.subTotal + data.frete;
		}
	}

})();