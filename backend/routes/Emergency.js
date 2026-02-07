const express = require("express");
const router = express.Router();


const {
  createEmergency,
  getAllEmergencies,
} = require("../controller/EmergencyController");

router.post("/emergency", createEmergency);

router.get("/emergency", getAllEmergencies);



