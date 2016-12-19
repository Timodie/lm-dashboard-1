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

app.get('/logs/:logStart/:logEnd',
  require('permission')(['admin']),
  function(req, res){
    if (req.params.logStart == null || req.params.logEnd == null) {
      //load view
    }
    db.data.getLogs(req.params.logStart, req.params.logEnd, function(err, results) {
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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

