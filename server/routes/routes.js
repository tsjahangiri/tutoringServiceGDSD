const express = require("express");
const {
  createPostValidation,
  updatePostValidation,
  createReviewValidation,
  updateReviewValidation,
  createUserValidation,
  updateUserValidation,
  createQualificationValidation,
  updateQualificationValidation
} = require("../middleware/validation.js");
const router = express.Router();

let auth = require("../middleware/auth");
let adminAuth = require("../middleware/adminAuth");

let postController = require("../controller/postController");
router.post("/posts", createPostValidation, postController.createPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts", updatePostValidation, postController.updatePost);
router.get("/posts/:id", postController.getPost);
router.get("/posts", postController.searchPost);

let userController = require("../controller/userController");
router.post("/users", createUserValidation, userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users", updateUserValidation, userController.updateUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);

let reviewController = require("../controller/reviewController");
router.post("/reviews", createReviewValidation, reviewController.createReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.put("/reviews", updateReviewValidation, reviewController.updateReview);
router.get("/reviews/:id", reviewController.getReviewById);

let loginController = require("../controller/loginController");
router.post("/register", loginController.registerUser);
router.post("/login", loginController.loginUser);

let adminController = require("../controller/adminController");
router.delete("/user", adminAuth.isAdmin, adminController.deleteUser);

let tutorController = require("../controller/tutorController");
router.post("/qualifications", createQualificationValidation, tutorController.createQualification);
router.delete("/qualifications/:id", tutorController.deleteQualification);
router.put("/qualifications", updateQualificationValidation, tutorController.updateQualification);
router.get("/qualifications/:tutorId", tutorController.getQualificationByTutorId);

module.exports = router;
