# MODA Fashion - Backend

## Overview
The backend of MODA Fashion is a Node.js/Express server that provides RESTful APIs for the e-commerce platform.

## Tech Stack
- Node.js
- Express.js
- CORS
- Helmet (security)
- Morgan (logging)
- Dotenv

## Project Structure
server/
├── config/ # Configuration files
├── middleware/ # Custom middleware
├── routes/ # API routes
├── app.js # Express app setup
└── server.js # Server entry point


## Features Implemented (Phase 1)
- ✅ Health check endpoint
- ✅ Security headers with Helmet
- ✅ CORS enabled
- ✅ Error handling middleware
- ✅ Environment configuration

## API Endpoints

### Health Check
- **URL:** `/api/health`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "message": "Server is running healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "environment": "development"
}

Environment Variables
Create a .env file:

PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

Available Scripts
npm run dev - Start development server with nodemon

npm start - Start production server

Deployment
The backend is deployed on Render.com. Set environment variables in Render dashboard.


## 🌐 Step 7: Deployment Guide for Render.com

### Deploying Backend to Render

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Phase 1 complete: Global layout and theming"
git branch -M main
git remote add origin https://github.com/yourusername/moda-fashion.git
git push -u origin main

Create a Render Account at https://render.com

Create New Web Service

Click "New +" → "Web Service"

Connect your GitHub repository

Select the branch (main)

Configure Backend Service

Name: moda-fashion-backend

Environment: Node

Root Directory: backend

Build Command: npm install

Start Command: npm start

Plan: Free

Add Environment Variables

NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-frontend-url.vercel.app

Deploy - Click "Create Web Service"



