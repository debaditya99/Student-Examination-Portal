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


module.exports = router;