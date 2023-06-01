// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const answerSheetSchema = new mongoose.Schema({
  answerSheetID: String,
  studentREF: { type: mongoose.Schema.Types.String, ref: 'Student' },
  programREF: { type: mongoose.Schema.Types.String, ref: 'Program' },
  courseREF: { type: mongoose.Schema.Types.String, ref: 'Course' },
},
{ timestamps: true }); 

module.exports = mongoose.model('AnswerSheet', answerSheetSchema);