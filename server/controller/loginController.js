const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let database = require("../database");
require("dotenv").config();

module.exports = {
  //Registering User
  registerUser: (req, res) => {
    let {first_name, last_name, usertype, email, password, status, gender } =
      req.body;

    bcrypt.hash(password, 10, (err, encrypted_password) => {
      if (err) throw err;
      database.execute(
        "SELECT * FROM `helpmelearn`.`hm_user` WHERE `email`= ?",
        [email],
        function (err, result, fields) {
          console.log(result.length);

          if (result.length === 0) {
            database.execute(
              "INSERT INTO `helpmelearn`.`hm_user` (`firstName`, `lastName`, `usertype`, `email`, `password`, `status`, gender) VALUES (?, ?, ?, ?, ?, ?, ?)",
              [
                first_name,
                last_name,
                usertype,
                email,
                encrypted_password,
                status,
                gender,
              ],
              (err, result) => {
                if (err) console.log(err);
                else {
                  
                  database.execute(
                    "INSERT INTO `helpmelearn`.`tutorprofile` (`first_name`, `last_name`) VALUES (?, ?)",
                    [
                      first_name,
                      last_name,
                    ],
                    (err, result) => {
                      if (err) console.log(err);
                      else {
                        // INSERT INTO `helpmelearn`.`tutorprofile` (`first_name`, `last_name`, `subject`, `age`, `level`, `rate`, `rating`, `numOfStudents`) VALUES ('salman', 'haydar', '', '', '', '', '', '');
      
                        res.json({ message: "User Created" });
                      }
                    }
                  );
                  // res.json({ message: "User Created" });
                }
              }
            );
          } else {
            res.json({ message: "User Already Exists!" });
          }
        }
      );
    });
  },

  //Login check
  loginUser: async (req, res) => {
    let { email, password } = req.body;

    database.execute(
      "SELECT * FROM `helpmelearn`.`hm_user` WHERE `email`= ?",
      [email],
      function (err, result, fields) {
        if (err) throw err;

        if (result.length === 0) {
          res.json({ message: "User Do Not Exists" });
        } else {
          let db_email = result[0].email;
          let db_password = result[0].password;

          let payload = {
            id: result[0].id,
            email: result[0].email,
            user_type: result[0].usertype,
            status: result[0].status,
          };

          bcrypt.compare(password, db_password, (err, r) => {
            if (err) throw err;
            if (r) {
              const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
                expiresIn: process.env.TOKEN_EXPIRE,
              });

              res.json({ id: result[0].id, email: result[0].email, token: token });
            } else {
              {
                res.json({ message: "Invalid Credentials!" });
              }
            }
          });
        }
      }
    );
  },
};
