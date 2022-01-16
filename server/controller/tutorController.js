let database = require("../database");
const { validationResult } = require("express-validator");

module.exports = {
  createQualification: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { Subject, Qualification, Grade, TutorId  } = req.body;
    
    database.query(
      "INSERT INTO hm_qualification (subject, qualification, grade, tutorId) VALUES ( ?, ?, ?, ?)",
      [Subject, Qualification, Grade, TutorId],
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `Qualification Id: ${result[0].id}` });
    });
  },

  getQualificationByTutorId: async (req, res) => {
    database.query(
      "SELECT id, subject, qualification, grade FROM hm_qualification WHERE tutorId = ?",
      [req.params.tutorId],
      (err, result) => {
        if (err) console.log(err);
        else res.json(result);
      }
    );
  },

  deleteQualification: async (req, res) => {
    let id = req.params.id;
    database.query(
      `DELETE FROM hm_qualification WHERE id = ?;`,
      [id],
      (err, result) => {
        res.json({ message: `Qualification Id:${id} deleted successfully.` });
      }
    );
  },

  updateQualification: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { Subject, Qualification, Grade } = req.body;

    database.query(
      `UPDATE hm_qualification SET subject = ?, qualification= ?, grade = ? WHERE id = ?`,
      [Subject, Qualification, Grade, Id],
      (err) => {
        if (err) console.log(err);
        else {
          res.json({ message: "Qualification Updated" });
        }
      }
    );
  },
};
