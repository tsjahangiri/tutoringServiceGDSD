let database = require("../database");
// const upController = require('../controller/reviewController.js');
const { validationResult } = require("express-validator");

module.exports = {

  getTutorAbouInfoById: async (req, res) => {

    let id = req.params.id;
    let query = `SELECT firstName, lastName, about, age, rating, picPath FROM hm_tutor_profile A, hm_user B WHERE A.userId = B.id AND userId = ?`;

    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getTutorOfferedCoursesById: async (req, res) => {

    let id = req.params.id;
    let query = `SELECT courseCode, courseName, ratePerHour FROM hm_post A, hm_course B WHERE A.subjectId = B.courseCode AND A.tutorProfileId = ?` ;
    console.log(query);
    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getTutorQualificationById: async (req, res) => {

    let id = req.params.id;
    let query = `SELECT A.id, courseCode, courseName, description, grade FROM hm_qualification A, hm_course B WHERE A.subjectId = B.courseCode AND tutorProfileId = ?`;

    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getReviewsById: async (req, res) => {
      
    let id = req.params.id;
    database.query(
      `SELECT text, rating, createdDateTime, modifiedDateTime, firstName, lastName, userId FROM hm_review A, hm_user B WHERE A.userId = B.id AND tutorProfileId = ?;`,
      [id],
      (err, result) => {
        res.json(result);
      }
    );
  },

  getTutorsByFilters : async (req, res) => {

        let subjectId = req.query.subjectId;
        let level = req.query.level;
        let rate = req.query.rating;
        let gender = req.query.gender;

        // console.log(subject); && level != undefined && rating != undefined && gender != undefined
        // WHERE rating >= ` + rate + ` AND level LIKE '%` + level + `%' AND 

        query = `SELECT tutorProfileId, firstName, lastName, ratePerHour, description FROM hm_post A, hm_user B WHERE A.tutorProfileId = B.id `;

        if (subject != undefined) {
            query = query + ` AND subjectId = ` + subjectId + ``;
        }
        else if (rate != undefined) {
            query = query + ` AND ratePerHour >= ` + rate + ``;
        }
        else if (gender != undefined) {
            query = query + ` AND gender LIKE '%` + gender + `%'`;
        }

        database.query(query, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
   },

   saveTutorInfo: async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

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

  saveTutorInfo: async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    let {
      userId,
      about,
      age,
      rating,
      picPath
    } = req.body;

    // var date = new Date().toISOString().split("T")[0];

    database.query(
      "INSERT INTO hm_tutor_profile(userId, about, age, rating, picPath) VALUES (?, ?, ?, ?, ?)",
      [
        userId,
        about,
        age,
        rating,
        picPath
      ],
      (err, result) => {
        if (err) console.log(err);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      res.json({ message: `Tutor Id: ${result[0].id}` });
    });
  },

  updateTutorInfo: async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  let {
    userId,
    about,
    age,
    rating
  } = req.body;

  // var date = new Date().toISOString().split("T")[0];

  database.query(
    `UPDATE hm_tutor_profile SET about = ?, age= ?, rating = ? WHERE id = ?`,
    [about, age, rating, userId],
    (err) => {
      if (err) console.log(err);
      else {
        res.json({ message: "Tutor Profile Updated" });
      }
    });
},

};