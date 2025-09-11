-- Création de la table CATEGORIE
-- Chaque catégorie regroupe des spécialités (ex: Bâtiment, Alimentation)
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY, -- identifiant unique
    nom VARCHAR(100) NOT NULL          -- nom de la catégorie
);

-- Création de la table SPECIALITE
-- Chaque spécialité appartient à une catégorie (ex: Plomberie ⟶ Bâtiment)
CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY, -- identifiant unique
    nom VARCHAR(100) NOT NULL,         -- nom de la spécialité
    categorie_id INT,                  -- lien vers la catégorie
    FOREIGN KEY (categorie_id) REFERENCES categorie(id) -- clé étrangère
);

-- Création de la table ARTISAN
-- Chaque artisan peut avoir une spécialité
CREATE TABLE artisan (
    id INT AUTO_INCREMENT PRIMARY KEY, -- identifiant unique
    nom VARCHAR(100),                  -- nom de l'artisan
    metier VARCHAR(100),               -- métier général
    ville VARCHAR(100),                -- localisation
    description TEXT,                  -- présentation libre
    site_web VARCHAR(255),             -- lien vers son site
    specialite_id INT,                 -- lien vers la spécialité
    FOREIGN KEY (specialite_id) REFERENCES specialite(id) -- clé étrangère
);

-- Création de la table NOTE
-- Permet d'ajouter des avis sur les artisans
CREATE TABLE note (
    id INT AUTO_INCREMENT PRIMARY KEY, -- identifiant unique
    artisan_id INT,                    -- lien vers l'artisan noté
    valeur INT CHECK (valeur BETWEEN 1 AND 5), -- note entre 1 et 5
    commentaire TEXT,                  -- avis écrit
    FOREIGN KEY (artisan_id) REFERENCES artisan(id) -- clé étrangère
);
