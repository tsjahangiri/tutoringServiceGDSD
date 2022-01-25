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
    let query = `SELECT subjectName, ratePerHour FROM hm_post A left join hm_tutor_profile B on
    (A.tutorProfileId = B.id and B.userId = ?);`;
    console.log(query);
    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getTutorQualificationById: async (req, res) => {
    let id = req.params.id;
    let query = `SELECT A.id, A.subjectName, A.description, A.grade FROM hm_qualification A
     left join hm_tutor_profile B on (A.tutorProfileId = B.id and B.userId = ?);`;

    database.query(query, [id], (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
  },

  getReviewsById: async (req, res) => {
    let id = req.params.id;
    database.query(
      `SELECT A.id, A.text, A.rating, A.createdDateTime, A.modifiedDateTime, U.firstName, U.lastName, A.userId FROM hm_review A,
      left join hm_user U on (A.userId = u.id)
      left join hm_tutor_profile T on (A.tutorProfileId = T.id and T.userId = ?);`,
      [id],
      (err, result) => {
        res.json(result);
      }
    );
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
  searchTutorProfile: async (req, res) => {
    let joinQuery = "";
    if (req.query.TutorProfileId !== undefined) {
      joinQuery += `id = ${database.escape(req.query.TutorProfileId)}`;
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
        `*${req.query.SubjectName}*`
      )} IN BOOLEAN MODE)`;
    }
    let dbQuery =
      "SELECT hm_post.id, hm_post.description, hm_post.tutorProfileId, hm_post.status, hm_post.language, hm_post.subjectName, hm_post.ratePerHour, hm_post.experienceYears, hm_post.availableTime, hm_user.firstName, hm_user.lastName, hm_tutor_profile.picPath, hm_tutor_profile.about FROM hm_post" +
      " LEFT JOIN hm_tutor_profile ON (hm_tutor_profile.id = hm_post.tutorProfileId)" +
      " LEFT JOIN hm_user ON (hm_user.id = hm_post.tutorProfileId)";
    if (joinQuery !== "") dbQuery += ` where ${joinQuery}`;
    database.query(dbQuery, (err, input) => {
      if (err) console.log(err);
      else {
        /**
         * [
         *  {
         *    tutorId
         *    tutorName
         *    picPath
         *    posts: [
         *      {
         *        id,
         *        description
         *        subjectName
         *        ratePerHour
         *      }
         *    ]
         *  }
         * ]
         */
        result = [];
        input.forEach((item) => {
          var tutor = result.find((x) => x.tutorId == item.tutorProfileId);
          if (tutor === undefined) {
            tutor = {
              tutorId: item.tutorProfileId,
              tutorFirstName: item.firstName,
              tutorLastName: item.lastName,
              picPath: item.picPath,
              about: item.about,
              posts: [],
            };
            result.push(tutor);
          }

          tutor.posts.push({
            id: item.id,
            description: item.description,
            status: item.status,
            language: item.language,
            ratePerHour: item.ratePerHour,
            subjectName: item.subjectName,
            availableTime: item.availableTime,
            experienceYears: item.experienceYears,
          });
        });

        res.json(result);
      }
    });
  },

  saveTutorInfo: async (req, res) => {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a Image!" });
    }

    let { UserId, About, Age } = req.body;
    let PicturePath = "public/images/" + req.file.originalname;
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

    let PicturePath = "public/images/" + req.file.originalname;
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
