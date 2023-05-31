// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const answerSheetSchema = new mongoose.Schema({
  answerSheetID: String,
  studentID: { type: mongoose.Schema.Types.String, ref: 'Student' },
  programID: { type: mongoose.Schema.Types.String, ref: 'Program' },
  courseID: { type: mongoose.Schema.Types.String, ref: 'Course' },
},
{ timestamps: true }); 

module.exports = mongoose.model('AnswerSheet', answerSheetSchema);