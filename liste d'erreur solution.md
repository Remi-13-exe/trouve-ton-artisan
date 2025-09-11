**Parfait 👍**

**Je vais réécrire tout ça sous forme claire Problème → Solution, comme un carnet de bord pour ton projet Trouve ton artisan.**



**📒 Notes Problèmes / Solutions – Projet Trouve ton artisan**

**1. ❌ Les fichiers introuvables**



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



**4. ❌ Erreur lors de l’envoi d’email (Post contact)**



**Problème : Envoi impossible car Gmail bloquait la connexion.**

**Solution :**



**Créer un compte Mailtrap pour tester l’envoi d’email.**



**Configurer Nodemailer avec MAILTRAP\_USER et MAILTRAP\_PASS dans .env.**



**Vérifier les identifiants avec la commande curl :**



**\& "C:\\Windows\\System32\\curl.exe" --url "smtp://sandbox.smtp.mailtrap.io:2525" `**

**--user "TON\_USERNAME:TON\_PASSWORD" `**

**--mail-from from@example.com `**

**--mail-rcpt to@example.com `**

**--upload-file "email.txt"**





**Exemple de contenu email.txt :**



**From: Magic Elves <from@example.com>**

**To: Mailtrap Sandbox <to@example.com>5**

**Subject: Test Mailtrap via curl**



**Hello Mailtrap! This is a test email sent from curl.**



**5. ❌ Erreurs dans les middlewares sur Postman**



**Problème : Bugs liés aux middlewares lors des requêtes API.**

**Solution :**



**Vérifier que les fichiers sont bien sauvegardés.**



**Bien réécrire et importer les middlewares dans l’ordre correct.**

