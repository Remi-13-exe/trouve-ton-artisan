# 🛠️ Trouve ton artisan
Plateforme de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes  
**Auteur :** Godji Rémi  
**Date :** 02/10/2025  

---

## 📚 Table des matières
1. [Contexte du projet](#contexte-du-projet)  
2. [Objectifs](#objectifs)  
3. [Technologies utilisées](#technologies-utilisées)  
4. [Structure du projet](#structure-du-projet)  
5. [Installation et démarrage](#installation-et-démarrage)  
6. [Fonctionnalités](#fonctionnalités)  
7. [API](#api)  
8. [Base de données](#base-de-données)  
9. [Sécurité](#sécurité)  
10. [Maquettes](#maquettes)  
11. [Déploiement](#déploiement)  
12. [Licence](#licence)  

---

## 1. 🎯 Contexte du projet
La région Auvergne-Rhône-Alpes souhaite une plateforme web intuitive et sécurisée permettant aux particuliers de trouver facilement un artisan local selon sa spécialité.

**Fonctionnalités attendues :**
- Rechercher et filtrer les artisans par nom et catégorie
- Contacter un artisan via un formulaire sécurisé
- Accéder à des informations sur les prestations, tarifs et localisation

**Contraintes :**
- Accessibilité conforme WCAG 2.1
- Design responsive (mobile-first)
- Respect de l’identité graphique régionale
- Sécurité renforcée (HTTPS, validation, clé API)

---

## 2. 🎯 Objectifs
Le site doit proposer :  
- Une page d’accueil explicative  
- Une liste filtrable d’artisans  
- Une fiche artisan avec formulaire de contact  
- Une page 404 personnalisée  
- Des pages “En construction”  
- Une API sécurisée connectée à MySQL  

---

## 3. 🧰 Technologies utilisées
**Frontend :**
- ReactJS  
- Sass (SCSS)  
- Bootstrap  

**Backend :**
- Node.js  
- Express.js  
- Sequelize (ORM)  
- MySQL / MariaDB  

**Outils :**
- Git / GitHub  
- Visual Studio Code  
- Figma (maquettes)  

---

## 4. 🗂️ Structure du projet
trouve-ton-artisan/
├── api/ # Backend Express
│ ├── config/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── .env
├── client/ # Frontend React
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── ArtisanOfTheMonth.jsx
│ │ │ ├── ArtisanDetail.jsx
│ │ │ ├── ArtisanFiltre.jsx
│ │ │ ├── ArtisanList.jsx
│ │ │ ├── ArtisansDuMois.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── ScrollToTop.jsx
│ │ │ ├── NotFound.jsx
│ │ │ └── UnderConstruction.jsx
│ │ └── pages/
│ │ ├── Home.jsx
│ │ ├── ArtisanList.jsx
│ │ ├── ArtisanDetail.jsx
│ │ ├── NotFound.jsx
│ │ └── UnderConstruction.jsx
│ ├── App.js
│ └── index.js
├── db/ # Base de données
│ ├── schema.sql
│ └── seed.sql
├── docs/ # Livrables et maquettes
│ ├── cahier-des-charges.md
│ ├── design.md
│ └── maquette/
├── README.md
└── package.json

yaml
Copier le code

---

## 5. 🚀 Installation et démarrage
### 🔧 Prérequis
- Node.js et npm  
- MySQL installé ou accès distant  

### 🖥️ Frontend
```bash
cd client
npm install
npm start
Accès local : http://localhost:3000

⚙️ Backend
bash
Copier le code
cd api
npm install
node index.js
Accès API : http://localhost:5000/api
⚠️ N’oubliez pas d’ajouter une clé API dans .env

6. ✨ Fonctionnalités
Recherche et filtre par nom et catégorie

Fiche artisan : nom, photo, spécialité, ville, description, note, site web, formulaire

Artisans du mois : sélection dynamique

Pages légales (mentions, accessibilité, cookies – en construction)

Page 404 personnalisée

7. 🔌 API
Routes principales :

GET /api/artisans → Liste des artisans

GET /api/artisans/:id → Détails d’un artisan

Exemple de réponse JSON :

json
Copier le code
{
  "id": 1,
  "nom": "Pierre & Bois",
  "metier": "Menuisier",
  "ville": "Marseille",
  "note": 5
}
8. 🗃️ Base de données
Tables principales :

Artisan : id, nom, métier, ville, site_web, description, note, photo_url, specialite_id

Specialite : id, nom, categorie_id

Categorie : id, nom

Organisation :

Un artisan → une seule spécialité

Une spécialité → une seule catégorie

Scripts SQL :

db/schema.sql → création des tables

db/seed.sql → insertion des données de test

📁 Toutes les informations sont disponibles dans le dossier db/ du dépôt GitHub

9. 🔐 Sécurité
Clé API obligatoire pour accéder aux routes

Validation des données côté client et serveur

Protection contre les injections SQL via Sequelize

HTTPS recommandé

Respect des normes W3C et WCAG 2.1

10. 🖌️ Maquettes
Réalisées avec Figma (desktop, tablette, mobile)

Pages : Accueil, Liste artisans, Fiche artisan, 404, En construction

Palette de couleurs et typographie Graphik respectées

11. 🌐 Déploiement
Frontend : Vercel ou Netlify

Backend / API : Render ou Railway

Base MySQL : Railway ou PlanetScale

12. 📄 Licence
Projet réalisé dans le cadre d’un devoir académique.
Usage personnel uniquement – non commercial.