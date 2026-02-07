const Appointment=require("../models/AppointmentSchema")

exports.bookAppointment = async (req, res) => {
  const appointment = await Appointment.create({
    ...req.body,
    status: "pending"
  })

  res.json({
    success: true,
    appointment
  })
}


exports.getAppointment = async (req, res) => {
 const appointments = await Appointment.find({
  userId: req.params.id
})
.populate("counsellorId", "name speciality email")
  res.json({
    success: true,
    appointments
  })
}

exports.cancelAppointment=async(req,res)=>{
  const cancel=await Appointment.findByIdAndDelete(req.params.id)
  res.json({
    success:true,
    message:"deleted"
  })
}

exports.docAppointment=async(req,res)=>{
  const docId=req.params.id;

  const appointments=await Appointment.find({
    counsellorId:docId
  }).populate("userId", "name email")

  res.json({
    success:true,
    message:"found",
    appointments
  })
}

exports.getPending=async(req,res)=>{

  const pending=await Appointment.find({
    status:"pending"
  }).populate("counsellorId", "name email")
   .populate("userId", "name email")

  res.json({
    success:true,
    pending,
    message:"got"
  })

}

exports.getApproved=async(req,res)=>{

  const approved=await Appointment.find({
    status:"approved"
  }).populate("counsellorId", "name email")
  .populate("userId", "name email")

res.json({
  success:true,
  approved,
  message:"got Approved"
})
}

exports.updateStatus=async(req,res)=>{
const {status}=req.body;

const updated=await Appointment.findByIdAndUpdate(req.params.id,{status},{new:true})


res.json({
  success:true,
  updated,
  message:"updated",
  status
})

}


