angular.module("cadastroPessoa").factory("pessoaAPI", function ($http) {

	var _setCliente = function (novaPessoa) {
		return $http.post("http://localhost:8081/adicionaPessoa", novaPessoa);
	};

	var _delCliente = function (delPessoa) {
		return $http.post("http://localhost:8081/deletaPessoa", delPessoa);
	};

	var _loadCliente = function () {
		return $http.get("http://localhost:8081/consultaCliente");
	};

	return {
		setCliente: _setCliente,
		delCliente: _delCliente,
		loadCliente: _loadCliente
	};
});