const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');

//GET request to retieve data to DB
router.get('/', async (req, res) => {
    // const studentID = req.body.studentID;
    // const user = await Student.findById(studentID)
    // res.send(user.name);
    const studentREF = req.query.studentREF;

    try {
        const student = await Student.findById(studentREF);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.send(student.name);
    } catch (err) {
        console.error('Error retrieving student:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;