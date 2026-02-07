const mongoose=require("mongoose")

const counselSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
name:{
        type:String,
  required:true,
  lowercase:true,
  trim:true,
  unique:true
    },
    speciality:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    available:{
        type:Boolean,
    }
},
{timestamps:true});

const counselModel=mongoose.model("doctor",counselSchema)

module.exports=counselModel;