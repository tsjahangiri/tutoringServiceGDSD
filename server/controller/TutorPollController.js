let database = require("../database");
const { validationResult } = require("express-validator");
const util = require("util");

const executeQuery = util.promisify(database.query).bind(database);

module.exports = {
  createPoll: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { Id, CourseName, Description, Level } = req.body;

    TutorProfileId = Id;

    database.query(
      "INSERT INTO hm_poll (coursename, description, level, tutorProfileId) VALUES ( ?, ?, ?, ?)",
      [CourseName, Description, Level, TutorProfileId],
      (err, result) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
        else res.status(200).json({ message: `Poll created successfully.` });
      }
    );
  },

  deletePoll: async (req, res) => {
    let id = req.params.id;
    database.query("DELETE FROM hm_poll WHERE id = ?;", [id], (err, result) => {
      if (err) res.status(400).send(`Response Error: ${err}`);
      else
        res
          .status(200)
          .json({ message: `Poll Id:${id} deleted successfully.` });
    });
  },

  viewPolls: async (req, res) => {
    let TutorProfileId = req.params.id;
    database.query(
      "SELECT * FROM hm_poll WHERE tutorProfileId = ? ORDER BY id DESC;",
      [TutorProfileId],
      (err, result) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
        else {
          res.status(200).json(result);
        }
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
};
