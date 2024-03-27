const mongoose = require('mongoose');

// Define Mongoose schema for messages
const messageSchema = new mongoose.Schema({
    senderEmail: String,
    receiverEmail: String,
    message: String,
    time: String,
    date: String,
});

module.exports = mongoose.model('Message', messageSchema);
