const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fs = require('fs');
const path = require('path');

// Route to create a new user
router.post('/', async (req, res) => {
    try {
        const { name, email, mobile, gender, dpUrl } = req.body;
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        const fileName = email.split('@')[0]; // Unique file name based on email
        const imagePath = path.join(__dirname, '..', 'dp', `${fileName}.jpg`);
    
        // Save image to 'dp' folder
        const base64Image = dpUrl.split(';base64,').pop();
        fs.writeFileSync(imagePath, base64Image, { encoding: 'base64' });
    
        // Store relative URL in MongoDB
        const relativeUrl = `/dp/${fileName}.jpg`;
        const user = new User({ name, email, mobile, gender, dpUrl: relativeUrl });
        await user.save();
        
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
