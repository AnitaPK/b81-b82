const express = require("express");
const {
  register,
  login,
  getUserInfo,
//   updateProfile,
} = require("../controllers/userController");
const {auth} = require('../middleware/auth')

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserInfo",auth, getUserInfo);
// router.put("/updateProfile", updateProfile);

module.exports = router;