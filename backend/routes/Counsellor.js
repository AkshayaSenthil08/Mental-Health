const express=require("express")
const router=express.Router();

const{createCounsellor,getCounsellor,getCounsellorById}=require("../controller/CounselController")

router.post("/counsellor",createCounsellor)
router.get("/counsellor",getCounsellor)
router.get("/counsellor/:id",getCounsellorById)
router.get("/doctor/:id",getCounsellorById)

module.exports=router;