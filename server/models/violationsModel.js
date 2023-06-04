// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const violationSchema = new mongoose.Schema({
    studentREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    answerSheetREF: { type: mongoose.Schema.Types.ObjectId, ref: 'AnswerSheet' },
    description: String
},
{ timestamps: true }); 

module.exports = mongoose.model('Violations', violationSchema);