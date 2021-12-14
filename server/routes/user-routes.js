const express = require('express')
const router = express.Router()

let userController= require('../controller/userController')
let loginController = require('../controller/loginController')
let auth=require("../middleware/auth")
const searchController = require('../controller/searchController')


//************Map the resources to it's appropriate controller here********** */
// router.get('/user',auth,userController.getUser);
// router.get("/user/:id",auth,userController.getUserById);
// router.post('/user',auth,userController.createUser);
// router.patch("/user/:id",auth,userController.updateUser);
// router.delete("/user/:id",auth,userController.deleteUser);

// router.post('/register', loginController.registerUser);
// router.post('/login',loginController.loginUser)



router.get('/search/tutor/',searchController.search);



module.exports=router;