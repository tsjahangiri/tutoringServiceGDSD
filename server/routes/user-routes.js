const express = require('express')
const router = express.Router()

let userController= require('../controller/userController')
let loginController = require('../controller/loginController')
const searchController = require('../controller/searchController')
let adminController = require('../controller/adminController');

let auth=require("../middleware/auth");
let adminAuth = require("../middleware/adminAuth");

//************Map the resources to it's appropriate controller here********** */
// router.get('/user',auth,userController.getUser);
// router.get("/user/:id",auth,userController.getUserById);
// router.post('/user',auth,userController.createUser);
// router.patch("/user/:id",auth,userController.updateUser);
// router.delete("/user/:id",auth,userController.deleteUser);

router.post('/register', loginController.registerUser);
router.post('/login',loginController.loginUser);
router.delete('/user', adminAuth.isAdmin, adminController.deleteUser);


router.get('/search/tutor/',searchController.search);



module.exports=router;