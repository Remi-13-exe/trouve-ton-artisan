// middlewares/apiKeyMiddleware.js
const apiKeyMiddleware = (req, res, next) => {
  console.log("🔹 --- apiKeyMiddleware déclenché ---");
  console.log("➡️ Méthode :", req.method);
  console.log("➡️ Route :", req.originalUrl);
  console.log("➡️ Headers reçus :", req.headers);

  // ✅ Laisser passer les requêtes OPTIONS (préflight CORS)
  if (req.method === 'OPTIONS') {
    console.log("ℹ️ Requête OPTIONS détectée, passage automatique pour CORS");
    return res.sendStatus(200);
  }

  const clientKey = req.headers['x-api-key'];
  const serverKey = process.env.API_KEY;

  console.log("📤 Clé reçue du client :", clientKey);
  console.log("🔐 Clé attendue côté serveur :", serverKey);

  if (!clientKey) {
    console.warn("⚠️ Requête rejetée : clé API manquante");
    return res.status(403).json({ error: "Accès interdit : clé API manquante" });
  }

  if (clientKey !== serverKey) {
    console.warn("❌ Clé API invalide :", clientKey);
    return res.status(403).json({ error: "Accès interdit : clé API invalide" });
  }

  console.log("✅ Clé API valide, accès autorisé à la route :", req.originalUrl);
  next();
};

module.exports = apiKeyMiddleware;
