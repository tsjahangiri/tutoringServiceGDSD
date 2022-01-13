let database = require("../database");
const { validationResult } = require("express-validator");

module.exports = {
  createPost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      SubjectTitle,
      Description,
      TutorId,
      Status,
      Language,
      SubjectCode,
      RatePerHour,
    } = req.body;

    var date = new Date().toISOString().split("T")[0];

    database.query(
      "INSERT INTO hm_post(subjectTitle, description, tutorId, status, `language`, subjectCode, ratePerHour, createdDateTime, modifiedDateTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        SubjectTitle,
        Description,
        TutorId,
        Status,
        Language,
        SubjectCode,
        RatePerHour,
        date,
        date,
      ],
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `Post Id: ${result[0].id}` });
    });
  },

  deletePost: async (req, res) => {
    let id = req.params.id;
    database.query(
      `DELETE FROM helpmelearndatabase.hm_post WHERE id = ?;`,
      [id],
      (err, result) => {
        res.json({ message: `Post Id:${id} deleted successfully.` });
      }
    );
  },

  updatePost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      Id,
      SubjectTitle,
      Description,
      TutorId,
      Status,
      Language,
      SubjectCode,
      RatePerHour,
    } = req.body;

    var date = new Date().toISOString().split("T")[0];
    database.query(
      `UPDATE helpmelearndatabase.hm_post SET subjectTitle = ?, description = ?, tutorId = ?, status = ?, language = ?, subjectCode = ?, ratePerHour = ?, modifiedDateTime = ? WHERE id = ?;`,
      [
        SubjectTitle,
        Description,
        TutorId,
        Status,
        Language,
        SubjectCode,
        RatePerHour,
        date,
        Id,
      ],
      (err, result) => {
        res.json({ message: `Updated successfully.` });
      }
    );
  },

  getPost: async (req, res) => {
    let id = req.params.id;
    database.query(
      `SELECT id, subjectTitle, description, tutorId, status, language, subjectCode, ratePerHour, createdDateTime, modifiedDateTime FROM helpmelearndatabase.hm_post WHERE id = ?;`,
      [id],
      (err, result) => {
        res.json(result);
      }
    );
  },

  searchPost: async (req, res) => {
    let joinQuery = "";
    if (req.query.language !== undefined) {
      joinQuery += `language = ${database.escape(req.query.language)}`;
    }

    if (req.query.subjectCode !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `subjectCode = ${database.escape(req.query.subjectCode)}`;
    }

    if (req.query.ratePerHour !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `ratePerHour = ${database.escape(req.query.ratePerHour)}`;
    }

    if (req.query.tutorId !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `tutorId = ${database.escape(req.query.tutorId)}`;
    }

    let dbQuery = `SELECT id, subjectTitle, description, tutorId, status, language, subjectCode, ratePerHour, createdDateTime, modifiedDateTime FROM helpmelearndatabase.hm_post`;
    if (joinQuery !== "") dbQuery += ` where ${joinQuery}`;

    database.query(dbQuery, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },
};
