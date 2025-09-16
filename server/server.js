const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const projectsRouter = require('./routes/projects');
const messagesRouter = require('./routes/messages');
const aboutRouter = require('./routes/about'); // ✅ Dynamic about route

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/about', aboutRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
