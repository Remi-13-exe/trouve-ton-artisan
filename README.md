# Trouve ton artisan

**Plateforme de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes**  
**Auteur :** Godji Remi  
**Date :** 29/09/2025

---

## Table des matières

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

## Contexte du projet

La région Auvergne-Rhône-Alpes souhaite développer une plateforme web intuitive et sécurisée permettant aux particuliers de trouver facilement un artisan local selon sa spécialité.

L’objectif est de :
- Rechercher et filtrer les artisans par catégorie et par nom.
- Contacter un artisan via un formulaire sécurisé.
- Obtenir des informations sur les prestations, tarifs et localisation.

**Contraintes importantes :**
- Accessibilité conforme WCAG 2.1 pour tous les utilisateurs.
- Mobile-first, responsive sur tous les écrans.
- Cohérence avec l’identité graphique de la région (logo, couleurs, typographie).
- Sécurité renforcée : HTTPS, validation des données, clé API côté serveur.

---

## Objectifs

Le site doit fournir :
- Une page d’accueil expliquant le fonctionnement en étapes.
- Une liste d’artisans filtrable par catégorie et recherche par nom.
- Une fiche artisan détaillée avec formulaire de contact.
- Une page 404 pour les liens invalides.
- Des pages “En construction” pour les sections non encore disponibles.
- Une API sécurisée pour récupérer dynamiquement les données depuis MySQL.

---

## Technologies utilisées

**Frontend :**
- ReactJS  
- Sass  
- Bootstrap  

**Backend / API :**
- Node.js  
- Express.js  
- Sequelize (ORM pour MySQL)  
- MySQL ou MariaDB  

**Outils supplémentaires :**
- Git / GitHub pour le versioning  
- Visual Studio Code pour le développement  
- Figma pour les maquettes  

---

## Structure du projet

trouve-ton-artisan/ ├─ api/ # Backend (Node.js + Express) │ ├─ config/ │ ├─ controllers/ │ ├─ middlewares/ │ ├─ models/ │ ├─ routes/ │ ├─ index.js │ └─ .env ├─ client/ # Frontend (React) │ ├─ public/ │ ├─ src/ │ │ ├─ assets/ │ │ ├─ components/ │ │ └─ pages/ │ ├─ App.js │ └─ index.js ├─ docs/ │ ├─ maquette/ │ ├─ cahier-des-charges.md │ └─ design.md ├─ config/ ├─ db/ │ ├─ schema.sql │ └─ seed.sql ├─ package.json ├─ package-lock.json └─ README.md

Code

---

## Installation et démarrage

### Prérequis

- Node.js et npm installés  
- MySQL installé ou accès à une base distante  

### Frontend

```bash
cd client
npm install
npm start
Accéder à http://localhost:3000

Backend
bash
cd api
npm install
node index.js
L’API est accessible sur http://localhost:5000/api

Fonctionnalités
Recherche et filtre : Barre de recherche pour trouver un artisan par nom et filtrer par catégorie.

Fiche artisan : Nom, photo, spécialité, localisation, description, note, site web et formulaire de contact.

Artisans du mois : Présentation de 3 artisans sélectionnés.

Pages légales : Mentions légales, accessibilité, cookies (actuellement en construction).

Page 404 : Affichage lorsque la page demandée n’existe pas.

API
Routes principales
GET /api/artisans → Liste des artisans

GET /api/artisans/:id → Détails d’un artisan

Exemple de réponse JSON
json
{
  "id": 1,
  "nom": "Pierre & Bois",
  "metier": "Menuisier",
  "ville": "Marseille",
  "note": 5
}
Base de données
Tables principales
Artisan : id, nom, métier, catégorie, ville, site_web, description, note, photo_url

Categorie : id, nom

Specialite : id, nom, categorie_id

Scripts SQL
db/schema.sql → Création des tables

db/seed.sql → Peuplement des données de test

Sécurité
Clé API pour limiter l’accès à l’API

Validation côté frontend et backend

Protection contre les injections SQL via Sequelize

HTTPS recommandé pour le déploiement

Conformité aux normes d’accessibilité et W3C

Maquettes
Figma utilisé pour la création des maquettes desktop, tablette et mobile

Pages : Home, Liste des artisans, Fiche artisan, 404, Under Construction

Palette de couleurs et typographie Graphik respectées

Déploiement
Frontend : Déployé sur [Vercel / Netlify]

Backend / API : Déployé sur [Railway / Render]

Base MySQL : Hébergée sur Railway ou PlanetScale

Licence
Projet réalisé dans le cadre du devoir académique – usage personnel et non commercial.
