var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var fellowshipRouter = require('./routes/fellowships');
var apiRouter = require('./routes/api');

var app = express();

//Mongo Setup
const mongoip = '127.0.0.1';

var url = 'mongodb://' + mongoip + ':27107/SmittyPlus';
//var url = 'mongodb://varodb:varopass@' + mongoip + ':2771/VaroDB';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'icon.ico')));

app.use('/', indexRouter);
app.use('/fellowships', fellowshipRouter);
app.use('/api', apiRouter);

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
