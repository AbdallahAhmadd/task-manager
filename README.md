# Task List Web Application

A **Task List** web application built using the **MEAN stack** (MongoDB, Express.js, Angular, and Node.js). This application allows users to create, view, update, and delete tasks in a real-time, reactive manner.

---

## Features

- Create tasks with a title, description, progress, and priority.
- View a list of tasks with real-time updates.
- Edit or delete tasks from the list.
- Fully responsive Angular front-end with Material Design components.
- RESTful API for task management.
- Real-time updates using observables.

---

## Tech Stack

### Frontend
- **Angular**: For building a dynamic, responsive user interface.
- **Angular Material**: For pre-styled UI components.

### Backend
- **Node.js**: JavaScript runtime for backend logic.
- **Express.js**: For handling RESTful API routes.
- **MongoDB**: NoSQL database for task storage.


---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/task-list-mean.git
   cd task-list-mean
   cd server
   npm install
   ```

   Create a `.env` file in the `server` directory with the following content:

   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/tasklist
   ```

   Start the backend server:

   ```bash
   npm run dev
   ```

2. **Frontend Setup**:

   ```bash
   cd ../client
   npm install
   ng serve
   ```