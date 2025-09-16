import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api',
});

// Projects
export const fetchProjects = () => API.get('/projects');

// Contact
export const sendMessage = (data) => API.post('/messages', data);

// ✅ Dynamic About endpoint (skills, experience, achievements, certifications, currentFocus)
export const fetchAbout = () => API.get('/about');

export const fetchProjectById = (id) => API.get(`/projects/${id}`);

