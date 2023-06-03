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
    console.log(student)
    const semester = Number(student.programREF.duration) * 2;
     res.send(semester.toString());

  } catch(err) {
    console.error('Error retrieving Semesters:', err);
    res.status(500).json({ error: 'Server error' });
  }
})

const Datesheet = require('../models/datesheetModel');

router.get('/datesheet', async (req, res) => {
    const { studentREF, semester } = req.query;
    
    //sending request info to Request Collection
    axios
        .get(`http://localhost:3001/data/request`, { 
        params: { studentREF: studentREF,  reqType: 'datesheet'},
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

module.exports = router;