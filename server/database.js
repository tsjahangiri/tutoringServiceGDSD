var mysql = require("mysql2");
require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  insecureAuth: true,
  user: process.env.DB_USER,

  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


// var connection = mysql.createConnection({
//   host: "35.188.180.195",
//   insecureAuth: true,
//   user: "root",

//   password: "root",
//   database: "helpmelearn",
// });

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database connected");
});

module.exports = connection;
