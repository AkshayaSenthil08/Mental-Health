
const express=require("express")
const router=express.Router();

const{register,getUser,getAllUsers,updateUser,deleteUser}=require("../controller/UserController")

router.post("/register",register)
router.post("/login",getUser)
router.get("/getusers",getAllUsers)
router.put("/updates/:id",updateUser)
router.delete("/deletes/:id",deleteUser)

module.exports=router;