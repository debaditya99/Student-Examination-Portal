const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');
const Program = require('../models/programModel');

//to get the user by ID on get request, to fill up the order (FK) table as nested
router.get('/', async (req, res) => {
    const user = await User.findById('647644962d7d5ae173dbda26').populate('order')
    res.json(user);
});

//POST request to add data to DB
router.post('/', (req, res) => {
    const studentID = req.body.studentID;
    const name = req.body.name;

    const student = new Student({
        studentID: '01035304421',
        name: 'Debaditya Mandal',
    })

    const program = new Program({
        programID: "044",
        name: "Master of Computer Applications",
        shortname: 'MCA',
    })
    student.programID = order

    student.save();
    program.save();
    res.send('Data has been added');
});

//647644962d7d5ae173dbda26
module.exports = router;