const express = require('express');
const router = express.Router();
const axios = require('axios');

const Student = require('../models/studentModel');
const Program = require('../models/programModel');
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
    console.log(student)
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    // res.send(student.name);
    console.log(student._id)
    const requests = await Request.find({ studentREF: student._id, status: 0 });
    console.log(requests)
    if (!requests || requests.length === 0) {
        // return res.status(404).json({ error: 'Answer sheet not found' });
    } else {
        res.send("Already Exists")
    }
});

router.get('/datesheet', async (req, res) => {
    const { studentREF, semester } = req.query;
    
    axios
      .get('http://localhost:3001/data/request', { 
        params: { studentREF: '6478d3cd4f3b4ec73356d94a',  reqType: 'datesheet'},
      })
      .then((res) => {
        console.log('GET request successful:', res.data);
        // Perform any necessary actions upon successful response
      })
        .catch((err) => {
            console.error('Error sending GET request:', err);
            // Handle any errors that occurred during the request
      });

    res.send('Request Sent')

    // try {
    //     const student = await Student.findById(studentREF).populate('programREF');
    //     console.log(student)
    //     if (!student) {
    //         return res.status(404).json({ error: 'Student not found' });
    //     }
    //     // res.send(student.name);
        
    // //.toHexString() 
    // } catch (err) {
    //     console.error('Error retrieving student:', err);
    //     res.status(500).json({ error: 'Server error' });
    // }
})


module.exports = router;