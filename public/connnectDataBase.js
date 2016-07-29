
var pg = require('pg');
var conString = "postgres://postgres:123456@localhost/cheque";



  var query = function (sql, params) {
    return new Promise(function (resolve, reject) {
      pg.connect(conString, function (err, client, done) {
        if (err) {
        console.log(err);
        };
        var query = client.query(sql, params);

        var rows = [];

        query.on('error', function (err) {
          done();
          console.log(sql + ' -> ' + params);
          reject(err);
        });

        query.on('row', function (row) {
         rows.push(row);
        });

        query.on('end', function (result) {
          done();
        resolve(rows);
        });
      });
    });
  };

  




  module.exports.insertCheque = function(cheque){
    var query1 = "INSERT INTO cheque(dt_cheque, nr_pessoa, nr_cheque) VALUES($1,$2,$3)";
    var params = [cheque.dt_cheque, cheque.nr_pessoa, cheque.nr_cheque];
    query(query1, params).then(function (result) {
      console.log("Inserido com Sucesso");
    }).catch(function(error) {
       console.log(error);
      });
  };


  module.exports.deleteCheque = function(cheque){
    var query1 = "DELETE from cheque where nr_cheque = $1";
    var params = [cheque.nr_cheque];
    query(query1, params).then(function (result) {
      console.log("Deletedo com Sucesso");
    }).catch(function(error) {
       console.log(error);
      });
  };

  module.exports.updateCheque = function(cheque){
    var query1 = "UPDATE cheque set dt_cheque = $1 , nr_pessoa = $2 where nr_cheque = $3";
    var params = [cheque.dt_cheque, cheque.nr_pessoa, cheque.nr_cheque];
    query(query1, params).then(function (result) {
      console.log("Editado com Sucesso");
    }).catch(function(error) {
       console.log(error);
      });
  };

  module.exports.consultaCheque = function(cheque){
    var query1 = "select * from cheque where nr_pessoa = $1";
    var params = [cheque.nr_pessoa];
    query(query1, params).then(function (result) {
      console.log(result);
    }).catch(function(error) {
       console.log(error);
      });
  };

  module.exports.listAll = function(){
    var query1 = "select * from cheque";
    return query(query1, [])
  }
/*  module.exports.listAll = function(){
    var query1 = "select * from cheque";
    query(query1, []).then(function (result) {
      console.log(result);
    }).catch(function(error) {
       console.log(error);
      });
  };*/


