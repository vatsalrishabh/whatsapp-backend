// server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connectDB'); // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); 

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/register', require('./routes/users')); // User routes
// app.use('/api/messages', './routes/messageRoutes'); // Message routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
