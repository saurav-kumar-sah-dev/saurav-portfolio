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
  if (process.env.SENDGRID_API_KEY) {
    // Use SendGrid for reliable email delivery in production
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: process.env.EMAIL_USER || 'sauravshubham903@gmail.com',
      from: process.env.EMAIL_USER || 'sauravshubham903@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid!');
  } else if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    // Fallback to Gmail (works locally, may fail in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });
    
    const emailPromise = transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message
    });
    
    await Promise.race([
      emailPromise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 8000)
      )
    ]);
    
    console.log('Email sent successfully via Gmail!');
  } else {
    console.log('No email credentials configured - skipping email send');
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