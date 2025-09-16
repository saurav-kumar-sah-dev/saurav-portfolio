const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  duration: String,
  description: String,
  order: Number,
});

module.exports = mongoose.model('Experience', experienceSchema);
