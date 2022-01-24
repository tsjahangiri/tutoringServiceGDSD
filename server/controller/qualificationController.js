let database = require("../database");
const { validationResult } = require("express-validator");

module.exports = {
  // Get Qualification By Id Method
  getQualificationById: async (req, res) => {
    // Query
    database.query(
      "SELECT * FROM hm_qualification WHERE id = ?",
      [req.params.id],
      (err, result) => {
        if (err) res.status(400).send(`Request Error: ${err}`);
        else res.status(200).json(result);
      }
    );
  },

  createQualification: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { SubjectId, Description, Grade, TutorProfileId  } = req.body;
    
    database.query(
      "INSERT INTO hm_qualification (subjectId, description, grade, tutorProfileId) VALUES ( ?, ?, ?, ?)",
      [SubjectId, Description, Grade, TutorProfileId],
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `Qualification Id: ${result[0].id}` });
    });
  },

  getQualificationByTutorProfileId: async (req, res) => {
    database.query(
      "SELECT id, subjectId, description, grade FROM hm_qualification WHERE tutorProfileId = ?",
      [req.params.tutorProfileId],
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
      `UPDATE hm_qualification SET subjectId = ?, description= ?, grade = ? WHERE id = ?`,
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
