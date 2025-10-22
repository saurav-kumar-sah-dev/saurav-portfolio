# 🤝 Contributing to Portfolio Project

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Code Style](#code-style)
- [Testing](#testing)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you agree to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- MongoDB Atlas account (for database)
- SendGrid account (for email functionality)

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd client
   npm install
   
   # Backend
   cd ../server
   npm install
   ```

3. **Environment setup**
   - Copy `.env.example` to `.env` in both client and server directories
   - Fill in your environment variables

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd server
   npm run dev
   
   # Terminal 2 - Frontend
   cd client
   npm run dev
   ```

## 📝 Contributing Guidelines

### Types of Contributions

- 🐛 **Bug Reports**: Report issues you've found
- ✨ **Feature Requests**: Suggest new features
- 🔧 **Code Contributions**: Fix bugs or implement features
- 📚 **Documentation**: Improve or add documentation
- 🎨 **UI/UX Improvements**: Enhance the user interface

### Before You Start

1. Check existing issues and pull requests
2. Create an issue to discuss major changes
3. Fork the repository
4. Create a feature branch

## 🔄 Pull Request Process

### Branch Naming

Use descriptive branch names:
- `feature/add-dark-mode`
- `fix/contact-form-validation`
- `docs/update-readme`
- `refactor/optimize-components`

### Commit Messages

Follow conventional commit format:
```
type(scope): description

feat(contact): add form validation
fix(api): resolve email sending issue
docs(readme): update installation instructions
```

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design tested

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, etc.)
- Screenshots if applicable

### Feature Requests

When requesting features, include:
- Clear description of the feature
- Use case and benefits
- Potential implementation approach
- Any design mockups or examples

## 🎨 Code Style

### Frontend (React)

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Implement responsive design
- Add PropTypes or TypeScript for type checking

### Backend (Node.js/Express)

- Use async/await for asynchronous operations
- Implement proper error handling
- Follow RESTful API conventions
- Add input validation
- Use meaningful variable names

### General

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principle

## 🧪 Testing

### Frontend Testing

```bash
cd client
npm test
```

### Backend Testing

```bash
cd server
npm test
```

### Manual Testing

- Test on different browsers (Chrome, Firefox, Safari)
- Test on different devices (Desktop, Mobile, Tablet)
- Test all user flows
- Verify responsive design

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for functions
- Update API documentation
- Include setup instructions for new features

## 🏷️ Release Process

1. Update version numbers
2. Update CHANGELOG.md
3. Create a release tag
4. Deploy to production

## 💬 Getting Help

- Create an issue for questions
- Check existing documentation
- Review closed issues for similar problems

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to this project! 🎉
