const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');
const Program = require('../models/programModel');
const Course = require('../models/courseModel');
const AnswerSheet = require('../models/answerSheetModel');
const Marks = require('../models/marksModel');

//to get the user by ID on get request, to fill up the order (FK) table as nested
router.get('/', async (req, res) => {
    const user = await Student.findById('64784204143c86a88a51dc1e').populate('program')
    res.json(user);
});

//POST request to add data to DB
router.post('/', (req, res) => {
    const studentREF = req.body.studentREF;
    const name = req.body.name;

    const program = new Program({
        programID: "044",
        name: "Master of Computer Applications",
        shortname: 'MCA',
    })

    const student = new Student({
        studentID: '01035304421',
        name: 'Debaditya Mandal',
        // studentID: '01235304421',
        // name: 'Sahil Jha',
    })
    student.programREF = program
    // student.programID = '64784204143c86a88a51dc1d'

    const course = new Course({
        courseID: "103",
        name: "Computer Networks",
        shortname: 'CN',
        semester: 1,
    })
    course.programREF = program
    // course.programID = '64784204143c86a88a51dc1d'

    const answersheet = new AnswerSheet({
        answerSheetREF: '044103',
        
    })
    answersheet.studentREF =  student
    answersheet.programREF = program
    answersheet.courseREF = course
    // answersheet.studentID =  '64784204143c86a88a51dc1e'
    // answersheet.programID = '64784204143c86a88a51dc1d'
    // answersheet.courseID = '64784204143c86a88a51dc1f'

    const marks = new Marks({
        allocMarks: 22,
        totalMarks: 25,
    })
    marks.answerSheetREF =  answersheet

    student.save();
    program.save();
    course.save();
    answersheet.save();
    marks.save();
    res.send('Data has been added');
});

//647644962d7d5ae173dbda26
module.exports = router;