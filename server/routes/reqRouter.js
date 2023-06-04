const express = require('express');
const router = express.Router();
const axios = require('axios');

const Student = require('../models/studentModel');
const Request = require('../models/requestModel');


//to get the user by ID on get request, to fill up the order (FK) table as nested
router.get('/', async (req, res) => {
    const { studentREF, reqType } = req.query;

    const request = new Request({
        requestType: reqType,
        status: 0,
    })
    request.studentREF =  studentREF;
    // const user = await Student.findById('64784204143c86a88a51dc1e').populate('programREF')
    // res.json(user);
    
    request.save();
    res.send("Request Sent")
});

//Checking whether Certificate Request has already been sent or not by the Student logged in
router.get('/check', async (req, res) => {
    const { studentREF } = req.query;

    const student = await Student.findById(studentREF).populate('programREF');
    // console.log(student)/
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    // res.send(student.name);
    // console.log(student._id)
    const requests = await Request.find({ studentREF: student._id, status: 0, requestType: 'bonafide-certificate' });
    // console.log(requests)
    if (!requests || requests.length === 0) {
        // return res.status(404).json({ error: 'Answer sheet not found' });
    } else {
        res.send("Already Exists")
    }
});

const Program = require('../models/programModel');

router.get('/semesters', async (req, res) => {
  const { studentREF } = req.query;
  try{
    const student = await Student.findById(studentREF).populate('programREF');
    // console.log(student)
    const semester = Number(student.programREF.duration) * 2;
     res.send(semester.toString());

  } catch(err) {
    console.error('Error retrieving Semesters:', err);
    res.status(500).json({ error: 'Server error' });
  }
})

const Course = require('../models/courseModel');
const AnswerSheet = require('../models/answerSheetModel');
const emptyCourse = { name: "N/A"}

router.get('/answersheet', async (req, res) => {
    const { studentREF, semester } = req.query;

    try {
      const ansReqRes = await axios.get(`http://localhost:3001/data/request`, { 
            params: { studentREF: studentREF,  reqType: 'answersheet'},
        })
        console.log('GET request successful:', ansReqRes);
      const student = await Student.findById(studentREF).populate('programREF');
      // console.log(student)
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      const answerSheets = await AnswerSheet.find({ 
        programREF: student.programREF,
        studentREF: student._id,
      })

    const courseREFs = answerSheets.map(answerSheet => answerSheet.courseREF);
        const courses = await Course.find({ _id: { $in: courseREFs }, semester });

        const results = answerSheets.reduce((acc, answerSheet) => {
          const course = courses.find(course => (course._id.equals(answerSheet.courseREF)));
          if (course && answerSheet.file.data) {
            acc.push({
              name: `${course.name} (${course.shortname})`,
              filename: `Uploaded on ${answerSheet.updatedAt}`,
              url: `http://localhost:3001/data/download/answersheet/${answerSheet._id}`,
              file: answerSheet.file,
            });
           }
          return acc;
        }, []);

    res.json(results);
    } catch (err) {
      console.error('Error retrieving Answer Sheets:', err);
      res.status(500).json({ error: 'Server error' });
    }
  })

const Marksheet = require('../models/marksheetModel');

router.get('/marksheet', async (req, res) => {
  const { studentREF } = req.query;

  try{
    const marksheetReqRes = await axios.get(`http://localhost:3001/data/request`, { 
            params: { studentREF: studentREF,  reqType: 'answersheet'},
    })
    console.log('GET request successful:', marksheetReqRes);

    const student = await Student.findById(studentREF).populate('programREF')
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const marksheets = await Marksheet.find({
      studentREF: studentREF,
    })

    const results = marksheets.reduce((acc, marksheet) => {
      acc.push({
        name: `Semester ${marksheet.semester}`,
        filename: `Uploaded on ${marksheet.updatedAt}`,
        url: `http://localhost:3001/data/download/marksheet/${marksheet._id}`,
        file: marksheet.file,
      })
      return acc;
    }, [])

    res.json(results)

  } catch (err) {
    console.error('Error retrieving Answer Sheets:', err);
    res.status(500).json({ error: 'Server error' });
  }
})

const Datesheet = require('../models/datesheetModel');

router.get('/datesheet', async (req, res) => {
    const { studentREF, semester } = req.query;
    
    //sending request info to Request Collection
    // axios
    //     .get(`http://localhost:3001/data/request`, { 
    //     params: { studentREF: studentREF,  reqType: 'datesheet'},
    //     })
    //     .then((res) => {
    //     console.log('GET request successful:', res.data);
    //     // Perform any necessary actions upon successful response
    //     })
    //     .catch((err) => {
    //         console.error('Error sending GET request:', err);
    //         // Handle any errors that occurred during the request
    //     });            

    try {
      const dateReqRes = await axios.get(`http://localhost:3001/data/request`, { 
            params: { studentREF: studentREF,  reqType: 'datesheet'},
        })
        console.log('GET request successful:', dateReqRes);
        const student = await Student.findById(studentREF)
        // console.log(student)
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Find all datesheets matching the given student reference and semester
        const datesheets = await Datesheet.find({
            programREF: student.programREF,
            semester: Number(semester),
        });
        
        const files = datesheets.map((datesheet) => ({
            filename: `Posted on ${datesheet.updatedAt}`,
            url: `http://localhost:3001/data/download/datesheet/${datesheet._id}`,
        }));
        
        res.json(files);
      } catch (err) {
        console.error('Error retrieving datesheets:', err);
        res.status(500).json({ error: 'Server error' });
      }
})

const Violation = require('../models/violationsModel');

router.get('/violation', async (req, res) => {
    const { studentREF } = req.query;

    try{
      const violationReqRes = await axios.get(`http://localhost:3001/data/request`, { 
            params: { studentREF: studentREF,  reqType: 'violations'},
      })
      console.log('GET violations request successful:', violationReqRes);

      const student = await Student.findById(studentREF)
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      const answerSheets = await AnswerSheet.find({
        studentREF: student._id
      }).populate('courseREF')

      const answerSheetIds = answerSheets.map(answerSheet => answerSheet._id);

      const violations = await Violation.find({
        answerSheetREF: { $in: answerSheetIds }
      }).populate('answerSheetREF');

      const result = answerSheets.reduce((acc, answerSheets) => {
        const violation = violations.find(violation => violation.answerSheetREF.equals(answerSheets._id))

        if(violation){
          acc.push({
            description: `${answerSheets.courseREF.shortname} | ${violation.description}`,
          })
        }

      return acc
    }, [])

    res.send(result)

    } catch (err) {
      console.error('Error retrieving Violations:', err);
      res.status(500).json({ error: 'Server error' });
    }



})

module.exports = router;