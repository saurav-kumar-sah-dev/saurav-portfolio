# 💼 MERN Portfolio Website

A **modern, responsive personal portfolio** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and styled with **Tailwind CSS**.  
Showcase your projects, skills, experience, achievements, and certifications with a dynamic backend, **dark/light mode**, and smooth animations.

---

## 🌐 Connect & Live Demo  

[**View Deployed App**](https://saurav-portfolio-dun.vercel.app/) ✅ *(Live Now)*  
[**LinkedIn Announcement Post**](https://www.linkedin.com/posts/sauravkumarsah-dev_mern-reactjs-nodejs-activity-7373901145922183168-cLiE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzT84EBx_LhVv32fYVUqjOTRutIkbU6iZk) ✅ *(Project Post)*  

---

## 📸 Screenshots  

### 🏠 Home Page  
![Home Page](https://drive.google.com/uc?export=view&id=19TwgnlFq3YvODpizaIl5PWPmCJxZi7TI)

### 🛒 Project Page  
![Project Page](https://drive.google.com/uc?export=view&id=1d1aLESZj07CK2skhn36sVL3JMMBTvcig)

### 📄 Resume Page  
![Resume Page](https://drive.google.com/uc?export=view&id=1NynPhdIowr1lYOJrWXwaxKq51D1FSdSp)

### 🙋 About Page  
![About Page](https://drive.google.com/uc?export=view&id=1nHD4jnhxKxjc3mnvuHzW8Q0IRdYThPFG)

### 📬 Contact Page  
![Contact Page](https://drive.google.com/uc?export=view&id=18Outd-8qb1A7-GYAmJh7sUtrSDqLHepf)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- SendGrid account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saurav-kumar-sah-dev/saurav-portfolio.git
   cd saurav-portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**
   
   **Frontend (.env in client folder):**
   ```env
   VITE_BACKEND_URL=http://localhost:5000/api
   ```
   
   **Backend (.env in server folder):**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   SENDGRID_API_KEY=SG.your-sendgrid-api-key
   PORT=5000
   ```

5. **Run the Application**
   
   **Start Backend Server:**
   ```bash
   cd server
   npm start
   ```
   
   **Start Frontend (in new terminal):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

---

## 📁 Project Structure

```
Portfolio/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/          # Main application pages
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Resume.jsx
│   │   ├── api/            # API configuration
│   │   └── assets/         # Static assets
│   ├── public/             # Public static files
│   └── dist/               # Production build
├── server/                 # Node.js backend application
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB models
│   │   ├── About/          # About section models
│   │   │   ├── Achievement.js
│   │   │   ├── Certification.js
│   │   │   ├── Experience.js
│   │   │   └── Skill.js
│   │   ├── Message.js      # Contact form messages
│   │   └── Project.js      # Project data model
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   └── server.js           # Main server file
└── README.md
```

---

## 🛠 Tech Stack  

| Technology         | Purpose                                  |
|--------------------|------------------------------------------|
| **React 18**       | Modern frontend library with hooks       |
| **Vite**           | Fast build tool and dev server           |
| **Tailwind CSS**   | Utility-first, responsive styling        |
| **Node.js**        | JavaScript runtime for backend           |
| **Express.js**     | Web framework for REST API               |
| **MongoDB Atlas**  | Cloud database for projects & messages   |
| **Mongoose**       | MongoDB object modeling for Node.js      |
| **SendGrid**       | Reliable email delivery service          |
| **Framer Motion**  | Smooth animations & transitions          |
| **React Router**   | Client-side routing                      |
| **Axios**          | HTTP client for API requests             |
| **CORS**           | Cross-origin resource sharing            |
| **Dotenv**         | Environment variable management          |

---

## ⚡ Key Features  

- ✅ **Fully Responsive** design for all screen sizes  
- ✅ **Dark/Light mode** toggle with localStorage persistence  
- ✅ **Dynamic Projects** grid with clickable detail pages  
- ✅ **Skills, Experience, Achievements & Certifications** sections  
- ✅ **Working Contact Form** with SendGrid email delivery  
- ✅ **Database Integration** - messages saved to MongoDB  
- ✅ **Smooth Animations** with Framer Motion  
- ✅ **Progressive Loading** with skeleton screens and fallbacks  
- ✅ **Error Handling** - graceful fallbacks throughout  
- ✅ **Production Ready** - deployed on Vercel + Render  
- ✅ **Clean Code** - optimized for performance and maintainability  

---

## 📚 API Documentation

### Base URL
- **Production**: `https://saurav-portfolio-vx82.onrender.com/api`
- **Development**: `http://localhost:5000/api`

### Endpoints

#### 🏠 **Welcome**
- **GET** `/` - Welcome page with API information

#### 📧 **Messages**
- **POST** `/messages` - Send contact form message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in your services..."
  }
  ```

#### 🛠 **Projects**
- **GET** `/projects` - Get all projects
- **GET** `/projects/:id` - Get specific project by ID

#### 👤 **About Section**
- **GET** `/about` - Get combined about data:
  - `skills`
  - `experience`
  - `achievements`
  - `certifications`
  - `currentFocus`

### Response Examples

- GET `/projects` → returns an array of projects
  ```json
  [
    {
      "_id": "...",
      "title": "Project Title",
      "description": "...",
      "techStack": ["React", "Node.js"],
      "imageUrls": ["https://..."],
      "demoLink": "https://...",
      "repoLink": "https://..."
    }
  ]
  ```

- GET `/projects/:id` → returns a single project or 404
  ```json
  {
    "_id": "...",
    "title": "Project Title",
    "description": "..."
  }
  ```

- GET `/about` → returns combined about data
  ```json
  {
    "skills": [ { "name": "JavaScript", "level": 90 } ],
    "experience": [ { "role": "Developer", "company": "..." } ],
    "achievements": [ { "title": "..." } ],
    "certifications": [ { "title": "..." } ],
    "currentFocus": ["..."]
  }
  ```

- POST `/messages` → returns success
  ```json
  { "success": true, "message": "Message sent successfully!" }
  ```

Note: The JSON welcome endpoint is available at `/api`.

---

## 🚀 Deployment Status

### ✅ **Frontend (Vercel)**
- **URL**: https://saurav-portfolio-dun.vercel.app/
- **Status**: Live and working
- **Features**: All pages functional, responsive design

### ✅ **Backend (Render)**
- **Welcome Page**: https://saurav-portfolio-vx82.onrender.com/ 
- **Status**: Live and working
- **Database**: MongoDB Atlas connected
- **Email**: SendGrid integration active
- **Design**: Clean, consistent styling with clear endpoint documentation

### ✅ **Contact Form**
- **Status**: Fully functional
- **Email Delivery**: Working via SendGrid
- **Database**: Messages saved to MongoDB
- **Note**: Emails may go to spam initially (common with new SendGrid accounts)

---

## 📧 Contact Form Setup

The contact form is fully functional with:
- **SendGrid Integration**: Reliable email delivery
- **MongoDB Storage**: All messages saved to database
- **Professional Templates**: HTML formatted emails
- **Error Handling**: Graceful fallbacks

---

## 🔧 Environment Variables

### Frontend (Vercel)
```
VITE_BACKEND_URL=https://your-backend.example.com/api
```

Note: Use your own backend API URL here. The public demo uses Render, but you should set your own endpoint when deploying/forking.

### Backend (Render)
```
MONGODB_URI=mongodb+srv://...
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SENDGRID_API_KEY=SG.your-sendgrid-api-key
PORT=5000
```

---

## 🎯 Recent Updates

- Project is live on Vercel (frontend) and Render (backend)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Vercel** for hosting the frontend
- **Render** for hosting the backend
- **MongoDB Atlas** for database hosting
- **SendGrid** for email services
- **Tailwind CSS** for the amazing utility-first CSS framework
- **Framer Motion** for smooth animations

---

## 📞 Contact

**Saurav Kumar Sah**
- **Portfolio**: [https://saurav-portfolio-dun.vercel.app/](https://saurav-portfolio-dun.vercel.app/)
- **LinkedIn**: [https://www.linkedin.com/in/sauravkumarsah-dev/](https://www.linkedin.com/in/sauravkumarsah-dev/)
- **Email**: [Contact via Portfolio](https://saurav-portfolio-dun.vercel.app/contact)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

Made with ❤️ by [Saurav Kumar Sah](https://www.linkedin.com/in/sauravkumarsah-dev/)

</div>
