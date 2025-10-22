# 💼 MERN Portfolio Website

A **modern, responsive personal portfolio** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and styled with **Tailwind CSS**.  
Showcase your projects, skills, experience, achievements, and certifications with a dynamic backend, **dark/light mode**, and smooth animations.

---

## 🌐 Connect & Live Demo  

[**View Deployed App**](https://saurav-portfolio-dun.vercel.app/) ✅ *(Live Now)*  
[**Linkedin Profile**](https://www.linkedin.com/in/sauravkumarsah-dev/) ✅ *(View My linkedin Profile)*  

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
    "subject": "Project Inquiry",
    "message": "Hello, I'm interested in your services..."
  }
  ```

#### 🛠 **Projects**
- **GET** `/projects` - Get all projects
- **GET** `/projects/:id` - Get specific project by ID

#### 👤 **About Section**
- **GET** `/about/skills` - Get skills data
- **GET** `/about/experience` - Get experience data
- **GET** `/about/achievements` - Get achievements data
- **GET** `/about/certifications` - Get certifications data

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Format
```json
{
  "success": false,
  "error": "Error message",
  "status": 400
}
```

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

**Note**: New SendGrid accounts may have emails go to spam initially. This improves over time as email reputation builds.

---

## 🔧 Environment Variables

### Frontend (Vercel)
```
VITE_BACKEND_URL=https://saurav-portfolio-vx82.onrender.com/api
```

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

- ✅ **Social Links Updated**: X (Twitter) profile links now point to actual profile
- ✅ **Footer Alignment Fixed**: "Connect With Me" section centered on all devices  
- ✅ **Console Cleanup**: Removed debug logs for production-ready code
- ✅ **Error Handling**: Enhanced user experience with graceful fallbacks
- ✅ **Loading States**: Improved loading experience with progressive messages
- ✅ **Backend Welcome Page**: Professional, clean design with consistent styling
- ✅ **API Documentation**: Clear endpoint display with method badges and descriptions
- ✅ **Professional Repository Structure**: Added MIT License, issue templates, and CI/CD pipeline
- ✅ **GitHub Actions**: Automated testing, building, and deployment workflow
- ✅ **Release Management**: Version 1.0.0 tagged and released
- ✅ **Contributing Guidelines**: Comprehensive CONTRIBUTING.md and templates

---

## 🏆 Repository Features

### 🔧 **Development & CI/CD**
- ✅ **GitHub Actions**: Automated testing and deployment pipeline
- ✅ **Issue Templates**: Structured bug reports and feature requests
- ✅ **Pull Request Template**: Comprehensive code review guidelines
- ✅ **Security Scanning**: Automated vulnerability detection
- ✅ **Code Quality**: CodeQL analysis and linting

### 📚 **Documentation & Guidelines**
- ✅ **MIT License**: Open-source compliance
- ✅ **CONTRIBUTING.md**: Complete contribution guidelines
- ✅ **CHANGELOG.md**: Version history and release notes
- ✅ **API Documentation**: Comprehensive endpoint documentation
- ✅ **Installation Guide**: Step-by-step setup instructions

### 🚀 **Release Management**
- ✅ **Semantic Versioning**: Professional version control
- ✅ **Release Tags**: v1.0.0 and future releases
- ✅ **Changelog**: Detailed release notes
- ✅ **Automated Deployment**: CI/CD pipeline integration

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and structure
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

### Reporting Issues
If you find a bug or have a suggestion, please:
1. Check if the issue already exists
2. Create a new issue with a clear description
3. Include steps to reproduce (for bugs)
4. Add screenshots if applicable

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
