// Chargement des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Middleware pour vérifier la présence et la validité de la clé API
module.exports = (req, res, next) => {
  // Récupération de la clé API depuis les headers de la requête
  const apiKey = req.headers['x-api-key'];

  // Vérification si la clé API est absente ou incorrecte
  if (!apiKey || apiKey !== process.env.API_KEY) {
    // Si la clé est invalide, renvoyer un statut 403 et un message d'erreur
    return res.status(403).json({ error: 'Accès interdit : clé API invalide ou manquante' });
  }

  // Si la clé est valide, passer au middleware ou à la route suivante
  next();
};
