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
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                background-size: 400% 400%;
                animation: gradientShift 8s ease infinite;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                padding: 1rem;
                position: relative;
                overflow-x: hidden;
            }
            
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            /* Floating particles background */
            body::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
                animation: float 6s ease-in-out infinite;
                pointer-events: none;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }
            
            .container {
                text-align: center;
                max-width: 800px;
                width: 100%;
                padding: 2.5rem;
                background: rgba(255, 255, 255, 0.15);
                border-radius: 30px;
                backdrop-filter: blur(20px);
                border: 2px solid rgba(255, 255, 255, 0.3);
                box-shadow: 
                    0 25px 50px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3);
                position: relative;
                z-index: 1;
                animation: slideUp 0.8s ease-out;
            }
            
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            h1 { 
                font-size: 3rem; 
                margin-bottom: 1rem;
                background: linear-gradient(45deg, #fff, #e0e7ff, #c7d2fe);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 800;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                animation: glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes glow {
                from { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
                to { filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.6)); }
            }
            
            .status { 
                display: inline-block;
                background: linear-gradient(45deg, #10b981, #34d399);
                color: white;
                padding: 0.8rem 2rem;
                border-radius: 50px;
                font-weight: 700;
                margin: 1.5rem 0;
                font-size: 1rem;
                box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
                animation: pulse 2s infinite;
                border: 2px solid rgba(255, 255, 255, 0.2);
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .welcome-text {
                font-size: 1.2rem;
                margin: 1.5rem 0;
                opacity: 0.9;
                line-height: 1.6;
                font-weight: 300;
            }
            
            .links { 
                margin: 2.5rem 0; 
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .links a {
                color: white;
                text-decoration: none;
                padding: 1rem 1.5rem;
                background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
                border-radius: 20px;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
                position: relative;
                overflow: hidden;
            }
            
            .links a::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
            }
            
            .links a:hover::before {
                left: 100%;
            }
            
            .links a:hover { 
                background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            .endpoints-section {
                margin: 2.5rem 0;
            }
            
            .endpoints-title {
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
                font-weight: 700;
                background: linear-gradient(45deg, #fff, #e0e7ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .endpoints-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            
            .endpoint-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
                border-radius: 20px;
                padding: 1.5rem;
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(15px);
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
            }
            
            .endpoint-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #10b981, #34d399, #6ee7b7);
            }
            
            .endpoint-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            .endpoint-method {
                display: inline-block;
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                font-weight: 700;
                font-size: 0.8rem;
                margin-bottom: 0.8rem;
                text-transform: uppercase;
            }
            
            .endpoint-method.get {
                background: linear-gradient(45deg, #10b981, #34d399);
                color: white;
            }
            
            .endpoint-method.post {
                background: linear-gradient(45deg, #3b82f6, #60a5fa);
                color: white;
            }
            
            .endpoint-path {
                font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #e0e7ff;
            }
            
            .endpoint-description {
                font-size: 0.9rem;
                opacity: 0.8;
                line-height: 1.4;
            }
            
            .footer-text {
                margin-top: 2.5rem;
                font-size: 1rem;
                opacity: 0.7;
                font-weight: 300;
            }
            
            /* Mobile optimizations */
            @media (max-width: 768px) {
                .container {
                    padding: 1.5rem;
                    border-radius: 25px;
                    max-width: 95%;
                }
                
                h1 { 
                    font-size: 2.2rem; 
                }
                
                .links {
                    grid-template-columns: 1fr;
                    gap: 0.8rem;
                }
                
                .endpoints-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                
                .endpoint-card {
                    padding: 1.2rem;
                }
            }
            
            @media (max-width: 480px) {
                body { padding: 0.5rem; }
                
                .container { 
                    padding: 1.2rem; 
                    border-radius: 20px;
                }
                
                h1 { font-size: 1.8rem; }
                
                .status {
                    padding: 0.6rem 1.5rem;
                    font-size: 0.9rem;
                }
                
                .welcome-text {
                    font-size: 1rem;
                }
                
                .links a {
                    padding: 0.8rem 1.2rem;
                    font-size: 0.9rem;
                }
                
                .endpoints-title {
                    font-size: 1.3rem;
                }
                
                .endpoint-card {
                    padding: 1rem;
                }
                
                .endpoint-path {
                    font-size: 0.9rem;
                }
                
                .endpoint-description {
                    font-size: 0.85rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Portfolio API</h1>
            <div class="status">✅ Server Running</div>
            <p class="welcome-text">Welcome to Saurav Kumar Sah's Portfolio Backend API</p>
            
            <div class="links">
                <a href="https://saurav-portfolio-dun.vercel.app" target="_blank">🌐 View Portfolio</a>
                <a href="https://github.com/saurav-kumar-sah-dev" target="_blank">💻 GitHub</a>
                <a href="https://linkedin.com/in/sauravkumarsah-dev" target="_blank">💼 LinkedIn</a>
            </div>
            
            <div class="endpoints-section">
                <h3 class="endpoints-title">📡 Available Endpoints</h3>
                <div class="endpoints-grid">
                    <div class="endpoint-card">
                        <div class="endpoint-method get">GET</div>
                        <div class="endpoint-path">/api/projects</div>
                        <div class="endpoint-description">Fetch all portfolio projects with details, images, and tech stacks</div>
                    </div>
                    <div class="endpoint-card">
                        <div class="endpoint-method get">GET</div>
                        <div class="endpoint-path">/api/about</div>
                        <div class="endpoint-description">Get skills, experience, achievements, and certifications data</div>
                    </div>
                    <div class="endpoint-card">
                        <div class="endpoint-method post">POST</div>
                        <div class="endpoint-path">/api/messages</div>
                        <div class="endpoint-description">Send contact form messages with email notifications</div>
                    </div>
                </div>
            </div>
            
            <p class="footer-text">
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
