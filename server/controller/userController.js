let database = require("../database");
const { validationResult } = require("express-validator");

module.exports = {
  getUsers: async (req, res) => {
    let query = `SELECT id, username, first_name, last_name, usertype, email, password, status FROM hm_user`;

    if (req.params.id !== undefined) query += ` WHERE id = ${req.params.id}`;
    database.query(query, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getUserById: async (req, res) => {
    let query = `SELECT id, username, first_name, last_name, usertype, email, password, status FROM hm_user WHERE id = ${req.params.id}`;

    database.query(query, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  createUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { UserName, FirstName, LastName, UserType, Email, Pd, Status } =
      req.body;

    database.query(
      "INSERT INTO hm_user (username, first_name, last_name, usertype, email, password, status) VALUES ( '" +
        UserName +
        "', '" +
        FirstName +
        "' , '" +
        LastName +
        "', '" +
        UserType +
        "', '" +
        Email +
        "', '" +
        Pd +
        "', '" +
        Status +
        "')",
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `User Id: ${result[0].id}` });
    });
  },

  updateUser: (req, res) => {
    let { Id, UserName, FirstName, LastName, UserType, Email, Pd, Status } =
      req.body;

    database.query(
      `UPDATE hm_user SET username='${UserName}', first_name='${FirstName}', last_name='${LastName}', usertype=${UserType}, email='${Email}', password='${Pd}', status=${Status} WHERE id=${Id}`,
      (err) => {
        if (err) console.log(err);
        else {
          res.json({ message: "User Details Updated" });
        }
      }
    );
  },

  deleteUser: async (req, res) => {
    let id = req.params.id;
    database.query(
      `DELETE FROM helpmelearndatabase.hm_user WHERE id=${id}`,
      (err, result, fields) => {
        if (err) throw err;
        res.json({ message: "User " + id + " Deleted" });
      }
    );
  },
};
