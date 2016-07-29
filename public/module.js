var banco = require("./connnectDataBase.js");

var objeto = {dt_cheque: "12-22-2016", nr_pessoa: 11, nr_cheque: 222};
//console.log(banco.insertCheque(objeto));
console.log(banco.listAll());