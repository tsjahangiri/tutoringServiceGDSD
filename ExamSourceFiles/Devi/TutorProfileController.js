let database = require("../database");

module.exports = {
  searchTutorProfile: async (req, res) => {
    let joinQuery = "";
    if (req.query.TutorProfileId !== undefined) {
      joinQuery += `id = ${database.escape(req.query.TutorProfileId)}`;
    }

    if (req.query.Status !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `status = ${database.escape(req.query.Status)}`;
    }

    if (req.query.maxRatePerHour !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `ratePerHour <= ${database.escape(
        req.query.maxRatePerHour
      )}`;
    }

    if (req.query.SubjectName !== undefined) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `MATCH(subjectName) AGAINST (${database.escape(
        `*${req.query.SubjectName}*`
      )} IN BOOLEAN MODE)`;
    }

    if(req.query.level) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `level = ${database.escape(req.query.level)}`;
    }

    if(req.query.gender) {
      if (joinQuery != "") joinQuery += " and ";

      joinQuery += `gender = ${database.escape(req.query.gender)}`;
    }

    let dbQuery =
      "SELECT hm_tutor_profile.userId as userId, hm_post.id, hm_post.description, hm_post.tutorProfileId, hm_post.status, hm_post.language, hm_post.subjectName, hm_post.ratePerHour, hm_post.experienceYears, hm_post.availableTime, hm_user.firstName, hm_user.lastName, hm_tutor_profile.picPath, hm_tutor_profile.about FROM hm_post" +
      " INNER JOIN hm_tutor_profile ON (hm_tutor_profile.id = hm_post.tutorProfileId and hm_tutor_profile.status = 101)" +
      " INNER JOIN hm_user ON (hm_user.id = hm_tutor_profile.userId)";
    if (joinQuery !== "") dbQuery += ` where ${joinQuery}`;
    console.log(dbQuery);
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
              userId: item.userId,
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
};
