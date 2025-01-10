# Project Setup Instructions

## 1. Frontend (React)

### 1.1 Clone the frontend repository

Navigate to the `frontend` folder and install the dependencies:


### 1.2 Run the React app

Start the React app:


npm start


The frontend will be available at `http://localhost:3000`.

- To access the login page: `http://localhost:3000/login`
- To access the register page: `http://localhost:3000/register`

### 1.3 Proxy Setup

- The frontend automatically communicates with the backend API via a proxy defined in `frontend/package.json` under the `"proxy"` field.
- The API is available at `http://localhost:5000`, and the frontend will send requests to this URL for authentication and other actions.

---

## 2. Backend (Node.js API)

### 2.1 Clone the backend repository

Navigate to the `api` folder and install the dependencies:

cd api npm install


### 2.2 Set up the `.env` file

- In the `api` folder, create a `.env` file.
- Add the MongoDB connection string and JWT secret in the `.env` file:

MONGO_URI=your_mongo_connection_string_here JWT_SECRET=your_jwt_secret_here

- Replace `your_mongo_connection_string_here` with your MongoDB URI (use MongoDB Atlas or local MongoDB).
- Replace `your_jwt_secret_here` with a JWT secret key.

### 2.3 Run the API server

Start the backend server:

npm start


The API will be available at `http://localhost:5000`.

- Register new users at `POST /api/users/register`
- Log in users at `POST /api/users/login`

---

## 3. How to Change MongoDB Connection String

If you need to update the MongoDB connection string in your backend:

1. Open the `.env` file in the `api` folder.
2. Replace the value of the `MONGO_URI` environment variable with the desired MongoDB connection string.




