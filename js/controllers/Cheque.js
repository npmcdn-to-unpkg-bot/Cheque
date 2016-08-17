angular.module("Cheque").controller("listaChequeCtrl", function ($scope, $http, chequeAPI) {
			$scope.tituloCheque = "Cheque";
			$scope.cheques = [];
			$scope.clientes =[];
			$scope.ordenar = function(keyname){
				$scope.sortKey = keyname;
				$scope.reverse = !$scope.reverse;
			};
			$scope.adicionarCheque = function(novoCheque){
				chequeAPI.setCheque(novoCheque).success(function (data){
				delete $scope.chequeIn;
				carregarCheques();
				});
			};
			$scope.apagarCheque = function(cheques){
				$scope.cheques = cheques.filter(function(cheque){
				if (cheque.selecionado) 
					chequeAPI.delCheque(cheque).success(function (data){
					carregarCheques();
					});
				});
			};
			$scope.chequeSelecionado = function(cheques){
				return chequeSelecionado =	cheques.some(function(cheque){
						return cheque.selecionado;
					});
			};

			var carregarCheques = function (){
				chequeAPI.getCheque().success(function(data, status) {
					$scope.cheques = data;
				});			
			};
			var carregarCliente = function (){
				chequeAPI.loadCliente().success(function(data, status) {
					$scope.clientes = data;
				});			
			};			
			carregarCheques();
			carregarCliente();

		});