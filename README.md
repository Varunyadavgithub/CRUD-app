# CRUD Application (MERN Stack) [**🔗Live Link**](https://crud-app-frontend-mu.vercel.app/)

## 📌 Project Overview

This is a **CRUD** (Create, Read, Update, Delete) application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to perform basic operations on user data, including creating new users, viewing user details, updating user information, and deleting users. This project also leverages Docker for containerization, making it easier to deploy and manage the application. The application is deployed on **Vercel** (Frontend) and **Render** (Backend).

## 📸 Screenshot

![Screenshot 2025-01-24 121110](https://github.com/user-attachments/assets/4f64781b-c66d-4969-aef0-0f2313c929b9)

## Features

- **Create User**: Add a new user with name, email, and password.
- **Read User**: View details of all users or a specific user.
- **Update User**: Modify existing user information.
- **Delete User**: Remove a user from the database.
- **Responsive UI**: The application is designed with a user-friendly interface using React and styled with Tailwind CSS.
- **Backend API**: Built with Node.js and Express.js, providing secure and efficient communication between the frontend and the MongoDB database.
- **CORS Configuration**: Allows frontend hosted on Vercel to communicate securely with the backend hosted on Render.

## Tools & Technologies🛠️

### Frontend:

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, flexible layouts.
- **Axios**: A promise-based HTTP client for making API requests.

### Backend:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A minimalist web framework for Node.js, used to build the RESTful API.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Bcrypt.js**: A library to hash passwords for secure storage.

### Deployment:

- **Docker**: Containerizes both the frontend and backend services for easy deployment and management.
- **MongoDB Atlas**: Cloud-hosted MongoDB for seamless and secure database management.
- **Render**: Backend deployment platform.
- **Vercel**: Frontend deployment platform.

### Optional Tools:

- **Postman**: For testing and interacting with backend API endpoints.

## Project Setup

### Prerequisites

- Node.js installed
- MongoDB (either locally or via MongoDB Atlas)
- Docker (Optional, for containerization)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/Varunyadavgithub/CRUD-app.git
cd CRUD-app
```

#### 2. Backend Setup

- Navigate to the `backend` directory and install dependencies:

  ```bash
  cd backend
  npm install
  ```

- Create a `.env` file inside the `backend` directory and add the following environment variables:

  ```env
  DB_URI=your_mongo_database_uri
  PORT=3000
  FRONTEND_URL=your_frontend_url
  ```

- Start the backend server:
  ```bash
  npm start
  ```

#### 3. Frontend Setup

- Navigate to the `frontend` directory and install dependencies:

  ```bash
  cd frontend
  npm install
  ```

- Start the frontend development server:
  ```bash
  npm start
  ```

This will start the frontend server on `http://localhost:5173`.

#### 4. Docker Setup (Optional)

1. Ensure the **`docker-compose.yml`** file is located at the root of the project.

2. To build and run the Docker containers for both frontend, backend, and MongoDB services:

   ```bash
   docker-compose up --build
   ```

3. The application will be accessible at `http://localhost:5173` after the containers are built and running.

## API Endpoints

- **GET /api/v1/user/getusers**: Get a list of all users.
- **GET /api/v1/user/getuser/:id**: Get a specific user by ID.
- **POST /api/v1/user/create**: Create a new user.
- **PUT /api/v1/user/update/:id**: Update an existing user by ID.
- **DELETE /api/v1/user/delete/:id**: Delete a user by ID.

### Example Request:

- **POST /api/v1/user/create**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

## Directory Structure

```
crud-app/
├── backend/                        # Backend application code
│   ├── controllers/                # Controllers for handling API logic
│   │   ├── user.controller.js      # Controller for user-related API actions
│   ├── models/                     # Database models (Mongoose models)
│   │   ├── user.model.js           # User schema/model for MongoDB
│   ├── routes/                     # API route definitions
│   │   ├── user.route.js           # Routes for handling user requests
│   ├── utils/                      # Utility functions
│   │   ├── connect_db.js           # Function to connect to MongoDB
│   │   ├── error.js                # Error handling utility
│   ├── .env                        # Environment variables (e.g., database URI, secret keys)
│   ├── .gitignore                  # Git ignore file to exclude sensitive files
│   ├── Dockerfile                  # Dockerfile for building backend image
│   └── package-lock.json           # Lock file for backend dependencies
│   ├── package.json                # Backend dependencies and scripts
│   ├── server.js                   # Main entry point for the backend (server setup)
├── frontend/                       # Frontend application code
│   ├── public/                     # Public folder for static assets
│   ├── src/                        # Source code for React application
│   │   ├── assets/                 # Static assets like images, fonts, etc.
│   │   ├── components/             # Reusable React components
│   │   │   ├── Home.js             # Home page component
│   │   │   ├── ReadUser.js         # Component to display user data
│   │   │   ├── Spinner.js          # Spinner/loading component
│   │   │   ├── UpdateUser.js       # Component to update user data
│   │   ├── App.js                  # Main React app component
│   │   ├── index.css               # Global CSS styles for the React app
│   │   ├── main.jsx                # React entry point (index.js in Vite)
│   ├── .env                        # Environment variables for the frontend
│   ├── .eslintrc.cjs               # ESLint configuration file
│   ├── .gitignore                  # Git ignore file for frontend
│   ├── Dockerfile                  # Dockerfile for building frontend image
│   ├── index.html                  # Main HTML file for the React app
│   ├── package-lock.json           # Lock file for frontend dependencies
│   ├── package.json                # Frontend dependencies and scripts
│   ├── postcss.config.js           # PostCSS configuration (if using PostCSS)
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── vite.config.js              # Configuration for Vite (Frontend build tool)
├── docker-compose.yml              # Docker Compose configuration for multi-container setup
└── README.md                       # Project documentation

```

## Docker Compose

The project uses **Docker Compose** to simplify the setup and deployment of the app's frontend, backend, and MongoDB database services.

- **docker-compose.yml**: A configuration file that defines the frontend, backend, and MongoDB services, and how they interact with each other.

## Running the Application

1. **Frontend**: The frontend will run on `http://localhost:5173`.
2. **Backend**: The backend server will run on `http://localhost:3000`.

Both services can be run concurrently on different terminals or within Docker containers using Docker Compose.

### Docker Commands:

- Build and run containers:

  ```bash
  docker-compose up --build
  ```

- Stop the containers:
  ```bash
  docker-compose down
  ```

## Contact

For any questions or feedback, please contact:

- **Name**: Varun Yadav
- **Email**: yadav.varun056038@gmail.com
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/varun-yadav-77152b251)
- **GitHub**: [GitHub Profile](https://github.com/Varunyadavgithub)

Happy Learning 🌱  
Happy Coding 💖
