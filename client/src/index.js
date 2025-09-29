// ===============================
// index.js
// Point d'entrée de l'application React
// ===============================

import React from 'react'; // Import React pour JSX
import ReactDOM from 'react-dom/client'; // API moderne de ReactDOM pour React 18+
import './index.scss'; // Styles globaux de l'application
import App from './App'; // Composant principal de l'application
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import des icônes Bootstrap

// ===============================
// Création du root React
// ===============================

// Récupère l'élément HTML avec l'id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Montage de l'application React dans le DOM
root.render(
  // React.StrictMode active les vérifications et avertissements en dev
  <React.StrictMode>
    <App /> {/* Composant principal de l'application */}
  </React.StrictMode>
);

