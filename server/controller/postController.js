let database = require("../database");
const { validationResult } = require("express-validator");

module.exports = {
  createPost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      Description,
      TutorProfileId,
      Status,
      Language,
      SubjectName,
      RatePerHour,
      ExperinceYears,
      AvailableTime,
    } = req.body;

    var date = new Date().toISOString().split("T")[0];
    var isActive = true;

    database.query(
      "INSERT INTO hm_post(description, tutorProfileId, status, `language`, subjectName, ratePerHour, createdDateTime, modifiedDateTime, experienceYears, isActive, availableTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Description,
        TutorProfileId,
        Status,
        Language,
        SubjectName,
        RatePerHour,
        date,
        date,
        ExperinceYears,
        isActive,
        AvailableTime,
      ],
      (err) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      if (err)
        res
          .status(400)
          .send(
            `Successfully added Post, but unable get record Id. Request Error: ${err}`
          );
      else res.status(201).json({ message: `Post Id: ${result[0].id}` });
    });
  },

  deletePost: async (req, res) => {
    let id = req.params.id;
    database.query("DELETE FROM hm_post WHERE id = ?;", [id], (err, result) => {
      if (err) res.status(400).send(`Response Error: ${err}`);
      else
        res
          .status(200)
          .json({ message: `Post Id:${id} deleted successfully.` });
    });
  },

  updatePost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let {
      Id,
      Description,
      TutorProfileId,
      Status,
      Language,
      SubjectName,
      RatePerHour,
      ExperinceYears,
      AvailableTime,
    } = req.body;

    var date = new Date().toISOString().split("T")[0];
    database.query(
      "UPDATE hm_post SET description=?, tutorProfileId=?, status=?, `language`=?, subjectName=?, ratePerHour=?, modifiedDateTime=?, experienceYears=?, availableTime=? WHERE id = ?;",
      [
        Description,
        TutorProfileId,
        Status,
        Language,
        SubjectName,
        RatePerHour,
        date,
        ExperinceYears,
        AvailableTime,
        Id,
      ],
      (err, result) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
        else res.status(204).json({ message: "Post Details Updated" });
      }
    );
  },

  getPost: async (req, res) => {
    let id = req.params.id;
    database.query(
      "SELECT id, description, tutorProfileId, status, `language`, subjectName, ratePerHour, createdDateTime, modifiedDateTime, experienceYears, isActive, availableTime FROM hm_post WHERE id = ?;",
      [id],
      (err, result) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
        else res.status(200).json(result);
      }
    );
  },

  searchPost: async (req, res) => {
    let joinQuery = "";
    if (req.query.TutorProfileId !== undefined) {
      joinQuery += `tutorProfileId = ${database.escape(
        req.query.TutorProfileId
      )}`;
    }

    if (req.query.Status !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `status = ${database.escape(req.query.Status)}`;
    }

    if (req.query.RatePerHour !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `ratePerHour = ${database.escape(req.query.RatePerHour)}`;
    }

    if (req.query.SubjectName !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `MATCH(subjectName) AGAINST (${database.escape(
        req.query.SubjectName
      )})`;
    }

    let dbQuery =
      "SELECT hm_post.id, hm_post.description, hm_post.tutorProfileId, hm_post.status, hm_post.language, hm_post.subjectName, hm_post.ratePerHour, hm_post.createdDateTime, hm_post.modifiedDateTime, hm_post.experienceYears, hm_post.isActive, hm_post.availableTime, hm_user.firstName, hm_user.lastName FROM hm_post" + 
      " LEFT JOIN hm_tutor_profile ON (hm_tutor_profile.id = hm_post.tutorProfileId)"+
      " LEFT JOIN hm_user ON (hm_user.id = hm_post.tutorProfileId)";
    if (joinQuery !== "") dbQuery += ` where ${joinQuery}`;

    database.query(dbQuery, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },
};
