const express = require("express");
const {
  createPostValidation,
  updatePostValidation,
  createReviewValidation,
  updateReviewValidation,
  createUserValidation,
  updateUserValidation,
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

let TutorProfileController = require("../controller/TutorProfileController");
router.get("/tutors/Info/:id", TutorProfileController.getTutorAbouInfoById);
router.get("/tutors/courses/:id", TutorProfileController.getTutorOfferedCoursesById);
router.get("/tutors/qualification/:id", TutorProfileController.getTutorQualificationById);
router.get("/tutors/reviews/:id", TutorProfileController.getReviewsById);
router.post("/tutors", TutorProfileController.saveTutorInfo);
router.put("/tutors", TutorProfileController.updateTutorInfo);

let searchController = require("../controller/searchController");
router.get("/tutors/search", searchController.getTutorsByFilters);

// router.post("/users", createUserValidation, userController.createUser);
// router.delete("/users/:id", userController.deleteUser);
// router.put("/users", updateUserValidation, userController.updateUser);
// router.get("/users", userController.getUsers);
// router.get("/users/:id", userController.getUserById);

module.exports = router;