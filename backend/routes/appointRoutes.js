const express=require("express")
const router=express.Router()

const{bookAppointment,getAppointment,cancelAppointment,docAppointment,getPending,updateStatus,getApproved}=require("../controller/AppointmentController")

router.post("/appointment",bookAppointment)
router.get("/getappointment/:id",getAppointment)
router.get("/docappoint/:id",docAppointment)
router.delete("/cancelappointment/:id",cancelAppointment)
router.get("/pending",getPending)
router.put("/update/:id",updateStatus)
router.get("/getapprove",getApproved)

module.exports=router;