let database = require("../database");

module.exports = {
  createPost: async (req, res) => {
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
      "INSERT INTO hm_post(subjectTitle, description, tutorId, status, `language`, subjectCode, ratePerHour, createdDateTime, modifiedDateTime) VALUES ( '" +
        SubjectTitle +
        "', '" +
        Description +
        "' , '" +
        TutorId +
        "', '" +
        Status +
        "', '" +
        Language +
        "', '" +
        SubjectCode +
        "', '" +
        RatePerHour +
        "', '" +
        date +
        "', '" +
        date +
        "')",
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
      `DELETE FROM helpmelearndatabase.hm_post WHERE id=${id};`,
      (err, result) => {
        res.json({ message: `Post Id:${id} deleted successfully.` });
      }
    );
  },

  updatePost: async (req, res) => {
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
      `UPDATE helpmelearndatabase.hm_post SET subjectTitle='${SubjectTitle}', description='${Description}', tutorId='${TutorId}', status=${Status}, language='${Language}', subjectCode=${SubjectCode}, ratePerHour=${RatePerHour}, modifiedDateTime='${date}' WHERE id=${Id};`,
      (err, result) => {
        res.json({ message: `Updated successfully.` });
      }
    );
  },

  getPost: async (req, res) => {
    let id = req.params.id;
    database.query(
      `SELECT id, subjectTitle, description, tutorId, status, language, subjectCode, ratePerHour, createdDateTime, modifiedDateTime FROM helpmelearndatabase.hm_post WHERE id=${id};`,
      (err, result) => {
        res.json(result);
      }
    );
  },

  searchPost: async (req, res) => {
    let joinQuery = "";
    if (req.query.language !== undefined) {
      joinQuery += `language = '${req.query.language}'`;
    }

    if (req.query.subjectCode !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `subjectCode = '${req.query.subjectCode}'`;
    }

    if (req.query.ratePerHour !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `ratePerHour = ${req.query.ratePerHour}`;
    }

    if (req.query.tutorId !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `tutorId = '${req.query.tutorId}'`;
    }

    let dbQuery = `SELECT id, subjectTitle, description, tutorId, status, language, subjectCode, ratePerHour, createdDateTime, modifiedDateTime FROM helpmelearndatabase.hm_post`;
    if (joinQuery !== "") dbQuery += ` where ${joinQuery}`;

    database.query(dbQuery, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },
};
