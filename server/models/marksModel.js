const mongoose = require('mongoose');

// Define a schema for the "marks" collection
const marksSchema = new mongoose.Schema({
  sheetID: Number,
  allocMarks: Number,
  totalMarks: Number,
});

const answerSheetSchema = new mongoose.Schema({
  sheetID: Number,
  courseID: Number,
});

const courseSchema = new mongoose.Schema({
  courseID: Number,
  name: String,
  semester: Number,
});

// Create a model for the "marks" collection
const marks = mongoose.model('marks', marksSchema);
const answerSheet = mongoose.model('answerSheet', answerSheetSchema);
const course = mongoose.model('course', courseSchema);

module.exports = marks;
module.exports = answerSheet;
module.exports = course;
