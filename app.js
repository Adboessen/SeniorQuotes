var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
//import models and mongodb
var {models, connectDb}  = require('./models');

//start server
connectDb().then(async () => {
  //start debugger
  var db =  mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
});

//test student model
var testStudent = new models.studentModel(
  {
    firstName: 'Joe',
    lastName: 'Mama',
    email: 'joemama@gmail.com',
    quote: {
      quote: 'this is joes quote', 
      validated: true, 
      author: {
        firstName: 'Hugh',
        lastName: 'Mongus',
      },
    },
  }
);

/*
//saves test sutdent to database
testStudent.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
*/

//print testStudent
//console.log(testStudent);

//define routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use router middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quotesPage', catalogRouter);

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
