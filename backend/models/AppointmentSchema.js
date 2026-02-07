const mongoose=require("mongoose")

const AppointmentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    counsellorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor"
    },
    date:{
        type:String,
        require:true
    },
      roomId: {             
    type: String,
  },
    time:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true})

module.exports=mongoose.model("Appointment",AppointmentSchema)