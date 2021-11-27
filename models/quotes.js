//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//Schema Creator
var quoteSchema = new Schema(
    {
    quote: {
        type: String,
        //validate quote length
        MaxLength: 180,
        required: [true, 'quote required'],
    },
    validated: Boolean,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'authors',
    }],
    },
    {timestamps: true},
);

//Cascade delete quote author with quote
quoteSchema.pre('remove', function(next) {
    this.model('authors').deleteMany({ user: this._id }, next);
});

//Make and exports students model
const quoteModel = mongoose.model('quotes', quoteSchema);

//export quotes
module.exports = quoteModel;

