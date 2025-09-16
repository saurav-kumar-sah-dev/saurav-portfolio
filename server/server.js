// server.js
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

// ✅ Configure CORS properly for Vercel + local dev
app.use(cors({
  origin: [
    'http://localhost:5173', // your local frontend dev server
    'https://your-frontend-name.vercel.app' // your Vercel frontend URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/about', aboutRouter);

// ✅ Health check route (optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
