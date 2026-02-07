const mongoose=require("mongoose")

const moodSchema=new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    moodvalue:{
        type:Number,
        required:true,
    }
})

moodSchema.index({userId:1,date:1},{unique:true})

const moodModel=mongoose.model("mood",moodSchema)
module.exports=moodModel;