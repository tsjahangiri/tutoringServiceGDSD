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
  createQualificationValidation,
  updateQualificationValidation,
  createTutorProfileValidation,
  updateTutorProfileValidation,
} = require("../middleware/validation.js");
const router = express.Router();
let adminAuth = require("../middleware/adminAuth");
let tutorAuth = require("../middleware/tutorAuth");

// Post
let postController = require("../controller/postController");
router.post("/posts", createPostValidation, postController.createPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts", updatePostValidation, postController.updatePost);
router.get("/posts/:id", postController.getPost);
router.get("/posts", postController.searchPost);

// User
let userController = require("../controller/userController");
router.delete("/users/:id", userController.deleteUser);
router.post("/users", createUserValidation, userController.createUser);
router.put("/users", updateUserValidation, userController.updateUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);

// Review
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

// Login & Register
let loginController = require("../controller/loginController");
router.post("/register", loginController.registerUser);
router.post("/login", loginController.loginUser);

// Delete User
let adminController = require("../controller/adminController");
router.delete("/user", adminAuth.isAdmin, adminController.deleteUser);

// Tutor Profile
let tutorProfileController = require("../controller/TutorProfileController");
router.get("/tutors/Info/:id", tutorProfileController.getTutorAbouInfoById);
router.get(
  "/tutors/courses/:id",
  tutorProfileController.getTutorOfferedCoursesById
);
router.get(
  "/tutors/qualification/:id",
  tutorProfileController.getTutorQualificationById
);
router.get("/tutors/reviews/:id", tutorProfileController.getReviewsById);
router.get("/tutors", tutorProfileController.searchTutorProfile);
router.post("/tutors", createTutorProfileValidation, tutorProfileController.saveTutorInfo);
router.put("/tutors", updateTutorProfileValidation, tutorProfileController.updateTutorInfo);

let qualificationController = require("../controller/qualificationController");
router.get("/qualifications/:id", qualificationController.getQualificationById);
router.post(
  "/qualifications",
  createQualificationValidation,
  qualificationController.createQualification
);
router.delete(
  "/qualifications/:id",
  qualificationController.deleteQualification
);
router.put(
  "/qualifications",
  updateQualificationValidation,
  qualificationController.updateQualification
);
router.get(
  "/qualifications/:tutorProfileId",
  qualificationController.getQualificationByTutorProfileId
);

let uploadController = require("../controller/uploadController");
router.post("/upload", tutorAuth.isTutor, uploadController.upload);

let fetchController = require("../controller/fetchFileController");
router.get("/fetch/file", tutorAuth.isTutor, fetchController.file);
router.get("/fetch/image", tutorAuth.isTutor, fetchController.image);

module.exports = router;
