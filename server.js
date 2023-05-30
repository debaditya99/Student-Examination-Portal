const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/studentManagementSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model for the Course collection
const courseSchema = new mongoose.Schema({
  semester: Number,
  courseName: String,
});
const Course = mongoose.model('Course', courseSchema);

// Create a schema and model for the Marks collection
const marksSchema = new mongoose.Schema({
  semester: Number,
  allocMarks: Number,
  totalMarks: Number,
});
const Marks = mongoose.model('Marks', marksSchema);

// Define the route to fetch data based on semester
app.get('/api/data', async (req, res) => {
  const { semester } = req.query;

  try {
    // Retrieve course details
    const course = await Course.findOne({ semester });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Retrieve marks details
    const marks = await Marks.findOne({ semester });
    if (!marks) {
      return res.status(404).json({ error: 'Marks not found' });
    }

    // Prepare the response data
    const { courseName } = course;
    const { allocMarks, totalMarks } = marks;

    res.json({ courseName, allocMarks, totalMarks });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});


// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 3001; // or any other port you want to use

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/studentManagementSystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Define a schema for the Semester collection
// const semesterSchema = new mongoose.Schema({
//   name: String,
// });

// // Define a model for the Semester collection
// const Semester = mongoose.model('Semester', semesterSchema);

// // API endpoint to fetch semester options from MongoDB
// app.get('/api/semesters', (req, res) => {
//   Semester.find({}, 'name', (error, semesters) => {
//     if (error) {
//       console.error('Error fetching semesters:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(semesters);
//     }
//   });
// });

// // API endpoint to save the user's selection to MongoDB
// app.post('/api/selections', (req, res) => {
//   const { semester } = req.body;

//   // Save the user's selection to MongoDB
//   // You can add your own logic here to store the selection data in the database

//   res.json({ success: true });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
