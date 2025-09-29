// src/middlewares/validatePayloads.js

// Importation de Joi pour la validation des données
const Joi = require('joi');

// Définition du schéma de validation pour un contact
const contactSchema = Joi.object({
  nom: Joi.string().min(2).required(),       // Le nom doit être une chaîne d'au moins 2 caractères et est obligatoire
  email: Joi.string().email().required(),    // L'email doit être une chaîne valide au format email et est obligatoire
  objet: Joi.string().required(),            // L'objet du message est obligatoire
  message: Joi.string().min(10).required(),  // Le message doit contenir au moins 10 caractères et est obligatoire
  artisanId: Joi.number().integer().required() // L'ID de l'artisan doit être un entier et est obligatoire
});

// Middleware pour valider le corps de la requête selon le schéma défini
module.exports = (req, res, next) => {
  // Validation du corps de la requête
  const { error } = contactSchema.validate(req.body);

  // Si une erreur de validation existe, renvoyer une réponse 400 avec le message d'erreur
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Si la validation passe, passer au middleware ou à la route suivante
  next();
};
