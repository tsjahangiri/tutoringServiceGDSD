const database = require("../database");
const adminAuth = require("../middleware/adminAuth");

module.exports = {
    deleteUser : (req, res, next) => {
        let userName = req.query.username;
        // console.log(userName);
        try {
            database.execute('DELETE FROM `helpmelearn`.`hm_user` WHERE (`username` = ?)', [userName], (err, result) => {
                // console.log(result);
                res.json({success:true,message:"User deleted succesfully!"});
            });
        }
        catch(error) {
            res.json({success:false, message:"Something went wrong"});
        }
    } 

    
}