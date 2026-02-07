const Emergency = require("../models/EmergencyModel");

exports.createEmergency = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const emergency = await Emergency.create({
      message,
      userId: req.user.id, 
    });

    res.status(201).json({
      success: true,
      emergency,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.getAllEmergencies = async (req, res) => {
  const emergencies = await Emergency.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: emergencies.length,
    emergencies,
  });
};

exports.updateEmergencyStatus = async (req, res) => {
  const emergency = await Emergency.findById(req.params.id);

  if (!emergency) {
    return res.status(404).json({
      success: false,
      message: "Emergency not found",
    });
  }

  emergency.status = "resolved";
  await emergency.save();

  res.status(200).json({
    success: true,
    emergency,
  });
};
