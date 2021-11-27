//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//Schema Creator
var studentSchema = new Schema(
    {
    firstName: {
        type: String,
        maxLength: 20,
        required: [true, 'first name required'],
    },
    lastName: {
        type: String,
        maxLength: 20,
        required: [true, 'last name required'],
    },
    email: {
        type: String,
        //validate email syntax
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, 'email required'],
    },
    quote: [{
        type: Schema.types.ObjectId,
        ref: 'quotes',
    }],
    },    
    {timestamps: true},
);

//Cascade delete student quote with student
studentSchema.pre('remove', function(next) {
    this.model('quotes').deleteMany({ user: this._id }, next);
});

//Make students model
const studentModel = mongoose.model('students', studentSchema);

//export students
module.exports = studentModel; 
