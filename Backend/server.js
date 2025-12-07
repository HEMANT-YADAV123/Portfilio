require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.post('/send-email', async (req, res) => {
  const { Username, phoneNumber, Email, Subject, Message } = req.body;

  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: Email,
      subject: `New Contact Form Submission - ${Subject}`,
      text: `Name: ${Username}
Phone: ${phoneNumber}
Email: ${Email}

Message:
${Message}`
    };

    await transporter.sendMail(mailOptions);

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
