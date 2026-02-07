const counselModel=require("../models/CounsellorModel")

exports.createCounsellor=async(req,res)=>{

     const counsellor=await counselModel.create(req.body)

     res.json({
        success:true,
        message:"added!",
        counsellor
     })

}
exports.getCounsellor=async(req,res)=>{

const counsellors=await counselModel.find({available:true})

res.json({
    success:true,
    counsellors
})

}

exports.getCounsellorById=async(req,res)=>{
const counsellor=await counselModel.findById(req.params.id)
res.json({
    success:true,
    counsellor
})


}