const express = require('express');
const db = require('./db'); // Imports the database connection

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// A simple root route to verify the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Car Washing Sales Management System API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});