require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connection'); // Import the db module

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// Example GET route to fetch data from PostgreSQL
app.get('/api/data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

    
app.get('/api/test/db', async (req, res) => {
  try {
    const client = await db.connect(); // Try to connect to the database
    res.send('Database connection successful');
    client.release(); // Release the client back to the pool
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Database connection error');
  }
});

// Default route handler
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
