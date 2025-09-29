-- File name: C:\Users\MYSAU\OneDrive\Documents\Bureau\CEF\Nom-prenom-devoir_8_Trouve_ton_artisan\db\artisan.sql
-- Created by DMSoft Technologies 


--
-- Table structure for table `artisan`
--

CREATE TABLE `artisan` (
  `id` INT NOT NULL  AUTO_INCREMENT,
  `nom` VARCHAR(100) NULL DEFAULT NULL,
  `metier` VARCHAR(100) NULL DEFAULT NULL,
  `ville` VARCHAR(100) NULL DEFAULT NULL,
  `description` TEXT NULL,
  `site_web` VARCHAR(255) NULL DEFAULT NULL,
  `specialite_id` INT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `top` TINYINT(1) NULL DEFAULT NULL,
  `note` FLOAT NULL DEFAULT 5,
  PRIMARY KEY (`id` ASC),
  KEY `specialite_id` (`specialite_id` ASC)
) DEFAULT CHARSET=utf8 ENGINE=InnoDB;

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` INT NOT NULL  AUTO_INCREMENT,
  `nom` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id` ASC)
) DEFAULT CHARSET=utf8 ENGINE=InnoDB;

--
-- Table structure for table `note`
--

