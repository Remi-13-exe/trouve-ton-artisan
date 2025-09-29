-- Création de la table Artisan
CREATE TABLE artisan (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    metier VARCHAR(255),
    ville VARCHAR(255),
    description TEXT,
    site_web VARCHAR(255),
    specialite_id INT,
    email VARCHAR(255),
    top BOOLEAN,
    note NUMERIC(3,1)
);

-- Insertion des données
INSERT INTO artisan (id, nom, metier, ville, description, site_web, specialite_id, email, top, note) VALUES
(1, 'Boucherie Dumont', 'Boucher', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 1, 'boucherie.dumond@gmail.com', FALSE, 4.5),
(2, 'Au pain chaud', 'Boulanger', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 2, 'aupainchaud@hotmail.com', TRUE, 4.8),
(3, 'Chocolaterie Labbé', 'Chocolatier', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://chocolaterie-labbe.fr', 3, 'chocolaterie-labbe@gmail.com', TRUE, 4.9),
(4, 'Traiteur Truchon', 'Traiteur', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://truchon-traiteur.fr', 4, 'contact@truchon-traiteur.fr', FALSE, 4.1),
(5, 'Orville Salmons', 'Chauffagiste', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 5, 'o-salmons@live.com', TRUE, 5),
(6, 'Mont Blanc Eléctricité', 'Electricien', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://mont-blanc-electricite.com', 6, 'contact@mont-blanc-electricite.com', FALSE, 4.5),
(7, 'Boutot & fils', 'Menuisier', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://boutot-menuiserie.com', 7, 'boutot-menuiserie@gmail.com', FALSE, 4.7),
(8, 'Vallis Bellemare', 'Plombier', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://plomberie-bellemare.com', 8, 'v.bellemare@gmail.com', FALSE, 4),
(9, 'Claude Quinn', 'Bijoutier', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 9, 'claude.quinn@gmail.com', FALSE, 4.2),
(10, 'Amitee Lécuyer', 'Couturier', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://lecuyer-couture.com', 10, 'a.amitee@hotmail.com', FALSE, 4.5),
(11, 'Ernest Carignan', 'Ferronier', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 11, 'e-carigan@hotmail.com', FALSE, 5),
(12, 'Royden Charbonneau', 'Coiffeur', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 12, 'r.charbonneau@gmail.com', FALSE, 3.8),
(13, 'Leala Dennis', 'Coiffeur', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://coiffure-leala-chambery.fr', 12, 'l.dennos@hotmail.fr', FALSE, 3.8),
(14, 'C''est sup''hair', 'Coiffeur', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://sup-hair.fr', 12, 'sup-hair@gmail.com', FALSE, 4.1),
(15, 'Le monde des fleurs', 'Fleuriste', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://le-monde-des-fleurs-annonay.fr', 13, 'contact@le-monde-des-fleurs-annonay.fr', FALSE, 4.6),
(16, 'Valérie Laderoute', 'Toiletteur', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', NULL, 14, 'v-laredoute@gmail.com', FALSE, 4.5),
(17, 'CM Graphisme', 'Webdesign', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing...', 'https://cm-graphisme.com', 15, 'contact@cm-graphisme.com', FALSE, 4.4);
