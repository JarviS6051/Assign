# Intervue Assignment

A real-time polling application for teachers and students.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JarviS6051/Assign
cd Assign
```

### 2. Install and Start the Backend

```bash
cd backend
npm install
npm run dev
```

- Create a `.env` file in the `backend` directory with your MongoDB connection string:
  ```
  PORT=5000
  MONGODB_URI=your_mongo_connection_string
  ```

 - Update the backend URL in the frontend in socket.js to localhost:5000, and also in the PollHistoryPage.jsx

### 3. Install and Start the Frontend

Open a new terminal, then:

```bash
cd frontend
npm install
npm start
```

Your backend will run on port 5000 and the frontend on 5173.

---

## Links

- **GitHub Repository:** [https://github.com/JarviS6051/Assign](https://github.com/JarviS6051/Assign)
- **Frontend Live URL:** [https://assign-plum.vercel.app](https://assign-plum.vercel.app)

---

Let me know if you want this added to your README or if you need any more customizations!