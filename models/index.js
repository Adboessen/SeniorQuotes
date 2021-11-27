//import models
var students = require('./students');
var quotes = require('./quotes');
var authors = require('./authors');

//define models
var studentModel = students.studentModel;
var quoteModel = quotes.quoteModel;
var authorModel = authors.authorModel;


const models = {studentModel, quoteModel, authorModel};

//export models
module.exports = models;
