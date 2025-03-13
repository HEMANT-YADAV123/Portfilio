const dotenv = require('dotenv');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.post('/send-email', async (req, res) => {
    const { Username, phoneNumber, Email, Subject, Message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: Email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission - ${Subject}`,
            text: `Name: ${Username}\nPhone: ${phoneNumber}\nEmail: ${Email}\n\nMessage:\n${Message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error details backend:", error);
        res.status(500).send("There was an error sending the email.");
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
