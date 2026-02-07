const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");

console.log(
  "authMiddleware:", typeof authMiddleware,
  "isAdmin:", typeof isAdmin
);

router.get("/admin", authMiddleware, isAdmin, (req, res) => {
  res.json({ message: "Admin route OK" });
});

module.exports = router;
