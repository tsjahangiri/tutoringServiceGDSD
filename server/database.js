var mysql = require('mysql2')
require('dotenv').config()

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