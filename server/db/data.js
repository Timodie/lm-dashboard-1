var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '138.197.32.168',
  user     : 'xxx',
  password : 'xxx',
  database : 'dummy'
});
var result = ""
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

exports.getLogs = function(date, cb) {
	pool.query('SELECT * from log WHERE date_submitted =' + date + ';',
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

exports.run = function(uid, mid, cb) {
  pool.query('SELECT * FROM test;',
    function(error, results, fields){
    if(error){
      cb(error, null);
    }
    if (results == null){
          cb(null, null);
    }
    else{
        cb(null, results);
        result = resulst[0];
      }
    }
  );
}

/*  DO NOT DELETE --- Used for submitMacro. If modified, will need to modify 
    submitMacro to reflect changes.
    TODO: Make changes to reflect changes in db
*/
exports.updateDB = function(uid, mid, param, result, status, approver_id, data_submitted, date_approved, date_ran) {
  pool.query('INSERT INTO MACRO(macro_id, user_id, param, result, status, approver_id, date_submitted, date_approved, date_ran) ' +
             'VALUES (' + mid + uid + param + result + status + approver_id + date_submitted + date_approved + date_ran + '); ',
    function(error, results, fields){
      if(error){
        cb(error, null);
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
