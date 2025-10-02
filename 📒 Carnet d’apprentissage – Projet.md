# **📒 Carnet d’apprentissage – Projet “Trouve ton artisan”**











**1. ❌ Fichiers introuvables**



**Problème : Certaines routes ou fichiers ne se trouvaient pas.**

**Cause : Mauvais chemin relatif.**

**Solution : Utiliser ../.. jusqu’à atteindre le fichier racine.**



**2. ❌ Postman ne fonctionne pas**



**Problème : Impossible de tester l’API via Postman.**

**Solution : Tester directement les endpoints via le navigateur (surtout pour les requêtes GET simples).**



**3. ❌ Erreur Sequelize – Champ inconnu Artisan.prenom**



**Problème : Le modèle Sequelize contenait un champ inexistant (prenom).**

**Cause : Incohérence entre le modèle Sequelize et la base de données.**

**Solution : Corriger le modèle pour qu’il corresponde exactement aux colonnes réelles (nom, metier, ville, etc.).**



**4. ❌ Erreur envoi d’email (Post contact)**



**Problème : Envoi impossible car Gmail bloquait la connexion.**

**Solution :**



**Créer un compte Mailtrap pour tester l’envoi d’email.**



**Configurer Nodemailer avec MAILTRAP\_USER et MAILTRAP\_PASS dans .env.**



**Tester les identifiants avec curl :**



**\& "C:\\Windows\\System32\\curl.exe" --url "smtp://sandbox.smtp.mailtrap.io:2525" `**

**--user "TON\_USERNAME:TON\_PASSWORD" `**

**--mail-from from@example.com `**

**--mail-rcpt to@example.com `**

**--upload-file "email.txt"**





**Exemple email.txt :**



**From: Magic Elves from@example.com**

**To: Mailtrap Sandbox to@example.com**

**Subject: Test Mailtrap via curl**



**Hello Mailtrap! This is a test email sent from curl.**



**5. ❌ Erreurs middlewares sur Postman**



**Problème : Bugs liés aux middlewares lors des requêtes API.**

**Solution :**



**Vérifier que les fichiers sont bien sauvegardés.**



**Réécrire et importer les middlewares dans le bon ordre.**



**Conseil général pour éviter les bugs côté serveur :**



**Charger l’environnement : require('dotenv').config() en haut de ton index.js.**



**Chemins relatifs stricts : importer avec require('./src/…') si tes sources sont dans /api/src.**



**Ordre des middlewares :**



**CORS (autoriser X-API-KEY)**



**apiKeyMiddleware**



**Routes**



**errorHandler**



**Modèles Sequelize ↔ DB : colonnes du modèle = colonnes réelles. Tester la connexion avec await sequelize.authenticate() + console.log.**



**Front ↔ API : utiliser fetch('http://localhost:5000/api/...', { headers: { 'x-api-key': '...' } }).**



**6. Barre de recherche et responsive**



**Problème : La barre de recherche se barre sur mobile.**

**Solution :**



**Bien gérer le display.**



**Commencer le responsive dès le début, surtout pour le header, pas à la fin.**



**7. ❌ Comment réussir à filtrer**



**Étapes pour réussir un filtre :**



**Avoir toutes les données (artisans).**



**Définir un critère (ex : catégorie "Bâtiment", "Services").**



**Appliquer le filtre :**



**const filteredArtisans = artisans.filter(artisan =>**

  **categories\[selectedCategory]?.includes(artisan.metier)**

**);**





**Afficher le résultat filtré (filteredArtisans).**



**Cas concret :**



**Cliquer sur une catégorie → envoyer selectedCategory à ArtisanList.**



**Si selectedCategory = "Bâtiment" → seuls les artisans du bâtiment apparaissent.**



**Si aucune catégorie choisie → afficher tout.**



**8. Barre de recherche**



**Certaines méthodes Postman ne fonctionnent pas sur React.**



**Mettre toutes les méthodes dans le fichier du serveur Node.js.**



**9. Déploiement production**



**Backend en ligne : Railway ou Render.**



**Frontend React + Node.js :**



**Projet en monorepo /client (React) + /api (Express).**



**Backend sert React buildé via express.static.**



**Route app.get('\*') redirige vers index.html pour React Router.**



**React compilé : npm run build → /client/build.**



**Render : Root Directory = api. Build Command = compile React puis backend. Start Command = node index.js.**



**Variables d’environnement configurées pour Railway + API.**



**Résultat : backend + frontend accessibles via une seule URL.**



**Conseil : pour que React soit visible après publication :**



**Backend Express doit servir /client/build.**



**React doit être compilé (npm run build).**



**Render doit exécuter Build Command qui compile le frontend avant le backend.**



**10. ❌ Comment esquiver le CORS en dev et prod**



**Contexte :**



**Front React : localhost:3000.**



**API Railway : nodejs-production-040d.up.railway.app.**



**Le navigateur applique CORS pour la sécurité.**



**Problème : Même avec la clé API correcte, le navigateur bloque la requête → No 'Access-Control-Allow-Origin' header is present.**



**Solution dev :**



**Utiliser un proxy React : /api/... devient une requête vers ton backend local.**



**Le serveur local relaie la requête vers Railway → le navigateur ne bloque plus rien.**



**Solution prod :**



**Front et backend sur le même domaine → plus de problème CORS.**



**Résumé :**



**Dev : proxy React contourne CORS.**



**Prod : front + backend sur le même domaine, CORS résolu.**




