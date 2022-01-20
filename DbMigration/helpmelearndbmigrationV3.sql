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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '0c8a4418-601d-11ec-8f02-42010a800003:1-435852';

--
-- Table structure for table `hm_chat`
--

DROP TABLE IF EXISTS `hm_chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fromUserId` int(11) NOT NULL,
  `toUserId` int(11) NOT NULL,
  `text` varchar(75) NOT NULL,
  `createdDate` date DEFAULT NULL,
  `msgStatus` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_chat`
--

LOCK TABLES `hm_chat` WRITE;
/*!40000 ALTER TABLE `hm_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_course`
--

DROP TABLE IF EXISTS `hm_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `courseCode` varchar(45) NOT NULL,
  `courseName` varchar(75) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `level` varchar(45) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_course`
--

LOCK TABLES `hm_course` WRITE;
/*!40000 ALTER TABLE `hm_course` DISABLE KEYS */;
INSERT INTO `hm_course` VALUES (1,'101','Calculus',1,'Bachelors',1),(2,'102','Calculus',1,'Bachelors',1),(3,'191','English',2,'Bachelors',1),(4,'121','Programming',1,'Bachelors',1),(5,'141','Culture Studies',2,'Bachelors',1),(6,'142','Ethics',2,'Bachelors',1),(7,'144','Psychology',2,'Bachelors',1),(8,'172','Accounting',3,'Bachelors',1),(9,'171','Micro Economics',3,'Bachelors',1),(10,'173','Marketing',3,'Bachelors',1),(11,'176','International Law',3,'Bachelors',1),(12,'201','Adv. Calculus',1,'Masters',1),(13,'202','Adv. Calculus',1,'Masters',1),(14,'291','Anthropology',2,'Masters',1),(15,'221','Data Science',1,'Masters',1),(16,'241','Economic Analysis',2,'Masters',1),(17,'242','Corporate Ethics',2,'Masters',1),(18,'244','Criminal Psychology',2,'Masters',1),(19,'272','Operations Accounting',3,'Masters',1),(20,'271','Supply Chain Management',3,'Masters',1),(21,'273','Digital Marketing',3,'Masters',1),(22,'276','Business Law',3,'Masters',1),(23,'131','Parallel Programming',1,'Bachelors',1),(24,'132','Object Oriented Programming',1,'Bachelors',1),(25,'133','Machine Learning',1,'Bachelors',1);
/*!40000 ALTER TABLE `hm_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_department`
--

DROP TABLE IF EXISTS `hm_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_department`
--

LOCK TABLES `hm_department` WRITE;
/*!40000 ALTER TABLE `hm_department` DISABLE KEYS */;
INSERT INTO `hm_department` VALUES (1,'Computer Science'),(2,'Social Science'),(3,'Business And Law');
/*!40000 ALTER TABLE `hm_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_file`
--

DROP TABLE IF EXISTS `hm_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tutorProfileId` int(11) NOT NULL,
  `fileName` varchar(75) NOT NULL,
  `fileType` int(11) NOT NULL,
  `fileExtension` varchar(15) NOT NULL,
  `filePath` varchar(175) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_file`
--

LOCK TABLES `hm_file` WRITE;
/*!40000 ALTER TABLE `hm_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `hm_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_image`
--

DROP TABLE IF EXISTS `hm_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imagePath` varchar(150) NOT NULL,
  `tutorProfileId` int(11) NOT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  PRIMARY KEY (`id`)
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
  `description` varchar(50) DEFAULT NULL,
  `tutorProfileId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `language` varchar(55) DEFAULT NULL,
  `subjectId` int(11) NOT NULL,
  `ratePerHour` float NOT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  `experienceYears` int(11) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `availableTime` varchar(75) DEFAULT NULL,
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
  `subjectId` int(11) NOT NULL,
  `description` varchar(80) NOT NULL,
  `grade` varchar(45) DEFAULT NULL,
  `tutorProfileId` int(11) NOT NULL,
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
  `text` varchar(250) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `createdDateTime` date NOT NULL,
  `modifiedDateTime` date NOT NULL,
  `userId` int(11) NOT NULL,
  `tutorProfileId` int(11) NOT NULL,
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
-- Table structure for table `hm_tutor_profile`
--

DROP TABLE IF EXISTS `hm_tutor_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_tutor_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `about` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  `rating` float NOT NULL,
  `picPath` varchar(180) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_tutor_profile`
--

LOCK TABLES `hm_tutor_profile` WRITE;
/*!40000 ALTER TABLE `hm_tutor_profile` DISABLE KEYS */;
INSERT INTO `hm_tutor_profile` VALUES (4,0,'Introducation to Programming',22,5,NULL),(5,0,'English',24,5,NULL),(6,0,'Parallel Programming',21,4.9,NULL),(7,0,'Object Oriented Programming',25,4.7,NULL),(8,0,'Test Oriented Development',20,5,NULL),(9,0,'Data Science',23,4.9,NULL),(10,0,'Machine Learning',23,4.7,NULL),(11,0,'Math',23,4.8,NULL),(12,0,'Mobile App Development',23,4.6,NULL),(13,0,'Distributed Application',22,5,NULL);
/*!40000 ALTER TABLE `hm_tutor_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hm_user`
--

DROP TABLE IF EXISTS `hm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hm_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `usertype` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(145) NOT NULL,
  `status` int(11) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hm_user`
--

LOCK TABLES `hm_user` WRITE;
/*!40000 ALTER TABLE `hm_user` DISABLE KEYS */;
INSERT INTO `hm_user` VALUES (1,'Amlan','Barua',101,'amlan@hs-fulda.de','abcd',400,'male'),(4,'rohat','sagar',102,'rs_student@gmail.com','$2b$10$FSqeUiIfQAj5NP3K7GXdVe2xeKU9EbKvG0CXVoowcRYuCNEW/n6GC',101,'male'),(5,'rohat','sagar',101,'rs_tutor@gmail.com','$2b$10$E/grw5FNHYIW3EoRMF92JOH7bT97tEeAkodWcgCv5l1qycdJjCaSa',101,'male'),(6,'rohat','sagar',100,'rs_admin@gmail.com','$2b$10$uRw8uJmnadRsx.VXM7y0AeAjyary2WaNFmet05wEvpxoWKYr0TzBy',101,'male');
/*!40000 ALTER TABLE `hm_user` ENABLE KEYS */;
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

-- Dump completed on 2022-01-20 23:41:49