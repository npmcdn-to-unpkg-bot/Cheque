var express = require("express");
var app = express();
var banco = require("./connnectDataBase.js");

	//res.send(banco.listAll());
app.get('/consulta', function(req, res){
	banco.listAll().then(function(resultado){
		res.send(resultado) ;
	})
});


var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port

	console.log(host);
	console.log(port);
});

