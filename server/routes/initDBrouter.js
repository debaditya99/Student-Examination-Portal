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
    const user = await User.findById('647644962d7d5ae173dbda26').populate('order')
    res.json(user);
});

//POST request to add data to DB
router.post('/', (req, res) => {
    const studentID = req.body.studentID;
    const name = req.body.name;

    const program = new Program({
        programID: "044",
        name: "Master of Computer Applications",
        shortname: 'MCA',
    })

    const student = new Student({
        studentID: '01035304421',
        name: 'Debaditya Mandal',
    })
    student.programID = program

    const course = new Course({
        courseID: "101",
        name: "Discrete Structures",
        shortname: 'DS',
    })
    course.programID = program

    const answersheet = new AnswerSheet({
        answerSheetID: '044101',
        
    })
    answersheet.studentID =  student
    answersheet.programID = program
    answersheet.courseID = course

    const marks = new Marks({
        allocMarks: 22,
        totalMarks: 25,
    })
    marks.answerSheetID =  answersheet

    student.save();
    program.save();
    course.save();
    answersheet.save();
    marks.save();
    res.send('Data has been added');
});

//647644962d7d5ae173dbda26
module.exports = router;