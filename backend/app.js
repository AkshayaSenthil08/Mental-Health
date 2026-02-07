const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const user = require("./routes/User");
const mood = require("./routes/Mood");
const counsel = require("./routes/Counsellor");
const userdata = require("./routes/Profile");
const admin = require("./routes/adminRoutes"); 
const appoint=require("./routes/appointRoutes")

const connectDatabase = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/api/v1", user);
app.use("/api/v1", mood);
app.use("/api/v1", counsel);
app.use("/api/v1", userdata);
app.use("/api/v1", appoint); 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

