// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const programSchema = new mongoose.Schema({
  programID: String,
  name: String,
  shortname: String,
  duration: Number,
},
{ timestamps: true }); 

module.exports = mongoose.model('Program', programSchema);