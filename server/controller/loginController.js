const pbkdf2 = require('pbkdf2');
const jwt = require('jsonwebtoken')
let database=require("../database");
require('dotenv').config()


module.exports={

    //Registering User
    registerUser :  (req, res) => {
   
        let {user_name,password,email}=req.body;
        //Password-Based Key Derivation Function uses hash-based message authentication code (HMAC)
        pbkdf2.pbkdf2(password, process.env.HASHING_SALT, 100000, 64, 'sha256',(err,encrypted_password)=>{
            if (err) throw err;
            database.query("SELECT * FROM `login` WHERE USER_NAME= " +'"'+user_name+'"'+" AND EMAIL="+'"'+email+'"', function (err, result, fields) {
                
     
                if (!(result[0])) 
                {
                    database.query("INSERT INTO `login` (`user_name`, `password`, `email`) VALUES ( '" + user_name + "', '" + encrypted_password.toString('hex') + "' , '" + email + "')",(err,result)=>{
                        if(err) console.log(err)
                        else {
                             res.json({message:"User Login Created"})
                        }
                    });
    
                } else {
                let input_email= result[0].email
                let input_user_name= result[0].user_name
                if ( (input_email === email) &&  (input_user_name === user_name)) 
                {res.json({message:"User Already Exists!"})}
                else{
    
                    database.query("INSERT INTO `login` (`user_name`, `password`, `email`) VALUES ( '" + user_name + "', '" + encrypted_password.toString('hex') + "' , '" + email + "')",(err,result)=>{
                        if(err) console.log(err)
                        else {
                             res.json({message:"User Login Created"})
                            }
                    });
    
                }
    
                }
            });
        })

       

   },




   //Login check
   loginUser : async (req, res) => {
   
    
    let {user_name,password}=req.body;

   
     database.query("SELECT * FROM `login` WHERE USER_NAME= " +'"'+user_name+'"', function (err, result, fields) {
        if (err) throw err;

        if (!(result[0])) 
        {
            res.json({message:"User Do Not Exists"})

        } else {

        let db_user_name= result[0].user_name
        let db_password= result[0].password
        pbkdf2.pbkdf2(password, process.env.HASHING_SALT, 100000, 64, 'sha256', (err, derivedKey) => {
            if (err) throw err;
            if ((db_user_name === user_name) && derivedKey.toString('hex') === db_password) {
                const token = jwt.sign(
                    { user_name, password },
                    process.env.JWT_PRIVATE_KEY,
                    {
                    expiresIn: process.env.TOKEN_EXPIRE,
                    }
                );
            
                res.json({user_name:user_name, token: token})
            }
            else {
                {res.json({message:"Invalid Credentials!"})}
            }
          });

        }
    });




},


}