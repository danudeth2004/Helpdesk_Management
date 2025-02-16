# Helpdesk Management

This repository contains a full-stack application with a **React (Vite)** frontend and an **Express.js + TypeORM** backend.
## Tech Stack

### Frontend (React + Vite)

-   React 19
    
-   Redux Toolkit
    
-   React Router DOM
    
-   React Hook Form
    
-   Axios
    
-   Tailwind CSS
    
-   ESLint
    
-   Vite
    

### Backend (Express + TypeORM)

-   Express.js
    
-   TypeORM
    
-   PostgreSQL (optional, depending on database setup)
    
-   JSON Web Token (JWT) Authentication
    
-   CORS
    
-   Axios
    
-   Dotenv

## Installation

### 1. Clone the repository

    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    
### 2. Install dependencies

#### Frontend
    cd frontend
    npm install
    
#### Backend

    cd backend
    npm install
### 3. Setup environment variables

Create a `.env` file in the `backend` directory and configure the necessary values:

    DATABASE_URL="postgresql://username:password@localhost:5432/helpdesk"
    
Enter your PostgreSQL username and password.

### 4. Run the application

#### Start Backend

    cd backend
	npm run dev

#### Start Frontend

	cd frontend
    npm run dev
