# 🏪 Store Rating Platform

<div align="center">

### Production-Grade Full-Stack Store Rating & Review Platform

A secure, scalable, role-based web application that allows users to discover stores, submit ratings, and manage their profiles, while providing dedicated dashboards for System Administrators and Store Owners.

<br />






\

<br />

**Role-Based Access Control • REST API • PostgreSQL • Prisma • JWT Authentication • Validation • Testing • Docker**

</div>

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Problem Statement](#-problem-statement)
* [Objectives](#-objectives)
* [Key Features](#-key-features)
* [User Roles](#-user-roles)
* [Technology Stack](#-technology-stack)
* [System Architecture](#-system-architecture)
* [Application Architecture](#-application-architecture)
* [Project Structure](#-project-structure)
* [Database Design](#-database-design)
* [Database Relationships](#-database-relationships)
* [Authentication & Authorization](#-authentication--authorization)
* [API Documentation](#-api-documentation)
* [API Response Format](#-api-response-format)
* [Validation Rules](#-validation-rules)
* [Search, Filtering & Sorting](#-search-filtering--sorting)
* [Pagination](#-pagination)
* [Rating System](#-rating-system)
* [Security](#-security)
* [Error Handling](#-error-handling)
* [Frontend Architecture](#-frontend-architecture)
* [Backend Architecture](#-backend-architecture)
* [UI/UX](#-uiux)
* [Testing](#-testing)
* [Docker](#-docker)
* [Environment Variables](#-environment-variables)
* [Installation](#-installation)
* [Database Setup](#-database-setup)
* [Database Seeding](#-database-seeding)
* [Running the Application](#-running-the-application)
* [Demo Accounts](#-demo-accounts)
* [Deployment](#-deployment)
* [Production Checklist](#-production-checklist)
* [Git Workflow](#-git-workflow)
* [Screenshots](#-screenshots)
* [Future Improvements](#-future-improvements)
* [Known Limitations](#-known-limitations)
* [Contributing](#-contributing)
* [License](#-license)
* [Author](#-author)

---

# 📖 Overview

**Store Rating Platform** is a production-oriented full-stack web application developed as part of a Full Stack Developer coding assessment.

The platform provides a centralized authentication system with role-based access control for:

* System Administrators
* Normal Users
* Store Owners

Users can browse registered stores, search stores, submit ratings from **1 to 5**, and modify their previously submitted ratings.

Administrators can manage users and stores, monitor platform-level statistics, filter and sort records, and inspect user details.

Store Owners can monitor their store's average rating and see the users who submitted ratings.

The application is designed using a layered architecture with clear separation between:

```text
Presentation Layer
        ↓
API Layer
        ↓
Validation Layer
        ↓
Authentication / Authorization
        ↓
Service Layer
        ↓
Repository / ORM Layer
        ↓
PostgreSQL
```

---

# 🎯 Problem Statement

The objective is to build a web-based store rating system where authenticated users can rate registered stores while providing different functionalities based on their roles.

The platform must support:

* Centralized authentication
* Role-based authorization
* Store management
* User management
* Store ratings
* Rating modification
* Dashboard analytics
* Search
* Filtering
* Sorting
* Pagination
* Password management
* Input validation
* Secure database operations

---

# 🎯 Objectives

The main objectives of this project are:

1. Implement a secure authentication system.
2. Implement role-based access control.
3. Provide separate dashboards for different user roles.
4. Allow users to register and authenticate.
5. Allow users to browse registered stores.
6. Allow users to submit ratings from 1–5.
7. Allow users to modify existing ratings.
8. Allow administrators to manage users and stores.
9. Allow store owners to monitor ratings.
10. Implement server-side search, filtering, sorting and pagination.
11. Follow secure backend development practices.
12. Maintain a normalized relational database.
13. Provide consistent REST API responses.
14. Implement centralized error handling.
15. Provide automated testing.
16. Make the application easy to run using Docker.

---

# ✨ Key Features

## 🔐 Authentication

* User registration
* User login
* Logout
* JWT-based authentication
* Password hashing using bcrypt
* Current-user endpoint
* Password update
* Protected routes

---

## 👨‍💼 System Administrator

Administrators can:

* View dashboard statistics
* View total users
* View total stores
* View total ratings
* Create users
* Create administrators
* Create stores
* View all users
* View all stores
* View individual user details
* View store ratings
* Filter users
* Filter stores
* Search records
* Sort records
* Paginate records
* Logout

---

## 👤 Normal User

Normal users can:

* Create an account
* Login
* Logout
* Update password
* View all registered stores
* Search stores by name
* Search stores by address
* View overall store ratings
* View their submitted rating
* Submit a rating
* Modify an existing rating

---

## 🏪 Store Owner

Store Owners can:

* Login
* Logout
* Update password
* View their store dashboard
* View average store rating
* View users who submitted ratings
* View individual submitted ratings

---

# 👥 User Roles

| Role        | Access                           |
| ----------- | -------------------------------- |
| 👨‍💼 ADMIN | Complete platform administration |
| 👤 USER     | Browse stores and submit ratings |
| 🏪 OWNER    | Monitor store ratings            |

### Permission Model

```text
ADMIN
├── Dashboard
├── Create User
├── Create Admin
├── Create Store
├── View Users
├── View Stores
├── View User Details
├── Search
├── Filter
└── Sort

USER
├── View Stores
├── Search Stores
├── Submit Rating
├── Modify Rating
└── Change Password

OWNER
├── View Dashboard
├── View Average Rating
├── View Rating Users
└── Change Password
```

---

# 🛠️ Technology Stack

## Frontend

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| React 19        | UI development          |
| TypeScript      | Type safety             |
| Vite            | Frontend build tool     |
| React Router    | Client-side routing     |
| TanStack Query  | Server state management |
| Tailwind CSS    | UI styling              |
| React Hook Form | Form management         |
| Zod             | Client-side validation  |
| Axios           | HTTP communication      |

## Backend

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| Node.js       | Runtime                    |
| TypeScript    | Type safety                |
| Express.js    | REST API                   |
| Prisma        | ORM                        |
| PostgreSQL    | Relational database        |
| JWT           | Authentication             |
| bcrypt        | Password hashing           |
| Zod           | API validation             |
| Helmet        | Security headers           |
| CORS          | Cross-origin configuration |
| Rate Limiting | Abuse protection           |

## Testing

| Technology            | Purpose                 |
| --------------------- | ----------------------- |
| Vitest                | Unit testing            |
| React Testing Library | Frontend testing        |
| Supertest             | API integration testing |

## DevOps

| Technology     | Purpose                               |
| -------------- | ------------------------------------- |
| Docker         | Containerization                      |
| Docker Compose | Local orchestration                   |
| Git            | Version control                       |
| GitHub         | Source control / collaboration        |
| CI/CD          | Automated verification and deployment |

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │       Browser       │
                         │    React + TS       │
                         └──────────┬──────────┘
                                    │
                                    │ HTTPS / REST
                                    ▼
                         ┌─────────────────────┐
                         │    Express API      │
                         │     TypeScript      │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
             ┌────────────┐ ┌────────────┐ ┌──────────────┐
             │    Auth    │ │ Validation │ │     RBAC     │
             │ Middleware │ │   Layer    │ │ Middleware   │
             └────────────┘ └────────────┘ └──────────────┘
                    │               │               │
                    └───────────────┼───────────────┘
                                    ▼
                         ┌─────────────────────┐
                         │   Service Layer     │
                         │ Business Logic      │
                         └──────────┬──────────┘
                                    ▼
                         ┌─────────────────────┐
                         │ Repository / Prisma │
                         └──────────┬──────────┘
                                    ▼
                         ┌─────────────────────┐
                         │     PostgreSQL      │
                         └─────────────────────┘
```

---

# 🧩 Application Architecture

The application follows a layered architecture.

```text
Client
  │
  ▼
Routes
  │
  ▼
Middleware
  ├── Authentication
  ├── Authorization
  ├── Validation
  └── Rate Limiting
  │
  ▼
Controllers
  │
  ▼
Services
  │
  ▼
Repositories
  │
  ▼
Prisma ORM
  │
  ▼
PostgreSQL
```

### Architectural Principles

* Separation of concerns
* Single responsibility
* Reusable services
* Centralized error handling
* Centralized validation
* Role-based authorization
* Database constraints
* Server-side pagination
* Server-side filtering
* Server-side sorting
* Type safety

---

# 📁 Project Structure

```text
store-rating-platform/
│
├── client/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── forms/
│   │   │   ├── tables/
│   │   │   └── layout/
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── stores/
│   │   │   ├── ratings/
│   │   │   └── dashboard/
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── admin/
│   │   │   ├── user/
│   │   │   └── owner/
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── lib/
│   │   ├── routes/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── Dockerfile
│   └── package.json
│
├── server/
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── database.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── admin.controller.ts
│   │   │   ├── store.controller.ts
│   │   │   ├── rating.controller.ts
│   │   │   └── owner.controller.ts
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── admin.service.ts
│   │   │   ├── store.service.ts
│   │   │   ├── rating.service.ts
│   │   │   └── owner.service.ts
│   │   │
│   │   ├── repositories/
│   │   │   ├── user.repository.ts
│   │   │   ├── store.repository.ts
│   │   │   └── rating.repository.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── role.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── rate-limit.middleware.ts
│   │   │
│   │   ├── schemas/
│   │   │   ├── auth.schema.ts
│   │   │   ├── user.schema.ts
│   │   │   ├── store.schema.ts
│   │   │   └── rating.schema.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── admin.routes.ts
│   │   │   ├── store.routes.ts
│   │   │   ├── rating.routes.ts
│   │   │   └── owner.routes.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   ├── password.ts
│   │   │   ├── pagination.ts
│   │   │   └── response.ts
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── tests/
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml
├── .gitignore
├── .env.example
└── README.md
```

---

# 🗄️ Database Design

The application uses PostgreSQL with Prisma ORM.

## Entity Overview

```text
┌──────────────┐
│     USER     │
├──────────────┤
│ id           │
│ name         │
│ email        │
│ passwordHash │
│ address      │
│ role         │
│ createdAt    │
│ updatedAt    │
└──────┬───────┘
       │
       │ 1:N
       ▼
┌──────────────┐
│    RATING    │
├──────────────┤
│ id           │
│ userId       │
│ storeId      │
│ rating       │
│ createdAt    │
│ updatedAt    │
└──────┬───────┘
       │
       │ N:1
       ▼
┌──────────────┐
│    STORE     │
├──────────────┤
│ id           │
│ name         │
│ email        │
│ address      │
│ ownerId      │
│ createdAt    │
│ updatedAt    │
└──────────────┘
```

---

# 🔗 Database Relationships

### User → Rating

```text
One User
   │
   ├── Rating
   ├── Rating
   └── Rating
```

### Store → Rating

```text
One Store
   │
   ├── Rating
   ├── Rating
   └── Rating
```

### Store → Owner

```text
User
  │
  │ owner_id
  ▼
Store
```

### Unique Rating Constraint

```text
UNIQUE(user_id, store_id)
```

This ensures that a normal user can submit only one rating per store and subsequently modify that rating.

---

# 🔐 Authentication & Authorization

The application uses JWT-based authentication.

## Authentication Flow

```text
User
 │
 ▼
Login
 │
 ▼
Validate Email
 │
 ▼
Compare Password
 │
 ▼
bcrypt
 │
 ▼
Generate JWT
 │
 ▼
Authenticated Request
 │
 ▼
JWT Verification
 │
 ▼
Identify User
 │
 ▼
Check Role
 │
 ▼
Authorized Controller
```

## Role-Based Access Control

```text
Request
   │
   ▼
JWT Authentication
   │
   ▼
User Identity
   │
   ▼
Role Middleware
   │
   ├──────────────┬──────────────┐
   ▼              ▼              ▼
 ADMIN           USER           OWNER
   │              │              │
   ▼              ▼              ▼
Admin APIs     User APIs      Owner APIs
```

The frontend hides unauthorized navigation, but **authorization is enforced on the backend**.

---

# 🔌 API Documentation

Base URL:

```text
/api/v1
```

---

## 🔑 Authentication APIs

### Register

```http
POST /api/v1/auth/register
```

Request:

```json
{
  "name": "Example User Full Name",
  "email": "user@example.com",
  "address": "Nagpur, Maharashtra",
  "password": "Secure@123"
}
```

---

### Login

```http
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "Secure@123"
}
```

---

### Current User

```http
GET /api/v1/auth/me
```

Authentication:

```text
Required
```

---

### Update Password

```http
PATCH /api/v1/auth/password
```

---

### Logout

```http
POST /api/v1/auth/logout
```

---

# 👨‍💼 Admin APIs

### Dashboard

```http
GET /api/v1/admin/dashboard
```

Returns:

```text
Total Users
Total Stores
Total Ratings
```

---

### List Users

```http
GET /api/v1/admin/users
```

Example:

```http
GET /api/v1/admin/users?page=1&limit=20&search=akshad&role=USER&sortBy=name&sortOrder=asc
```

---

### Create User

```http
POST /api/v1/admin/users
```

---

### User Details

```http
GET /api/v1/admin/users/:id
```

---

### List Stores

```http
GET /api/v1/admin/stores
```

---

### Create Store

```http
POST /api/v1/admin/stores
```

---

# 🏪 Store APIs

### List Stores

```http
GET /api/v1/stores
```

---

### Store Details

```http
GET /api/v1/stores/:id
```

---

# ⭐ Rating APIs

### Submit Rating

```http
POST /api/v1/stores/:storeId/ratings
```

Request:

```json
{
  "rating": 5
}
```

---

### Modify Rating

```http
PATCH /api/v1/stores/:storeId/ratings
```

Request:

```json
{
  "rating": 4
}
```

---

### Get Store Ratings

```http
GET /api/v1/stores/:storeId/ratings
```

---

# 🏪 Store Owner APIs

### Owner Dashboard

```http
GET /api/v1/owner/dashboard
```

Dashboard provides:

```text
Average Rating
Number of Ratings
Users who submitted ratings
Individual ratings
```

---

# 📦 API Response Format

All APIs follow a consistent response structure.

## Success

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully"
}
```

## Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": {}
  }
}
```

---

# ✅ Validation Rules

The application validates input on both frontend and backend.

| Field    | Requirement                      |
| -------- | -------------------------------- |
| Name     | Minimum 20 characters            |
| Name     | Maximum 60 characters            |
| Address  | Maximum 400 characters           |
| Password | 8–16 characters                  |
| Password | At least one uppercase character |
| Password | At least one special character   |
| Email    | Valid email format               |
| Rating   | Integer between 1 and 5          |

### Password Validation

```text
Minimum length: 8
Maximum length: 16
Uppercase: Required
Special character: Required
```

Example:

```text
Secure@123
```

---

# 🔎 Search, Filtering & Sorting

The platform supports server-side query operations.

## Search

```http
GET /api/v1/stores?search=central
```

## Filtering

```http
GET /api/v1/admin/users?role=USER
```

## Sorting

```http
GET /api/v1/admin/users?sortBy=name&sortOrder=asc
```

Supported sorting direction:

```text
asc
desc
```

---

# 📄 Pagination

Large datasets are paginated server-side.

Example:

```http
GET /api/v1/admin/users?page=1&limit=20
```

Response:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

# ⭐ Rating System

Ratings are restricted to:

```text
1 ⭐
2 ⭐⭐
3 ⭐⭐⭐
4 ⭐⭐⭐⭐
5 ⭐⭐⭐⭐⭐
```

## Rating Flow

```text
User
 │
 ▼
Select Store
 │
 ▼
Submit Rating
 │
 ▼
Validate 1–5
 │
 ▼
Check Store
 │
 ▼
Check Existing Rating
 │
 ├── No Rating ──► Create
 │
 └── Existing ───► Update
 │
 ▼
Return Updated Result
```

The database enforces:

```text
UNIQUE(user_id, store_id)
```

---

# 🛡️ Security

Security is treated as a first-class concern.

Implemented/planned security measures include:

* Password hashing using bcrypt
* JWT authentication
* Role-based authorization
* Protected API endpoints
* Input validation
* Database constraints
* Helmet security headers
* CORS configuration
* Rate limiting
* Environment-based secrets
* No password exposure in API responses
* No sensitive information in logs
* ORM-based database access
* Centralized error handling

---

# 🚨 Error Handling

The backend uses centralized error handling.

```text
Controller
    │
    ▼
Service
    │
    ▼
Application Error
    │
    ▼
Global Error Middleware
    │
    ▼
Standard JSON Response
```

## HTTP Status Codes

| Status | Meaning               |
| ------ | --------------------- |
| 200    | Success               |
| 201    | Resource created      |
| 400    | Bad request           |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Resource not found    |
| 409    | Conflict              |
| 422    | Validation error      |
| 429    | Rate limit exceeded   |
| 500    | Internal server error |

---

# 🖥️ Frontend Architecture

The frontend follows a feature-oriented architecture.

```text
React Application
       │
       ├── Authentication
       │
       ├── Admin
       │    ├── Dashboard
       │    ├── Users
       │    └── Stores
       │
       ├── User
       │    ├── Store Listing
       │    └── Ratings
       │
       └── Owner
            └── Dashboard
```

### Frontend Principles

* Reusable components
* Type-safe interfaces
* Feature-based organization
* Protected routes
* Server state management
* Form validation
* Loading states
* Error states
* Empty states
* Responsive design

---

# ⚙️ Backend Architecture

The backend uses a layered architecture.

```text
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
Prisma
  ↓
PostgreSQL
```

### Controllers

Responsible for:

* Receiving HTTP requests
* Calling services
* Returning HTTP responses

### Services

Responsible for:

* Business logic
* Validation orchestration
* Transactions
* Application rules

### Repositories

Responsible for:

* Database access
* Prisma queries
* Data retrieval

This keeps business logic out of route handlers and makes the codebase easier to test and maintain.

---

# 🎨 UI/UX

The application is designed to provide a modern SaaS-style experience.

### UI Features

* Responsive layout
* Sidebar navigation
* Dashboard cards
* Data tables
* Search bars
* Filters
* Sorting controls
* Pagination
* Modal forms
* Toast notifications
* Loading skeletons
* Empty states
* Error states
* Mobile-friendly layouts

---

# 🧪 Testing

Testing is divided into three levels.

## Unit Testing

Examples:

```text
✓ Password validation
✓ Rating validation
✓ Average rating calculation
✓ Pagination logic
✓ Authorization logic
```

## Integration Testing

Examples:

```text
✓ User registration
✓ User login
✓ Admin user creation
✓ Store creation
✓ Rating submission
✓ Rating modification
✓ Owner dashboard
```

## Frontend Testing

Examples:

```text
✓ Login form
✓ Registration form
✓ Protected routes
✓ Rating component
✓ Admin tables
✓ Form validation
```

Run tests:

```bash
npm test
```

---

# 🐳 Docker

The project supports containerized development.

```text
                 Docker Compose
                      │
       ┌──────────────┼──────────────┐
       │              │              │
       ▼              ▼              ▼
   Frontend        Backend       PostgreSQL
   Container       Container      Container
```

Start the application:

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```

---

# 🔐 Environment Variables

Create a `.env` file in the backend.

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/store_rating"
JWT_SECRET="replace-with-a-secure-secret"
JWT_EXPIRES_IN="1d"
PORT=5000
CLIENT_URL="http://localhost:5173"
NODE_ENV="development"
```

Create:

```text
.env.example
```

with:

```env
DATABASE_URL=
JWT_SECRET=
JWT_EXPIRES_IN=
PORT=
CLIENT_URL=
NODE_ENV=
```

> Never commit the actual `.env` file or production secrets to GitHub.

---

# 🚀 Installation

## Prerequisites

Install:

* Node.js 20+
* npm
* PostgreSQL 15+
* Git
* Docker (optional)

---

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/store-rating-platform.git
cd store-rating-platform
```

---

# 📦 Backend Setup

```bash
cd server
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Configure PostgreSQL credentials.

---

# 🗄️ Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

# 🌱 Database Seeding

Seed demo data:

```bash
npx prisma db seed
```

The seed database can contain:

```text
1 Admin
1+ Store Owners
Multiple Normal Users
Multiple Stores
Sample Ratings
```

---

# ▶️ Running the Application

## Backend

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:5000
```

---

## Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 👤 Demo Accounts

The seed script provides demo accounts for testing.

| Role  | Email                                         | Password             |
| ----- | --------------------------------------------- | -------------------- |
| Admin | [admin@example.com](mailto:admin@example.com) | `Configured in seed` |
| User  | [user@example.com](mailto:user@example.com)   | `Configured in seed` |
| Owner | [owner@example.com](mailto:owner@example.com) | `Configured in seed` |

> Demo credentials should be changed before production deployment.

---

# 🌍 Deployment

Recommended production architecture:

```text
                       Internet
                           │
                           ▼
                    ┌─────────────┐
                    │   Browser   │
                    └──────┬──────┘
                           HTTPS
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
       Frontend Hosting              Backend Hosting
          React/Vite                    Express
             │                             │
             │                             │
             └──────────────┬──────────────┘
                            │
                            ▼
                       PostgreSQL
```

Possible deployment targets:

### Frontend

* Vercel
* Netlify
* Cloudflare Pages

### Backend

* Render
* Railway
* Fly.io
* AWS

### Database

* Neon
* Supabase
* Railway PostgreSQL
* AWS RDS

---

# 📊 Production Checklist

Before deployment:

```text
[ ] Environment variables configured
[ ] Production database created
[ ] Database migrations executed
[ ] Database seeded if required
[ ] JWT secret replaced
[ ] CORS restricted to frontend domain
[ ] HTTPS enabled
[ ] Rate limiting enabled
[ ] Security headers enabled
[ ] Password hashing enabled
[ ] Backend validation enabled
[ ] Frontend validation enabled
[ ] Database constraints verified
[ ] API errors handled
[ ] Logs configured
[ ] Tests passing
[ ] Docker image tested
[ ] README updated
[ ] No secrets committed
[ ] No unnecessary console logs
[ ] Production build tested
```

---

# 📈 Performance Considerations

The application is designed with scalability in mind.

### Database

* Indexed frequently queried fields
* Unique constraints
* Foreign key relationships
* Pagination
* Efficient aggregation queries

### Backend

* Service/repository separation
* Limited database payloads
* Server-side filtering
* Server-side sorting
* Server-side pagination
* Reusable query utilities

### Frontend

* Server-state caching
* Lazy loading where appropriate
* Component reuse
* Optimized API requests
* Loading states

---

# 🔄 Data Flow

## User Rating

```text
React UI
   │
   ▼
Rating Form
   │
   ▼
Zod Validation
   │
   ▼
POST /api/v1/stores/:id/ratings
   │
   ▼
JWT Middleware
   │
   ▼
Role Middleware
   │
   ▼
Rating Service
   │
   ▼
Rating Repository
   │
   ▼
Prisma
   │
   ▼
PostgreSQL
   │
   ▼
Updated Rating
   │
   ▼
API Response
   │
   ▼
React UI
```

---

# 🔄 Authentication Flow

```text
Registration
     │
     ▼
Validate Input
     │
     ▼
Hash Password
     │
     ▼
Create User
     │
     ▼
Database
```

Login:

```text
Email + Password
       │
       ▼
Validate Input
       │
       ▼
Find User
       │
       ▼
Compare Password
       │
       ▼
Generate JWT
       │
       ▼
Authenticated Session
```

---

# 📋 Assessment Requirement Mapping

| Requirement          | Implementation           |
| -------------------- | ------------------------ |
| Single Login System  | JWT Authentication       |
| System Administrator | Admin RBAC               |
| Normal User          | User RBAC                |
| Store Owner          | Owner RBAC               |
| User Registration    | `/auth/register`         |
| Login                | `/auth/login`            |
| Store Management     | Admin Store APIs         |
| User Management      | Admin User APIs          |
| Ratings 1–5          | Rating Validation        |
| Modify Rating        | PATCH Rating API         |
| Store Search         | Server-side search       |
| Filtering            | Query parameters         |
| Sorting              | Query parameters         |
| Dashboard            | Role-specific dashboards |
| Password Update      | Password API             |
| Validation           | Zod                      |
| Database             | PostgreSQL               |
| ORM                  | Prisma                   |
| Security             | JWT + bcrypt + Helmet    |
| Testing              | Vitest + Supertest       |
| Deployment           | Docker + Cloud           |

---

# 🧠 Engineering Decisions

## Why React?

React provides a component-based architecture suitable for building reusable dashboards, forms, tables and role-specific interfaces.

## Why TypeScript?

TypeScript provides compile-time type safety and reduces runtime errors in large frontend and backend codebases.

## Why Express?

Express provides a lightweight and flexible foundation for building a REST API while allowing clean separation of middleware, controllers and services.

## Why PostgreSQL?

PostgreSQL provides:

* Strong relational integrity
* Transactions
* Constraints
* Indexing
* Aggregations
* Mature production capabilities

## Why Prisma?

Prisma provides:

* Type-safe database access
* Schema management
* Migrations
* Relationship handling
* Developer-friendly queries

---

# 🔮 Future Improvements

Potential future enhancements include:

* Email verification
* Forgot-password workflow
* Refresh-token rotation
* Advanced analytics
* Store categories
* Store location/map integration
* Review comments
* Rating distribution charts
* Audit logs
* Admin activity monitoring
* Redis caching
* Background jobs
* Object storage
* Observability
* Automated CI/CD deployment
* API documentation using OpenAPI/Swagger

These features are intentionally outside the core assessment scope.

---

# ⚠️ Known Limitations

The current assessment implementation focuses on the specified requirements.

Potential production extensions include:

* Advanced distributed caching
* Multi-region deployment
* Advanced observability
* Full audit logging
* Email infrastructure
* Horizontal scaling
* Background job processing

These can be introduced without fundamentally changing the core architecture.

---

# 🤝 Contributing

Contributions are welcome.

### Development Workflow

```bash
git checkout -b feature/feature-name
```

Make changes and run tests:

```bash
npm test
```

Commit:

```bash
git commit -m "feat: implement feature"
```

Push:

```bash
git push origin feature/feature-name
```

Create a pull request.

---

# 📝 Git Commit Convention

The project follows conventional commit-style messages.

```text
feat: add authentication
feat: implement admin dashboard
feat: implement store ratings
fix: resolve rating validation
fix: resolve authentication issue
test: add rating service tests
test: add authentication tests
refactor: improve store service
docs: update API documentation
chore: configure docker
```

---

# 📸 Screenshots

Add screenshots here after completing the UI.

## Login

```text
Add screenshot:
docs/screenshots/login.png
```

## Admin Dashboard

```text
Add screenshot:
docs/screenshots/admin-dashboard.png
```

## User Store Listing

```text
Add screenshot:
docs/screenshots/user-stores.png
```

## Rating Interface

```text
Add screenshot:
docs/screenshots/rating.png
```

## Store Owner Dashboard

```text
Add screenshot:
docs/screenshots/owner-dashboard.png
```

---

# 📚 API Testing

The project can be tested using:

* Postman
* Insomnia
* REST Client
* Automated integration tests

Recommended API testing flow:

```text
Register
   ↓
Login
   ↓
Copy Authentication Token
   ↓
Access Protected API
   ↓
Test Role Permissions
   ↓
Test Validation
   ↓
Test CRUD
   ↓
Test Search
   ↓
Test Filtering
   ↓
Test Sorting
   ↓
Test Pagination
```

---

# 🧪 Quality Assurance Checklist

### Authentication

```text
✓ Valid registration
✓ Invalid registration
✓ Duplicate email
✓ Valid login
✓ Invalid password
✓ Invalid email
✓ Protected endpoint
✓ Logout
```

### Authorization

```text
✓ Admin can access admin APIs
✓ User cannot access admin APIs
✓ Owner cannot access admin APIs
✓ User can access user APIs
✓ Owner can access owner APIs
```

### Ratings

```text
✓ Rating 1 accepted
✓ Rating 5 accepted
✓ Rating 0 rejected
✓ Rating 6 rejected
✓ Duplicate rating prevented
✓ Existing rating can be modified
```

### Validation

```text
✓ Name minimum length
✓ Name maximum length
✓ Address maximum length
✓ Password minimum length
✓ Password maximum length
✓ Uppercase requirement
✓ Special character requirement
✓ Email validation
```

---

# 🏁 Final Status

```text
Project Type:
Production-Oriented Full-Stack Assessment

Architecture:
Layered REST Architecture

Frontend:
React + TypeScript

Backend:
Node.js + Express + TypeScript

Database:
PostgreSQL

ORM:
Prisma

Authentication:
JWT + bcrypt

Authorization:
Role-Based Access Control

Validation:
Zod

Testing:
Vitest + React Testing Library + Supertest

DevOps:
Docker

Deployment:
Cloud-ready
```

---

# 👨‍💻 Author

**Akshad Aloni**

B.Tech — Computer Science & Engineering (Data Science)

Interested in:

* Full-Stack Development
* Data Engineering
* Backend Engineering
* Artificial Intelligence
* Machine Learning
* Software Engineering

---

# ⭐ Acknowledgements

This project was developed as a full-stack implementation of a store rating platform assessment, with additional production-oriented engineering practices including layered architecture, RBAC, validation, security, testing, pagination, filtering, sorting and containerization.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Built with React • TypeScript • Express • PostgreSQL • Prisma**

</div>
