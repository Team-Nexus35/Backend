Team Nexus Backend
Overview

This backend provides:

User Authentication (Register / Login)
Secure JWT-based authorization
Company Readiness submission & management
AI-powered grant matching
Storage of AI match results
Integration with external FastAPI AI service

Tech Stack

Node.js
Express.js
Sequelize ORM
MySQL
JWT Authentication
Axios (AI service integration)


Setup Instructions
1️⃣ Install Dependencies

npm install
2️⃣ Create .env File

Create a .env file in the project root:

PORT=5000

DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=your_database

JWT_SECRET=your_secret_key

AI_BASE_URL=http://127.0.0.1:8000
3️⃣ Run Database Migrations
npx sequelize-cli db:migrate --config src/config/config.json
4️⃣ Start Development Server
npm run dev

Server runs at:

http://localhost:5000
API Documentation
Base URL

Local:

http://localhost:5000

Production:

https://your-production-url.com
Authentication
Register User
POST /api/auth/register
Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
Response
{
  "success": true,
  "message": "User registered successfully"
}
Login User
POST /api/auth/login
Request Body
{
  "email": "john@example.com",
  "password": "123456"
}
Response
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "JWT_TOKEN"
  }
}
Authorization

All protected routes require:

Authorization: Bearer <JWT_TOKEN>
Readiness API
Submit or Update Readiness
POST /api/readiness

This creates or updates the authenticated user’s readiness profile.

Request Body
{
  "company_name": "GreenHarvest Technologies",
  "sector": "Agriculture",
  "nationality": "Nigeria",
  "business_stage": "startup",
  "funding_need_usd": 50000,
  "business_registered_in": "Nigeria",
  "founder_age": 29,
  "founder_gender": "Female",
  "business_age_months": 18,
  "annual_revenue_usd": 20000,
  "employees": 5,
  "innovation_level": "High",
  "has_prototype": true,
  "targets_underserved": true
}
Response
{
  "success": true,
  "message": "Readiness submitted successfully",
  "readiness": { ... }
}
AI Matching API
Run AI Matching
POST /api/match/:readinessId/run

Runs the AI matching process using the selected readiness profile.

Example
POST /api/match/3/run
Response
{
  "success": true,
  "message": "AI matching completed successfully",
  "total_matches_found": 3,
  "algorithm_version": "ImaraFund v1.0 (40/30/20/10)",
  "matches": [
    {
      "program_name": "Grant Program Name",
      "institution": "Institution Name",
      "country": "Nigeria",
      "funding_amount": 100000,
      "match_score": 78.5,
      "score_breakdown": {
        "geographic": 40,
        "sector": 30,
        "amount_fit": 15,
        "stage": 8
      },
      "target_sectors": "Agriculture",
      "website": "https://example.com",
      "data_source_url": "https://source.com",
      "repayment_required": "False"
    }
  ]
}
Get Matches By Readiness
GET /api/match/:readinessId

Returns stored match results for a specific readiness profile.

Example
GET /api/match/3
Response
{
  "success": true,
  "total": 3,
  "matches": [ ... ]
}
Health Check
GET /health
{
  "status": "OK"
}


Architecture Flow

User registers and logs in
User submits readiness data
Backend sends readiness data to AI service
AI service creates company profile
AI runs intelligent matching
Backend stores and returns match results

This backend is fully production-ready for:

Secure user handling
AI-based grant matching
Persistent match storage
Scalable service integration