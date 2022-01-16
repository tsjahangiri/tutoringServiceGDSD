const { query, param, body } = require("express-validator");

exports.createUserValidation = [
  body("Email").notEmpty().isEmail(),
  body("LastName").notEmpty(),
  body("UserType").notEmpty().isIn([100, 101, 102]),
  body("Pd").notEmpty().isString().isLength({ min: 5, max: 15 }),
];

exports.updateUserValidation = [
  body("Id").notEmpty().isInt(),
  body("Email").notEmpty().isEmail(),
  body("LastName").notEmpty(),
  body("UserType").notEmpty().isIn([100, 101, 102]),
  body("Pd").notEmpty().isString().isLength({ min: 5, max: 15 }),
];

exports.createPostValidation = [
  body("TutorId").notEmpty().isInt(),
  body("SubjectTitle").isString().notEmpty().isLength({ min: 1 }),
  body("SubjectCode").notEmpty(),
];

exports.updatePostValidation = [
  body("Id").notEmpty().isInt(),
  body("TutorId").notEmpty().isInt(),
  body("SubjectTitle").isString().notEmpty().isLength({ min: 1 }),
  body("SubjectCode").notEmpty(),
];

exports.createReviewValidation = [
  body("Comment").isString().notEmpty().isLength({ min: 1 }),
];

exports.updateReviewValidation = [
  body("Id").notEmpty().isInt(),
  body("Comment").isString().notEmpty().isLength({ min: 1 }),
];

exports.createQualificationValidation = [
  body("Subject").notEmpty(),
  body("Qualification").notEmpty(),
  body("Grade").notEmpty(),
  body("TutorId").isString().isInt()
];

exports.updateQualificationValidation = [
  body("Id").notEmpty().isInt()
];