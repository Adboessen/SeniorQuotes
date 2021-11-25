var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/my_database';

//import models
var students = require('./students');
var quotes = require('./quotes');

const models = {students, quotes};

//make db function
const connectDb = () => {
    //start server
    return mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
};
//export models and server
module.exports = {
    models,
    connectDb,
}