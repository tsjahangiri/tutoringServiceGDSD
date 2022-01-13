let database = require("../database");

module.exports = {
  createReview: async (req, res) => {
    let { Comment, Rating } = req.body;

    var date = new Date().toISOString().split("T")[0];

    database.query(
      "INSERT INTO hm_review (comment, rating, createdDateTime, modifiedDateTime) VALUES ( '" +
        Comment +
        "', '" +
        Rating +
        "' , '" +
        date +
        "', '" +
        date +
        "')",
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `Review Id: ${result[0].id}` });
    });
  },

  getReviewById: async (req, res) => {
    let query = `SELECT id, comment, rating, createdDateTime, modifiedDateTime FROM hm_review WHERE id = ${req.params.id}`;

    database.query(query, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  deleteReview: async (req, res) => {
    let id = req.params.id;
    database.query(`DELETE FROM hm_review WHERE id=${id};`, (err, result) => {
      res.json({ message: `Review Id:${id} deleted successfully.` });
    });
  },

  updateReview: (req, res) => {
    let { Id, Comment, Rating } = req.body;

    var date = new Date().toISOString().split("T")[0];

    database.query(
      `UPDATE hm_review SET comment='${Comment}', rating=${Rating}, modifiedDateTime='${date}' WHERE id=${Id}`,
      (err) => {
        if (err) console.log(err);
        else {
          res.json({ message: "User Details Updated" });
        }
      }
    );
  },
};
