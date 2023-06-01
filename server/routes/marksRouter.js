const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');
const AnswerSheet = require('../models/answerSheetModel');

//GET request to retieve data to DB
router.get('/', async (req, res) => {
    // const studentID = req.body.studentID;
    // const user = await Student.findById(studentID)
    // res.send(user.name);
    const studentREF = req.body.studentREF;

    try {
        const student = await Student.findById(studentREF);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        // res.send(student.name);

        const answerSheets = await AnswerSheet.find({ studentREF: student._id });
        if (!answerSheets || answerSheets.length === 0) {
            return res.status(404).json({ error: 'Answer sheet not found' });
        }

    } catch (err) {
        console.error('Error retrieving student:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const app = express();
// const Course = require('../models/courseModel');
// const Marks = require('../models/marksModel');

// //GET request to retieve data to DB
// router.get('/', async (req, res) => {
//     // const studentID = req.body.studentID;
//     // const user = await Student.findById(studentID)
//     // res.send(user.name);
//     const { semester, studentREF } = req.query;

//     try {
//         const student = await Student.findOne({ studentREF });
//         if (!student) {
//           return res.status(404).json({ error: 'Student not found' });
//         }
//         const answerSheets = await AnswerSheet.find({ studentID: student._id });
//         if (!answerSheets || answerSheets.length === 0) {
//             return res.status(404).json({ error: 'Answer sheet not found' });
//         }
//         const courseREFs = answerSheets.map(answerSheet => answerSheet.courseREF);
//         const courses = await Course.find({ _id: { $in: courseREFs }, semester });
//         if (!courses || courses.length === 0) {
//             return res.status(404).json({ error: 'Course not found' });
//         }
//         const answerSheetREFs = answerSheets.map(answerSheet => answerSheet._id);
//         const marks = await Marks.find({ answerSheetREF: { $in: answerSheetREFs } });
//         if (!marks || marks.length === 0) {
//             return res.status(404).json({ error: 'Marks not found' });
//         }
        
//         const results = answerSheets.map(answerSheet => {
//             const course = courses.find(course => course._id.equals(answerSheet.courseREF));
//             const mark = marks.find(mark => mark.answerSheetREF.equals(answerSheet._id));

//         // const result = {
//         //     courseName: course.name,
//         //     allocMarks: marks.allocMarks,
//         //     totalMarks: marks.totalMarks
//         // };

//         return {
//             courseName: course ? course.name : 'N/A',
//             allocMarks: mark ? mark.allocMarks : 'N/A',
//             totalMarks: mark ? mark.totalMarks : 'N/A'
//         };
//     });
//         res.json(result);

//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error marksrouter' });
//     }
// });

// module.exports = router;