let database = require("../database");
const uploadFile = require("../middleware/uploadImage");
require("dotenv").config();

module.exports = {
  getTutorAbouInfoById: async (req, res) => {
    let id = req.params.id;
    let query = `SELECT firstName, lastName, about, age, picPath FROM hm_tutor_profile A, hm_user B WHERE A.userId = B.id AND userId = ?`;

    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getTutorOfferedCoursesById: async (req, res) => {
    let id = req.params.id;
    let query = `SELECT courseCode, courseName, ratePerHour FROM hm_post A, hm_course B WHERE A.subjectId = B.courseCode AND A.tutorProfileId = ?`;
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

  getTutorsByFilters: async (req, res) => {
    let subjectId = req.query.subjectId;
    let level = req.query.level;
    let rate = req.query.rating;
    let gender = req.query.gender;

    // console.log(subject); && level != undefined && rating != undefined && gender != undefined
    // WHERE rating >= ` + rate + ` AND level LIKE '%` + level + `%' AND

    query = `SELECT tutorProfileId, firstName, lastName, ratePerHour, description FROM hm_post A, hm_user B WHERE A.tutorProfileId = B.id `;

    if (subject != undefined) {
      query = query + ` AND subjectId = ` + subjectId + ``;
    } else if (rate != undefined) {
      query = query + ` AND ratePerHour >= ` + rate + ``;
    } else if (gender != undefined) {
      query = query + ` AND gender LIKE '%` + gender + `%'`;
    }

    database.query(query, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  },

  saveTutorInfo: async (req, res) => {
    
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a Image!" });
    }

    let { UserId, About, Age } = req.body;
    let PicturePath = "public/images/"+req.file.originalname;
    database.query(
      "INSERT INTO hm_tutor_profile(userId, about, age, picPath) VALUES (?, ?, ?, ?)",
      [UserId, About, Age, PicturePath],
      (err) => {
        if (err) res.status(400).send(`Response Error: ${err}`);
      }
    );

    database.query("SELECT LAST_INSERT_ID() as id;", (err, result) => {
      if (err)
        res
          .status(400)
          .send(
            `Successfully added Tutor profile, but unable get record Id. Request Error: ${err}`
          );
      else res.status(201).json({ message: `Review Id: ${result[0].id}` });
    });
  },

  updateTutorInfo: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let PicturePath = "public/images/"+req.file.originalname;
    let { Id, About, Age } = req.body;
    database.query(
      `UPDATE hm_tutor_profile SET about = ?, age= ?, picPath = ? WHERE id = ?`,
      [About, Age, PicturePath, Id],
      (err) => {
        if (err) console.log(err);
        else {
          res.json({ message: "Tutor Profile Updated" });
        }
      }
    );
  },
};
