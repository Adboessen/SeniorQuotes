//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

//Schema Creator
var validationSchema = new Schema(
  {
    StatusMsg: String,
    validated: Boolean,
  },
  { timestamps: true }
);

const validationModel = mongoose.model("validation", validationSchema);

module.exports = validationModel;
