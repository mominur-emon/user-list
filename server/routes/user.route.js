const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const express = require("express");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
