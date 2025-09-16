const Message = require('../models/Message');
const nodemailer = require('nodemailer');
exports.sendMessage = async (req, res) => {
const { name, email, message } = req.body;
try {
const newMsg = new Message({ name, email, message });
await newMsg.save();
// send email (configure transporter with your email credentials)
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
res.json({ success: true });
} catch (err) {
res.status(500).json({ error: 'Server Error' });
}
};