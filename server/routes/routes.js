const express = require("express");
const {
  createDeptValidation,
  updateDeptValidation,
  createPostValidation,
  updatePostValidation,
  createReviewValidation,
  updateReviewValidation,
  createUserValidation,
  updateUserValidation,
  createCourseValidation,
  updateCourseValidation,
} = require("../middleware/validation.js");
const router = express.Router();

let auth = require("../middleware/auth");
let adminAuth = require("../middleware/adminAuth");
let tutorAuth = require("../middleware/tutorAuth");

let postController = require("../controller/postController");
router.post("/posts", createPostValidation, postController.createPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts", updatePostValidation, postController.updatePost);
router.get("/posts/:id", postController.getPost);
router.get("/posts", postController.searchPost);

let userController = require("../controller/userController");
router.delete("/users/:id", userController.deleteUser);
router.post("/users", createUserValidation, userController.createUser);
router.put("/users", updateUserValidation, userController.updateUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);

let reviewController = require("../controller/reviewController");
router.post("/reviews", createReviewValidation, reviewController.createReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.put("/reviews", updateReviewValidation, reviewController.updateReview);
router.get("/reviews/:id", reviewController.getReviewById);
router.get("/reviews", reviewController.getReviews);


// Department
let departmentController = require("../controller/deptController");
router.post(
  "/depts",
  createDeptValidation,
  departmentController.createDepartment
);
router.delete("/depts/:id", departmentController.deleteDepartment);
router.put(
  "/depts",
  updateDeptValidation,
  departmentController.updateDepartment
);
router.get("/depts/:id", departmentController.getDepartmentById);
router.get("/depts", departmentController.getDepartments);

// Course
let courseController = require("../controller/courseController");
router.post("/courses", createCourseValidation, courseController.createCourse);
router.delete("/courses/:id", courseController.deleteCourse);
router.put("/courses", updateCourseValidation, courseController.updateCourse);
router.get("/courses/:id", courseController.getCourseById);
router.get("/courses", courseController.getCourses);

let loginController = require("../controller/loginController");
router.post("/register", loginController.registerUser);
router.post("/login", loginController.loginUser);

let adminController = require("../controller/adminController");
router.delete("/user", adminAuth.isAdmin, adminController.deleteUser);

let uploadController = require("../controller/uploadController");
router.post("/upload", tutorAuth.isTutor, uploadController.upload);

module.exports = router;
