// src/api/api.js
import axios from 'axios';

// ✅ Auto-switch between local + production
const getBaseURL = () => {
  // If environment variable is set, use it
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL;
  }
  
  // Fallback logic
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }
  
  // Production fallback - always use the deployed backend
  return 'https://saurav-portfolio-vx82.onrender.com/api';
};

const API = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // 10 second timeout for deployment
});

// Add request interceptor
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Projects
export const fetchProjects = () => API.get('/projects');

// ✅ Contact form
export const sendMessage = (data) => API.post('/messages', data);

// ✅ Dynamic About endpoint (skills, experience, achievements, certifications, currentFocus)
export const fetchAbout = () => API.get('/about');

// ✅ Single Project by ID
export const fetchProjectById = (id) => API.get(`/projects/${id}`);
