const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String,
  items: [String],
  order: Number,
});

module.exports = mongoose.model('Skill', skillSchema);
