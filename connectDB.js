// db.js

const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Vatsalrishabh00:Dimple999@vatsaldatabase.cqhuqki.mongodb.net/dchat?retryWrites=true&w=majority&appName=Vatsaldatabase');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
