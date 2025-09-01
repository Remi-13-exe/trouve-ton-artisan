const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { Artisan } = require('../models');
const validateContact = require('../middlewares/validatePayload');




router.post('/contact', validateContact, async (req, res) => {
  const { nom, email, objet, message, artisanId } = req.body;

  try {
    // Vérifie que l'artisan existe
    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    // Configure le transporteur SMTP avec Mailtrap
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    

    // Contenu du mail
    const mailOptions = {
      from: `"${nom}" <${email}>`,
      to: artisan.email,
      subject: objet,
      text: `Message de ${nom} (${email}) :\n\n${message}`
    };

    // Envoie du mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l’envoi du mail :', error);
    res.status(500).json({ error: 'Erreur serveur lors de l’envoi du message' });
  }
});

module.exports = router;
