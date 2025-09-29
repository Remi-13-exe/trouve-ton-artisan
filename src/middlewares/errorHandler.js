// Middleware de gestion des erreurs pour Express
// Ce middleware intercepte les erreurs passées dans l'application

module.exports = (err, req, res, next) => {
  // Affiche la pile d'erreurs dans la console pour le développeur
  console.error(err.stack);

  // Envoie une réponse HTTP 500 (erreur interne du serveur) avec un message JSON
  res.status(500).json({ 
    error: 'Erreur interne du serveur, veuillez réessayer après vérification' 
  });
};
