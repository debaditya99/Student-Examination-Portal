const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');

//to get the user by ID on get request, to fill up the order (FK) table as nested
router.get('/', async (req, res) => {
    const user = await User.findById('647644962d7d5ae173dbda26').populate('order')
    res.json(user);
});

//POST request to add data to DB
router.post('/', async (req, res) => {
    const studentID = req.body.value.studentID;

    const user = await Student.findById(studentID)
    
    res.send(user.name);
});

//647644962d7d5ae173dbda26
module.exports = router;