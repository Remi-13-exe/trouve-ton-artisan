// Chargement des variables d'environnement depuis le fichier .env
require('dotenv').config();
// Importation de nodemailer pour envoyer des emails
const nodemailer = require('nodemailer');

// Création du transporteur SMTP avec les identifiants Mailtrap
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',  // Serveur SMTP Mailtrap
  port: 2525,                         // Port SMTP
  auth: {
    user: process.env.MAILTRAP_USER,  // Utilisateur SMTP depuis .env
    pass: process.env.MAILTRAP_PASS   // Mot de passe SMTP depuis .env
  }
});

// Options de l'email à envoyer
const mailOptions = {
  from: '"Remi Dev" <from@example.com>', // Expéditeur
  to: 'to@example.com',                  // Destinataire
  subject: 'Test Mailtrap',             // Sujet du mail
  text: 'Ceci est un test depuis Node.js avec Mailtrap.' // Contenu en texte
};

// Envoi du mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    // Ici, tu peux gérer l'erreur côté serveur (par exemple log ou notification)
  } else {
    // Ici, tu peux gérer la confirmation d'envoi sans utiliser console.log
  }
});
