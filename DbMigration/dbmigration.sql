-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 35.188.180.195    Database: helpmelearn
-- ------------------------------------------------------
-- Server version	8.0.18-google

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '0c8a4418-601d-11ec-8f02-42010a800003:1-416511';

--
-- Table structure for table `hm_image`
--

DROP TABLE IF EXISTS `hm_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagePath` varchar(50) NOT NULL,
  `date` varchar(50) DEFAULT NULL,
  `userId` varchar(100) NOT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_image`
--

LOCK TABLES `hm_image` WRITE;
/*!40000 ALTER TABLE `hm_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_post`
--

DROP TABLE IF EXISTS `hm_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subjectTitle` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `tutorId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `language` varchar(45) DEFAULT NULL,
  `subjectCode` float NOT NULL,
  `ratePerHour` float DEFAULT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_post`
--

LOCK TABLES `hm_post` WRITE;
/*!40000 ALTER TABLE `hm_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_qualification`
--

DROP TABLE IF EXISTS `hm_qualification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_qualification` (
  `id` int(11) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `qualification` varchar(50) NOT NULL,
  `grade` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_qualification`
--

LOCK TABLES `hm_qualification` WRITE;
/*!40000 ALTER TABLE `hm_qualification` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_qualification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_review`
--

DROP TABLE IF EXISTS `hm_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(150) NOT NULL,
  `rating` float DEFAULT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_review`
--

LOCK TABLES `hm_review` WRITE;
/*!40000 ALTER TABLE `hm_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_user`
--

DROP TABLE IF EXISTS `hm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `usertype` int(11) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(145) NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_user`
--

LOCK TABLES `hm_user` WRITE;
/*!40000 ALTER TABLE `hm_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutorprofile`
--

DROP TABLE IF EXISTS `tutorprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutorprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `level` varchar(45) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `numOfStudents` int(11) DEFAULT NULL COMMENT '	',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutorprofile`
--

LOCK TABLES `tutorprofile` WRITE;
/*!40000 ALTER TABLE `tutorprofile` DISABLE KEYS */;
INSERT INTO `tutorprofile` VALUES (4,'Rohat','Sagar','Introducation to Programming',22,'Bachelor',22,5,100),(5,'Talha Jahangiri','Khan','English',24,'Bachelor',20,5,50),(6,'Chowdhury Amlan','Barua ','Parallel Programming',21,'Master',25,4.9,75),(7,'Mohammad Salman','Haydar','Object Oriented Programming',25,'Bachelor',24,4.7,55),(8,'Nisha','Devi','Test Oriented Development',20,'Master',25,5,90),(9,'Hasib ','Iqbal ','Data Science',23,'Bachelor ',22,4.9,100),(10,'Mohammad Rakibul','Hasan ','Machine Learning',23,'Master',26,4.7,50),(11,'Mohammad Rakibul','Hasan ','Math',23,'Bachelor',22,4.8,75),(12,'Hasib ','Iqbal ','Mobile App Development',23,'Bachelor ',24,4.6,50),(13,'Rohat','Sagar','Distributed Application',22,'Master',26,5,90);
/*!40000 ALTER TABLE `tutorprofile` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-16 16:00:27
