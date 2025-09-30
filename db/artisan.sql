-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 30 sep. 2025 à 07:54
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `artisans`
--

-- --------------------------------------------------------

--
-- Structure de la table `artisan`
--

DROP TABLE IF EXISTS `artisan`;
CREATE TABLE IF NOT EXISTS `artisan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `metier` varchar(100) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `description` text,
  `site_web` varchar(255) DEFAULT NULL,
  `specialite_id` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `top` tinyint(1) DEFAULT NULL,
  `note` float DEFAULT '5',
  PRIMARY KEY (`id`),
  KEY `specialite_id` (`specialite_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `artisan`
--

INSERT INTO `artisan` (`id`, `nom`, `metier`, `ville`, `description`, `site_web`, `specialite_id`, `email`, `top`, `note`) VALUES
(1, 'Boucherie Dumont', 'Boucher', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 1, 'boucherie.dumond@gmail.com', 0, 4.5),
(2, 'Au pain chaud', 'Boulanger', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 2, 'aupainchaud@hotmail.com', 1, 4.8),
(3, 'Chocolaterie Labbé', 'Chocolatier', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://chocolaterie-labbe.fr', 3, 'chocolaterie-labbe@gmail.com', 1, 4.9),
(4, 'Traiteur Truchon', 'Traiteur', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://truchon-traiteur.fr', 4, 'contact@truchon-traiteur.fr', 0, 4.1),
(5, 'Orville Salmons', 'Chauffagiste', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 5, 'o-salmons@live.com', 1, 5),
(6, 'Mont Blanc Eléctricité', 'Electricien', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://mont-blanc-electricite.com', 6, 'contact@mont-blanc-electricite.com', 0, 4.5),
(7, 'Boutot & fils', 'Menuisier', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://boutot-menuiserie.com', 7, 'boutot-menuiserie@gmail.com', 0, 4.7),
(8, 'Vallis Bellemare', 'Plombier', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://plomberie-bellemare.com', 8, 'v.bellemare@gmail.com', 0, 4),
(9, 'Claude Quinn', 'Bijoutier', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 9, 'claude.quinn@gmail.com', 0, 4.2),
(10, 'Amitee Lécuyer', 'Couturier', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://lecuyer-couture.com', 10, 'a.amitee@hotmail.com', 0, 4.5),
(11, 'Ernest Carignan', 'Ferronier', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 11, 'e-carigan@hotmail.com', 0, 5),
(12, 'Royden Charbonneau', 'Coiffeur', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 12, 'r.charbonneau@gmail.com', 0, 3.8),
(13, 'Leala Dennis', 'Coiffeur', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://coiffure-leala-chambery.fr', 12, 'l.dennos@hotmail.fr', 0, 3.8),
(14, 'C\'est sup\'hair', 'Coiffeur', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://sup-hair.fr', 12, 'sup-hair@gmail.com', 0, 4.1),
(15, 'Le monde des fleurs', 'Fleuriste', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://le-monde-des-fleurs-annonay.fr', 13, 'contact@le-monde-des-fleurs-annonay.fr', 0, 4.6),
(16, 'Valérie Laderoute', 'Toiletteur', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, 14, 'v-laredoute@gmail.com', 0, 4.5),
(17, 'CM Graphisme', 'Webdesign', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'https://cm-graphisme.com', 15, 'contact@cm-graphisme.com', 0, 4.4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
