const express = require('express');
const router = express.Router();

const Datesheet = require('../models/datesheetModel');

// Download a specific datesheet
router.get('/datesheet/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the datesheet with the given ID
      const datesheet = await Datesheet.findById(id);
  
      if (!datesheet) {
        return res.status(404).json({ error: 'Datesheet not found' });
      }
  
      // Set the appropriate response headers for file download
      res.set({
        'Content-Type': datesheet.file.contentType,
        'Content-Disposition': `attachment; filename=${datesheet.filename}`,
      });
  
      // Send the file data as the response
      res.send(datesheet.file.data);
    } catch (err) {
      console.error('Error retrieving datesheet for download:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  const Marksheet = require('../models/marksheetModel');

  router.get('/marksheet/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const marksheet = await Marksheet.findById(id);

      if(!marksheet) {
        return res.status(404).json({ error: 'MarkSheet not found' });
      }

      res.set({
        'Content-Type': marksheet.file.contentType,
        'Content-Disposition': `attachment; filename=${marksheet.filename}`,
      })
      // Send the file data as the response
      res.send(marksheet.file.data);

    } catch (err) {
      console.error('Error retrieving datesheet for download:', err);
      res.status(500).json({ error: 'Server error' });
    }
  })

  const AnswerSheet = require('../models/answerSheetModel');

  router.get('/answersheet/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const answersheet = await AnswerSheet.findById(id);
  
      if (!answersheet) {
        return res.status(404).json({ error: 'Answer Sheet not found' });
      }
  
      // Set the appropriate response headers for file download
      res.set({
        'Content-Type': answersheet.file.contentType,
        'Content-Disposition': `attachment; filename=${answersheet.filename}`,
      });
      // Send the file data as the response
      res.send(answersheet.file.data);
    } catch (err) {
      console.error('Error retrieving datesheet for download:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;