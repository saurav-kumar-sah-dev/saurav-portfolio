const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messagesController');

// Use the new controller with SendGrid support
router.post('/', sendMessage);

module.exports = router;
