var express = require('express');
var flash = require('connect-flash');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var permission = require('permission');
var bodyParser = require('body-parser');
var db = require('./db');

// passport.use(new Strategy(
//   function(username, password, cb) {
//     db.users.findByUsername(username, function(err, user) {
//       if (err) { return cb(err); }
//       if (!user) { return cb(null, false); }
//       if (user.password != password) { return cb(null, false); }
//       return cb(null, user);
//     });
//   }));

passport.serializeUser(function(user, cb) {
  cb(null, user.user_id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

var app = express();

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('../client/build'));


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.json({"success": "true"});
  });

// app.get('/approval',
//   require('permission')(['admin']),
//   function(req, res){
//     db.data.getApproves(function(err, data) {
//       res.json(JSON.stringify(data));
//   });

app.post('/approval',
  require('permission')(['admin']),
  function(req, res){
    db.data.approve(req.user.user_id, req.body.macroid, function(err, user) {
      if (err) {
        //flash placeholder
        //req.flash('error', 'Could not approve macro run');
      }
      else {
        //call queue function
        //flash placeholder
        //req.flash('success', 'Macro queued to run');
      }
    });
  });

app.get('/logs/:logDay',
  require('permission')(['admin']),
  function(req, res){
    if (req.params.logDay) {
      //load view
    }
    db.data.getLogs(req.params.logDay, function(err, results) {
      if (err) {
        //flash placeholder
        //req.flash('error', 'Could not get logs');
      }
      else {
        res.send(results);
      }
    });
  });

app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

/*
macroType is either update or delete. For now these do the same thing.
We may want to add update and delete as feature in our LOG table so that we
can easily more easly access Liberty Mutual's DB.
TODO: macro id, parameters, and approver need to be properly passed/validated
*/

app.post('/submitMacro/update/:macro_id/params/:parameters/approver/:approver', function(req, res) {
   console.log("submitting macro");
   var Body = req.body;
   // var uid = req.user.user_id;
   var uid =1;
   var log_id =1;
   var mid = req.params.macro_id;
   var param = req.params.parameters;
   var approver = 1;
   db.data.updateLOG(log_id, uid, mid, param, approver, null, 'Submitted', function(err, result){
     if(err){
       console.log("now submitting macro");
       //TODO: handle error
     }
     else{
       console.log('macro submitted for approval');
       //might not want or need to send results...
       res.send(result);
     }
   });
 });

 app.post('/deleteMacro/update/:macro_id/params/:parameters/approver/:approver', function(req, res) {
    console.log("submitting macro");
    var Body = req.body;
    // var uid = req.user.user_id;
    var uid =1;
    var log_id =1;
    var mid = req.params.macro_id;
    var param = req.params.parameters;
    var approver = 1;
    db.data.updateLOG(log_id, uid, mid, param, approver, null, 'Submitted', function(err, result){
      if(err){
        //TODO: handle error
      }
      else{
        console.log('macro submitted for approval');
        //might not want or need to send results...
        res.send(result);
      }
    });
  });

// app.post('/submitMacro/update', function(req, res) {
//     console.log("submitting macro");
//     var Body = req.body;
//     // var uid = req.user.user_id;
//     var uid =1;
//     console.log(uid);
//     var mid = Body.macro_id;
//     var param = Body.parameters;
//     var approver = Body.approver;
//
//     db.data.updateDB(uid, mid, param, null, 'Submited', approver, Date.now(), null, null, function(err, result){
//       if(err){
//         //TODO: handle error
//       }
//       else{
//         console.log('macro submitted for approval');
//         //might not want or need to send results...
//         res.send(result);
//       }
//     })
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
