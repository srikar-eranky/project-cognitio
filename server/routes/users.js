const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser
} = require('../controllers/userController');

/* GET user data. */
router.get("/:id", getUser);

/* CREATE new user. */
router.post("/", createUser);

module.exports = router;
