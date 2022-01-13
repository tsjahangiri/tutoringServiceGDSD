const express = require("express");
const { createUserValidation } = require('./middleware/validation.js');
const router = express.Router();

let postController = require("./controller/postController");
router.post("/posts", postController.createPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts", postController.updatePost);
router.get("/posts/:id", postController.getPost);
router.get("/posts", postController.searchPost);

let userController = require("./controller/userController");
router.post("/users", createUserValidation, userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users", userController.updateUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);

let reviewController = require("./controller/reviewController");
router.post("/reviews", reviewController.createReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.put("/reviews", reviewController.updateReview);
router.get("/reviews/:id", reviewController.getReviewById);
module.exports = router;
