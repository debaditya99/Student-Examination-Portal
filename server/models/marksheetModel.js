// Require Mongoose
const mongoose = require("mongoose");


const marksheetSchema = new mongoose.Schema({
    studentREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    semester: Number,
    file: {
        data: Buffer,
        contentType: String
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Marksheet', marksheetSchema);