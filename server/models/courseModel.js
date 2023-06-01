// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const courseSchema = new mongoose.Schema({
  courseID: String,
  name: String,
  shortname: String,
  semester: Number,
  programREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
},
{ timestamps: true }); 

module.exports = mongoose.model('Course', courseSchema);