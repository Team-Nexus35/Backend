# Team Nexus Backend

## Overview
This backend handles:

- User authentication (Register/Login)
- Readiness scoring system
- AI-powered grant matching
- Integration with FastAPI AI service

## Tech Stack
- Node.js
- Express
- Sequelize
- MySQL
- Axios (AI integration)

## Setup Instructions

### 1. Install dependencies
npm install

### 2. Create .env file
Add:

PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_secret
AI_BASE_URL=http://127.0.0.1:8000

### 3. Run migrations
npx sequelize db:migrate

### 4. Start server
npm run dev

Server runs on:
http://localhost:5000

---

## AI Service
Ensure FastAPI service is running on:
http://127.0.0.1:8000


---

# API Documentation

## Base URL

Local:
http://localhost:5000

Production:
https://your-render-url.onrender.com

---

## Authentication

### Register

POST /api/auth/register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "success": true,
  "message": "User registered successfully"
}

---

### Login

POST /api/auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "JWT_TOKEN"
  }
}

---

## Readiness

Requires Authorization Header:

Authorization: Bearer <JWT_TOKEN>

---

### Submit or Update Readiness

POST /api/readiness

Request Body:
{
  "companyName": "TechNova Solutions",
  "sector": "FinTech",
  "country": "Nigeria",
  "yearFounded": 2021,
  "employees": 12,
  "hasFinancialRecords": true,
  "annualRevenue": 2500000,
  "hasTaxClearance": true,
  "hasBusinessPlan": true,
  "fundingNeed": 5000000,
  "growthStage": "Seed"
}

Response:
{
  "success": true,
  "score": 100,
  "level": "Highly Ready",
  "readiness": { ... }
}

---

## AI Matching

Requires Authorization Header:

Authorization: Bearer <JWT_TOKEN>

### Match Company to Grants

POST /api/match

Response:
{
  "success": true,
  "match": {
    "company_name": "TechNova Solutions",
    "sector": "FinTech",
    "nationality": "Nigeria",
    "business_stage": "Seed",
    "funding_need_usd": 5000000
  }
}

---

## Health Check

GET /health

Response:
{
  "status": "OK"
}