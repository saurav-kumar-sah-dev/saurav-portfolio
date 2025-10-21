const Message = require('../models/Message');
const nodemailer = require('nodemailer');
exports.sendMessage = async (req, res) => {
const { name, email, message } = req.body;
try {
// Save message to database
const newMsg = new Message({ name, email, message });
await newMsg.save();

// Try to send email (optional - don't fail if email fails)
try {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message
    });
    
    console.log('Email sent successfully!');
  } else {
    console.log('Email credentials not configured - skipping email send');
  }
} catch (emailError) {
  console.error('Email sending failed:', emailError.message);
  // Don't fail the request if email fails
}

res.json({ success: true, message: 'Message sent successfully!' });
} catch (err) {
console.error('Error saving message:', err.message);
res.status(500).json({ error: 'Failed to save message' });
}
};