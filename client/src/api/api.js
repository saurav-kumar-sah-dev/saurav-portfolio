// src/api/api.js
import axios from 'axios';

// ✅ Auto-switch between local + production
const API = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    (import.meta.env.DEV ? 'http://localhost:5000/api' : 'https://saurav-portfolio-vx82.onrender.com/api'),
  timeout: 15000, // 15 second timeout for deployment
});

// ✅ Projects
export const fetchProjects = () => API.get('/projects');

// ✅ Contact form
export const sendMessage = (data) => API.post('/messages', data);

// ✅ Dynamic About endpoint (skills, experience, achievements, certifications, currentFocus)
export const fetchAbout = () => API.get('/about');

// ✅ Single Project by ID
export const fetchProjectById = (id) => API.get(`/projects/${id}`);
