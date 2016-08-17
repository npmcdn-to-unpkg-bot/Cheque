		angular.module("cadastroPessoa").controller("cadastraPessoa", function ($scope, $http, pessoaAPI) {
			$scope.tituloPessoa = "Cadastro Pessoa";
			$scope.pessoas = [];
			$scope.clientes =[];
			$scope.adicionaPessoa = function(novoCliente){
				pessoaAPI.setCliente(novoCliente).success(function (data){
				delete $scope.pessoaIn;
				carregarCliente();
				});
			};
			$scope.apagaPessoa = function(pessoas){
				$scope.pessoas = pessoas.filter(function(pessoa){
				if (pessoa.selecionado) 
					pessoaAPI.delCliente(pessoa).success(function (data){
					carregarCliente();
					});
				});
			};
			$scope.pessoaselecionado = function(pessoas){
				return pessoaselecionado =	pessoas.some(function(pessoa){
						return pessoa.selecionado;
					});
			};

			var carregarCliente = function (){
				pessoaAPI.loadCliente().success(function(data, status) {
					$scope.pessoas = data;
				});			
			};			
			carregarCliente();

		});