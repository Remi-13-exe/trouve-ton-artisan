require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

transporter.sendMail({
  from: '"Remi Dev" <from@example.com>',
  to: 'to@example.com',
  subject: 'Test Mailtrap',
  text: 'Ceci est un test depuis Node.js avec Mailtrap.'
}, (err, info) => {
  if (err) {
    console.error('Erreur :', err);
  } else {
    console.log('Mail envoyé :', info.response);
  }
});
