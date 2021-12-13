var mysql = require('mysql2')
require('dotenv').config()

// CREATE TABLE `tutorprofile` (
//   `id` int NOT NULL AUTO_INCREMENT,
//   `first_name` varchar(50) NOT NULL,
//   `last_name` varchar(50) NOT NULL,
//   `subject` varchar(100) NOT NULL,
//   `age` int NOT NULL,
//   `level` varchar(45) DEFAULT NULL,
//   `rate` float DEFAULT NULL,
//   `rating` float DEFAULT NULL,
//   `numOfStudents` int DEFAULT NULL COMMENT '	',
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `id_UNIQUE` (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  insecureAuth:true,
  user: process.env.DB_USER,

  
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Database connected');
})

module.exports=connection;