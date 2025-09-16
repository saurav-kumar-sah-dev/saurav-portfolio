const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const projectsRouter = require('./routes/projects');
const messagesRouter = require('./routes/messages');
const aboutRouter = require('./routes/about');

dotenv.config();
connectDB();

const app = express();

// ✅ Update allowed origins with your new Vercel URL
const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://saurav-portfolio-dun.vercel.app', // new vercel url
  'https://saurav-portfolio-d1eollqfw-saurav-kumar-sahs-projects.vercel.app' // old vercel url
];

// Allow either of these origins
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/about', aboutRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
