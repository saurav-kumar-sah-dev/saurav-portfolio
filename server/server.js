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

// Root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saurav Kumar Sah - Portfolio API</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
            }
            .container {
                text-align: center;
                max-width: 600px;
                padding: 2rem;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            h1 { font-size: 2.5rem; margin-bottom: 1rem; }
            .status { 
                display: inline-block;
                background: #10b981;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 50px;
                font-weight: bold;
                margin: 1rem 0;
            }
            .links { margin: 2rem 0; }
            .links a {
                color: #60a5fa;
                text-decoration: none;
                margin: 0 1rem;
                font-weight: 500;
            }
            .links a:hover { text-decoration: underline; }
            .endpoints {
                background: rgba(0, 0, 0, 0.2);
                padding: 1.5rem;
                border-radius: 10px;
                margin: 1rem 0;
                text-align: left;
            }
            .endpoint { margin: 0.5rem 0; font-family: monospace; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Portfolio API</h1>
            <div class="status">✅ Server Running</div>
            <p>Welcome to Saurav Kumar Sah's Portfolio Backend API</p>
            
            <div class="links">
                <a href="https://saurav-portfolio-dun.vercel.app" target="_blank">🌐 View Portfolio</a>
                <a href="https://github.com/saurav-kumar-sah-dev" target="_blank">💻 GitHub</a>
                <a href="https://linkedin.com/in/sauravkumarsah-dev" target="_blank">💼 LinkedIn</a>
            </div>
            
            <div class="endpoints">
                <h3>📡 Available Endpoints:</h3>
                <div class="endpoint">GET /api/projects - Fetch all projects</div>
                <div class="endpoint">GET /api/about - Fetch about information</div>
                <div class="endpoint">POST /api/messages - Send contact message</div>
            </div>
            
            <p style="margin-top: 2rem; opacity: 0.8;">
                Built with ❤️ using Node.js, Express & MongoDB
            </p>
        </div>
    </body>
    </html>
  `);
});

// API root route
app.get('/api', (req, res) => {
  res.json({
    message: "🎉 Welcome to Saurav Kumar Sah's Portfolio API!",
    status: "✅ Server is running successfully",
    version: "1.0.0",
    endpoints: {
      projects: "GET /api/projects - Fetch all portfolio projects",
      about: "GET /api/about - Fetch about information (skills, experience, etc.)",
      messages: "POST /api/messages - Send contact form message"
    },
    portfolio: "https://saurav-portfolio-dun.vercel.app",
    social: {
      github: "https://github.com/saurav-kumar-sah-dev",
      linkedin: "https://linkedin.com/in/sauravkumarsah-dev",
      twitter: "https://x.com/SauravK71046704"
    },
    built_with: ["Node.js", "Express.js", "MongoDB", "SendGrid"],
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
