const express=require("express")
const router=express.Router();

const {createProfile,getProfile,updateProfile}=require("../controller/ProfileController")

router.post("/profile",createProfile)
router.get("/profile",getProfile)
router.put("/profile/:id",updateProfile)

module.exports=router;