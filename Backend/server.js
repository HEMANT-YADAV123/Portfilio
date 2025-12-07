require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.post('/send-email', async (req, res) => {
  const { Username, phoneNumber, Email, Subject, Message } = req.body;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.EMAIL_USER,
        reply_to: Email,
        subject: `New Contact Form Submission - ${Subject}`,
        text: `Name: ${Username}\nPhone: ${phoneNumber}\nEmail: ${Email}\n\nMessage:\n${Message}`
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("RESEND ERROR:", errorData);
      throw new Error('Failed to send email');
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully!"
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed"
    });
  }
});
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server running on port ${port}`));
