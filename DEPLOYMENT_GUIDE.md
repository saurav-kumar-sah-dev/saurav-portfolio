# 🚀 Portfolio Deployment Guide

## Current Issue
Your portfolio frontend is deployed on Vercel, but the backend API is not deployed, causing the following errors:
- `Error fetching projects: ue`
- `404` errors when trying to fetch data
- Sample projects showing instead of real data

## Solution: Deploy Your Backend

### Option 1: Deploy to Railway (Recommended)

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with GitHub
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your repository**: `saurav-kumar-sah-dev/saurav-portfolio`
5. **Choose the `server` folder** as the root directory
6. **Add Environment Variables**:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
7. **Deploy** and wait for the URL (e.g., `https://your-app.railway.app`)

### Option 2: Deploy to Render

1. **Go to [Render.com](https://render.com)**
2. **Create New** → "Web Service"
3. **Connect GitHub** and select your repo
4. **Configure**:
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Add Environment Variables**:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
6. **Deploy**

### Option 3: Deploy to Heroku

1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create app**: `heroku create your-app-name`
4. **Set environment variables**:
   ```bash
   heroku config:set MONGO_URI=your_mongodb_connection_string
   ```
5. **Deploy**: `git subtree push --prefix=server heroku main`

## After Backend Deployment

1. **Get your backend URL** (e.g., `https://your-app.railway.app`)

2. **Update the .env file** in your client folder:
   ```env
   VITE_BACKEND_URL=https://your-app.railway.app/api
   ```

3. **Commit and push** the changes:
   ```bash
   git add .
   git commit -m "feat: Add production backend URL"
   git push origin main
   ```

4. **Vercel will automatically redeploy** your frontend with the new backend URL

## Test Your Deployment

1. **Visit your portfolio**: `https://saurav-portfolio-dun.vercel.app`
2. **Check the Projects page** - should show real projects instead of samples
3. **Check the About page** - should load your real data
4. **Open browser console** - should see no API errors

## Environment Variables Needed

### Backend (.env in server folder):
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
```

### Frontend (.env in client folder):
```
VITE_BACKEND_URL=https://your-backend-url.railway.app/api
```

## Troubleshooting

- **404 Errors**: Backend not deployed or wrong URL
- **CORS Errors**: Check allowed origins in server.js
- **Database Errors**: Check MONGO_URI connection string
- **Timeout Errors**: Backend might be slow to start

## Quick Fix for Now

If you want to test immediately, you can temporarily use a mock API or static data until you deploy the backend.
