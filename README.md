# CRUD Application 🌱

## Description

This CRUD (Create, Read, Update, Delete) application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
It allows users to perform basic operations on user data including creating new users, reading user details, updating user information, and deleting users.

## Features

- **Create User**: Add a new user with name, email, and password.
- **Read User**: View details of all users or a specific user.
- **Update User**: Modify existing user information.
- **Delete User**: Remove a user from the database.

## Technologies Used

- **Frontend**: React.js
  - React Router for navigation
  - Axios for API requests
  - Tailwind CSS for styling
- **Backend**: Node.js, Express.js
  - MongoDB for the database
  - Mongoose for ORM
  - Bcrypt for password hashing
- **Deployment**: Deployed on Render

## Installation

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or an account on MongoDB Atlas

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crud-app.git
   cd crud-app
   ```

2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```env
   MONGO_URI=your_mongo_database_uri
   PORT=3000
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Open another terminal window and navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

## API Endpoints

- **GET /api/v1/user/getusers**: Get all users
- **GET /api/v1/user/getuser/:id**: Get a single user by ID
- **POST /api/v1/user/create**: Create a new user
- **PUT /api/v1/user/update/:id**: Update an existing user by ID
- **DELETE /api/v1/user/delete/:id**: Delete a user by ID

## Usage

1. Navigate to the frontend application in your browser:
   ```
   http://localhost:5173
   ```

2. Use the application interface to perform CRUD operations:
   - **Create**: Fill out the form to create a new user.
   - **Read**: View the list of users.
   - **Update**: Edit user details by clicking the update button.
   - **Delete**: Remove a user by clicking the delete button.

## Directory Structure

```
crud-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
```


## Contact

For any questions or feedback, please contact:
- **Name**: Varun Yadav
- **Email**: yadav.varun056038@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/Varunyadavgithub)
