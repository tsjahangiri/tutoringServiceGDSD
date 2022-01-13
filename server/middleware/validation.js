const { body } = require("express-validator");

exports.createUserValidation = [
  body("Email").notEmpty().isEmail(),
  body("LastName").notEmpty(),
  body("UserType").notEmpty().isIn([100, 101, 102]),
  body("Password").notEmpty().isLength({ min: 5, max: 15 }),
];
