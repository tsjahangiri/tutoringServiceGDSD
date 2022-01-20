const uploadFile = require("../middleware/upload");
const database = require("../database");
require("dotenv").config();


module.exports = {
    "file": async (req,res) => {
        database.execute("SELECT * FROM `helpmelearn`.`hm_file` WHERE `tutorProfileId`= ?",
        [req.userid],
        (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send({message:"Something went wrong"});
            }
            else {
                res.send({message:"Success", data:result})
            }

        });
    },
    "image": async (req,res) => {
        database.execute("SELECT * FROM `helpmelearn`.`hm_image` WHERE `userId`= ?",
        [req.userid],
        (err, result) => {
            if(err) {
                console.log(err);
                res.status(500).send({message:"Something went wrong"});
            }
            else {
                res.send({message:"Success", data:result})
            }

        });
    },
}