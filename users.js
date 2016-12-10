var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'host',
  user     : 'user',
  password : 'password',
  database : 'mysql'
});

connection.connect();

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        connection.query('SELECT * where username =' + username,
            function(error, results, fields) {
                if (error)
                    throw error;
                return callback(results[0]);
            }
        );
    }
    return cb(null, null);
  });
}
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();