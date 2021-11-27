//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var authorSchema = new Schema(
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
    },
    {timestamps: true},
);

//Make and exports students model
const authorModel = mongoose.model('authors', authorSchema);

//export quotes
module.exports = authorModel;

