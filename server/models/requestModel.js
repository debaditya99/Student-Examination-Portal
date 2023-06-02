// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const requestSchema = new mongoose.Schema({
  studentREF: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  requestType: String,
  status: Number,
},
{ timestamps: true }); 

module.exports = mongoose.model('Request', requestSchema);
