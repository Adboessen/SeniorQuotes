//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var authorSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        //link author with quote
        quote: { type: mongoose.Schema.Types.ObjectId, ref: 'quotes' },
    },
    {timestamps: true},
);

//Make and exports students model
const Author = mongoose.model('authors', authorSchema);

//export quotes
module.exports = Author;
