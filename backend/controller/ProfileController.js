const profileModel=require("../models/ProfileModel")

exports.createProfile=async(req,res)=>{

    const{name,email,password}=req.body;
    if(!name&& !email && !password){
        return res.json({
            success:false,
            message:"enter all the values"
        })
    }

const InitialProfile=await profileModel.create(req.body)
res.json({
    success:true,
    InitialProfile
})
}

exports.getProfile=async(req,res)=>{
    const userfetch=await profileModel.find();

    res.json({
        success:true,
        userfetch
    })
}

exports.updateProfile=async(req,res)=>{
    const updateUser=await profileModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

    res.json({
        message:"updated",
        updateUser,
        success:true
    })

if(!updateUser){
    return res.json({
        message:"user not found",
        success:false
    })
}
}
