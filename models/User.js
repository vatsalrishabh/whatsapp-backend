// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  dpUrl: {
    type: String
  },
   whatsappOTP: {
    type: String
  },
   emailOTP: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
