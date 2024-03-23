// db.js

const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dchat');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
