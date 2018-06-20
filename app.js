var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'images')));

app.use('/css', express.static(__dirname + '/css'));
app.use('/css/lib/bootstrap', express.static(__dirname + '/css/lib/bootstrap'));
app.use('/js/lib/jquery', express.static(__dirname + '/js/lib/jquery'));
app.use('/js/lib/bootstrap/js', express.static(__dirname + '/js/lib/bootstrap/jsp'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/js/lib/sticky-kit-master/dist', express.static(__dirname + '/js/lib/sticky-kit-master/dist'));
app.use('/icons/font-awesome/css', express.static(__dirname + '/icons/font-awesome/css'));
app.use('/icons/simple-line-icons/css', express.static(__dirname + '/icons/simple-line-icons/css'));
app.use('/icons/weather-icons/css', express.static(__dirname + '/icons/weather-icons/css'));
app.use('/icons/themify-icons', express.static(__dirname + '/icons/themify-icons'));
app.use('/icons/linea-icons', express.static(__dirname + '/icons/linea-icons'));
app.use('/icons/flag-icon-css', express.static(__dirname + '/icons/flag-icon-css'));
app.use('/icons/material-design-iconic-font/css', express.static(__dirname + '/icons/material-design-iconic-font/css'));
app.use('/js/lib/bootstrap/js', express.static(__dirname + '/js/lib/bootstrap/js'));
app.use('/css/lib/bootstrap', express.static(__dirname + '/css/lib/bootstrap'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/images/users', express.static(__dirname + '/images/users'));
app.use('/images/avatar', express.static(__dirname + '/images/avatar'));
app.use('/icons/font-awesome/fonts', express.static(__dirname + '/icons/font-awesome/fonts'));
app.use('/icons/themify-icons/fonts', express.static(__dirname + '/icons/themify-icons/fonts'));
app.use('/icons/simple-line-icons/fonts', express.static(__dirname + '/icons/simple-line-icons/fonts'));


// Router
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
