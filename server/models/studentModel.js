// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const studentSchema = new mongoose.Schema({
  studentID: String,
  name: String,
  programREF: { type: mongoose.Schema.Types.String, ref: 'Program' },
},
{ timestamps: true }); 

module.exports = mongoose.model('Student', studentSchema);