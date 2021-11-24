//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//Shema Creator
var studentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    id: Number 
});

//Make and exports students model
module.exports = mongoose.model('students', studentSchema);