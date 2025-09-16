const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');
const Message = require('../models/Message'); // import the Mongoose model

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // 1️⃣ Save message to database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2️⃣ Send email
    const emailBody = `You have a new message from your portfolio contact form:\n\n` +
                      `Name: ${name}\n` +
                      `Email: ${email}\n` +
                      `Message:${message}`;
    
    await sendEmail(process.env.EMAIL_USER, `New Message from ${name}`, emailBody);

    res.status(200).json({ success: true, message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('Error in /messages:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
