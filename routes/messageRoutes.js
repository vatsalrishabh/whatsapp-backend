const express = require('express');
const Message = require('../models/messageSchema'); // Import the Message model

const router = express.Router();

// Route to handle sending messages
router.post('/', async (req, res) => {
    try {
        // Extract data from request body
        const { senderEmail, receiverEmail, message, time, date } = req.body;

        // Create new message document
        const newMessage = new Message({
            senderEmail,
            receiverEmail,
            message,
            time,
            date,
        });

        // Save message to database
        await newMessage.save();

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;
