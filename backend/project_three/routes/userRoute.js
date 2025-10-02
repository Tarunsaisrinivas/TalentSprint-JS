const express = require("express");
const { addUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();
// router.get("/user", (req, res) => {
//   const { name = "Guest", email = "Guest" } = req.body;

//   res.json({
//     message: "User Route",
//     name: name,
//     email: email,
//   });
// });

router.post("/users", addUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
