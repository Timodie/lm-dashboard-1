var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'host',
  user     : 'user',
  password : 'password',
  database : 'mysql'
});



exports.findByUsername = function(username, cb) {
    connection.connect();
    connection.query('SELECT * where username =' + username,
        function(error, results, fields) {
            if (error){
                cb(err, null)
            }
            if (results == null){
                cb(null, null);
            }
            else{
                cb(null, results[0]);
            }
        }
    );
    connection.end();
}

exports.findById = function(id, cb) {
    connection.connect();
    var idx = id - 1;
    connection.query('SELECT * where userid =' + idx,
        function(error, results, fields) {
            if (error){
                cb(err, null)
            }
            if (results == null){

                cb(null, null);
            }
            else{
                cb(null, results[0]);
            }
        }
    );
    connection.end();
}

