// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const marksSchema = new mongoose.Schema({
  answerSheetREF: { type: mongoose.Schema.Types.String, ref: 'AnswerSheet' },
  allocMarks: Number,
  totalMarks: Number,
},
{ timestamps: true }); 

module.exports = mongoose.model('Marks', marksSchema);