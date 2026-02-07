import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CounsellorDetails = () => {

  const { id } = useParams()
  const [data, setData] = useState(null)
  const[date,setDate]=useState("")
  const[time,setTime]=useState("")

  useEffect(() => {
    axios
      .get(`https://mental-health-hf3c.onrender.com/api/v1/counsellor/${id}`)
      .then((res) => setData(res.data.counsellor))
      .catch((err) => console.log(err))
  }, [id])

 const handleAppointment = async () => {
  const roomId =
    "mh-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    console.log("ROOM ID:", roomId);

  const res = await axios.post(
    "https://mental-health-hf3c.onrender.com/api/v1/appointment",
    {
      userId: localStorage.getItem("userId"),
      counsellorId: id,
      date,
      time,
      roomId,          
      status: "pending"
    }
  );

  alert("Appointment Booked Successfully!");
  console.log(res);
};


  console.log("USER ID:", localStorage.getItem("userId"))

  if (!data) return <h2 className="loading">Loading...</h2>

  return (
    <div className="pro-wrapper">
  <h2 className="pro-title">Counsellor Details</h2>

  <div className="detail-glass-container">
    <div className="detail-glass-card">

      <div className="detail-header">
        <div className="pro-avatar">
          {data.name?.charAt(0)}
        </div>

        <div className="detail-basic">
          <h3>{data.name}</h3>
          <p className="spec">{data.speciality}</p>
        </div>
      </div>

      <div className="detail-info">
        <div className='info'>
          <span>Email</span>
          <p>{data.email}</p>
        </div>
        <div className='info'>
          <span>Phone</span>
          <p>{data.phone}</p>
        </div>
        <div className='info'>
          <span>Experience</span>
          <p>{data.experience}</p>
        </div>
      </div>

      <div className="detail-book">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={handleAppointment}>
          Book Appointment
        </button>
      </div>

    </div>
  </div>
</div>

  )
}

export default CounsellorDetails
