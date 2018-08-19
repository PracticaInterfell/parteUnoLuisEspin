var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

// view engine setup
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist/parteUnoLuisEspin')));

//Access-Control-Allow-Origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/parteUnoLuisEspin/index.html'));
});


module.exports = app;
