const express = require("express");
const {
  register,
  login,
  getUserInfo,
//   updateProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserInfo", getUserInfo);
// router.put("/updateProfile", updateProfile);

module.exports = router;