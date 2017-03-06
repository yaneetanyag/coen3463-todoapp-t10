var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');

var MongoURI = 'mongodb://admin:password@ds119380.mlab.com:19380/coen3463-todolist';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
      "maxAge": 86400000,
    }
}));

app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/user');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.connect(MongoURI, function(err, res) {
    if (err) {
        console.log('Error connecting to ' + MongoURI);
    } else {
        console.log('MongoDB connected!');
    }
});

// restify.serve(router, User);
// app.use(router);

app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);



app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
