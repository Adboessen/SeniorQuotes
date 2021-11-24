//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//Schema Creator
var quoteSchema = new Schema(
    {
    quote: String,
    author: String,
    //links quotes with student
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
    },
    {timestamps: true},
);

//Make and exports students model
const Quote = mongoose.model('quotes', quoteSchema);

//export quotes
module.exports = Quote;
