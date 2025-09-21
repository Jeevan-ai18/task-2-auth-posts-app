### 1. landing page
![landing page](./Screenshots/Screenshot%202025-09-21%20080317.png) 

### 2. Sign Up page
![Sign Up Success](./Screenshots/Screenshot%202025-09-21%20080416.png)
 

### 3. Sign In page
![Sign In Success](./Screenshots/Screenshot%202025-09-21%20080441.png)
### 4. Home Page showing Name + Phone
![Home Page](./screenshots/Screenshot%202025-09-21%20080328.png)

### 4. home page 
![Home Page](./Screenshots/Screenshot%202025-09-21%20093410.png)


# Day 2 Task: User Authentication App

This project is a **full-stack user authentication system** built with **React (frontend)**, **Express + PostgreSQL (backend)**, and **JWT for authentication**.  

Users can sign up, sign in, and view a Home page showing their name and phone number.  

---

## Project Structure

```

day-2-task/
├── backend/          # Express server + PostgreSQL
│   ├── controllers/  # API controllers
│   ├── middleware/   # JWT middleware
│   ├── db.js         # Database connection
│   ├── routes/       # API routes
│   ├── .env.example  # Example environment variables
│   ├── package.json
│   └── ...
├── frontend/         # React application
│   ├── src/
│   │   ├── pages/    # Landing, SignUp, SignIn, Home
│   │   ├── api.js    # Axios instance
│   │   └── App.js
│   ├── package.json
│   └── ...
└── README.md         # Project instructions (this file)

````

---

## Features

- Sign Up with name, phone, email, and password  
- Sign In with email and password  
- Home page showing user Name + Phone  
- JWT-based authentication (optional for `/users/me`)  
- Sign Out functionality  
- Error handling for invalid credentials, missing fields, and duplicate emails  

---

## Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=task2db
DB_PORT=5432
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

4. Initialize the database:

```bash
npm run init-db
```

5. Start the server:

```bash
npm run dev
```

* Backend runs at: `http://localhost:5000`

---

## Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

* Frontend runs at: `http://localhost:3000`

---

## Testing

* **Sign Up**

  * New email → success
  * Existing email → error

* **Sign In**

  * Correct credentials → success → redirects to Home
  * Wrong credentials → error

* **Home Page**

  * Shows Name + Phone from localStorage
  * Sign Out clears token and redirects to Sign In

* **Protected routes (optional)**

  * Only accessible with valid JWT token

---

## Screenshots

1. **Sign Up Success**
2. **Sign In Success**
3. **Home Page showing Name + Phone**

*(Add your screenshots here before submitting the repo)*

---

## Notes

* Ensure PostgreSQL is running and database `task2db` is created.
* `.env` file should never be committed; keep `.env.example` for reference.
* JWT middleware is optional for this task but recommended for production.

---


```

---

This README covers:  

- Project overview  
- Folder structure  
- Features  
- Backend & Frontend setup instructions  
- Testing steps  
- Notes on JWT and environment variables  

---


Tech Stack Section

## Tech Stack
- Frontend: React, React Router, Axios
- Backend: Node.js, Express
- Database: PostgreSQL
- Authentication: JWT
- Styling: CSS


API Endpoints Section

## API Endpoints

### Auth
- POST `/api/auth/signup` → Sign Up
- POST `/api/auth/signin` → Sign In
- GET `/api/auth/users/me` → Get current user (requires JWT)


Future Improvements / Notes

## Future Improvements
- Add proper JWT middleware to secure all protected routes
- Improve frontend styling
- Add password reset functionality

