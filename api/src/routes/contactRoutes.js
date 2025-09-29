// Importation d'Express pour créer un router
const express = require('express');
// Création du router Express
const router = express.Router();
// Importation de nodemailer pour envoyer des emails
const nodemailer = require('nodemailer');
// Importation du modèle Artisan pour vérifier l'existence de l'artisan ciblé
const { Artisan } = require('../models');
// Middleware de validation du payload pour vérifier le corps de la requête
const validateContact = require('../middlewares/validatePayload');

// Route POST pour envoyer un message à un artisan
// Le middleware validateContact s'assure que le corps de la requête est valide
router.post('/contact', validateContact, async (req, res) => {
  const { nom, email, objet, message, artisanId } = req.body;

  try {
    // Vérifie que l'artisan existe dans la base de données
    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' }); // Si l'artisan n'existe pas, renvoie 404
    }

    // Configuration du transporteur SMTP avec Mailtrap
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io', // Serveur SMTP Mailtrap
      port: 2525,                       // Port SMTP
      auth: {
        user: process.env.MAILTRAP_USER, // Utilisateur SMTP depuis .env
        pass: process.env.MAILTRAP_PASS  // Mot de passe SMTP depuis .env
      }
    });

    // Contenu du mail
    const mailOptions = {
      from: `"${nom}" <${email}>`,        // Expéditeur
      to: artisan.email,                  // Destinataire (email de l'artisan)
      subject: objet,                     // Sujet du mail
      text: `Message de ${nom} (${email}) :\n\n${message}` // Corps du mail en texte
    };

    // Envoi du mail
    await transporter.sendMail(mailOptions);

    // Réponse en cas de succès
    res.status(200).json({ success: 'Message envoyé avec succès' });
  } catch (error) {
    // Gestion des erreurs : log côté serveur et réponse 500
    console.error('Erreur lors de l’envoi du mail :', error);
    res.status(500).json({ error: 'Erreur serveur lors de l’envoi du message' });
  }
});

// Exportation du router pour l'utiliser dans app.js ou server.js
module.exports = router;
