-- Ajout des catégories
INSERT INTO categorie (nom) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- Ajout des spécialités
INSERT INTO specialite (nom, categorie_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

-- Ajout des artisans
INSERT INTO artisan (nom, metier, ville, description, email, site_web, specialite_id, top) VALUES
('Boucherie Dumont', 'Boucher', 'Lyon', 'Lorem ipsum...', 'boucherie.dumond@gmail.com', NULL, 1, FALSE),
('Au pain chaud', 'Boulanger', 'Montélimar', 'Lorem ipsum...', 'aupainchaud@hotmail.com', NULL, 2, TRUE),
('Chocolaterie Labbé', 'Chocolatier', 'Lyon', 'Lorem ipsum...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 3, TRUE),
('Traiteur Truchon', 'Traiteur', 'Lyon', 'Lorem ipsum...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 4, FALSE),
('Orville Salmons', 'Chauffagiste', 'Evian', 'Lorem ipsum...', 'o-salmons@live.com', NULL, 5, TRUE),
('Mont Blanc Eléctricité', 'Electricien', 'Chamonix', 'Lorem ipsum...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 6, FALSE),
('Boutot & fils', 'Menuisier', 'Bourg-en-bresse', 'Lorem ipsum...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 7, FALSE),
('Vallis Bellemare', 'Plombier', 'Vienne', 'Lorem ipsum...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 8, FALSE),
('Claude Quinn', 'Bijoutier', 'Aix-les-bains', 'Lorem ipsum...', 'claude.quinn@gmail.com', NULL, 9, FALSE),
('Amitee Lécuyer', 'Couturier', 'Annecy', 'Lorem ipsum...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 10, FALSE),
('Ernest Carignan', 'Ferronier', 'Le Puy-en-Velay', 'Lorem ipsum...', 'e-carigan@hotmail.com', NULL, 11, FALSE),
('Royden Charbonneau', 'Coiffeur', 'Saint-Priest', 'Lorem ipsum...', 'r.charbonneau@gmail.com', NULL, 12, FALSE),
('Leala Dennis', 'Coiffeur', 'Chambéry', 'Lorem ipsum...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 12, FALSE),
('C\'est sup\'hair', 'Coiffeur', 'Romans-sur-Isère', 'Lorem ipsum...', 'sup-hair@gmail.com', 'https://sup-hair.fr', 12, FALSE),
('Le monde des fleurs', 'Fleuriste', 'Annonay', 'Lorem ipsum...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 13, FALSE),
('Valérie Laderoute', 'Toiletteur', 'Valence', 'Lorem ipsum...', 'v-laredoute@gmail.com', NULL, 14, FALSE),
('CM Graphisme', 'Webdesign', 'Valence', 'Lorem ipsum...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 15, FALSE);

-- Ajout des notes
INSERT INTO note (artisan_id, valeur, commentaire) VALUES
(1, 4.5, 'Très bon service'),
(2, 4.8, 'Excellent pain !'),
(3, 4.9, 'Chocolats incroyables'),
(4, 4.1, 'Bon mais un peu cher'),
(5, 5.0, 'Parfait !'),
(6, 4.5, 'Professionnel'),
(7, 4.7, 'Travail soigné'),
(8, 4.0, 'Rapide et efficace'),
(9, 4.2, 'Beaux bijoux'),
(10, 4.5, 'Très créatif'),
(11, 5.0, 'Artisan exceptionnel'),
(12, 3.8, 'Correct'),
(13, 3.8, 'Sympa'),
(14, 4.1, 'Bonne coupe'),
(15, 4.6, 'Très belles fleurs'),
(16, 4.5, 'Douce avec les animaux'),
(17, 4.4, 'Design moderne');
