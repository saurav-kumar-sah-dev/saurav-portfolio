const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,
  order: Number,
});

module.exports = mongoose.model('Achievement', achievementSchema);
