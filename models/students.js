//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//Schema Creator
var studentSchema = new Schema(
    {
    firstName: String,
    lastName: String,
    email: String,
    id: Number, 
    },    
    {timestamps: true},
);

//Cascade delete student quote with student
studentSchema.pre('remove', function(next) {
    this.model('quotes').deleteMany({ user: this._id }, next);
});

//Make students model
const Student = mongoose.model('students', studentSchema);

//export studetns
module.exports = Student;