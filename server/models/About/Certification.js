const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  link: String,
  order: Number,
});

module.exports = mongoose.model('Certification', certificationSchema);
