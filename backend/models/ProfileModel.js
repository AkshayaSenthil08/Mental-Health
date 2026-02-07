const mongoose=require("mongoose")

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true
    },
    age: Number,
    role:
     { type: String,
       default: "user" },
    isActive: {
       type: Boolean,
        default: true },
    mood: { 
      type: String,
       default: "Neutral" },
    stressLevel: {
       type: Number, 
       min: 1,
        max: 10 },
    streak: { 
      type: Number, 
      default: 0 },
    lastActive: {
       type: Date },
  },
  { timestamps: true }
);

const profileModel=mongoose.model("profile",profileSchema)

module.exports=profileModel;