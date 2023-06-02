// Require Mongoose
const mongoose = require("mongoose");


const datesheetSchema = new mongoose.Schema({
    programREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
    semester: Number,
    file: {
        data: Buffer,
        contentType: String
      }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Datesheet', datesheetSchema);