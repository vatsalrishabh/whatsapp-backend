const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');

// Function to send email using Nodemailer
async function sendEmail(email, otp) {
    try {
        // Create a transporter object using the Gmail SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vatsalrishabh00@gmail.com', // Your Gmail email address
                pass: 'kjkpiukrtvfqwdts' // Your Gmail password
            }
        });

        // Define email options
        const mailOptions = {
            from: 'vatsalrishabh00@gmail.com', // Sender address (your Gmail email address)
            to: email, // Receiver address
            subject: 'OTP for registration', // Subject line
            text: `Your OTP for registration is: ${otp}` // Plain text body
        };

        // Send mail with defined transport object
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

// Route to create a new user
router.post('/', async (req, res) => {
    try {
        const { name, email, mobile, gender, dpUrl } = req.body;
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Generate OTP
        const otp = '243433'; // Your constant OTP value

        // Send OTP to email
        await sendEmail(email, otp);

        // Store user data in MongoDB
        const user = new User({ name, email, mobile, gender, dpUrl });
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
