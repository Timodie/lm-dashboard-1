var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '138.197.32.168',
  user     : 'Carter',
  password : '!carterABCD1234',
  database : 'dummy'
});
//format is req.user.(user_id, role, username, password)
exports.findByUsername = function(username, cb) {
    pool.query('SELECT * from user where username = \'' + username + '\';',
        function(error, results, fields) {
            console.log("logging results");
            console.log(results);
            if (error){
                cb(error, null)
            }
          else if (results == null){
                cb(null, null);
            }
            else{
                cb(null, results[0]);
            }
        }
    );
}

exports.findById = function(id, cb) {
    pool.query('SELECT * from user where user_id = \'' + id +'\';',
        function(error, results, fields) {
            if (error){
                cb(error, null)
            }
          else if (results == null){
                cb(null, null);
            }
            else{
                cb(null, results[0]);
            }
        }
    );
}
