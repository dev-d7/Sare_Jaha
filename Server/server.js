const express = require('express');
const connectDB = require('./config/db');
const registerRoute = require('./routes/register');
const dotenv = require('dotenv');

dotenv.config();

// Initialize app and connect to DB
const app = express();
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.get('/test', (req, res) => {
  console.log("GET request received at /test");
  res.send('Server is working!');
});

// Use routes
app.use('/register', registerRoute);

// Set the port from .env or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
