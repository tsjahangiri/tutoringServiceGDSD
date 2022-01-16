let database = require("../database");

module.exports={

    search : async (req, res) => {

        let subject = req.query.subjectname;
        let level = req.query.level;
        let rating = req.query.rating;
        // console.log(subject);
        // console.log(level);
        // console.log(rating);
        query = `SELECT * FROM tutorprofile`;

        if (subject != undefined && level != undefined && rating != undefined) {
            query = `SELECT * FROM tutorprofile WHERE rating >= ` + rating + ` AND level LIKE '%` + level + `%' AND subject LIKE '%` + subject + `%'`;
        }
        else if (subject != undefined && level != undefined) {
            query = `SELECT * FROM tutorprofile WHERE level LIKE '%` + level + `%' AND subject LIKE '%` + subject + `%'`;
        }
        else if (subject != undefined && rating != undefined) {
            query = `SELECT * FROM tutorprofile WHERE rating >= ` + rating + ` AND subject LIKE '%` + subject + `%'`;
        }
        else if (subject != undefined) {
            query = `SELECT * FROM tutorprofile WHERE subject LIKE '%` + subject + `%'`;
        }
      
           database.query(query, function (err, result, fields) {
             if (err) throw err;
             res.json(result);
           });
   },
}