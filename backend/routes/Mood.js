const express = require("express");
const router = express.Router();

const { saveMood, getMoods } = require("../controller/MoodController");

router.post("/mood", saveMood);
router.get("/mood/:userId", getMoods);

module.exports = router;
