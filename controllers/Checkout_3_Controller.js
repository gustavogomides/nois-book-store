(function () {
	'use strict';

	angular.module('app')
		.controller('Checkout_3_Controller', Checkout_3_Controller);

	Checkout_3_Controller.$inject = ['$scope', '$routeParams', 'MainService', '$cookies', '$location'];

	function Checkout_3_Controller($scope, $routeParams, MainService, $cookies, $location) {
		var vm = this;
		$scope.controller = vm;
        console.log($scope.customer);

        $scope.quantidadeCheckout3 = 0;
		if($cookies.getObject('infoLivro') != null){
			$cookies.getObject('infoLivro').forEach(function(data){
				$scope.quantidadeCheckout2 += data.quantidade;
			});
		}

    // TABELA bookorders
    // CREATE TABLE `sandvigbookstore`.`bookorders` ( `orderID` INT NOT NULL AUTO_INCREMENT , `custID` INT(6) NOT NULL , 
    // `orderdate` INT(11) NOT NULL , PRIMARY KEY (`orderID`)) ENGINE = InnoDB;


    // TABELA bookorderitems
    // CREATE TABLE `sandvigbookstore`.`bookorderitems` ( `orderID` INT NOT NULL , `ISBN` VARCHAR(11) NOT NULL , 
    // `qty` INT(4) NOT NULL , `price` DOUBLE(6,2) NOT NULL , PRIMARY KEY (`orderID`, `ISBN`)) ENGINE = InnoDB;
       
	}

})();