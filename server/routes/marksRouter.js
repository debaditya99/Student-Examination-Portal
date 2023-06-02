const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');
const AnswerSheet = require('../models/answerSheetModel');
const Course = require('../models/courseModel');
const Marks = require('../models/marksModel');
const axios = require('axios');

const emptyCourse = { courseName: "N/A", allocMarks: "-", totalMarks: '-' }
const emptyMarks = { allocMarks: "-", totalMarks: '-' }

//GET request to retieve data to DB
router.get('/', async (req, res) => {
    // const studentID = req.body.studentID;
    // const user = await Student.findById(studentID)
    // res.send(user.name);
    const { semester, studentREF } = req.query;

    //sending request info to Request Collection
    axios
        .get(`http://localhost:3001/data/request`, { 
        params: { studentREF: studentREF,  reqType: 'marks'},
        })
        .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
        })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
        }); 

    try {
        const student = await Student.findById(studentREF).populate('programREF');
        console.log(student)
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        // res.send(student.name);
        console.log(student._id)
        const answerSheets = await AnswerSheet.find({ studentREF: student._id });
        console.log(answerSheets)
        if (!answerSheets || answerSheets.length === 0) {
            // return res.status(404).json({ error: 'Answer sheet not found' });
            return res.send([emptyCourse]);
        }

        const courseREFs = answerSheets.map(answerSheet => answerSheet.courseREF);
        const courses = await Course.find({ _id: { $in: courseREFs }, semester });
        if (!courses || courses.length === 0) {
            // return res.status(404).json({ error: 'Course not found' });
            return res.send([emptyCourse]);
        }

        const answerSheetREFs = answerSheets.map(answerSheet => answerSheet._id);
        const marks = await Marks.find({ answerSheetREF: { $in: answerSheetREFs } });
        if (!marks || marks.length === 0) {
            // return res.status(404).json({ error: 'Marks not found' });
            // return res.send([emptyCourse]);
            const results = courses.map(course => ({
                courseName: course.name,
                ...emptyMarks
              }));
              return res.send(results);
        }

        // const results = answerSheets.map(answerSheet => {
        //     const course = courses.find(course => course._id.equals(answerSheet.courseREF));
        //     const mark = marks.find(mark => mark.answerSheetREF.equals(answerSheet._id));

        //     if (!course || !mark) {
        //         return null; // Skip this iteration
        //     }

        //     return {
        //             courseName: course ? course.name : 'N/A',
        //             allocMarks: mark ? mark.allocMarks : 'N/A',
        //             totalMarks: mark ? mark.totalMarks : 'N/A'
        //     };
        // });

        const results = answerSheets.reduce((acc, answerSheet) => {
            const course = courses.find(course => course._id.equals(answerSheet.courseREF));
            const mark = marks.find(mark => mark.answerSheetREF.equals(answerSheet._id));
          
            if (course && mark) {
              acc.push({
                courseName: course.name,
                allocMarks: mark.allocMarks,
                totalMarks: mark.totalMarks
              });
            }
          
            return acc;
          }, []);
        
        if(results == (0) || results == []){
            const results = courses.map(course => ({
                courseName: course.name,
                ...emptyMarks
              }));
              return res.send(results);
        }

        console.log(results)
        res.send(results);
        
//.toHexString() 
    } catch (err) {
        console.error('Error retrieving student:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;