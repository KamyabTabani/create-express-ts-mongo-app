# 🚀 Express MongoDB TypeScript API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A production-ready RESTful API built with Express.js, TypeScript, MongoDB, and JWT Authentication**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-api-documentation) • [Deployment](#-deployment) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
    - [Local Development](#1-local-development)
    - [Docker Production](#2-docker-production)
- [Configuration](#️-configuration)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Authentication](#-authentication)
- [Usage Examples](#-usage-examples)
- [Testing](#-testing)
- [Docker Commands](#-docker-commands)
- [Database Operations](#-database-operations)
- [Deployment](#-deployment)
- [Available Scripts](#-available-scripts)
- [Make Commands](#-make-commands)
- [Environment Variables](#-environment-variables)
- [Security](#-security)
- [Logging & Monitoring](#-logging--monitoring)
- [Troubleshooting](#-troubleshooting)
- [Best Practices](#-best-practices)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Support](#-support)

---

## 🎯 Overview

This is a **comprehensive, enterprise-grade REST API** template featuring modern best practices and a scalable architecture. Built with TypeScript for type safety, Express.js for robust routing, and MongoDB for flexible data storage.

### Why Use This Template?

- 🏗️ **Production-Ready Architecture** - Clean, maintainable, and scalable code structure
- 🔐 **Security First** - JWT authentication, rate limiting, helmet protection, input validation
- 📚 **Well Documented** - Comprehensive inline documentation and Swagger/OpenAPI specs
- 🐳 **Docker Ready** - Complete containerization setup for easy deployment
- ✅ **Fully Typed** - TypeScript strict mode for maximum type safety
- 🧪 **Test Coverage** - Jest testing setup with example tests
- 🚀 **Developer Friendly** - Hot reload, detailed logging, easy configuration
- 🔄 **Separate Environments** - Independent development and production configurations

**Perfect for:**
- SaaS Applications
- Microservices
- Mobile App Backends
- Learning Modern Backend Development
- Hackathon Projects
- Production APIs

---

## ✨ Features

### 🔐 Authentication & Security

- [x] **JWT Authentication** - Secure token-based auth with access tokens
- [x] **Password Security** - Bcrypt hashing with configurable salt rounds
- [x] **Role-Based Access Control (RBAC)** - Admin and User roles
- [x] **Rate Limiting** - Protection against brute force and DDoS attacks
- [x] **Security Headers** - Helmet.js for HTTP security
- [x] **CORS Protection** - Configurable cross-origin resource sharing
- [x] **Input Validation** - Express-validator for request validation
- [x] **Data Sanitization** - Protection against NoSQL injection

### 👥 User Management

- [x] User Registration with validation
- [x] User Login with credentials
- [x] Get authenticated user profile
- [x] Update user information
- [x] Delete user (Admin only)
- [x] Change password functionality
- [x] Paginated user listing
- [x] User activation/deactivation

### 🏗️ Architecture & Code Quality

- [x] **Clean Architecture** - Layered structure (Routes → Controllers → Services → Models)
- [x] **TypeScript** - Full type safety with strict mode
- [x] **Error Handling** - Centralized error handling middleware
- [x] **Logging** - Winston logger with file and console transport
- [x] **Validation** - Request validation with express-validator
- [x] **API Documentation** - Auto-generated Swagger/OpenAPI docs
- [x] **Testing** - Jest + Supertest integration
- [x] **Linting Ready** - ESLint configuration included
- [x] **Code Formatting** - Prettier configuration

### 🚀 DevOps & Deployment

- [x] **Separate Environments** - Distinct development and production configurations
- [x] **Docker Support** - Multi-stage Dockerfile for optimization
- [x] **Docker Compose** - Complete production environment
- [x] **Health Checks** - Application and database health monitoring
- [x] **Graceful Shutdown** - Proper cleanup on process termination
- [x] **Environment Templates** - `.env.development.example` and `.env.production.example`
- [x] **Database Backup** - Scripts for MongoDB backup/restore
- [x] **Makefile** - Simplified command execution for both environments

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **[Node.js](https://nodejs.org/)** | 18+ | JavaScript runtime environment |
| **[TypeScript](https://www.typescriptlang.org/)** | 5.9+ | Static type checking |
| **[Express.js](https://expressjs.com/)** | 5.1+ | Web application framework |
| **[MongoDB](https://www.mongodb.com/)** | 8.0+ | NoSQL database |
| **[Mongoose](https://mongoosejs.com/)** | 8.19+ | MongoDB object modeling |

### Key Dependencies

**Security & Authentication:**
- `jsonwebtoken` - JWT token generation and verification
- `bcryptjs` - Password hashing
- `helmet` - Security HTTP headers
- `express-rate-limit` - Rate limiting middleware
- `cors` - Cross-Origin Resource Sharing
- `express-validator` - Input validation
- `joi` - Schema validation

**Logging & Monitoring:**
- `winston` - Logging library
- `morgan` - HTTP request logger

**Documentation:**
- `swagger-jsdoc` - Swagger specification generator
- `swagger-ui-express` - Swagger UI interface

**Development:**
- `nodemon` - Auto-restart on file changes
- `ts-node` - TypeScript execution
- `jest` - Testing framework
- `supertest` - HTTP assertions

**Full dependency list available in [`package.json`](package.json)**

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Tool | Version | Check Command | Download |
|------|---------|---------------|----------|
| **Node.js** | 18+ | `node --version` | https://nodejs.org/ |
| **npm** | 9+ | `npm --version` | Included with Node.js |
| **Git** | Latest | `git --version` | https://git-scm.com/ |

### Environment-Specific Requirements

| Environment | Requirements |
|-------------|-------------|
| **Development** | Node.js, npm, MongoDB (local installation) |
| **Production** | Docker, Docker Compose |

### Optional Tools

| Tool | Version | Check Command | Download |
|------|---------|---------------|----------|
| **MongoDB** | 7+ | `mongod --version` | https://www.mongodb.com/try/download/community |
| **Docker** | 20+ | `docker --version` | https://www.docker.com/get-started |
| **Docker Compose** | 2+ | `docker compose version` | Included with Docker Desktop |
| **Make** | Any | `make --version` | Pre-installed on macOS/Linux |

### Check Your Versions

```bash
# Check installed versions
node --version    # Should output: v18.x.x or higher
npm --version     # Should output: 9.x.x or higher
git --version     # Should output: git version 2.x.x

# Development (Local MongoDB)
mongod --version  # If using local MongoDB

# Production (Docker)
docker --version  # If using Docker
docker compose version
make --version
```

---

## 🚀 Quick Start

Get up and running in **under 5 minutes**!

### Choose Your Setup Method

<table>
<tr>
<td width="50%" valign="top">

#### 🖥️ **Local Development**

**Best for:** Active development, debugging, hot-reload

```bash
# 1. Clone repository
git clone <repo-url>
cd express-mongodb-typescript-advanced

# 2. Setup development environment
make setup-dev

# 3. Start local MongoDB
brew services start mongodb-community

# 4. Run application
make dev
```

**Requirements:**
- Node.js 18+
- MongoDB installed locally

**Features:**
- ✅ Hot reload
- ✅ Debug logging
- ✅ No Docker needed
- ✅ Separate dev database
  [📖 Detailed Local Setup →](#1-local-development)

</td>
<td width="50%" valign="top">

#### 🐳 **Docker Production**

**Best for:** Production deployment, isolated environment

```bash
# 1. Clone repository
git clone <repo-url>
cd express-mongodb-typescript-advanced

# 2. Setup production environment
make setup-prod

# 3. Edit production config
nano .env.production

# 4. Start production
make up
```

**Requirements:**
- Docker
- Docker Compose

**Features:**
- ✅ Containerized
- ✅ MongoDB with auth
- ✅ Production-ready
- ✅ Easy deployment

[📖 Detailed Docker Setup →](#2-docker-production)

</td>
</tr>
</table>

### Verify Installation

```bash
# Check health
curl http://localhost:5000/health

# Response:
# {"success":true,"message":"Server is running",...}

# Open API documentation
open http://localhost:5000/api-docs
```

**✅ Success!** Your API is now running at http://localhost:5000

---

## 📥 Installation

### 1. Local Development

Perfect for active development with hot-reload and local MongoDB.

#### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/express-mongodb-typescript-advanced.git
cd express-mongodb-typescript-advanced
```

#### Step 2: Setup Development Environment

```bash
# Automated setup (creates .env.development + installs dependencies)
make setup-dev
```

**This command:**
- ✅ Creates `.env.development` from `.env.development.example`
- ✅ Installs all npm dependencies
- ✅ Prepares development environment

**Or manually:**

```bash
# Copy development environment template
cp .env.development.example .env.development

# Install dependencies
npm install
```

#### Step 3: Configure Development Environment (Optional)

The `.env.development` file is pre-configured for local development, but you can customize:

```bash
nano .env.development
```

**Default configuration:**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myapp_dev
JWT_SECRET=dev-secret-key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
LOG_LEVEL=debug
```

#### Step 4: Start MongoDB

**macOS (Homebrew):**
```bash
brew services start mongodb-community@7.0
```

**Ubuntu/Debian:**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:**
```bash
net start MongoDB
```

**Or use MongoDB Atlas (Cloud):**
```env
# Update .env.development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myapp_dev
```

#### Step 5: Run Application

```bash
# Start development server with hot-reload
make dev

# Or without Make
npm run dev
```

**Expected output:**
```
🔵 Starting development (local MongoDB)...
2024-01-15 10:30:45 [info]: ✅ MongoDB Connected Successfully
2024-01-15 10:30:45 [info]: 📦 Database: myapp_dev
2024-01-15 10:30:45 [info]: 🚀 Server running on port 5000
2024-01-15 10:30:45 [info]: 📚 Documentation: http://localhost:5000/api-docs
```

#### Step 6: Verify

```bash
# Health check
curl http://localhost:5000/health

# Open Swagger docs
open http://localhost:5000/api-docs

# Check development database
make db-shell-dev
```

**🎉 Success!** Your local development environment is ready.

---

### 2. Docker Production

Fastest way to deploy production-ready environment.

#### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/express-mongodb-typescript-advanced.git
cd express-mongodb-typescript-advanced
```

#### Step 2: Setup Production Environment

```bash
# Automated setup (creates .env.production)
make setup-prod
```

**This command:**
- ✅ Creates `.env.production` from `.env.production.example`
- ✅ Shows next steps for configuration

#### Step 3: Configure Production

```bash
# Edit production configuration
nano .env.production
```

**Required changes:**

```env
# Change MongoDB password
MONGO_PASSWORD=YourSecurePassword123

# Generate and update JWT secrets
# Run: make env-secrets
JWT_SECRET=<generated-secret>
JWT_REFRESH_SECRET=<generated-secret>

# Update MongoDB URI with your password
MONGODB_URI=mongodb://admin:YourSecurePassword123@mongodb:27017/myapp?authSource=admin

# Set production CORS
CORS_ORIGIN=https://yourdomain.com
```

**Generate JWT secrets:**
```bash
make env-secrets

# Copy the output to .env.production
```

#### Step 4: Start Production

```bash
# Start all services (MongoDB + API)
make up
```

**What happens:**
- ✅ Builds Docker images
- ✅ Starts MongoDB container with authentication
- ✅ Starts Express API container
- ✅ Creates persistent volumes
- ✅ Sets up health checks

#### Step 5: Verify

```bash
# Check status
make ps

# View logs
make logs

# Test API
curl http://localhost:5000/health

# Get MongoDB connection string
make db-connection
```

**🎉 Success!** Your production environment is running.

---

## ⚙️ Configuration

### Environment Files

This project uses **separate environment configurations** for development and production:

```
.env.development.example    # Development template (committed to git)
.env.production.example     # Production template (committed to git)
.env.development           # Actual dev config (gitignored)
.env.production            # Actual prod config (gitignored)
.env                       # Active environment (gitignored)
```

### Development Configuration

**File:** `.env.development`

```env
# ============================================
# DEVELOPMENT ENVIRONMENT
# ============================================

NODE_ENV=development
PORT=5000

# Local MongoDB (no authentication)
MONGODB_URI=mongodb://localhost:27017/myapp_dev

# Development secrets (simple for dev)
JWT_SECRET=dev-secret-key-for-development-only
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=dev-refresh-secret-for-development
JWT_REFRESH_EXPIRE=30d

# Relaxed rate limiting for development
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=1000

# CORS
CORS_ORIGIN=http://localhost:3000

# Verbose logging
LOG_LEVEL=debug
```

**Features:**
- ✅ Local MongoDB (no Docker)
- ✅ No authentication required
- ✅ Separate database (`myapp_dev`)
- ✅ Debug logging
- ✅ High rate limits
- ✅ Simple secrets

**Access database:**
```bash
# MongoDB shell
mongosh mongodb://localhost:27017/myapp_dev

# Or
make db-shell-dev

# MongoDB Compass
mongodb://localhost:27017/myapp_dev
```

---

### Production Configuration

**File:** `.env.production`

```env
# ============================================
# PRODUCTION ENVIRONMENT
# ============================================

NODE_ENV=production
PORT=5000

# Docker configuration
APP_CONTAINER_NAME=express-api
MONGO_CONTAINER_NAME=mongodb
MONGO_PORT=27018

# MongoDB with authentication
MONGO_USERNAME=admin
MONGO_PASSWORD=YourSecurePassword123
MONGO_DATABASE=myapp

# Docker MongoDB connection
MONGODB_URI=mongodb://admin:YourSecurePassword123@mongodb:27017/myapp?authSource=admin

# Strong production secrets (CHANGE THESE!)
# Generate with: make env-secrets
JWT_SECRET=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210
JWT_REFRESH_EXPIRE=30d

# Strict rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Production CORS
CORS_ORIGIN=https://yourdomain.com

# Minimal logging
LOG_LEVEL=error
```

**Features:**
- ✅ Docker MongoDB
- ✅ Authentication enabled
- ✅ Separate database (`myapp`)
- ✅ Error-level logging
- ✅ Strict rate limits
- ✅ Strong secrets

**Access database:**
```bash
# MongoDB shell
make db-shell

# Or
docker compose exec mongodb mongosh -u admin -p YourSecurePassword123

# MongoDB Compass
make db-connection
# mongodb://admin:YourSecurePassword123@localhost:27018/myapp?authSource=admin
```

---

### Generate Secure Secrets

```bash
# Generate JWT secrets
make env-secrets

# Output:
# 🔐 Generated Secrets (copy to .env.production):
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# JWT_SECRET=a1b2c3d4e5f6...
# JWT_REFRESH_SECRET=z9y8x7w6...
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Or manually:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📂 Project Structure

```
express-mongodb-typescript-advanced/
│
├── src/                          # Source code
│   ├── config/                   # Configuration files
│   │   ├── constants.ts          # Application constants
│   │   ├── database.ts           # MongoDB connection setup
│   │   └── swagger.ts            # Swagger/OpenAPI configuration
│   │
│   ├── controllers/              # Request handlers
│   │   ├── auth.controller.ts    # Authentication endpoints
│   │   └── user.controller.ts    # User management endpoints
│   │
│   ├── middlewares/              # Express middlewares
│   │   ├── auth.middleware.ts    # JWT authentication & authorization
│   │   ├── errorHandler.ts       # Global error handler
│   │   ├── rateLimiter.ts        # Rate limiting configurations
│   │   └── validator.ts          # Validation middleware wrapper
│   │
│   ├── models/                   # Mongoose models
│   │   └── User.model.ts         # User schema & methods
│   │
│   ├── routes/                   # API routes
│   │   ├── auth.routes.ts        # Auth routes (/api/auth)
│   │   └── user.routes.ts        # User routes (/api/users)
│   │
│   ├── services/                 # Business logic layer
│   │   ├── auth.service.ts       # Authentication business logic
│   │   └── user.service.ts       # User management logic
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # Custom types & interfaces
│   │
│   ├── utils/                    # Utility functions
│   │   ├── ApiError.ts           # Custom error class
│   │   ├── ApiResponse.ts        # Standard response formatter
│   │   └── logger.ts             # Winston logger setup
│   │
│   ├── validators/               # Input validation schemas
│   │   └── user.validator.ts     # User validation rules
│   │
│   ├── app.ts                    # Express app configuration
│   └── server.ts                 # Server entry point
│
├── tests/                        # Test files
│   └── user.test.ts              # User API tests
│
├── logs/                         # Application logs (auto-generated)
│   ├── combined.log              # All logs
│   └── error.log                 # Error logs only
│
├── dist/                         # Compiled JavaScript (auto-generated)
│
├── node_modules/                 # Dependencies (auto-generated)
│
├── .env.development.example      # Development environment template
├── .env.production.example       # Production environment template
├── .env.development              # Development config (gitignored)
├── .env.production               # Production config (gitignored)
├── .env                          # Active environment (gitignored)
├── .gitignore                    # Git ignore rules
├── .dockerignore                 # Docker ignore rules
├── docker-compose.yml            # Docker Compose configuration
├── Dockerfile                    # Docker image definition
├── Makefile                      # Automation commands
├── jest.config.js                # Jest testing configuration
├── nodemon.json                  # Nodemon configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

### Architecture Layers

```
┌─────────────────────────────────────────┐
│           HTTP Request                  │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│  Routes (routes/)                       │
│  - Define endpoints                     │
│  - Apply middlewares                    │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│  Controllers (controllers/)             │
│  - Handle requests                      │
│  - Extract data                         │
│  - Return responses                     │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│  Services (services/)                   │
│  - Business logic                       │
│  - Data processing                      │
│  - External integrations                │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│  Models (models/)                       │
│  - Database schemas                     │
│  - Data validation                      │
│  - Instance methods                     │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│         MongoDB Database                │
└─────────────────────────────────────────┘
```

---

## 📚 API Documentation

### Interactive Documentation

Once the server is running, access the **Swagger UI** at:

```
http://localhost:5000/api-docs
```

### API Endpoints Overview

#### 🔓 Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API welcome message |
| `GET` | `/health` | Health check endpoint |
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | User login |
| `GET` | `/api-docs` | Swagger documentation |

#### 🔒 Protected Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/auth/profile` | Get current user profile | ✅ |
| `GET` | `/api/users` | Get all users (paginated) | ✅ |
| `GET` | `/api/users/:id` | Get user by ID | ✅ |
| `PUT` | `/api/users/:id` | Update user | ✅ |
| `DELETE` | `/api/users/:id` | Delete user | ✅ Admin only |
| `POST` | `/api/users/change-password` | Change password | ✅ |

### Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "statusCode": 200
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| `200` | OK | Successful GET, PUT, DELETE |
| `201` | Created | Successful POST (resource created) |
| `400` | Bad Request | Validation error |
| `401` | Unauthorized | Missing/invalid token |
| `403` | Forbidden | Insufficient permissions |
| `404` | Not Found | Resource not found |
| `409` | Conflict | Duplicate resource |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server error |

---

## 🔐 Authentication

### How It Works

```
1. Register/Login → Receive JWT Token
2. Include token in requests → Authorization: Bearer <token>
3. Server verifies token → Process request
```

### Register a New User

**Request:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "age": 30
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "_id": "65a5b2c3d4e5f6a7b8c9d0e1",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "role": "user",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "statusCode": 201
}
```

### Login

**Request:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { ... },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "statusCode": 200
}
```

### Using the Token

Include the token in the `Authorization` header:

```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Role-Based Access Control

| Role | Permissions |
|------|-------------|
| **user** | View own profile, update own profile, change password |
| **admin** | All user permissions + delete users, view all users |

**Creating an Admin:**

```javascript
// Manually update in MongoDB
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

---

## 💡 Usage Examples

### Complete Authentication Flow

```bash
# 1. Register a new user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","password":"secret123"}'

# Response includes token:
# "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# 2. Save the token
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# 3. Get your profile
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer $TOKEN"

# 4. Get all users (paginated)
curl -X GET "http://localhost:5000/api/users?page=1&limit=10" \
  -H "Authorization: Bearer $TOKEN"

# 5. Update user
curl -X PUT http://localhost:5000/api/users/USER_ID \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Smith","age":28}'

# 6. Change password
curl -X POST http://localhost:5000/api/users/change-password \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"oldPassword":"secret123","newPassword":"newsecret456"}'
```

### JavaScript/TypeScript Example

```typescript
const API_URL = 'http://localhost:5000';

// Register
const register = async () => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Alice',
      email: 'alice@example.com',
      password: 'secret123',
      age: 25
    })
  });
  const data = await response.json();
  return data.data.token;
};

// Login
const login = async () => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'alice@example.com',
      password: 'secret123'
    })
  });
  const data = await response.json();
  return data.data.token;
};

// Get profile (authenticated)
const getProfile = async (token: string) => {
  const response = await fetch(`${API_URL}/api/auth/profile`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};

// Usage
const token = await register();
const profile = await getProfile(token);
console.log(profile);
```

### Python Example

```python
import requests

API_URL = "http://localhost:5000"

# Register
response = requests.post(f"{API_URL}/api/auth/register", json={
    "name": "Alice",
    "email": "alice@example.com",
    "password": "secret123",
    "age": 25
})
token = response.json()["data"]["token"]

# Get profile
headers = {"Authorization": f"Bearer {token}"}
profile = requests.get(f"{API_URL}/api/auth/profile", headers=headers)
print(profile.json())
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure

```
tests/
└── user.test.ts    # User API integration tests
```

### Example Test Output

```
PASS  tests/user.test.ts
  User API Tests
    POST /api/auth/register
      ✓ should register a new user (245ms)
      ✓ should not register user with existing email (123ms)
    POST /api/auth/login
      ✓ should login user with correct credentials (156ms)
      ✓ should not login with incorrect password (89ms)
    GET /api/users
      ✓ should get all users with authentication (95ms)
      ✓ should not get users without authentication (45ms)
    GET /api/users/:id
      ✓ should get user by id (78ms)
    PUT /api/users/:id
      ✓ should update user (112ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        3.245s
```

### Writing Custom Tests

```typescript
import request from 'supertest';
import app from '../src/app';

describe('Custom API Tests', () => {
  it('should return 200 on health check', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
```

---

## 🐳 Docker Commands

### Basic Commands

```bash
# Start production services
make up
# Or: docker compose --env-file .env.production up -d

# Stop services
make down
# Or: docker compose --env-file .env.production down

# Restart services
make restart
# Or: docker compose --env-file .env.production restart

# View logs
make logs
# Or: docker compose --env-file .env.production logs -f app

# Check status
make ps
# Or: docker compose --env-file .env.production ps

# Rebuild
make rebuild
# Or: docker compose --env-file .env.production up -d --build
```

### Advanced Commands

```bash
# Access app container shell
make shell
# Or: docker compose --env-file .env.production exec app sh

# Access MongoDB shell
make db-shell

# View container stats
make stats
# Or: docker stats

# Remove all containers and volumes
make clean
# Or: docker compose --env-file .env.production down -v

# Clean up Docker system
make prune
# Or: docker system prune -a --volumes
```

---

## 💾 Database Operations

### Access MongoDB Shell

**Development (Local):**
```bash
# Direct connection
mongosh mongodb://localhost:27017/myapp_dev

# Or use Make
make db-shell-dev
```

**Production (Docker):**
```bash
# Use Make
make db-shell

# Or Docker command
docker compose --env-file .env.production exec mongodb mongosh -u admin -p password123
```

### Get Connection Strings

```bash
# Show both development and production connection strings
make db-connection

# Output:
# 🔵 Development: mongodb://localhost:27017/myapp_dev
# 🔴 Production:  mongodb://admin:password@localhost:27018/myapp?authSource=admin
```

### Common Operations

```javascript
// Switch to database
use myapp

// View collections
show collections

// Find all users
db.users.find().pretty()

// Count users
db.users.countDocuments()

// Find user by email
db.users.findOne({ email: "alice@example.com" })

// Update user to admin
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)

// Delete user
db.users.deleteOne({ email: "user@example.com" })
```

### Backup & Restore

```bash
# Backup production database
make db-backup

# Restore database
make db-restore FILE=backups/backup-20240115-103000.archive
```

---

## 🚢 Deployment

### Deploy to VPS (Ubuntu)

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 3. Clone repository
git clone <your-repo>
cd express-mongodb-typescript-advanced

# 4. Setup production
make setup-prod

# 5. Edit production config
nano .env.production

# 6. Generate secrets
make env-secrets

# 7. Start production
make up

# 8. Check status
make ps
make health
```

### Deploy with Docker

```bash
# 1. Build production image
docker build -t your-api:latest .

# 2. Run container
docker run -d \
  -p 5000:5000 \
  --env-file .env.production \
  --name api \
  your-api:latest
```

### Deploy to Heroku

```bash
# 1. Install Heroku CLI
# 2. Login
heroku login

# 3. Create app
heroku create your-app-name

# 4. Add MongoDB
heroku addons:create mongolab:sandbox

# 5. Set environment variables
heroku config:set JWT_SECRET=your-secret
heroku config:set NODE_ENV=production

# 6. Deploy
git push heroku main

# 7. View logs
heroku logs --tail
```

### Environment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET` and `JWT_REFRESH_SECRET`
- [ ] Configure production database
- [ ] Set appropriate `CORS_ORIGIN`
- [ ] Change `MONGO_PASSWORD` from default
- [ ] Enable HTTPS/SSL
- [ ] Configure logging (`LOG_LEVEL=error`)
- [ ] Set up monitoring
- [ ] Configure backups

---

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server with hot-reload
npm run build        # Build TypeScript to JavaScript
npm start            # Run production build
npm run prod         # Build and start production
```

### Testing

```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
```

### Utilities

```bash
npm run clean        # Remove dist folder
```

---

## 🔧 Make Commands

### Quick Reference

```bash
make help            # Show all available commands
make setup           # Complete setup (dev + prod)
make info            # Show project information
```

### Development Commands

```bash
make setup-dev       # Setup development environment
make dev             # Start local development server
make test            # Run tests
make test-watch      # Run tests in watch mode
make build-local     # Build TypeScript locally
make db-shell-dev    # Open local MongoDB shell
```

### Production Commands

```bash
make setup-prod      # Setup production environment
make up              # Start production services
make down            # Stop production services
make restart         # Restart services
make rebuild         # Rebuild and restart
make build           # Build Docker images
make stop            # Stop without removing
make up-build        # Build and start services
```

### Logs & Monitoring

```bash
make logs            # View app logs (follow)
make logs-db         # View MongoDB logs
make logs-all        # View all logs
make logs-tail       # Last 100 lines
make ps              # List containers
make status          # Detailed status
make health          # Check API health
make ping            # Ping API
make stats           # Container resource usage
```

### Database Operations

```bash
make db-shell        # Production MongoDB shell
make db-shell-dev    # Development MongoDB shell
make db-backup       # Backup production database
make db-restore      # Restore database (FILE=backup.archive)
make db-connection   # Show connection strings for Compass
make db-drop         # Drop database (DANGEROUS!)
```

### Configuration

```bash
make env-secrets     # Generate JWT secrets
make env-show        # Show production config (masked)
make env             # Create .env from .env.example
```

### Container Shell Access

```bash
make shell           # Open shell in production app container
```

### Cleanup Commands

```bash
make clean           # Remove all containers, volumes, images
make clean-volumes   # Remove volumes only (keep images)
make prune           # Prune entire Docker system
make prune-images    # Remove unused images
make prune-volumes   # Remove unused volumes
```

### Environment Comparison

| Command | Development | Production |
|---------|-------------|------------|
| **Setup** | `make setup-dev` | `make setup-prod` |
| **Start** | `make dev` | `make up` |
| **Stop** | `Ctrl+C` | `make down` |
| **Database** | `make db-shell-dev` | `make db-shell` |
| **Logs** | Terminal output | `make logs` |

---

## 🌐 Environment Variables

### Complete Reference

| Variable | Development | Production | Description |
|----------|------------|------------|-------------|
| `NODE_ENV` | `development` | `production` | Environment mode |
| `PORT` | `5000` | `5000` | Server port |
| `MONGODB_URI` | `mongodb://localhost:27017/myapp_dev` | `mongodb://admin:password@mongodb:27017/myapp?authSource=admin` | Database connection |
| `JWT_SECRET` | `dev-secret-key` | `<strong-secret>` | JWT signing secret |
| `JWT_EXPIRE` | `7d` | `7d` | JWT expiration |
| `JWT_REFRESH_SECRET` | `dev-refresh-secret` | `<strong-secret>` | Refresh token secret |
| `JWT_REFRESH_EXPIRE` | `30d` | `30d` | Refresh token expiration |
| `RATE_LIMIT_WINDOW_MS` | `900000` | `900000` | Rate limit window |
| `RATE_LIMIT_MAX_REQUESTS` | `1000` | `100` | Max requests per window |
| `CORS_ORIGIN` | `http://localhost:3000` | `https://yourdomain.com` | Allowed origins |
| `LOG_LEVEL` | `debug` | `error` | Logging level |

### Production-Only Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `MONGO_USERNAME` | `admin` | MongoDB username |
| `MONGO_PASSWORD` | `SecurePass123` | MongoDB password |
| `MONGO_DATABASE` | `myapp` | MongoDB database name |
| `MONGO_PORT` | `27018` | MongoDB external port |
| `APP_CONTAINER_NAME` | `express-api` | App container name |
| `MONGO_CONTAINER_NAME` | `mongodb` | MongoDB container name |

### Required Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `MONGODB_URI` | ✅ | - | Database connection string |
| `JWT_SECRET` | ✅ | - | JWT signing secret |
| `PORT` | ❌ | 5000 | Server port |
| `NODE_ENV` | ❌ | development | Environment |

---

## 🔒 Security

### Implemented Security Features

- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Password Hashing** - Bcrypt with salt rounds
- ✅ **Helmet.js** - Security HTTP headers
- ✅ **CORS** - Cross-origin protection
- ✅ **Rate Limiting** - DDoS protection
- ✅ **Input Validation** - Request validation
- ✅ **NoSQL Injection** - Query sanitization
- ✅ **Environment Separation** - Dev/prod isolation
- ✅ **Environment Variables** - Secret protection

### Security Best Practices

```bash
# 1. Keep dependencies updated
npm audit
npm audit fix

# 2. Use strong secrets
make env-secrets

# 3. Change default passwords
# Edit .env.production and change MONGO_PASSWORD

# 4. Enable HTTPS in production
# Use Let's Encrypt or cloud provider SSL

# 5. Regular backups
make db-backup

# 6. Monitor logs
tail -f logs/error.log
make logs
```

### Rate Limiting

| Type | Window | Max Requests (Dev) | Max Requests (Prod) |
|------|--------|-------------------|---------------------|
| General | 15 min | 1000 | 100 |
| Auth | 15 min | - | 5 (failed attempts) |
| API | 1 min | - | 30 |

---

## 📊 Logging & Monitoring

### Log Levels

```env
# Development
LOG_LEVEL=debug      # Show everything

# Production
LOG_LEVEL=error      # Only errors
LOG_LEVEL=warn       # Warnings and errors
LOG_LEVEL=info       # Info, warnings, errors
```

### Log Files

```
logs/
├── combined.log    # All logs
└── error.log       # Errors only
```

### Viewing Logs

```bash
# Development (local)
# Logs appear in terminal

# Production (Docker)
make logs           # App logs
make logs-db        # MongoDB logs
make logs-all       # All logs

# Log files
tail -f logs/combined.log
tail -f logs/error.log
```

### Health Monitoring

```bash
# Health check endpoint
curl http://localhost:5000/health
# Or
make health

# Returns:
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600
}
```

---

## 🛠️ Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process
lsof -i :5000

# Kill process
kill -9 <PID>

# Or change port in .env files
```

#### MongoDB Connection Failed (Development)

```bash
# Check if MongoDB is running
brew services list | grep mongodb    # macOS
sudo systemctl status mongod         # Linux

# Start MongoDB
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
```

#### MongoDB Authentication Failed (Production)

```bash
# Check credentials in .env.production
cat .env.production | grep MONGO_

# Recreate MongoDB with new credentials
make clean-volumes
make up
```

#### Docker Issues

```bash
# Check logs
make logs

# Clean rebuild
make clean
make rebuild

# Full Docker reset
docker system prune -a --volumes -f
make up
```

#### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Wrong Environment File Loaded

```bash
# Development
make dev              # Uses .env.development

# Production
make up               # Uses .env.production

# Check which environment is active
cat .env              # Shows currently active config
```

### Debug Mode

```bash
# Development (automatic debug logging)
make dev

# Production (enable debug logging temporarily)
# Edit .env.production
LOG_LEVEL=debug
make restart
make logs
```

### Database Issues

```bash
# Check connection strings
make db-connection

# Test development database
make db-shell-dev

# Test production database
make db-shell

# Backup before making changes
make db-backup
```

---

## ✅ Best Practices

### Code Organization

- ✅ Follow layered architecture
- ✅ Keep controllers thin
- ✅ Put business logic in services
- ✅ Use TypeScript strict mode
- ✅ Handle errors properly
- ✅ Add appropriate logging

### Security

- ✅ Never commit `.env`, `.env.development`, `.env.production` files
- ✅ Use strong JWT secrets (32+ characters)
- ✅ Change default MongoDB password in production
- ✅ Validate all inputs
- ✅ Sanitize database queries
- ✅ Enable HTTPS in production
- ✅ Keep dependencies updated
- ✅ Use separate databases for dev/prod

### Database

- ✅ Use indexes for frequently queried fields
- ✅ Implement pagination
- ✅ Regular backups (`make db-backup`)
- ✅ Use connection pooling
- ✅ Handle connection errors
- ✅ Use separate databases (`myapp_dev` vs `myapp`)

### API Design

- ✅ Use proper HTTP methods
- ✅ Return appropriate status codes
- ✅ Consistent response format
- ✅ Version your API
- ✅ Document all endpoints

### Environment Management

- ✅ Use `.env.development` for local development
- ✅ Use `.env.production` for Docker/production
- ✅ Keep `.env.*.example` files updated
- ✅ Never commit actual `.env` files
- ✅ Generate strong secrets for production
- ✅ Document all environment variables

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm test
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation
style: formatting
refactor: code restructuring
test: add tests
chore: maintenance
```

### Code Style

- Use TypeScript strict mode
- Follow existing patterns
- Add JSDoc comments
- Write tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Kamyab Tabani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

[Read full license →](LICENSE)

---

## 👨‍💻 Author

**Kamyab Tabani**

- 📧 Email: k.tabani82@gmail.com
- 💼 GitHub: [@kamyabtabani](https://github.com/kamyabtabani)
- 🐦 Twitter: [@kamyabtabani](https://twitter.com/kamyabtabani)
- 💼 LinkedIn: [kamyabtabani](https://linkedin.com/in/kamyabtabani)

---

## 💬 Support

### Get Help

- 📖 **Documentation**: Read this README thoroughly
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/express-mongodb-typescript-advanced/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/yourusername/express-mongodb-typescript-advanced/discussions)
- 📧 **Email**: k.tabani82@gmail.com

### Useful Resources

- [Express.js Docs](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [JWT.io](https://jwt.io/)
- [Docker Docs](https://docs.docker.com/)

---

## 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation
- 🔀 Contributing code

---

<div align="center">

### Built with ❤️ by [Kamyab Tabani](https://github.com/kamyabtabani)

**Made with**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white)

[⬆ Back to Top](#-express-mongodb-typescript-api)

---

**Happy Coding! 🚀**

*Last Updated: November 2025 • Version 1.0.0*

</div>
