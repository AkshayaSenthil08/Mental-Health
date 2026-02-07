const mongoose=require("mongoose")

const emergencySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","resolved"],
        default:"pending"
    },
},
{
    timestamps:true
})

module.exports=mongoose.model("Emergency",emergencySchema)