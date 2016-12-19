var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '138.197.32.168',
  user     : 'xxx',
  password : 'xxx',
  database : 'CS320'
});

exports.approve = function(uid, mid, cb) {
    pool.query('UPDATE test SET APPROVAL = Approved, APPROVED_BY = ' + id + ', APPROVAL_TIME = ' + Date.now() + ' WHERE ID = ' + mid + ';',
        function(error, results, fields) {
            if (error){
                cb(error, null)
            }
            else{
                cb(null, results[0]);
            }
        }
    );
}

exports.getLogs = function(startid, endid, cb) {
	pool.query('SELECT * from test WHERE ID BETWEEN ' + startid + ' AND ' + endid + ';',
        function(error, results, fields) {
            if (error){
                cb(error, null)
            }
            if (results == null){
                cb(null, null);
            }
            else{
                cb(null, results);
            }
        }
    );
}
