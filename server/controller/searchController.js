let database = require("../database");

module.exports={

    getTutorsByFilters : async (req, res) => {

        let subjectId = req.query.subjectId;
        let level = req.query.level;
        let rate = req.query.rating;
        let gender = req.query.gender;

        // console.log(subjectId); && level != undefined && rating != undefined && gender != undefined
        // WHERE rating >= ` + rate + ` AND level LIKE '%` + level + `%' AND 

        query = `SELECT tutorProfileId, firstName, lastName, ratePerHour, description FROM hm_post A, hm_user B WHERE A.tutorProfileId = B.id `;


        if (subjectId != undefined) {
            query = query + ` AND subjectId = ` + subjectId + ``;
        }
        else if (rate != undefined) {
            query = query + ` AND ratePerHour >= ` + rate + ``;
        }
        else if (gender != undefined) {
            query = query + ` AND gender LIKE '%` + gender + `%'`;
        }

        console.log(query);
        database.query(query, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
   },
};