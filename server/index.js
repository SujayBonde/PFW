const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const { generateEmailTemplate, generatePlainText } = require('./emailTemplate');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    secure: false,
    port: 587,
    host: 'smtp-relay.brevo.com',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify Transporter
transporter.verify((error, success) => {
    if (error) {
        console.log('Error verifying transporter:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const timestamp = new Date();
    const verifiedSender = process.env.EMAIL_FROM || 'sujaybonde2005@gmail.com';
    const recipientEmail = process.env.EMAIL_TO || 'sujaybonde2005@gmail.com';

    const mailOptions = {
        from: `"Portfolio Contact" <${verifiedSender}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `✨ New Portfolio Message from ${name}`,
        text: generatePlainText({ name, email, message, timestamp }),
        html: generateEmailTemplate({ name, email, message, timestamp })
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        // Log error to file for debugging
        require('fs').appendFileSync('error.log', new Date().toISOString() + ' ' + JSON.stringify(error, Object.getOwnPropertyNames(error)) + '\n');
        res.status(500).json({ error: 'Failed to send message: ' + error.message });
    }
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Preview email template in browser
app.get('/api/preview-mail', (req, res) => {
    const previewHtml = generateEmailTemplate({
        name: 'Alex Johnson',
        email: 'alex.design@example.com',
        message: 'Hi Sujay,\n\nI really liked your portfolio and projects! I would love to discuss a freelance web development project with you. Are you available for a quick chat next week?\n\nBest regards,\nAlex'
    });
    res.setHeader('Content-Type', 'text/html');
    res.send(previewHtml);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

