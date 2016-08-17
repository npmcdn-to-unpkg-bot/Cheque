angular.module("Cheque").factory("chequeAPI", function ($http) {

	var _getCheque = function () {
		return $http.get("http://localhost:8081/consulta");
	};

	var _setCheque = function (novoCheque) {
		return $http.post("http://localhost:8081/adicionarCheques", novoCheque);
	};

	var _delCheque = function (delCheque) {
		return $http.post("http://localhost:8081/deletaCheque", delCheque);
	};

	var _loadCliente = function () {
		return $http.get("http://localhost:8081/consultaCliente");
	};

	return {
		getCheque: _getCheque,
		setCheque: _setCheque,
		delCheque: _delCheque,
		loadCliente: _loadCliente
	};
});