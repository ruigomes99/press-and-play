-- ------------------------------------------------------
-- Server version	8.0.13-4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Atividade`
--

DROP TABLE IF EXISTS `Atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Atividade` (
  `idAtividade` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Data` datetime NOT NULL,
  `Duracao` time NOT NULL,
  `idEspaco` int(11) NOT NULL,
  `Anulada` bit(1) NOT NULL DEFAULT b'0',
  `nomeClienteReserva` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idAtividade`),
  KEY `idEspaco_FK7_idx` (`idEspaco`),
  CONSTRAINT `idEspaco_FK7` FOREIGN KEY (`idEspaco`) REFERENCES `Espaco` (`idespaco`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Atividade`
--

LOCK TABLES `Atividade` WRITE;
/*!40000 ALTER TABLE `Atividade` DISABLE KEYS */;
INSERT INTO `Atividade` VALUES (82,'Reserva','2019-01-30 09:00:00','01:00:00',31,_binary '\0',NULL),(83,'Reserva','2019-11-21 12:00:00','01:00:00',31,_binary '\0',NULL),(84,'Reserva','2019-07-28 10:00:00','01:00:00',32,_binary '\0',NULL),(85,'Reserva','2019-09-20 15:00:00','01:00:00',1,_binary '\0',NULL),(86,'Reserva','2019-10-21 12:00:00','01:00:00',34,_binary '\0',NULL),(87,'Reserva','2019-11-29 15:00:00','01:00:00',32,_binary '\0',NULL),(88,'Reserva','2019-10-24 18:00:00','01:00:00',34,_binary '\0',NULL),(89,'Evento','2020-01-23 15:00:00','01:00:00',1,_binary '\0',NULL),(90,'Reserva','2019-03-29 22:00:00','01:00:00',1,_binary '\0',NULL),(91,'Reserva','2019-08-19 17:00:00','01:00:00',31,_binary '\0',NULL),(92,'Reserva','2019-01-05 11:00:00','01:00:00',32,_binary '\0',NULL),(93,'Reserva','2019-10-23 18:00:00','01:00:00',34,_binary '\0',NULL),(94,'Reserva','2019-04-23 15:00:00','01:00:00',32,_binary '\0',NULL),(95,'Reserva','2019-12-16 12:00:00','01:00:00',1,_binary '\0',NULL),(96,'Reserva','2019-11-20 12:00:00','01:00:00',32,_binary '\0',NULL),(97,'Reserva','2019-08-20 15:00:00','01:00:00',34,_binary '\0',NULL),(98,'Reserva','2019-11-23 13:00:00','01:00:00',32,_binary '\0',NULL),(99,'Reserva','2020-01-27 16:00:00','01:00:00',31,_binary '\0',NULL),(100,'Reserva','2020-01-20 10:00:00','01:00:00',34,_binary '\0',NULL),(101,'Reserva','2019-11-24 15:00:00','01:00:00',34,_binary '\0',NULL),(102,'Reserva','2019-11-21 12:00:00','01:00:00',32,_binary '\0',NULL),(103,'Evento','2020-01-16 11:00:00','01:00:00',31,_binary '\0',NULL),(104,'Reserva','2019-11-21 12:00:00','01:00:00',54,_binary '\0',NULL),(105,'Reserva','2019-11-23 16:00:00','01:00:00',55,_binary '\0',NULL),(121,'Sr.Joaquim','2020-01-18 10:00:00','01:00:00',54,_binary '\0','Sr.Joaquim'),(124,'Reserva','2020-01-16 12:00:00','01:00:00',31,_binary '\0',NULL),(125,'Reserva','2020-01-17 08:00:00','01:00:00',34,_binary '\0',NULL),(126,'Reserva','2020-01-27 09:00:00','01:00:00',54,_binary '\0',NULL),(127,'Reserva','2020-02-13 09:00:00','01:00:00',54,_binary '\0',NULL),(128,'Reserva','2020-02-18 17:00:00','01:00:00',54,_binary '\0',NULL),(129,'Reserva','2020-01-27 14:00:00','01:00:00',55,_binary '\0',NULL),(130,'Reserva','2020-02-14 18:00:00','01:00:00',55,_binary '\0',NULL),(131,'Reserva','2020-02-21 22:00:00','01:00:00',55,_binary '\0',NULL),(132,'Reserva','2020-02-04 14:00:00','01:00:00',54,_binary '\0',NULL),(133,'Sr.Bruno','2019-12-19 10:00:00','01:00:00',54,_binary '\0','Sr. Bruno'),(135,'Evento','2020-01-20 20:00:00','01:00:00',34,_binary '\0',NULL),(136,'Nova Reserva','2020-01-30 17:00:00','01:00:00',55,_binary '\0','Ricardo'),(141,'Evento','2020-01-19 13:00:00','01:00:00',1,_binary '\0',NULL),(142,'Reserva','2020-01-16 10:00:00','01:00:00',31,_binary '\0',NULL),(143,'Reserva','2020-01-16 14:00:00','01:00:00',32,_binary '\0',NULL),(144,'Reserva','2020-01-15 12:00:00','01:00:00',32,_binary '\0',NULL),(145,'Reserva','2020-01-23 14:00:00','01:00:00',55,_binary '\0',NULL),(146,'Reserva','2020-01-16 09:00:00','01:00:00',31,_binary '\0',NULL),(147,'Evento','2020-01-24 09:00:00','01:00:00',54,_binary '\0',NULL),(148,'Reserva','2020-01-23 13:00:00','01:00:00',1,_binary '\0',NULL),(149,'Reserva','2020-01-22 17:00:00','01:00:00',1,_binary '\0',NULL),(150,'Evento','2020-01-16 18:00:00','01:00:00',54,_binary '\0',NULL),(151,'Evento','2020-01-30 12:00:00','01:00:00',31,_binary '\0',NULL);
/*!40000 ALTER TABLE `Atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Atividade_material`
--

DROP TABLE IF EXISTS `Atividade_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Atividade_material` (
  `idAtividade_materia` int(11) NOT NULL AUTO_INCREMENT,
  `idAtividade_FK5` int(11) NOT NULL,
  `idMaterial_FK6` int(11) NOT NULL,
  PRIMARY KEY (`idAtividade_materia`),
  KEY `idAtividade_FK5_idx` (`idAtividade_FK5`),
  KEY `idMaterial_FK6_idx` (`idMaterial_FK6`),
  CONSTRAINT `idAtividade_FK5` FOREIGN KEY (`idAtividade_FK5`) REFERENCES `Atividade` (`idatividade`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `idMaterial_FK6` FOREIGN KEY (`idMaterial_FK6`) REFERENCES `Material` (`idmaterial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Atividade_material`
--

LOCK TABLES `Atividade_material` WRITE;
/*!40000 ALTER TABLE `Atividade_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `Atividade_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comodidade`
--

DROP TABLE IF EXISTS `Comodidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comodidade` (
  `idComodidade` int(11) NOT NULL AUTO_INCREMENT,
  `Comodidade` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`idComodidade`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comodidade`
--

LOCK TABLES `Comodidade` WRITE;
/*!40000 ALTER TABLE `Comodidade` DISABLE KEYS */;
INSERT INTO `Comodidade` VALUES (1,'Wi-fi'),(2,'Iluminação'),(3,'Balneários'),(4,'Cacifos'),(5,'Chuveiros'),(6,'Bolas'),(7,'Coletes'),(8,'Estacionamento'),(9,'Bancada'),(10,'Bar'),(11,'Acesso');
/*!40000 ALTER TABLE `Comodidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comodidade_espaco`
--

DROP TABLE IF EXISTS `Comodidade_espaco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comodidade_espaco` (
  `idComodidade_espaço` int(11) NOT NULL AUTO_INCREMENT,
  `Possui` bit(1) NOT NULL,
  `idComodidade_FK3` int(11) NOT NULL,
  `idEspaco_FK4` int(11) NOT NULL,
  PRIMARY KEY (`idComodidade_espaço`),
  KEY `idComodidade_FK3_idx` (`idComodidade_FK3`),
  KEY `idEspaco_FK4_idx` (`idEspaco_FK4`),
  CONSTRAINT `idComodidade_FK3` FOREIGN KEY (`idComodidade_FK3`) REFERENCES `Comodidade` (`idcomodidade`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `idEspaco_FK4` FOREIGN KEY (`idEspaco_FK4`) REFERENCES `Espaco` (`idespaco`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comodidade_espaco`
--

LOCK TABLES `Comodidade_espaco` WRITE;
/*!40000 ALTER TABLE `Comodidade_espaco` DISABLE KEYS */;
INSERT INTO `Comodidade_espaco` VALUES (3,_binary '',1,3),(4,_binary '',2,3),(5,_binary '',3,3),(52,_binary '',3,4),(53,_binary '',1,4),(142,_binary '',1,31),(143,_binary '',5,31),(144,_binary '\0',6,31),(145,_binary '\0',7,31),(146,_binary '\0',8,31),(147,_binary '\0',9,31),(148,_binary '\0',10,31),(149,_binary '\0',11,31),(150,_binary '',2,31),(151,_binary '',3,31),(152,_binary '',4,31),(153,_binary '',1,32),(154,_binary '',5,32),(155,_binary '\0',6,32),(156,_binary '\0',7,32),(157,_binary '\0',8,32),(158,_binary '\0',9,32),(159,_binary '\0',10,32),(160,_binary '\0',11,32),(161,_binary '',2,32),(162,_binary '',3,32),(163,_binary '',4,32),(175,_binary '',1,34),(176,_binary '',2,34),(177,_binary '',3,34),(178,_binary '\0',5,34),(179,_binary '\0',4,34),(180,_binary '',6,34),(181,_binary '\0',7,34),(182,_binary '\0',8,34),(183,_binary '\0',9,34),(184,_binary '\0',10,34),(185,_binary '',11,34),(186,_binary '',1,35),(187,_binary '',4,35),(188,_binary '',5,35),(189,_binary '',6,35),(190,_binary '',7,35),(191,_binary '',8,35),(192,_binary '\0',9,35),(193,_binary '\0',10,35),(194,_binary '\0',11,35),(195,_binary '',2,35),(196,_binary '',3,35),(253,_binary '',5,54),(254,_binary '\0',10,54),(255,_binary '',8,54),(256,_binary '',1,54),(257,_binary '\0',4,54),(258,_binary '',9,54),(259,_binary '',3,54),(260,_binary '',2,54),(261,_binary '',5,55),(262,_binary '',10,55),(263,_binary '\0',8,55),(264,_binary '\0',1,55),(265,_binary '\0',4,55),(266,_binary '\0',9,55),(267,_binary '\0',3,55),(268,_binary '',2,55);
/*!40000 ALTER TABLE `Comodidade_espaco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Espaco`
--

DROP TABLE IF EXISTS `Espaco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Espaco` (
  `idEspaco` int(11) NOT NULL AUTO_INCREMENT,
  `Localizacao` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Preco` decimal(2,0) NOT NULL,
  `Estado` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Nome` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `idGestor_Admin_FK9` int(11) NOT NULL,
  `entidade` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `latitude` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `longitude` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ativo` bit(1) NOT NULL,
  `Avatar_Participantes` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Avaliacao_Participantes` decimal(10,2) DEFAULT NULL,
  `morada` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `codigo_postal` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idEspaco`),
  KEY `idGestor_Admin_FK9_idx` (`idGestor_Admin_FK9`),
  CONSTRAINT `idGestor_Admin_FK9` FOREIGN KEY (`idGestor_Admin_FK9`) REFERENCES `Gestor_Admin` (`idgestor_admin`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Espaco`
--

LOCK TABLES `Espaco` WRITE;
/*!40000 ALTER TABLE `Espaco` DISABLE KEYS */;
INSERT INTO `Espaco` VALUES (1,'Amares',10,'Bom','Play Space',7,NULL,NULL,NULL,_binary '','https://i.imgur.com/Crp0iVJ.jpg',2.67,NULL,NULL),(3,'Vizela',10,'Bom','Espaco Aberto',7,NULL,NULL,NULL,_binary '\0','https://i.imgur.com/dQHmjwX.jpg',0.00,NULL,NULL),(4,'Vizela',5,'Bom','Complexo Vizela',7,NULL,NULL,NULL,_binary '\0','https://i.imgur.com/ykVVZLJ.jpgh',0.00,NULL,NULL),(31,'Guimarães',25,'Bom','Complexo Distrital',151,NULL,NULL,NULL,_binary '','https://i.imgur.com/hlW2GHd.jpg',4.00,NULL,NULL),(32,'Guimarães',30,'Bom','Complexo Guima',152,NULL,NULL,NULL,_binary '','https://i.imgur.com/4hA2NoG.jpg',3.67,NULL,NULL),(33,'Braga',25,'Bom','Soccer Space',153,NULL,NULL,NULL,_binary '\0','https://i.imgur.com/NVxnHHe.jpg',0.00,NULL,NULL),(34,'Braga',10,'Bom','AC Desportiva',158,NULL,NULL,NULL,_binary '','https://i.imgur.com/ykVVZLJ.jpg',3.50,NULL,NULL),(35,'Guimarães',50,'Bom','PlayGreen',163,NULL,NULL,NULL,_binary '\0','https://i.imgur.com/L7wx0af.jpg',0.00,NULL,NULL),(54,'Lisboa',21,'Bom','Crispedras2',164,'Filipe Portela','38.7773495','-9.1211834',_binary '','https://i.imgur.com/chNQQGC.jpg',4.00,'Lisboa Rua da Quinta de Santa Maria','1800'),(55,'Lisboa',15,'Bom','CDGraça',164,'João Silva','38.7195872','-9.128034399999999',_binary '','https://i.imgur.com/JOnUimN.jpg',4.00,'Lisboa Rua da Senhora da Glória','1170');
/*!40000 ALTER TABLE `Espaco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Espaco_material`
--

DROP TABLE IF EXISTS `Espaco_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Espaco_material` (
  `idEspaco_material` int(11) NOT NULL AUTO_INCREMENT,
  `idEspaco_FK1` int(11) NOT NULL,
  `idMaterial_FK2` int(11) NOT NULL,
  PRIMARY KEY (`idEspaco_material`),
  KEY `idEspaco_FK1_idx` (`idEspaco_FK1`),
  KEY `idMaterial_FK1_idx` (`idMaterial_FK2`),
  CONSTRAINT `idEspaco_FK1` FOREIGN KEY (`idEspaco_FK1`) REFERENCES `Espaco` (`idespaco`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `idMaterial_FK1` FOREIGN KEY (`idMaterial_FK2`) REFERENCES `Material` (`idmaterial`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Espaco_material`
--

LOCK TABLES `Espaco_material` WRITE;
/*!40000 ALTER TABLE `Espaco_material` DISABLE KEYS */;
INSERT INTO `Espaco_material` VALUES (1,4,1),(2,4,2),(23,54,1),(24,54,2),(25,54,3),(26,54,4),(27,55,1),(28,55,2),(29,55,3),(30,55,4);
/*!40000 ALTER TABLE `Espaco_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gestor_Admin`
--

DROP TABLE IF EXISTS `Gestor_Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Gestor_Admin` (
  `idGestor_Admin` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Contacto` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Tipo` smallint(6) NOT NULL,
  `Ativo` bit(1) NOT NULL,
  `Resultado` tinyint(1) NOT NULL DEFAULT '0',
  `dataAplicacao` datetime NOT NULL,
  `bloqueado` bit(1) DEFAULT b'0',
  PRIMARY KEY (`idGestor_Admin`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gestor_Admin`
--

LOCK TABLES `Gestor_Admin` WRITE;
/*!40000 ALTER TABLE `Gestor_Admin` DISABLE KEYS */;
INSERT INTO `Gestor_Admin` VALUES (3,'Teste','teste@teste.com','432323212','grege',2,_binary '\0',-1,'2019-12-27 18:31:55',_binary ''),(4,'Pedro Magalhães','email@email.com','91231231','$2a$10$7bwGFLZyjZZTYPpI4LmwEO9rdi4DgYqEshf7UFV/A3dJIsC9uGwnC',0,_binary '\0',0,'2019-11-25 00:00:00',_binary '\0'),(7,'Gestor Pedro','gestor@gestor.com','936458789','$2a$10$7bwGFLZyjZZTYPpI4LmwEO9rdi4DgYqEshf7UFV/A3dJIsC9uGwnC',2,_binary '',1,'2019-11-25 00:00:00',_binary ''),(10,'Administrador','admin@admin.com','936458789','$2a$10$7bwGFLZyjZZTYPpI4LmwEO9rdi4DgYqEshf7UFV/A3dJIsC9uGwnC',1,_binary '',1,'2019-10-25 00:00:00',_binary '\0'),(151,'Proprietario','campo@campo.com','924586987','$2a$10$aXdGGgDj1WN3xeV0457Jdu5AuwbtPGjweyk1eiZ28adUY400G7Beu',2,_binary '',1,'2020-01-11 14:43:21',_binary ''),(152,'Nicolas','nicolas.p.sousa@outlook.com','936458789','$2a$10$CI4X6sayBJkeUIEWN.PnrOQltEkGHECuI1M2ZUp/9vGdHv1FUoEW.',2,_binary '',1,'2020-01-11 15:11:33',_binary '\0'),(153,'Pedro Mendes','camp@camp.com','924586987','$2a$10$7bwGFLZyjZZTYPpI4LmwEO9rdi4DgYqEshf7UFV/A3dJIsC9uGwnC',2,_binary '\0',-1,'2020-01-11 22:07:19',_binary '\0'),(158,'Nuno Peixoto','nfpeixoto9@gmail.com','964887654','$2y$10$thmVX6z7zpdBgnH9RsmR.OOxdYYT18zo4XKwhmy3pxdx.62aEl5Im',2,_binary '',1,'2020-01-12 17:01:56',_binary '\0'),(163,'Carlos Alves','carlosalves@campojornada.pt','987543275','$2a$10$7bwGFLZyjZZTYPpI4LmwEO9rdi4DgYqEshf7UFV/A3dJIsC9uGwnC',2,_binary '',-1,'2020-01-13 19:23:22',_binary '\0'),(164,'Ezequiel Canário pereira','tpc132@gmail.com','910000003','$2b$10$FKXD4tyW2ijh8Nnlqg05tO7jmUlQJ6E4Fgq7ic8lAaXYheiE1Vnl2',2,_binary '',0,'2020-01-13 19:23:22',_binary '\0'),(166,'Maria Torres','mariaatorres2900@gmail.com','999999999','$2a$10$3sJwXFVZwxh1/5YgTGgECeF.EVKVXZlsn0.j5aBMXc02DQqjTYV/i',1,_binary '',0,'2020-01-14 11:51:04',_binary '\0');
/*!40000 ALTER TABLE `Gestor_Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Horario`
--

DROP TABLE IF EXISTS `Horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Horario` (
  `idHorario` int(11) NOT NULL AUTO_INCREMENT,
  `abertura` time DEFAULT NULL,
  `encerramento` time DEFAULT NULL,
  `idEspaco` int(11) DEFAULT NULL,
  `diaSemana` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHorario`),
  KEY `fk_horario_espaco_idx` (`idEspaco`),
  CONSTRAINT `fk_horario_espaco` FOREIGN KEY (`idEspaco`) REFERENCES `Espaco` (`idespaco`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Horario`
--

LOCK TABLES `Horario` WRITE;
/*!40000 ALTER TABLE `Horario` DISABLE KEYS */;
INSERT INTO `Horario` VALUES (1,'09:00:00','18:00:00',31,1),(2,'09:00:00','18:00:00',31,2),(3,'09:00:00','18:00:00',31,3),(4,'09:00:00','18:00:00',31,4),(5,'09:00:00','18:00:00',31,5),(6,'09:00:00','18:00:00',32,1),(7,'09:00:00','18:00:00',32,2),(8,'09:00:00','18:00:00',32,3),(9,'09:00:00','18:00:00',32,4),(13,'08:00:00','22:00:00',34,1),(14,'08:00:00','22:00:00',34,5),(15,'08:00:00','22:00:00',34,6),(16,'08:00:00','22:00:00',34,7),(17,'09:00:00','18:00:00',35,1),(18,'09:00:00','18:00:00',35,2),(19,'09:00:00','18:00:00',35,3),(20,'09:00:00','18:00:00',35,4),(21,'09:00:00','18:00:00',35,5),(22,'13:00:00','22:00:00',1,0),(23,'13:00:00','22:00:00',1,1),(24,'13:00:00','22:00:00',1,2),(25,'13:00:00','22:00:00',1,3),(26,'09:00:00','18:00:00',1,4),(125,'09:00:00','23:00:00',54,1),(126,'09:00:00','23:00:00',54,0),(127,'09:00:00','23:00:00',54,2),(128,'09:00:00','23:00:00',54,3),(129,'09:00:00','23:00:00',54,4),(130,'09:00:00','23:00:00',54,5),(131,'09:00:00','23:00:00',54,6),(132,'09:00:00','23:00:00',55,1),(133,'09:00:00','23:00:00',55,0),(134,'09:00:00','23:00:00',55,2),(135,'09:00:00','23:00:00',55,3),(136,'09:00:00','23:00:00',55,4),(137,'09:00:00','23:00:00',55,5),(138,'09:00:00','23:00:00',55,6);
/*!40000 ALTER TABLE `Horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Imagem`
--

DROP TABLE IF EXISTS `Imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Imagem` (
  `idImagem` int(11) NOT NULL AUTO_INCREMENT,
  `URL` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `idEspaco` int(11) NOT NULL,
  PRIMARY KEY (`idImagem`),
  KEY `idEspaco_idx` (`idEspaco`),
  CONSTRAINT `idEspaco` FOREIGN KEY (`idEspaco`) REFERENCES `Espaco` (`idespaco`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Imagem`
--

LOCK TABLES `Imagem` WRITE;
/*!40000 ALTER TABLE `Imagem` DISABLE KEYS */;
INSERT INTO `Imagem` VALUES (1,'https://i.imgur.com/dQHmjwX.jpg',3),(2,'https://i.imgur.com/QvQ3EcS.jpg',3),(3,'https://i.imgur.com/b6E9kWP.jpg',3),(4,'https://i.imgur.com/iiVy5sX.jpg',3),(10,'https://i.imgur.com/OCjYakc.jpg',4),(11,'https://i.imgur.com/zsDkPJS.jpg',4),(12,'https://i.imgur.com/9UTaWaE.jpg',4),(13,'https://i.imgur.com/1EOwluw.jpg',4),(14,'https://i.imgur.com/NSBsSAD.jpg',4),(15,'https://i.imgur.com/4hA2NoG.jpg',32),(16,'https://i.imgur.com/K5Ogy0e.jpg',32),(17,'https://i.imgur.com/K4dKZIE.jpg',32),(18,'https://i.imgur.com/msKFfBI.jpg',32),(19,'https://i.imgur.com/ykVVZLJ.jpg',34),(20,'https://i.imgur.com/KwoN3jX.jpg',34),(21,'https://i.imgur.com/vH9UaFQ.jpg',34),(22,'https://i.imgur.com/TffvATT.jpg',34),(23,'https://i.imgur.com/hlW2GHd.jpg',31),(24,'https://i.imgur.com/9mDC0yP.jpg',31),(25,'https://i.imgur.com/Y7M4HMz.jpg',31),(26,'https://i.imgur.com/jrOFYdh.jpg',31),(27,'https://i.imgur.com/cgl7y8C.jpg',31),(28,'https://i.imgur.com/Crp0iVJ.jpg',1),(29,'https://i.imgur.com/9plu1yy.jpg',1),(30,'https://i.imgur.com/ROxqmgD.jpg',1),(35,'https://i.imgur.com/L7wx0af.jpg',35),(36,'https://i.imgur.com/WxR8VyM.jpg',35),(37,'https://i.imgur.com/raK1FLR.jpg',35),(42,'https://i.imgur.com/JOnUimN.jpg',55),(43,'https://i.imgur.com/GynjKBP.jpg',55),(44,'https://i.imgur.com/lurSD40.jpg',55),(45,'https://i.imgur.com/T1hyPxm.jpg',55),(46,'https://i.imgur.com/bOR7Fki.jpg',55),(47,'https://i.imgur.com/RjfPXAP.jpg',55),(48,'https://i.imgur.com/chNQQGC.jpg',54),(49,'https://i.imgur.com/c3qvfz5.jpg',54),(50,'https://i.imgur.com/zSAtdhv.jpg',54),(51,'https://i.imgur.com/nSeYBm0.jpg',54),(52,'https://i.imgur.com/2PNG1ci.jpg',54),(53,'https://i.imgur.com/Rerozak.jpg',54);
/*!40000 ALTER TABLE `Imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Material`
--

DROP TABLE IF EXISTS `Material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Material` (
  `idMaterial` int(11) NOT NULL AUTO_INCREMENT,
  `Material` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`idMaterial`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Material`
--

LOCK TABLES `Material` WRITE;
/*!40000 ALTER TABLE `Material` DISABLE KEYS */;
INSERT INTO `Material` VALUES (1,'Coletes'),(2,'Bolas'),(3,'Água'),(4,'Luvas');
/*!40000 ALTER TABLE `Material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pagamento`
--

DROP TABLE IF EXISTS `Pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pagamento` (
  `idPagamento` int(11) NOT NULL,
  `idPatrocinador` int(11) NOT NULL,
  `dataPagamento` date NOT NULL,
  `dataRegisto` date NOT NULL,
  PRIMARY KEY (`idPagamento`),
  KEY `idPatrocinador_FK30_idx` (`idPatrocinador`),
  CONSTRAINT `idPatrocinador_FK30` FOREIGN KEY (`idPatrocinador`) REFERENCES `Patrocinador` (`idpatrocinador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pagamento`
--

LOCK TABLES `Pagamento` WRITE;
/*!40000 ALTER TABLE `Pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Patrocinador`
--

DROP TABLE IF EXISTS `Patrocinador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Patrocinador` (
  `idPatrocinador` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_Empresa` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Logotipo` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `Contacto` int(11) NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Localizacao` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `Valor` int(11) NOT NULL,
  `Resultado` tinyint(4) DEFAULT '0',
  `dataResultado` datetime DEFAULT NULL,
  `Ativo` bit(1) NOT NULL DEFAULT b'1',
  `dataAplicacao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bloqueado` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`idPatrocinador`)
) ENGINE=InnoDB AUTO_INCREMENT=289 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Patrocinador`
--

LOCK TABLES `Patrocinador` WRITE;
/*!40000 ALTER TABLE `Patrocinador` DISABLE KEYS */;
INSERT INTO `Patrocinador` VALUES (275,'Worten','worten.com',250433868,'comercial@worten.pt','Rua João Mendonça n.º 505, Matosinhos',1000,1,'2019-10-10 00:00:00',_binary '','2019-10-09 00:00:00',_binary '\0'),(276,'SportsDirect','sportsdirect.com',253533767,'comercial@sportsdirect.pt','Av.Cruzeiro Seixas, Amadora',1000,1,'2019-10-10 00:00:00',_binary '','2019-10-09 00:00:00',_binary '\0'),(277,'Ikea','ikea.com',255935535,'comercial@ikea.pt','Rua 28 de Setembro, En 250 2660-001 Frielas',1000,-1,'2019-10-10 00:00:00',_binary '','2019-10-09 00:00:00',_binary '\0'),(278,'McDonald','mcdonald.com',235935535,'comercial@mcdonald.pt','Lagoas Park Edifício 7 - Piso 2',1000,1,'2019-11-10 00:00:00',_binary '','2019-11-09 00:00:00',_binary '\0'),(279,'Pepsi','pepsi.com',223575968,'comercial@pepsi.pt','Complexo Lagoas Park, Edif. 5-C 5º',1000,1,'2019-11-10 00:00:00',_binary '','2019-11-09 00:00:00',_binary '\0'),(280,'PizzaHut','pizzahut.com',223575968,'comercial@pizzahut.pt','Av. Fontes Pereira de Melo 31',1000,-1,'2019-11-10 00:00:00',_binary '','2019-11-09 00:00:00',_binary '\0'),(281,'CocaCola','cocacola.com',255935745,'comercial@cocacola.pt','Av. do Forte 12, 2790-072 Carnaxide',1000,1,'2019-12-10 00:00:00',_binary '','2019-12-09 00:00:00',_binary '\0'),(282,'Zara','zara.com',253573201,'comercial@zara.pt','Av. Eng. Duarte Pacheco',1000,-1,'2019-12-10 00:00:00',_binary '','2019-12-09 00:00:00',_binary '\0'),(283,'SportZone','sportzone.com',253835201,'comercial@sportzone.pt','Av. Doutor Mendes',1000,1,'2020-01-10 00:00:00',_binary '','2020-01-09 00:00:00',_binary '\0'),(284,'Luso','Luso.com',253835201,'comercial@luso.pt','Av. Pereira João',500,-1,'2019-07-10 00:00:00',_binary '','2019-07-09 00:00:00',_binary '\0'),(285,'PrimaveraBSS','PrimaveraBSS.com',253835201,'comercial@PrimaveraBSS.pt','Av. Robert Smith',1500,1,'2019-06-10 00:00:00',_binary '','2019-06-09 00:00:00',_binary '\0'),(286,'PingoDoce','PingoDoce.com',258669421,'comercial@PingoDoce.pt','Av. Robert Smith',1500,1,'2019-08-10 00:00:00',_binary '','2019-08-09 00:00:00',_binary '\0'),(287,'Vitalis','Vitalis.com',253572875,'comercial@vitalis.pt','Av. Conde Margarida',1500,1,'2019-07-10 00:00:00',_binary '','2019-07-09 00:00:00',_binary '\0'),(288,'Adidas','adidas.pt',911111111,'comercial@adidas.pt','Braga',10000,1,'2020-01-14 11:46:33',_binary '','2020-01-14 11:45:49',_binary '\0');
/*!40000 ALTER TABLE `Patrocinador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PeriodoFecho`
--

DROP TABLE IF EXISTS `PeriodoFecho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PeriodoFecho` (
  `idPeriodoFecho` int(11) NOT NULL AUTO_INCREMENT,
  `dataInicio` datetime DEFAULT NULL,
  `dataFim` datetime DEFAULT NULL,
  `idEspaco` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPeriodoFecho`),
  KEY `fk_periodoFecho_espaco_idx` (`idEspaco`),
  CONSTRAINT `fk_periodoFecho_espaco` FOREIGN KEY (`idEspaco`) REFERENCES `Espaco` (`idespaco`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PeriodoFecho`
--

LOCK TABLES `PeriodoFecho` WRITE;
/*!40000 ALTER TABLE `PeriodoFecho` DISABLE KEYS */;
INSERT INTO `PeriodoFecho` VALUES (1,'2020-01-10 00:00:00','2020-01-15 00:00:00',31);
/*!40000 ALTER TABLE `PeriodoFecho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stock`
--

DROP TABLE IF EXISTS `Stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stock` (
  `idStock` int(11) NOT NULL AUTO_INCREMENT,
  `valor` int(11) NOT NULL,
  `id_Espaco_material_FK25` int(11) NOT NULL,
  PRIMARY KEY (`idStock`),
  KEY `id_Espaco_material_FK25_idx` (`id_Espaco_material_FK25`),
  CONSTRAINT `id_Espaco_material_FK25` FOREIGN KEY (`id_Espaco_material_FK25`) REFERENCES `Espaco_material` (`idespaco_material`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stock`
--

LOCK TABLES `Stock` WRITE;
/*!40000 ALTER TABLE `Stock` DISABLE KEYS */;
INSERT INTO `Stock` VALUES (17,8,23),(18,78,24),(19,0,25),(20,5,26),(21,3,27),(22,4,28),(23,0,29),(24,3,30);
/*!40000 ALTER TABLE `Stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Visita`
--

DROP TABLE IF EXISTS `Visita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Visita` (
  `nVisitas` mediumint(9) NOT NULL AUTO_INCREMENT,
  `dia` tinyint(4) NOT NULL,
  `mes` tinyint(4) NOT NULL,
  `ano` smallint(6) NOT NULL,
  PRIMARY KEY (`nVisitas`)
) ENGINE=InnoDB AUTO_INCREMENT=1845 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Visita`
--

LOCK TABLES `Visita` WRITE;
/*!40000 ALTER TABLE `Visita` DISABLE KEYS */;
INSERT INTO `Visita` VALUES (9,22,11,2019),(10,22,11,2019),(11,22,11,2019),(12,22,11,2019),(13,22,11,2019),(14,22,11,2019),(15,22,11,2019),(16,22,11,2019),(17,22,11,2019),(18,22,11,2019),(19,22,11,2019),(20,22,11,2019),(21,22,11,2019),(22,22,11,2019),(23,22,11,2019),(24,22,11,2019),(25,22,11,2019),(26,22,11,2019),(27,22,11,2019),(28,22,11,2019),(29,22,11,2019),(30,22,11,2019),(31,22,11,2019),(32,22,11,2019),(33,22,11,2019),(34,22,11,2019),(35,22,11,2019),(36,22,11,2019),(37,22,11,2019),(38,23,11,2019),(39,1,10,2019),(41,23,11,2019),(42,23,11,2019),(43,23,11,2019),(44,23,11,2019),(45,23,11,2019),(46,23,11,2019),(47,23,11,2019),(48,23,11,2019),(49,24,11,2019),(50,24,11,2019),(51,24,11,2019),(52,24,11,2019),(53,24,11,2019),(54,24,11,2019),(55,24,11,2019),(56,24,11,2019),(57,24,11,2019),(58,24,11,2019),(59,24,11,2019),(60,24,11,2019),(61,24,11,2019),(62,24,11,2019),(63,24,11,2019),(64,24,11,2019),(65,24,11,2019),(66,24,11,2019),(67,24,11,2019),(68,24,11,2019),(69,24,11,2019),(70,24,11,2019),(71,24,11,2019),(72,24,11,2019),(73,24,11,2019),(74,24,11,2019),(75,24,11,2019),(76,24,11,2019),(77,24,11,2019),(78,24,11,2019),(79,24,11,2019),(80,24,11,2019),(81,24,11,2019),(82,24,11,2019),(83,24,11,2019),(84,24,11,2019),(85,24,11,2019),(86,24,11,2019),(87,24,11,2019),(88,24,11,2019),(89,24,11,2019),(90,24,11,2019),(91,24,11,2019),(92,25,11,2019),(93,25,11,2019),(94,25,11,2019),(95,25,11,2019),(96,25,11,2019),(97,25,11,2019),(98,25,11,2019),(99,25,11,2019),(100,25,11,2019),(101,25,11,2019),(102,25,11,2019),(103,25,11,2019),(104,25,11,2019),(105,25,11,2019),(106,25,11,2019),(107,25,11,2019),(108,25,11,2019),(109,25,11,2019),(110,25,11,2019),(111,25,11,2019),(112,25,11,2019),(113,25,11,2019),(114,25,11,2019),(115,25,11,2019),(116,25,11,2019),(117,25,11,2019),(118,25,11,2019),(119,25,11,2019),(120,25,11,2019),(121,25,11,2019),(122,25,11,2019),(123,25,11,2019),(124,25,11,2019),(125,25,11,2019),(126,25,11,2019),(127,25,11,2019),(128,25,11,2019),(129,25,11,2019),(130,25,11,2019),(131,25,11,2019),(132,25,11,2019),(133,25,11,2019),(134,25,11,2019),(135,25,11,2019),(136,25,11,2019),(137,25,11,2019),(138,25,11,2019),(139,25,11,2019),(140,25,11,2019),(141,25,11,2019),(142,25,11,2019),(143,25,11,2019),(144,25,11,2019),(145,25,11,2019),(146,25,11,2019),(147,25,11,2019),(148,25,11,2019),(149,25,11,2019),(150,25,11,2019),(151,25,11,2019),(152,25,11,2019),(153,25,11,2019),(154,25,11,2019),(155,25,11,2019),(156,25,11,2019),(157,25,11,2019),(158,25,11,2019),(159,25,11,2019),(160,25,11,2019),(161,25,11,2019),(162,25,11,2019),(163,25,11,2019),(164,25,11,2019),(165,25,11,2019),(166,25,11,2019),(167,25,11,2019),(168,25,11,2019),(169,25,11,2019),(170,25,11,2019),(171,25,11,2019),(172,25,11,2019),(173,25,11,2019),(174,25,11,2019),(175,25,11,2019),(176,25,11,2019),(177,25,11,2019),(178,25,11,2019),(179,25,11,2019),(180,25,11,2019),(181,25,11,2019),(182,25,11,2019),(183,25,11,2019),(184,25,11,2019),(185,25,11,2019),(186,25,11,2019),(187,25,11,2019),(188,25,11,2019),(189,25,11,2019),(190,25,11,2019),(191,25,11,2019),(192,25,11,2019),(193,25,11,2019),(194,25,11,2019),(195,25,11,2019),(196,25,11,2019),(197,25,11,2019),(198,25,11,2019),(199,25,11,2019),(200,25,11,2019),(201,25,11,2019),(202,25,11,2019),(203,25,11,2019),(204,25,11,2019),(205,25,11,2019),(206,25,11,2019),(207,25,11,2019),(208,25,11,2019),(209,25,11,2019),(210,25,11,2019),(211,25,11,2019),(212,25,11,2019),(213,26,11,2019),(214,26,11,2019),(215,26,11,2019),(216,26,11,2019),(217,26,11,2019),(218,26,11,2019),(219,27,11,2019),(220,27,11,2019),(221,27,11,2019),(222,27,11,2019),(223,27,11,2019),(224,27,11,2019),(225,27,11,2019),(226,27,11,2019),(227,27,11,2019),(228,27,11,2019),(229,27,11,2019),(230,27,11,2019),(231,30,11,2019),(232,30,11,2019),(233,30,11,2019),(234,30,11,2019),(235,30,11,2019),(236,30,11,2019),(237,30,11,2019),(238,2,12,2019),(239,4,12,2019),(240,4,12,2019),(241,4,12,2019),(242,4,12,2019),(243,4,12,2019),(244,4,12,2019),(245,4,12,2019),(246,4,12,2019),(247,4,12,2019),(248,7,12,2019),(249,7,12,2019),(250,7,12,2019),(251,7,12,2019),(252,7,12,2019),(253,7,12,2019),(254,7,12,2019),(255,7,12,2019),(256,7,12,2019),(257,7,12,2019),(258,7,12,2019),(259,8,12,2019),(260,9,12,2019),(261,9,12,2019),(262,9,12,2019),(263,9,12,2019),(264,9,12,2019),(265,9,12,2019),(266,9,12,2019),(267,9,12,2019),(268,10,12,2019),(269,10,12,2019),(270,10,12,2019),(271,10,12,2019),(272,10,12,2019),(273,10,12,2019),(274,10,12,2019),(275,10,12,2019),(276,10,12,2019),(277,10,12,2019),(278,10,12,2019),(279,10,12,2019),(280,10,12,2019),(281,10,12,2019),(282,10,12,2019),(283,10,12,2019),(284,10,12,2019),(285,10,12,2019),(286,10,12,2019),(287,10,12,2019),(288,10,12,2019),(289,10,12,2019),(290,10,12,2019),(291,10,12,2019),(292,10,12,2019),(293,10,12,2019),(294,10,12,2019),(295,10,12,2019),(296,10,12,2019),(297,10,12,2019),(298,10,12,2019),(299,10,12,2019),(300,10,12,2019),(301,10,12,2019),(302,10,12,2019),(303,10,12,2019),(304,10,12,2019),(305,10,12,2019),(306,10,12,2019),(307,10,12,2019),(308,10,12,2019),(309,10,12,2019),(310,10,12,2019),(311,11,12,2019),(312,11,12,2019),(313,14,12,2019),(314,16,12,2019),(315,16,12,2019),(316,16,12,2019),(317,16,12,2019),(318,16,12,2019),(319,16,12,2019),(320,16,12,2019),(321,16,12,2019),(322,16,12,2019),(323,16,12,2019),(324,16,12,2019),(325,16,12,2019),(326,16,12,2019),(327,16,12,2019),(328,16,12,2019),(329,16,12,2019),(330,16,12,2019),(331,16,12,2019),(332,16,12,2019),(333,16,12,2019),(334,16,12,2019),(335,16,12,2019),(336,16,12,2019),(337,16,12,2019),(338,16,12,2019),(339,16,12,2019),(340,16,12,2019),(341,16,12,2019),(342,16,12,2019),(343,16,12,2019),(344,16,12,2019),(345,16,12,2019),(346,16,12,2019),(347,16,12,2019),(348,16,12,2019),(349,16,12,2019),(350,20,12,2019),(351,20,12,2019),(352,20,12,2019),(353,20,12,2019),(354,20,12,2019),(355,20,12,2019),(356,20,12,2019),(357,20,12,2019),(358,20,12,2019),(359,20,12,2019),(360,20,12,2019),(361,20,12,2019),(362,20,12,2019),(363,20,12,2019),(364,20,12,2019),(365,20,12,2019),(366,20,12,2019),(367,20,12,2019),(368,20,12,2019),(369,20,12,2019),(370,21,12,2019),(371,21,12,2019),(372,22,12,2019),(373,22,12,2019),(374,22,12,2019),(375,22,12,2019),(376,22,12,2019),(377,22,12,2019),(378,22,12,2019),(379,22,12,2019),(380,22,12,2019),(381,22,12,2019),(382,23,12,2019),(383,23,12,2019),(384,25,12,2019),(385,25,12,2019),(386,26,12,2019),(387,26,12,2019),(388,26,12,2019),(389,26,12,2019),(390,26,12,2019),(391,26,12,2019),(392,26,12,2019),(393,26,12,2019),(394,26,12,2019),(395,26,12,2019),(396,26,12,2019),(397,26,12,2019),(398,27,12,2019),(399,27,12,2019),(400,27,12,2019),(401,27,12,2019),(402,27,12,2019),(403,27,12,2019),(404,27,12,2019),(405,27,12,2019),(406,27,12,2019),(407,27,12,2019),(408,27,12,2019),(409,27,12,2019),(410,27,12,2019),(411,27,12,2019),(412,27,12,2019),(413,27,12,2019),(414,27,12,2019),(415,28,12,2019),(416,28,12,2019),(417,28,12,2019),(418,28,12,2019),(419,28,12,2019),(420,28,12,2019),(421,28,12,2019),(422,28,12,2019),(423,28,12,2019),(424,28,12,2019),(425,28,12,2019),(426,28,12,2019),(427,28,12,2019),(428,28,12,2019),(429,28,12,2019),(430,28,12,2019),(431,28,12,2019),(432,28,12,2019),(433,28,12,2019),(434,28,12,2019),(435,28,12,2019),(436,28,12,2019),(437,28,12,2019),(438,28,12,2019),(439,28,12,2019),(440,28,12,2019),(441,28,12,2019),(442,28,12,2019),(443,28,12,2019),(444,28,12,2019),(445,28,12,2019),(446,28,12,2019),(447,28,12,2019),(448,28,12,2019),(449,28,12,2019),(450,28,12,2019),(451,28,12,2019),(452,28,12,2019),(453,28,12,2019),(454,28,12,2019),(455,28,12,2019),(456,28,12,2019),(457,28,12,2019),(458,28,12,2019),(459,28,12,2019),(460,28,12,2019),(461,28,12,2019),(462,28,12,2019),(463,28,12,2019),(464,28,12,2019),(465,28,12,2019),(466,28,12,2019),(467,28,12,2019),(468,28,12,2019),(469,28,12,2019),(470,29,12,2019),(471,29,12,2019),(472,29,12,2019),(473,29,12,2019),(474,29,12,2019),(475,29,12,2019),(476,29,12,2019),(477,29,12,2019),(478,29,12,2019),(479,29,12,2019),(480,29,12,2019),(481,29,12,2019),(482,29,12,2019),(483,29,12,2019),(484,29,12,2019),(485,29,12,2019),(486,29,12,2019),(487,29,12,2019),(488,29,12,2019),(489,29,12,2019),(490,29,12,2019),(491,29,12,2019),(492,29,12,2019),(493,29,12,2019),(494,29,12,2019),(495,29,12,2019),(496,29,12,2019),(497,29,12,2019),(498,29,12,2019),(499,29,12,2019),(500,29,12,2019),(501,29,12,2019),(502,29,12,2019),(503,29,12,2019),(504,29,12,2019),(505,29,12,2019),(506,29,12,2019),(507,29,12,2019),(508,29,12,2019),(509,29,12,2019),(510,29,12,2019),(511,29,12,2019),(512,29,12,2019),(513,29,12,2019),(514,29,12,2019),(515,29,12,2019),(516,29,12,2019),(517,29,12,2019),(518,29,12,2019),(519,29,12,2019),(520,29,12,2019),(521,29,12,2019),(522,29,12,2019),(523,29,12,2019),(524,29,12,2019),(525,29,12,2019),(526,29,12,2019),(527,29,12,2019),(528,29,12,2019),(529,29,12,2019),(530,29,12,2019),(531,29,12,2019),(532,29,12,2019),(533,29,12,2019),(534,29,12,2019),(535,29,12,2019),(536,29,12,2019),(537,29,12,2019),(538,29,12,2019),(539,29,12,2019),(540,29,12,2019),(541,29,12,2019),(542,29,12,2019),(543,29,12,2019),(544,29,12,2019),(545,29,12,2019),(546,29,12,2019),(547,29,12,2019),(548,29,12,2019),(549,29,12,2019),(550,29,12,2019),(551,29,12,2019),(552,29,12,2019),(553,29,12,2019),(554,29,12,2019),(555,29,12,2019),(556,29,12,2019),(557,29,12,2019),(558,29,12,2019),(559,29,12,2019),(560,29,12,2019),(561,29,12,2019),(562,29,12,2019),(563,29,12,2019),(564,29,12,2019),(565,29,12,2019),(566,29,12,2019),(567,29,12,2019),(568,29,12,2019),(569,29,12,2019),(570,29,12,2019),(571,29,12,2019),(572,29,12,2019),(573,29,12,2019),(574,29,12,2019),(575,29,12,2019),(576,29,12,2019),(577,29,12,2019),(578,29,12,2019),(579,29,12,2019),(580,29,12,2019),(581,29,12,2019),(582,29,12,2019),(583,29,12,2019),(584,29,12,2019),(585,29,12,2019),(586,29,12,2019),(587,29,12,2019),(588,29,12,2019),(589,29,12,2019),(590,29,12,2019),(591,29,12,2019),(592,29,12,2019),(593,29,12,2019),(594,29,12,2019),(595,29,12,2019),(596,29,12,2019),(597,29,12,2019),(598,29,12,2019),(599,29,12,2019),(600,29,12,2019),(601,29,12,2019),(602,29,12,2019),(603,29,12,2019),(604,29,12,2019),(605,29,12,2019),(606,29,12,2019),(607,29,12,2019),(608,29,12,2019),(609,29,12,2019),(610,29,12,2019),(611,29,12,2019),(612,29,12,2019),(613,29,12,2019),(614,29,12,2019),(615,29,12,2019),(616,29,12,2019),(617,29,12,2019),(618,29,12,2019),(619,29,12,2019),(620,29,12,2019),(621,29,12,2019),(622,29,12,2019),(623,29,12,2019),(624,29,12,2019),(625,29,12,2019),(626,29,12,2019),(627,29,12,2019),(628,29,12,2019),(629,29,12,2019),(630,29,12,2019),(631,29,12,2019),(632,29,12,2019),(633,29,12,2019),(634,29,12,2019),(635,29,12,2019),(636,29,12,2019),(637,29,12,2019),(638,29,12,2019),(639,29,12,2019),(640,29,12,2019),(641,29,12,2019),(642,29,12,2019),(643,29,12,2019),(644,29,12,2019),(645,29,12,2019),(646,30,12,2019),(647,30,12,2019),(648,30,12,2019),(649,30,12,2019),(650,30,12,2019),(651,30,12,2019),(652,30,12,2019),(653,30,12,2019),(654,30,12,2019),(655,30,12,2019),(656,30,12,2019),(657,30,12,2019),(658,30,12,2019),(659,30,12,2019),(660,30,12,2019),(661,30,12,2019),(662,30,12,2019),(663,30,12,2019),(664,30,12,2019),(665,30,12,2019),(666,30,12,2019),(667,30,12,2019),(668,30,12,2019),(669,30,12,2019),(670,30,12,2019),(671,31,12,2019),(672,31,12,2019),(673,31,12,2019),(674,31,12,2019),(675,31,12,2019),(676,31,12,2019),(677,31,12,2019),(678,31,12,2019),(679,31,12,2019),(680,31,12,2019),(681,31,12,2019),(682,31,12,2019),(683,31,12,2019),(684,31,12,2019),(685,31,12,2019),(686,31,12,2019),(687,6,1,2020),(688,6,1,2020),(689,6,1,2020),(690,6,1,2020),(691,6,1,2020),(692,6,1,2020),(693,6,1,2020),(694,6,1,2020),(695,6,1,2020),(696,6,1,2020),(697,6,1,2020),(698,6,1,2020),(699,6,1,2020),(700,6,1,2020),(701,6,1,2020),(702,6,1,2020),(703,6,1,2020),(704,6,1,2020),(705,6,1,2020),(706,6,1,2020),(707,6,1,2020),(708,6,1,2020),(709,6,1,2020),(710,6,1,2020),(711,6,1,2020),(712,6,1,2020),(713,6,1,2020),(714,6,1,2020),(715,6,1,2020),(716,6,1,2020),(717,6,1,2020),(718,6,1,2020),(719,6,1,2020),(720,6,1,2020),(721,6,1,2020),(722,6,1,2020),(723,6,1,2020),(724,6,1,2020),(725,7,1,2020),(726,7,1,2020),(727,7,1,2020),(728,7,1,2020),(729,7,1,2020),(730,7,1,2020),(731,7,1,2020),(732,7,1,2020),(733,7,1,2020),(734,7,1,2020),(735,7,1,2020),(736,7,1,2020),(737,7,1,2020),(738,7,1,2020),(739,7,1,2020),(740,7,1,2020),(741,7,1,2020),(742,7,1,2020),(743,7,1,2020),(744,7,1,2020),(745,7,1,2020),(746,7,1,2020),(747,7,1,2020),(748,7,1,2020),(749,7,1,2020),(750,7,1,2020),(751,7,1,2020),(752,7,1,2020),(753,7,1,2020),(754,7,1,2020),(755,7,1,2020),(756,7,1,2020),(757,7,1,2020),(758,7,1,2020),(759,7,1,2020),(760,7,1,2020),(761,7,1,2020),(762,7,1,2020),(763,7,1,2020),(764,7,1,2020),(765,7,1,2020),(766,7,1,2020),(767,7,1,2020),(768,7,1,2020),(769,7,1,2020),(770,7,1,2020),(771,7,1,2020),(772,7,1,2020),(773,7,1,2020),(774,8,1,2020),(775,8,1,2020),(776,8,1,2020),(777,8,1,2020),(778,8,1,2020),(779,8,1,2020),(780,8,1,2020),(781,8,1,2020),(782,9,1,2020),(783,9,1,2020),(784,9,1,2020),(785,9,1,2020),(786,9,1,2020),(787,9,1,2020),(788,9,1,2020),(789,9,1,2020),(790,9,1,2020),(791,9,1,2020),(792,9,1,2020),(793,9,1,2020),(794,9,1,2020),(795,9,1,2020),(796,9,1,2020),(797,9,1,2020),(798,9,1,2020),(799,9,1,2020),(800,9,1,2020),(801,9,1,2020),(802,9,1,2020),(803,9,1,2020),(804,9,1,2020),(805,9,1,2020),(806,9,1,2020),(807,9,1,2020),(808,9,1,2020),(809,9,1,2020),(810,9,1,2020),(811,9,1,2020),(812,9,1,2020),(813,9,1,2020),(814,9,1,2020),(815,9,1,2020),(816,9,1,2020),(817,9,1,2020),(818,9,1,2020),(819,9,1,2020),(820,9,1,2020),(821,10,1,2020),(822,10,1,2020),(823,10,1,2020),(824,10,1,2020),(825,10,1,2020),(826,10,1,2020),(827,10,1,2020),(828,10,1,2020),(829,10,1,2020),(830,10,1,2020),(831,10,1,2020),(832,10,1,2020),(833,10,1,2020),(834,10,1,2020),(835,10,1,2020),(836,10,1,2020),(837,10,1,2020),(838,10,1,2020),(839,10,1,2020),(840,10,1,2020),(841,10,1,2020),(842,10,1,2020),(843,10,1,2020),(844,10,1,2020),(845,10,1,2020),(846,10,1,2020),(847,10,1,2020),(848,10,1,2020),(849,10,1,2020),(850,10,1,2020),(851,10,1,2020),(852,10,1,2020),(853,10,1,2020),(854,10,1,2020),(855,10,1,2020),(856,10,1,2020),(857,10,1,2020),(858,10,1,2020),(859,10,1,2020),(860,10,1,2020),(861,10,1,2020),(862,10,1,2020),(863,10,1,2020),(864,10,1,2020),(865,10,1,2020),(866,10,1,2020),(867,10,1,2020),(868,10,1,2020),(869,10,1,2020),(870,10,1,2020),(871,10,1,2020),(872,10,1,2020),(873,10,1,2020),(874,10,1,2020),(875,10,1,2020),(876,10,1,2020),(877,10,1,2020),(878,11,1,2020),(879,11,1,2020),(880,11,1,2020),(881,11,1,2020),(882,11,1,2020),(883,11,1,2020),(884,11,1,2020),(885,11,1,2020),(886,11,1,2020),(887,11,1,2020),(888,11,1,2020),(889,11,1,2020),(890,11,1,2020),(891,11,1,2020),(892,11,1,2020),(893,11,1,2020),(894,11,1,2020),(895,11,1,2020),(896,11,1,2020),(897,11,1,2020),(898,11,1,2020),(899,11,1,2020),(900,11,1,2020),(901,11,1,2020),(902,11,1,2020),(903,11,1,2020),(904,11,1,2020),(905,11,1,2020),(906,11,1,2020),(907,11,1,2020),(908,11,1,2020),(909,11,1,2020),(910,11,1,2020),(911,11,1,2020),(912,11,1,2020),(913,11,1,2020),(914,11,1,2020),(915,11,1,2020),(916,11,1,2020),(917,11,1,2020),(918,11,1,2020),(919,11,1,2020),(920,11,1,2020),(921,11,1,2020),(922,11,1,2020),(923,11,1,2020),(924,11,1,2020),(925,11,1,2020),(926,11,1,2020),(927,11,1,2020),(928,11,1,2020),(929,11,1,2020),(930,11,1,2020),(931,11,1,2020),(932,11,1,2020),(933,11,1,2020),(934,11,1,2020),(935,11,1,2020),(936,11,1,2020),(937,11,1,2020),(938,11,1,2020),(939,11,1,2020),(940,11,1,2020),(941,11,1,2020),(942,11,1,2020),(943,11,1,2020),(944,11,1,2020),(945,11,1,2020),(946,11,1,2020),(947,11,1,2020),(948,11,1,2020),(949,11,1,2020),(950,11,1,2020),(951,11,1,2020),(952,11,1,2020),(953,11,1,2020),(954,11,1,2020),(955,11,1,2020),(956,11,1,2020),(957,11,1,2020),(958,11,1,2020),(959,11,1,2020),(960,11,1,2020),(961,11,1,2020),(962,11,1,2020),(963,11,1,2020),(964,11,1,2020),(965,11,1,2020),(966,11,1,2020),(967,11,1,2020),(968,11,1,2020),(969,11,1,2020),(970,11,1,2020),(971,11,1,2020),(972,11,1,2020),(973,11,1,2020),(974,11,1,2020),(975,11,1,2020),(976,11,1,2020),(977,11,1,2020),(978,11,1,2020),(979,11,1,2020),(980,11,1,2020),(981,11,1,2020),(982,11,1,2020),(983,11,1,2020),(984,11,1,2020),(985,11,1,2020),(986,11,1,2020),(987,11,1,2020),(988,11,1,2020),(989,11,1,2020),(990,11,1,2020),(991,11,1,2020),(992,11,1,2020),(993,11,1,2020),(994,11,1,2020),(995,11,1,2020),(996,11,1,2020),(997,11,1,2020),(998,11,1,2020),(999,11,1,2020),(1000,11,1,2020),(1001,11,1,2020),(1002,11,1,2020),(1003,11,1,2020),(1004,11,1,2020),(1005,11,1,2020),(1006,11,1,2020),(1007,11,1,2020),(1008,11,1,2020),(1009,11,1,2020),(1010,11,1,2020),(1011,11,1,2020),(1012,11,1,2020),(1013,11,1,2020),(1014,11,1,2020),(1015,11,1,2020),(1016,11,1,2020),(1017,11,1,2020),(1018,11,1,2020),(1019,11,1,2020),(1020,11,1,2020),(1021,11,1,2020),(1022,11,1,2020),(1023,11,1,2020),(1024,11,1,2020),(1025,11,1,2020),(1026,12,1,2020),(1027,12,1,2020),(1028,12,1,2020),(1029,12,1,2020),(1030,12,1,2020),(1031,12,1,2020),(1032,12,1,2020),(1033,12,1,2020),(1034,12,1,2020),(1035,12,1,2020),(1036,12,1,2020),(1037,12,1,2020),(1038,12,1,2020),(1039,12,1,2020),(1040,12,1,2020),(1041,12,1,2020),(1042,12,1,2020),(1043,12,1,2020),(1044,12,1,2020),(1045,12,1,2020),(1046,12,1,2020),(1047,12,1,2020),(1048,12,1,2020),(1049,12,1,2020),(1050,12,1,2020),(1051,12,1,2020),(1052,12,1,2020),(1053,12,1,2020),(1054,12,1,2020),(1055,12,1,2020),(1056,12,1,2020),(1057,12,1,2020),(1058,12,1,2020),(1059,12,1,2020),(1060,12,1,2020),(1061,12,1,2020),(1062,12,1,2020),(1063,12,1,2020),(1064,12,1,2020),(1065,12,1,2020),(1066,12,1,2020),(1067,12,1,2020),(1068,12,1,2020),(1069,12,1,2020),(1070,12,1,2020),(1071,12,1,2020),(1072,12,1,2020),(1073,12,1,2020),(1074,12,1,2020),(1075,12,1,2020),(1076,12,1,2020),(1077,12,1,2020),(1078,12,1,2020),(1079,12,1,2020),(1080,12,1,2020),(1081,12,1,2020),(1082,12,1,2020),(1083,12,1,2020),(1084,12,1,2020),(1085,12,1,2020),(1086,12,1,2020),(1087,12,1,2020),(1088,12,1,2020),(1089,12,1,2020),(1090,12,1,2020),(1091,12,1,2020),(1092,12,1,2020),(1093,12,1,2020),(1094,12,1,2020),(1095,12,1,2020),(1096,12,1,2020),(1097,12,1,2020),(1098,12,1,2020),(1099,12,1,2020),(1100,12,1,2020),(1101,12,1,2020),(1102,12,1,2020),(1103,12,1,2020),(1104,12,1,2020),(1105,12,1,2020),(1106,12,1,2020),(1107,12,1,2020),(1108,12,1,2020),(1109,12,1,2020),(1110,12,1,2020),(1111,12,1,2020),(1112,12,1,2020),(1113,12,1,2020),(1114,12,1,2020),(1115,12,1,2020),(1116,12,1,2020),(1117,12,1,2020),(1118,12,1,2020),(1119,12,1,2020),(1120,12,1,2020),(1121,12,1,2020),(1122,12,1,2020),(1123,12,1,2020),(1124,12,1,2020),(1125,12,1,2020),(1126,13,1,2020),(1127,13,1,2020),(1128,13,1,2020),(1129,13,1,2020),(1130,13,1,2020),(1131,13,1,2020),(1132,13,1,2020),(1133,13,1,2020),(1134,13,1,2020),(1135,13,1,2020),(1136,13,1,2020),(1137,13,1,2020),(1138,13,1,2020),(1139,13,1,2020),(1140,13,1,2020),(1141,13,1,2020),(1142,13,1,2020),(1143,13,1,2020),(1144,13,1,2020),(1145,13,1,2020),(1146,13,1,2020),(1147,13,1,2020),(1148,13,1,2020),(1149,13,1,2020),(1150,13,1,2020),(1151,13,1,2020),(1152,13,1,2020),(1153,13,1,2020),(1154,13,1,2020),(1155,13,1,2020),(1156,13,1,2020),(1157,13,1,2020),(1158,13,1,2020),(1159,13,1,2020),(1160,13,1,2020),(1161,13,1,2020),(1162,13,1,2020),(1163,13,1,2020),(1164,13,1,2020),(1165,13,1,2020),(1166,13,1,2020),(1167,13,1,2020),(1168,13,1,2020),(1169,13,1,2020),(1170,13,1,2020),(1171,20,10,2019),(1172,20,10,2019),(1173,20,10,2019),(1174,20,10,2019),(1175,20,10,2019),(1176,20,10,2019),(1177,20,10,2019),(1178,20,10,2019),(1179,20,10,2019),(1180,20,10,2019),(1181,20,10,2019),(1182,20,10,2019),(1183,20,10,2019),(1184,20,10,2019),(1185,20,10,2019),(1186,20,10,2019),(1187,20,10,2019),(1188,20,10,2019),(1189,20,10,2019),(1190,20,10,2019),(1191,20,10,2019),(1192,20,10,2019),(1193,20,10,2019),(1194,20,10,2019),(1195,20,10,2019),(1196,20,10,2019),(1197,20,10,2019),(1198,20,10,2019),(1199,20,10,2019),(1200,20,10,2019),(1201,20,10,2019),(1202,20,10,2019),(1203,20,10,2019),(1204,20,10,2019),(1205,20,10,2019),(1206,20,10,2019),(1207,20,10,2019),(1208,20,10,2019),(1209,20,10,2019),(1210,20,10,2019),(1211,20,10,2019),(1212,20,10,2019),(1213,20,10,2019),(1214,20,10,2019),(1215,20,10,2019),(1216,20,10,2019),(1217,20,10,2019),(1218,20,10,2019),(1219,20,10,2019),(1220,20,10,2019),(1221,20,10,2019),(1222,20,10,2019),(1223,20,10,2019),(1224,20,10,2019),(1225,20,10,2019),(1226,20,10,2019),(1227,20,10,2019),(1228,20,10,2019),(1229,20,10,2019),(1230,20,10,2019),(1231,20,10,2019),(1232,20,10,2019),(1233,20,9,2019),(1234,20,9,2019),(1235,20,9,2019),(1236,20,9,2019),(1237,20,9,2019),(1238,20,9,2019),(1239,20,9,2019),(1240,20,9,2019),(1241,20,9,2019),(1242,20,9,2019),(1243,20,9,2019),(1244,20,9,2019),(1245,20,9,2019),(1246,20,9,2019),(1247,20,9,2019),(1248,20,9,2019),(1249,20,9,2019),(1250,20,9,2019),(1251,20,9,2019),(1252,20,9,2019),(1253,20,9,2019),(1254,20,9,2019),(1255,20,9,2019),(1256,20,9,2019),(1257,20,9,2019),(1258,20,9,2019),(1259,20,9,2019),(1260,20,9,2019),(1261,20,9,2019),(1262,20,9,2019),(1263,20,9,2019),(1264,20,9,2019),(1265,20,9,2019),(1266,20,9,2019),(1267,20,9,2019),(1268,20,9,2019),(1269,20,9,2019),(1270,20,9,2019),(1271,20,9,2019),(1272,20,9,2019),(1273,20,9,2019),(1274,20,9,2019),(1275,20,9,2019),(1276,20,9,2019),(1277,20,9,2019),(1278,20,9,2019),(1279,20,9,2019),(1280,20,9,2019),(1281,20,9,2019),(1282,20,9,2019),(1283,20,9,2019),(1284,20,9,2019),(1285,20,9,2019),(1286,20,9,2019),(1287,20,9,2019),(1288,20,9,2019),(1289,20,9,2019),(1290,20,9,2019),(1291,20,9,2019),(1292,20,9,2019),(1293,20,9,2019),(1294,20,9,2019),(1295,20,9,2019),(1296,20,9,2019),(1297,20,9,2019),(1298,20,9,2019),(1299,20,9,2019),(1300,20,9,2019),(1301,20,9,2019),(1302,20,9,2019),(1303,20,9,2019),(1304,20,9,2019),(1305,20,9,2019),(1306,20,9,2019),(1307,20,9,2019),(1308,20,9,2019),(1309,20,9,2019),(1310,20,9,2019),(1311,20,9,2019),(1312,20,9,2019),(1313,20,9,2019),(1314,20,9,2019),(1315,20,9,2019),(1316,20,9,2019),(1317,20,9,2019),(1318,20,9,2019),(1319,20,9,2019),(1320,20,9,2019),(1321,20,9,2019),(1322,20,9,2019),(1323,20,9,2019),(1324,20,9,2019),(1325,20,9,2019),(1326,20,9,2019),(1327,20,9,2019),(1328,20,9,2019),(1329,20,9,2019),(1330,20,9,2019),(1331,20,9,2019),(1332,20,9,2019),(1333,20,9,2019),(1334,20,9,2019),(1335,20,9,2019),(1336,20,9,2019),(1337,20,9,2019),(1338,20,9,2019),(1339,20,9,2019),(1340,20,9,2019),(1341,20,9,2019),(1342,20,9,2019),(1343,20,9,2019),(1344,20,9,2019),(1345,20,9,2019),(1346,20,9,2019),(1347,20,9,2019),(1348,20,9,2019),(1349,20,9,2019),(1350,20,9,2019),(1351,20,9,2019),(1352,20,9,2019),(1353,20,9,2019),(1354,20,9,2019),(1355,20,9,2019),(1356,20,9,2019),(1357,20,9,2019),(1358,20,9,2019),(1359,20,9,2019),(1360,20,9,2019),(1361,20,9,2019),(1362,20,9,2019),(1363,20,9,2019),(1364,20,9,2019),(1365,20,9,2019),(1366,20,9,2019),(1367,20,9,2019),(1368,20,9,2019),(1369,20,9,2019),(1370,20,9,2019),(1371,20,9,2019),(1372,20,9,2019),(1373,20,8,2019),(1374,20,8,2019),(1375,20,8,2019),(1376,20,8,2019),(1377,20,8,2019),(1378,20,8,2019),(1379,20,8,2019),(1380,20,8,2019),(1381,20,8,2019),(1382,20,8,2019),(1383,20,8,2019),(1384,20,8,2019),(1385,20,8,2019),(1386,20,8,2019),(1387,20,8,2019),(1388,20,8,2019),(1389,20,8,2019),(1390,20,8,2019),(1391,20,8,2019),(1392,20,8,2019),(1393,20,8,2019),(1394,20,8,2019),(1395,20,8,2019),(1396,20,8,2019),(1397,20,8,2019),(1398,20,8,2019),(1399,20,8,2019),(1400,20,8,2019),(1401,20,8,2019),(1402,20,8,2019),(1403,20,8,2019),(1404,20,8,2019),(1405,20,8,2019),(1406,20,8,2019),(1407,20,8,2019),(1408,20,8,2019),(1409,20,8,2019),(1410,20,8,2019),(1411,20,8,2019),(1412,20,8,2019),(1413,20,8,2019),(1414,20,8,2019),(1415,20,8,2019),(1416,20,8,2019),(1417,20,8,2019),(1418,20,8,2019),(1419,20,8,2019),(1420,20,8,2019),(1421,20,8,2019),(1422,20,8,2019),(1423,20,8,2019),(1424,20,8,2019),(1425,20,8,2019),(1426,20,8,2019),(1427,20,8,2019),(1428,20,8,2019),(1429,20,8,2019),(1430,20,8,2019),(1431,20,8,2019),(1432,20,8,2019),(1433,20,8,2019),(1434,20,8,2019),(1435,20,8,2019),(1436,20,8,2019),(1437,20,8,2019),(1438,20,8,2019),(1439,20,8,2019),(1440,20,8,2019),(1441,20,8,2019),(1442,20,8,2019),(1443,20,8,2019),(1444,20,8,2019),(1445,20,8,2019),(1446,20,8,2019),(1447,20,8,2019),(1448,20,8,2019),(1449,20,8,2019),(1450,20,8,2019),(1451,20,8,2019),(1452,20,8,2019),(1453,20,8,2019),(1454,20,8,2019),(1455,20,8,2019),(1456,20,8,2019),(1457,20,8,2019),(1458,20,8,2019),(1459,20,8,2019),(1460,20,8,2019),(1461,20,8,2019),(1462,20,8,2019),(1463,20,8,2019),(1464,20,8,2019),(1465,20,8,2019),(1466,20,8,2019),(1467,20,8,2019),(1468,20,8,2019),(1469,20,8,2019),(1470,20,8,2019),(1471,20,8,2019),(1472,20,8,2019),(1473,20,8,2019),(1474,20,8,2019),(1475,20,8,2019),(1476,20,8,2019),(1477,20,8,2019),(1478,20,8,2019),(1479,20,8,2019),(1480,20,8,2019),(1481,20,8,2019),(1482,20,8,2019),(1483,20,8,2019),(1484,20,8,2019),(1485,20,8,2019),(1486,20,8,2019),(1487,20,8,2019),(1488,20,8,2019),(1489,20,8,2019),(1490,20,8,2019),(1491,20,8,2019),(1492,20,8,2019),(1493,20,8,2019),(1494,20,8,2019),(1495,20,8,2019),(1496,20,8,2019),(1497,20,8,2019),(1498,20,8,2019),(1499,20,8,2019),(1500,20,8,2019),(1501,20,8,2019),(1502,20,8,2019),(1503,20,8,2019),(1504,20,8,2019),(1505,20,8,2019),(1506,20,8,2019),(1507,20,8,2019),(1508,20,8,2019),(1509,20,8,2019),(1510,20,8,2019),(1511,20,8,2019),(1512,20,8,2019),(1513,20,8,2019),(1514,20,8,2019),(1515,20,8,2019),(1516,20,8,2019),(1517,20,8,2019),(1518,20,8,2019),(1519,20,8,2019),(1520,20,8,2019),(1521,20,8,2019),(1522,20,8,2019),(1523,20,8,2019),(1524,20,8,2019),(1525,20,8,2019),(1526,20,8,2019),(1527,20,8,2019),(1528,20,8,2019),(1529,20,8,2019),(1530,20,8,2019),(1531,20,8,2019),(1532,20,8,2019),(1533,20,8,2019),(1534,20,8,2019),(1535,20,8,2019),(1536,20,8,2019),(1537,20,8,2019),(1538,20,8,2019),(1539,20,8,2019),(1540,20,8,2019),(1541,20,8,2019),(1542,20,8,2019),(1543,20,8,2019),(1544,20,8,2019),(1545,20,8,2019),(1546,20,8,2019),(1547,20,8,2019),(1548,20,8,2019),(1549,20,8,2019),(1550,20,8,2019),(1551,20,8,2019),(1552,20,8,2019),(1553,20,8,2019),(1554,20,8,2019),(1555,20,8,2019),(1556,20,8,2019),(1557,20,8,2019),(1558,20,8,2019),(1559,20,8,2019),(1560,20,8,2019),(1561,20,8,2019),(1562,20,8,2019),(1563,20,8,2019),(1564,20,8,2019),(1565,20,8,2019),(1566,20,8,2019),(1567,20,8,2019),(1568,20,8,2019),(1569,20,8,2019),(1570,20,8,2019),(1571,20,8,2019),(1572,20,8,2019),(1573,20,8,2019),(1574,20,8,2019),(1575,20,8,2019),(1576,20,8,2019),(1577,20,8,2019),(1578,20,8,2019),(1579,20,8,2019),(1580,20,8,2019),(1581,20,8,2019),(1582,20,8,2019),(1583,20,8,2019),(1584,20,8,2019),(1585,20,8,2019),(1586,20,8,2019),(1587,20,8,2019),(1588,20,8,2019),(1589,20,8,2019),(1590,20,8,2019),(1591,20,8,2019),(1592,20,8,2019),(1593,20,8,2019),(1594,20,8,2019),(1595,20,8,2019),(1596,20,8,2019),(1597,20,8,2019),(1598,20,8,2019),(1599,20,8,2019),(1600,20,8,2019),(1601,20,8,2019),(1602,20,8,2019),(1603,20,8,2019),(1604,20,8,2019),(1605,20,8,2019),(1606,20,8,2019),(1607,20,8,2019),(1608,20,8,2019),(1609,20,8,2019),(1610,20,8,2019),(1611,20,8,2019),(1612,20,8,2019),(1613,20,8,2019),(1614,20,8,2019),(1615,20,8,2019),(1616,20,8,2019),(1617,20,8,2019),(1618,20,8,2019),(1619,20,8,2019),(1620,20,8,2019),(1621,20,8,2019),(1622,20,8,2019),(1623,20,8,2019),(1624,20,8,2019),(1625,20,8,2019),(1626,20,8,2019),(1627,20,8,2019),(1628,20,8,2019),(1629,20,8,2019),(1630,20,8,2019),(1631,20,8,2019),(1632,20,8,2019),(1633,20,8,2019),(1634,20,8,2019),(1635,20,8,2019),(1636,20,8,2019),(1637,20,8,2019),(1638,20,8,2019),(1639,20,8,2019),(1640,20,8,2019),(1641,20,8,2019),(1642,20,8,2019),(1643,20,8,2019),(1644,20,8,2019),(1645,20,8,2019),(1646,20,8,2019),(1647,20,8,2019),(1648,20,8,2019),(1649,20,8,2019),(1650,20,8,2019),(1651,20,8,2019),(1652,20,8,2019),(1653,20,8,2019),(1654,20,8,2019),(1655,20,8,2019),(1656,20,8,2019),(1657,20,8,2019),(1658,20,8,2019),(1659,20,8,2019),(1660,20,8,2019),(1661,20,7,2019),(1662,20,7,2019),(1663,20,7,2019),(1664,20,7,2019),(1665,20,7,2019),(1666,20,7,2019),(1667,20,7,2019),(1668,20,7,2019),(1669,20,7,2019),(1670,20,7,2019),(1671,20,7,2019),(1672,20,7,2019),(1673,20,7,2019),(1674,20,7,2019),(1675,20,7,2019),(1676,20,7,2019),(1677,20,7,2019),(1678,20,7,2019),(1679,20,7,2019),(1680,20,7,2019),(1681,20,7,2019),(1682,20,7,2019),(1683,20,7,2019),(1684,20,7,2019),(1685,20,7,2019),(1686,20,7,2019),(1687,20,7,2019),(1688,20,7,2019),(1689,20,7,2019),(1690,20,7,2019),(1691,20,7,2019),(1692,20,7,2019),(1693,20,7,2019),(1694,20,7,2019),(1695,20,7,2019),(1696,20,7,2019),(1697,20,7,2019),(1698,20,7,2019),(1699,20,7,2019),(1700,20,7,2019),(1701,20,7,2019),(1702,20,7,2019),(1703,20,7,2019),(1704,20,7,2019),(1705,20,7,2019),(1706,20,7,2019),(1707,20,7,2019),(1708,20,7,2019),(1709,20,7,2019),(1710,20,7,2019),(1711,20,7,2019),(1712,20,7,2019),(1713,20,7,2019),(1714,20,7,2019),(1715,5,1,2020),(1716,5,1,2020),(1717,5,1,2020),(1718,5,1,2020),(1719,5,1,2020),(1720,5,1,2020),(1721,5,1,2020),(1722,5,1,2020),(1723,5,1,2020),(1724,5,1,2020),(1725,5,1,2020),(1726,5,1,2020),(1727,5,1,2020),(1728,5,1,2020),(1729,5,1,2020),(1730,5,1,2020),(1731,5,1,2020),(1732,5,1,2020),(1733,5,1,2020),(1734,5,1,2020),(1735,1,1,2020),(1736,1,1,2020),(1737,1,1,2020),(1738,1,1,2020),(1739,1,1,2020),(1740,1,1,2020),(1741,1,1,2020),(1742,1,1,2020),(1743,1,1,2020),(1744,1,1,2020),(1745,1,1,2020),(1746,1,1,2020),(1747,1,1,2020),(1748,1,1,2020),(1749,1,1,2020),(1750,1,1,2020),(1751,1,1,2020),(1752,1,1,2020),(1753,1,1,2020),(1754,1,1,2020),(1755,1,1,2020),(1756,1,1,2020),(1757,1,1,2020),(1758,1,1,2020),(1759,1,1,2020),(1760,1,1,2020),(1761,1,1,2020),(1762,1,1,2020),(1763,1,1,2020),(1764,1,1,2020),(1765,1,1,2020),(1766,1,1,2020),(1767,1,1,2020),(1768,1,1,2020),(1769,1,1,2020),(1770,1,1,2020),(1771,1,1,2020),(1772,1,1,2020),(1773,1,1,2020),(1774,1,1,2020),(1775,1,1,2020),(1776,1,1,2020),(1777,1,1,2020),(1778,1,1,2020),(1779,1,1,2020),(1780,1,1,2020),(1781,1,1,2020),(1782,1,1,2020),(1783,1,1,2020),(1784,1,1,2020),(1785,1,1,2020),(1786,1,1,2020),(1787,1,1,2020),(1788,1,1,2020),(1789,1,1,2020),(1790,1,1,2020),(1791,1,1,2020),(1792,1,1,2020),(1793,1,1,2020),(1794,1,1,2020),(1795,1,1,2020),(1796,1,1,2020),(1797,13,1,2020),(1798,13,1,2020),(1799,13,1,2020),(1800,13,1,2020),(1801,13,1,2020),(1802,13,1,2020),(1803,13,1,2020),(1804,13,1,2020),(1805,13,1,2020),(1806,13,1,2020),(1807,13,1,2020),(1808,14,1,2020),(1809,14,1,2020),(1810,14,1,2020),(1811,14,1,2020),(1812,14,1,2020),(1813,14,1,2020),(1814,14,1,2020),(1815,14,1,2020),(1816,14,1,2020),(1817,14,1,2020),(1818,14,1,2020),(1819,14,1,2020),(1820,14,1,2020),(1821,14,1,2020),(1822,14,1,2020),(1823,14,1,2020),(1824,14,1,2020),(1825,14,1,2020),(1826,14,1,2020),(1827,14,1,2020),(1828,14,1,2020),(1829,14,1,2020),(1830,14,1,2020),(1831,14,1,2020),(1832,14,1,2020),(1833,14,1,2020),(1834,14,1,2020),(1835,19,1,2020),(1836,19,1,2020),(1837,19,1,2020),(1838,19,1,2020),(1839,19,1,2020),(1840,19,1,2020),(1841,19,1,2020),(1842,19,1,2020),(1843,19,1,2020),(1844,25,1,2020);
/*!40000 ALTER TABLE `Visita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipa`
--

DROP TABLE IF EXISTS `equipa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipa` (
  `id_equipa` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome_equipa` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `classificacao` decimal(10,2) unsigned DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_equipa`),
  UNIQUE KEY `id_equipa_UNIQUE` (`id_equipa`),
  UNIQUE KEY `nome_equipa_UNIQUE` (`nome_equipa`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipa`
--

LOCK TABLES `equipa` WRITE;
/*!40000 ALTER TABLE `equipa` DISABLE KEYS */;
INSERT INTO `equipa` VALUES (122,'PWA',3.00,'https://press-and-play.herokuapp.com/assets/images/teamLogoDefault.png'),(123,'BackEnd',105.00,'https://press-and-play.herokuapp.com/assets/images/teamLogoDefault.png'),(124,'FrontEnd',120.00,'https://press-and-play.herokuapp.com/assets/images/teamLogoDefault.png'),(125,'Jaegers',143.00,'https://static.wikia.nocookie.net/akamegakill/images/0/00/The_Jaegers_Anime.png');
/*!40000 ALTER TABLE `equipa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `espaco_favorito`
--

DROP TABLE IF EXISTS `espaco_favorito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `espaco_favorito` (
  `id_user` int(11) unsigned NOT NULL,
  `idEspaco` int(11) NOT NULL,
  PRIMARY KEY (`id_user`,`idEspaco`),
  KEY `idEspaco_idx` (`idEspaco`),
  CONSTRAINT `FK_id_espaco` FOREIGN KEY (`idEspaco`) REFERENCES `Espaco` (`idespaco`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user_2` FOREIGN KEY (`id_user`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espaco_favorito`
--

LOCK TABLES `espaco_favorito` WRITE;
/*!40000 ALTER TABLE `espaco_favorito` DISABLE KEYS */;
INSERT INTO `espaco_favorito` VALUES (119,1),(118,31),(119,31),(125,31),(119,32),(118,34),(119,34);
/*!40000 ALTER TABLE `espaco_favorito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscricao`
--

DROP TABLE IF EXISTS `inscricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscricao` (
  `id_inscricao` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idAtividade` int(11) DEFAULT NULL,
  `pagamento` decimal(10,2) unsigned DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL,
  `numero_participantes` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_inscricao`),
  UNIQUE KEY `id_inscricao_UNIQUE` (`id_inscricao`),
  KEY `idAtividade_arroz_idx` (`idAtividade`),
  CONSTRAINT `idAtividade_arroz` FOREIGN KEY (`idAtividade`) REFERENCES `Atividade` (`idatividade`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscricao`
--

LOCK TABLES `inscricao` WRITE;
/*!40000 ALTER TABLE `inscricao` DISABLE KEYS */;
INSERT INTO `inscricao` VALUES (76,82,25.00,0,1),(77,83,25.00,0,1),(78,84,30.00,0,1),(79,85,10.00,0,1),(80,86,10.00,0,1),(81,87,30.00,0,1),(82,88,10.00,0,1),(83,89,10.00,1,2),(84,90,10.00,0,1),(85,91,25.00,0,1),(86,92,30.00,0,1),(87,93,10.00,0,1),(88,94,30.00,0,1),(89,95,10.00,0,1),(90,96,30.00,0,1),(91,97,10.00,0,1),(92,98,30.00,0,1),(93,99,25.00,0,1),(94,100,5.00,0,1),(95,101,10.00,0,1),(96,102,30.00,0,1),(97,103,25.00,1,4),(98,104,16.00,0,1),(99,105,10.00,0,1),(100,124,25.00,0,1),(101,125,10.00,0,1),(102,126,21.00,0,1),(103,127,21.00,0,1),(104,128,21.00,0,1),(105,129,15.00,0,1),(106,130,15.00,0,1),(107,131,15.00,0,1),(108,132,16.00,0,1),(109,135,5.00,1,2),(110,141,10.00,1,1),(111,142,25.00,0,1),(112,143,30.00,0,1),(113,144,25.00,0,1),(114,145,15.00,0,1),(115,146,25.00,0,1),(116,147,16.00,1,1),(117,148,5.00,0,1),(118,149,5.00,0,1),(119,150,16.00,1,1),(120,151,25.00,1,1);
/*!40000 ALTER TABLE `inscricao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_amigos`
--

DROP TABLE IF EXISTS `lista_amigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista_amigos` (
  `id_user` int(10) unsigned NOT NULL,
  `id_amigo` int(10) unsigned NOT NULL,
  `estado_pedido` int(1) NOT NULL,
  `enviou` int(1) NOT NULL,
  PRIMARY KEY (`id_user`,`id_amigo`),
  KEY `id_amigo_idx` (`id_amigo`),
  CONSTRAINT `id_amigo` FOREIGN KEY (`id_amigo`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user_FK1` FOREIGN KEY (`id_user`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_amigos`
--

LOCK TABLES `lista_amigos` WRITE;
/*!40000 ALTER TABLE `lista_amigos` DISABLE KEYS */;
INSERT INTO `lista_amigos` VALUES (118,119,1,1),(118,120,1,0),(118,121,1,1),(118,123,1,1),(119,118,1,0),(119,120,1,0),(119,121,1,1),(119,123,1,1),(119,125,1,0),(120,118,1,1),(120,119,1,1),(120,121,1,1),(121,118,1,0),(121,119,1,0),(121,120,1,0),(122,125,0,0),(123,118,1,0),(123,119,1,0),(125,119,1,1),(125,122,0,1);
/*!40000 ALTER TABLE `lista_amigos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacao`
--

DROP TABLE IF EXISTS `notificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificacao` (
  `id_notificacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned NOT NULL,
  `mensagem` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_notificacao`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user_1` FOREIGN KEY (`id_user`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1194 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacao`
--

LOCK TABLES `notificacao` WRITE;
/*!40000 ALTER TABLE `notificacao` DISABLE KEYS */;
INSERT INTO `notificacao` VALUES (1178,118,'Tu e Jonas Pistolas são agora amigos!','2020-01-14 19:07:10','https://press-and-play.herokuapp.com/assets/images/logoDefault.png');
/*!40000 ALTER TABLE `notificacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador` (
  `id_user` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `primeiro_nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ultimo_nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nif` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_nascimento` date NOT NULL,
  `pais` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `localidade` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pontos` int(10) DEFAULT '0',
  `confirmar_email` int(1) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_conta_criada` datetime DEFAULT NULL,
  `ultima_atualizacao` datetime DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `banido` int(1) DEFAULT '0',
  `id_google` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descontos` int(11) DEFAULT '0',
  `descontos_usados` int(11) DEFAULT '0',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador`
--

LOCK TABLES `utilizador` WRITE;
/*!40000 ALTER TABLE `utilizador` DISABLE KEYS */;
INSERT INTO `utilizador` VALUES (118,'josefantunes23@gmail.com','$2a$10$sw41YkT7fArpZV2IXqXmle8dTwYKENLuZ3GczjcXZElzb9LsTYbCC','José','Antunes','3dc8d3d81bf6b665bc055b5d2d0daf6a','2000-01-23','Portugal','Amares',120,1,'118$QsHMPBqw0mIQMwctLZktVjayE','2020-01-14 01:00:44','2020-01-14 11:40:28','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,'101797787538897198246',2,2),(119,'yruigomes99@gmail.com','$2a$10$IJ2J/Mi8z/zYwSWc15brFOLK6WPZLuUNm.a3AnZ1H4exTvZRvKWS2','Rui','Gomes','e5e27390f4b1bb162c71e0feeaafe862','1999-04-28','Portugal','Amares',186,1,'119$a9Clpr0vbCDjXtnxDETrQcsbU','2020-01-14 01:02:36','2020-01-15 21:57:23','https://i.imgur.com/NwkiqJc.gif',0,'112036761047507477074',3,2),(120,'carlosforte27@gmail.com','$2a$10$IJ2J/Mi8z/zYwSWc15brFOLK6WPZLuUNm.a3AnZ1H4exTvZRvKWS2','Carlos','Gonçalves','e5e27390f4b1bb162c71e0feeaafe862','2001-02-07','Não definido','Não definido',30,1,'120$mjpcCXrtk9hkdWdznU6qR1EFU','2020-01-14 01:02:54','2020-01-15 12:09:19','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(121,'joao07um@gmail.com','$2a$10$Q6OzNApLRM.AnXAV1askH.yuNi0MGdpz06/f5sLC2ZqxDWCniyCqm','Joao','Teixeira','7340e68208a3f3e16215ea46f634cc93','2000-01-07','Portugal','Braga',3,1,'121$PaebrS1CZYWQjBF0ACkBgSYkI','2020-01-14 01:06:08','2020-01-14 01:10:45','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(122,'joaoguedes.cjp@gmail.com','$2a$10$IJ2J/Mi8z/zYwSWc15brFOLK6WPZLuUNm.a3AnZ1H4exTvZRvKWS2','João','Guedes','e5e27390f4b1bb162c71e0feeaafe862','2000-04-11','Não definido','Braga',3,1,'122$a11znKnKXrM0alvQiASGNKKCf','2020-01-14 11:02:48','2020-01-14 11:02:49','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(123,'ooornaum@gmail.com','$2a$10$AecohVTxfSTsWs17n5OQxOA0EuB9pPjI66vcr3el8Yjh/ivlB6o/u','Jonas','Pistolas','e5e27390f4b1bb162c71e0feeaafe862','1995-01-30','Não definido','Não definido',0,1,'123$OiTDU93MzQXqZEhEeXTZQllX5','2020-01-14 11:11:08','2020-01-14 11:11:09','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(124,'alphapw212@gmail.com','$2a$10$CXvtUX2uXYPPVTO0Zm/to.b5UTybX7Oqzd0xIQYWGpTQcMCeSOD8S','PW','ALPHA','e5e27390f4b1bb162c71e0feeaafe862','2000-02-20','Não definido','Não definido',0,1,'124$dvgMwmP8P7lBCzylBhX6HeGsZ','2020-01-14 11:39:39','2020-01-14 11:39:40','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(125,'dredgaming99@gmail.com','$2a$10$awzauWiIEnoFwjbEtzBQYuDAOYWZEppZr6o3rUtLBs3o9Yr/g39Bi','Zeca','Galhão','e5e27390f4b1bb162c71e0feeaafe862','1999-03-28','Portugal','Amares',0,1,'125$tLspEADfG5psJlGWXEqTlKxC8','2020-01-14 21:22:14','2020-01-14 21:37:09','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,NULL,0,0),(126,'duarteoliveira800@gmail.com','$2a$10$bJ9q5QZyLhl24Qk3ESSM..MQ.YY6vCBjcVJLu4eJmn05QAGU98KVG','Du','Du','e5e27390f4b1bb162c71e0feeaafe862','1998-01-14','Não definido','Não definido',0,1,'126$3M4UG4UhL3mn0TUy8xxKlh6lo','2020-01-14 23:03:48','2020-01-14 23:03:49','https://press-and-play.herokuapp.com/assets/images/logoDefault.png',0,'117721377110535264363',0,0);
/*!40000 ALTER TABLE `utilizador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizador_por_equipa`
--

DROP TABLE IF EXISTS `utilizador_por_equipa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador_por_equipa` (
  `id_user` int(10) unsigned NOT NULL,
  `id_equipa` int(10) unsigned NOT NULL,
  `lider` int(1) NOT NULL,
  PRIMARY KEY (`id_equipa`,`id_user`),
  KEY `idUtilizador_FK10_idx` (`id_user`),
  KEY `idEquipa_FK11_idx` (`id_equipa`),
  CONSTRAINT `id_equipa_FK1` FOREIGN KEY (`id_equipa`) REFERENCES `equipa` (`id_equipa`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user_FK2` FOREIGN KEY (`id_user`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador_por_equipa`
--

LOCK TABLES `utilizador_por_equipa` WRITE;
/*!40000 ALTER TABLE `utilizador_por_equipa` DISABLE KEYS */;
INSERT INTO `utilizador_por_equipa` VALUES (121,122,1),(118,123,1),(119,123,0),(118,124,1),(118,125,0),(119,125,1);
/*!40000 ALTER TABLE `utilizador_por_equipa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizador_por_inscricao`
--

DROP TABLE IF EXISTS `utilizador_por_inscricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador_por_inscricao` (
  `id_user` int(10) unsigned NOT NULL,
  `id_inscricao` int(10) unsigned NOT NULL,
  `pagou` int(1) DEFAULT NULL,
  `pontos` int(11) DEFAULT NULL,
  `avaliacao_espaco` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_user`,`id_inscricao`),
  KEY `id_inscricao_FK101_idx` (`id_inscricao`),
  CONSTRAINT `id_inscricao_FK101` FOREIGN KEY (`id_inscricao`) REFERENCES `inscricao` (`id_inscricao`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user_FK100` FOREIGN KEY (`id_user`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador_por_inscricao`
--

LOCK TABLES `utilizador_por_inscricao` WRITE;
/*!40000 ALTER TABLE `utilizador_por_inscricao` DISABLE KEYS */;
INSERT INTO `utilizador_por_inscricao` VALUES (118,76,1,10,4.00),(118,78,1,10,NULL),(118,80,1,10,3.00),(118,83,0,3,NULL),(118,84,1,10,2.00),(118,85,1,10,NULL),(118,86,1,10,3.00),(118,87,1,10,3.00),(118,88,1,10,NULL),(118,89,1,10,1.00),(118,90,1,10,NULL),(118,91,1,10,NULL),(118,92,1,10,NULL),(118,93,1,10,NULL),(118,94,1,3,NULL),(118,97,0,3,NULL),(118,108,1,10,NULL),(118,109,1,10,NULL),(119,77,1,10,4.00),(119,79,1,10,5.00),(119,81,1,10,3.00),(119,82,1,10,4.00),(119,83,1,10,NULL),(119,95,1,10,4.00),(119,96,1,10,5.00),(119,97,0,3,NULL),(119,98,1,10,4.00),(119,99,1,10,4.00),(119,109,0,3,NULL),(119,110,1,10,NULL),(119,111,1,10,NULL),(119,112,1,10,NULL),(119,113,1,10,NULL),(119,114,1,10,NULL),(119,116,1,10,NULL),(119,117,1,10,NULL),(119,118,1,10,NULL),(119,119,1,10,NULL),(120,100,1,10,NULL),(120,101,1,10,NULL),(120,102,1,10,NULL),(120,103,1,10,NULL),(120,104,1,10,NULL),(120,105,1,10,NULL),(120,106,1,10,NULL),(120,107,1,10,NULL),(120,115,1,10,NULL),(121,97,1,3,NULL),(122,97,0,3,NULL),(126,120,1,10,NULL);
/*!40000 ALTER TABLE `utilizador_por_inscricao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizador_report`
--

DROP TABLE IF EXISTS `utilizador_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador_report` (
  `id_report` int(11) NOT NULL AUTO_INCREMENT,
  `id_reportado` int(11) unsigned DEFAULT NULL,
  `descricao` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_user_enviou` int(10) unsigned DEFAULT NULL,
  `estado_report` int(1) DEFAULT NULL,
  PRIMARY KEY (`id_report`),
  KEY `id_reportado_idx` (`id_reportado`),
  KEY `id_user_enviou` (`id_user_enviou`),
  CONSTRAINT `id_reportado` FOREIGN KEY (`id_reportado`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user_enviou` FOREIGN KEY (`id_user_enviou`) REFERENCES `utilizador` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador_report`
--

LOCK TABLES `utilizador_report` WRITE;
/*!40000 ALTER TABLE `utilizador_report` DISABLE KEYS */;
INSERT INTO `utilizador_report` VALUES (19,121,'Outras razões',119,0),(20,122,'Linguagem imprópria',118,0),(21,122,'Tentativa Burla',125,0);
/*!40000 ALTER TABLE `utilizador_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pkfFqmJ7Jh'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-26 12:34:19
