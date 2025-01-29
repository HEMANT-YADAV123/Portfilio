const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    const { Username, phoneNumber, Email, Subject, Message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., Gmail
            auth: {
                user: 'hy700793@gmail.com',
                pass: 'ybof wjak segj uynt'
            }
        });

        const mailOptions = {
            from: Email,
            to: 'hy700793@gmail.com',
            subject: `New Contact Form Submission - ${Subject}`,
            text: `Name: ${Username}\nPhone: ${phoneNumber}\nEmail: ${Email}\n\nMessage:\n${Message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).send("There was an error sending the email.");
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
