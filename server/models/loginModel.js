// Require Mongoose
const mongoose = require("mongoose");


const datesheetSchema = new mongoose.Schema({
    username: String,
    password: String,
    studentREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Login', loginSchema);