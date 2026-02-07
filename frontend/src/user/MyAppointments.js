import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MyAppointments = () => {
  const [data, setData] = useState([])
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    axios
      .get(`https://mental-health-hf3c.onrender.com/api/v1/getappointment/${userId}`)
      .then((res) => setData(res.data.appointments))
  }, [userId])

 const cancel=async(id)=>{
  await axios.delete(`https://mental-health-hf3c.onrender.com/api/v1/cancelappointment/${id}`)

  
  setData((prev)=>(
    prev.filter((a)=>a._id!==id)
  ))
 alert("Deleted")
 }

 console.log(data)

  return (
    <div>
      <h2 className='h2'>My Appointments</h2>

      {data.length === 0 && <p>No appointments</p>}

    <div className="appointments-grid">
  {data.map((a) => (
    <div className="u-card" key={a._id}>
      <div className="u-card-content">
        <div className="u-card-title">
          {a.counsellorId?.name || "Counsellor"}
        </div>

        <p className="u-card-description">
          <p><span>Date:</span>{a.date}</p>
          <p><span>Time:</span>{a.time}</p>
          <p><span>Status:</span> {a.status}</p>
      
        </p>

        {a.status !== "cancelled" && (
          <button
            className="u-card-button"
            onClick={() => cancel(a._id)}
          >
            Cancel Appointment
          </button>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default MyAppointments
