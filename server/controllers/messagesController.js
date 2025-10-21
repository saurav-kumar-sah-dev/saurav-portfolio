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
      to: 'sauravshubham903@gmail.com', // Always send to your email
      from: {
        email: 'sauravshubham903@gmail.com', // Use your verified sender email
        name: 'Saurav Portfolio'
      },
      subject: `New message from ${name} - Portfolio Contact`,
      text: `Hello Saurav,\n\nYou have received a new message through your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\nPortfolio System`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Contact</h2>
          <p>Hello Saurav,</p>
          <p>You have received a new message through your portfolio contact form:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff;">${message}</p>
          </div>
          <p>Best regards,<br>Portfolio System</p>
        </div>
      `
    };
    
    await sgMail.send(msg);
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
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates
      }
    });
    
    const emailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'sauravshubham903@gmail.com', // Always send to your email
      subject: `New Portfolio Contact from ${name}`,
      text: `Hello Saurav,\n\nYou have received a new message through your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\nPortfolio System`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Contact</h2>
          <p>Hello Saurav,</p>
          <p>You have received a new message through your portfolio contact form:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff;">${message}</p>
          </div>
          <p>Best regards,<br>Portfolio System</p>
        </div>
      `
    };
    
    const emailPromise = transporter.sendMail(emailOptions);
    
    await Promise.race([
      emailPromise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 8000)
      )
    ]);
    
  }
} catch (emailError) {
  // Don't fail the request if email fails
}

res.json({ success: true, message: 'Message sent successfully!' });
} catch (err) {
res.status(500).json({ error: 'Failed to save message' });
}
};