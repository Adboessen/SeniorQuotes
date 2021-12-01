var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var mongoose = require('mongoose');
//import mongodb models
var models  = require('./models');

//local mongodb server path
var mongoURL = process.env.mongoURL;

//start mongodb server
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});
var db =  mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
//test author
var testAuthor = new models.authorModel(
  {
    firstName: 'Hugh',
    lastName: 'Mungus',
  }
);

//test quote
var testQuote = new models.quoteModel(
  {
    quote: 'this is joes quote',
    validated: true,
    author: testAuthor._id,
  }
);

//test student model
var testStudent = new models.studentModel(
  {
    firstName: 'Joe',
    lastName: 'Mama',
    email: 'joemama@gmail.com',
    quote: testQuote._id,
  }
);

//saves test sutdent to database
testStudent.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
testQuote.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
testAuthor.save(function (err) {
  if (err) return handleError(err);
  // saved!
});


//print testStudent
console.log(testStudent);
console.log(testQuote);
console.log(testAuthor);
*/


//define routers
var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
var adminRouter = require('./routes/admin');

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
app.use('/students', studentsRouter);
app.use('/admin', adminRouter);

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
