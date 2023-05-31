// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const courseSchema = new mongoose.Schema({
  courseID: String,
  name: String,
  age: Number,
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
},
{ timestamps: true }); 

module.exports = mongoose.model('User', courseSchema);