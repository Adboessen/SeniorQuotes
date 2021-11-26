//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//import author schema
var author = require('./authors');

//Schema Creator
var quoteSchema = new Schema(
    {
    quote: {
        type: String,
        MaxLength: 180,
        required: [true, 'quote required'],
    },
    validated: Boolean,
    author: [author.authorSchema],
    },
    {timestamps: true},
);

//Make and exports students model
const quoteModel = mongoose.model('quotes', quoteSchema);

//export quotes
module.exports = {
    quoteModel,
    quoteSchema,
};
