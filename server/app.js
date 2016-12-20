var express = require('express');
var flash = require('connect-flash');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var permission = require('permission');
var bodyParser = require('body-parser');
var db = require('./db');

passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

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
})


app.get('/login',
  function(req, res){
    res.render('login');
  });

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/approval',
  require('permission')(['admin']),
  function(req, res){
    res.render('appqueue', { user: req.user });
  });

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
app.post('/submitMacro/:macroType', function(req, res) {
    console.log("submitting macro");
    var Body = req.body;
    var uid = req.user.user_id;
    var mid = Body.macroid;
    var param = Body.parameters;
    var approver = Body.approver_id;

    db.data.updateDB(uid, mid, param, null, 'Submited', approver, Date.now(), null, null, function(err, result){
      if(err){
        //TODO: handle error
      }
      else{
        console.log('macro submitted for approval');
        //might not want or need to send results...
        res.send(result);
      }
    })

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
