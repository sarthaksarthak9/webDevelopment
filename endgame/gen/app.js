var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // to setup cookie calling cookie-parser package
var logger = require('morgan');
var session = require('express-session'); // call session package

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//session creation
app.use(session({
  resave: false,  // agar session ki value change nhi hui toh usseh save mth krna, isseh server mai load kam partah hai
  saveUninitialized: false, // sometimes we send data jiska kuch naam nhi hota, toh eseh data ko save na krreh 
  secret: "holaholaholabola" // iski help seh data ko encrypt kiya jaeyga
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // using cookieparser
app.use(express.static(path.join(__dirname, 'public')));

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
