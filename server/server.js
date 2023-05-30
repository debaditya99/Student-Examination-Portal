const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentManagementSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define a sample API route
app.get('/api/data', (req, res) => {
  // Perform database operations with Mongoose here
  // Return the data as JSON
  res.json({ message: 'Sample API response' });
});
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

app.get('/api/marks', (req, res) => {
  marks.find({}, (err, marks) => {
    if (err) {
      console.error('Error retrieving marks:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(marks);
    }
  });
});

app.get('/api/answerSheet', (req, res) => {
  answerSheet.find({}, (err, answerSheet) => {
    if (err) {
      console.error('Error retrieving answerSheet:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(answerSheet);
    }
  });
});

app.get('/api/course', (req, res) => {
  course.find({}, (err, course) => {
    if (err) {
      console.error('Error retrieving course:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(course);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
