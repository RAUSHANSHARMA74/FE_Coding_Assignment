
Got it! Here’s a single, comprehensive README.md file that includes all the instructions for both the backend and frontend setup, along with cloning the repository, installing dependencies, setting up the environment, and running the project:

markdown
Copy code
# CSV Upload and Table Display Project

This project consists of two parts:

1. **Backend**: A Node.js/Express server for handling CSV file uploads.
2. **Frontend**: A React + Vite application for uploading a CSV file and displaying the data in a responsive table.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **Git**

---

## Setup Instructions

### 1. Clone the Repository

   ```bash
   git clone https://github.com/RAUSHANSHARMA74/FE_Coding_Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running the Backend:

   - Start the backend server:

     ```bash
     npm start
     ```

   - The backend server will run on `http://localhost:3050` or the port specified in your `.env` file.

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `frontend` directory and add the following environment variable:

     ```env
     VITE_API_URL = http://localhost:3050
     ```

   - Replace `http://localhost:3050` with the URL of your backend server if different.

4. Running the Frontend:

   - Start the frontend application:

     ```bash
     npm run dev
     ```

   - The frontend application will run on `http://localhost:5173` by default.

## Additional Notes

- Make sure to set up the environment variables correctly to avoid connection issues.
- The frontend application expects the backend to be running on the URL specified in the `.env` file.

If you encounter any issues, please check the error messages for guidance or consult the documentation for the respective technologies used.
