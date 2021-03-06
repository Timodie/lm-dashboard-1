var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host     : '138.197.32.168',
  user     : 'Carter',
  password : '!carterABCD1234',
  database : 'dummy'
});
var result = ""
exports.approve = function(uid, mid, cb) {
    pool.query('UPDATE LOG SET approver = ' + uid + ' WHERE log_id = ' + mid + ';',
        function(error, results, fields) {
            if (error){
                cb(error, null)
            }
          }
    );
    pool.query('INSERT INTO TIME_TABLE(log, status, timestamp)' +
             'VALUES (' + mid + status + Date.now() + ');',
        function(error, results, fields) {
            if (error){
                cb(error, null)
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

exports.getApproves = function(cb) {
	pool.query('SELECT LOG.*, TIME_TABLE.timestamp FROM LOG JOIN TIME_TABLE ON LOG.log_id = TIME_TABLE.log WHERE TIME_TABLE.status = \'Submitted\';',
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


// Functions that actually runs a macro.
exports.run = function(mid, param) {
    pool.query('SELECT MACRO.macro_name FROM MACRO WHERE MACRO.macro_id =' + mid,
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
  var name = results[0];
  pool.query('EXECUTE PM_EDW_META_D.' + name + '(' + param + ');',
    function(error, results, fields){
    if(error){
      cb(error, null);
    }
    if (results == null){
          cb(null, null);
    }
    else{
        cb(null, results);
        result = result[0].solution;
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

// Functions that writes log into our DB.
exports.updateLOG = function(log_id, uid, mid, param, approver, result, status, cb) {
  pool.query('INSERT INTO LOG(log_id, uid, mid, param, approver, result) ' +
             'VALUES (' + log_id + ', ' + mid + ', ' + uid  + ', \'' +  param  + '\', ' +  approver  + ', \'' +  result + '\'); ',
    function(error, results, fields){
      if(error){
        cb(error, null);
      }
    }
  );
  pool.query('INSERT INTO TIME_TABLE(log, status, date)' +
             'VALUES (' + log_id  + ', \'' +  status  + '\', ' +  Date.now() + ');' ,
      function(error, results, fileds){
        if(error){
          cb(error,null);
        }
        else {
          cb(null, results);
        }
      }
  );
}

// Getting status of a macro.
exports.getStatus = function(){
  pool.query("SELECT * FROM Status;",
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
