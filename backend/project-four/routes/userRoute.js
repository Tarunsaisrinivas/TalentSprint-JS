const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  login,
  deleteOneUser,
} = require("../controllers/userController");
const { AuthValidator } = require("../middleware/Logger");

router.get("/", getUser);
router.post("/", addUser);
router.delete("/", AuthValidator, deleteOneUser);
// for login
router.post("/login", login);

module.exports = router;
