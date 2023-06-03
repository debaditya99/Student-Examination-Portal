const express = require('express');
const router = express.Router();
const app = express();

const Student = require('../models/studentModel');
const Program = require('../models/programModel');
const Course = require('../models/courseModel');
const AnswerSheet = require('../models/answerSheetModel');
const Marks = require('../models/marksModel');
const Request = require('../models/requestModel');


//to get the user by ID on get request, to fill up the order (FK) table as nested
// router.get('/', async (req, res) => {
//     const user = await Student.findById('64784204143c86a88a51dc1e').populate('programREF')
//     res.json(user);
// });

//POST request to add data to DB
router.post('/', (req, res) => {
    // const studentREF = req.body.studentREF;
    // const name = req.body.name;

    // const program = new Program({
    //     programID: "044",
    //     name: "Masters of Computer Applications",
    //     shortname: 'MCA',
    //     duration: '2',
    // })

    // const student = new Student({
    //     // studentID: '01035304421',
    //     // name: 'Debaditya Mandal',
    //     studentID: '01235304421',
    //     name: 'Sahil Jha',
    // })
    // student.programREF = program
    // student.programREF = '6478d3cd4f3b4ec73356d949'

    // const course = new Course({
    //     courseID: "203",
    //     name: "Artificial Intelligence and Machine Learning",
    //     shortname: 'AIML',
    //     semester: 3,
    // })
    // course.programREF = program
    // course.programREF = '6478d3cd4f3b4ec73356d949'

    // const answersheet = new AnswerSheet({
    //     answerSheetID: '044203', 
        
    // })
    // answersheet.studentREF =  student
    // answersheet.programREF = program
    // answersheet.courseREF = course
    // answersheet.studentREF =  '6478d3cd4f3b4ec73356d94a'
    // answersheet.programREF = '647b3118b1b6e7f003a7f453'
    // answersheet.courseREF = '6478d3cd4f3b4ec73356d94b'

    // const marks = new Marks({
    //     allocMarks: 24,
    //     totalMarks: 25,
    // })
    // marks.answerSheetREF =  answersheet

    // Create multer storage for file uploads
    // student.save();
    // program.save();
    // course.save();
    // answersheet.save();
    // marks.save();
    // datesheet.save();
    res.send('Data has been added');
});

const fs = require('fs');
const multer = require('multer');
const Datesheet = require('../models/datesheetModel');
// const Datesheet = require('../files');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/datesheet', async (req, res) => {
  const filePath = 'Q:/BVICAM/4th Sem/bvicam intern/proj/Student-Examination-Portal/server/files/datesheet IV.pdf'; // Update with the actual file path
  const fileData = fs.readFileSync(filePath);

  try {
    // Retrieve the uploaded file from req.file
    const file = Buffer.from(fileData);

    // Create a new Datesheet document
    const datesheet = new Datesheet({
      semester: 4,
      file: {
        data: file,
        contentType: 'application/pdf'
      }
    });
    datesheet.programREF = '647b3118b1b6e7f003a7f453';

    // Save the Datesheet document to the database
    await datesheet.save();

    res.send('Datesheet document created successfully');
  } catch (err) {
    console.error('Error creating Datesheet document:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;