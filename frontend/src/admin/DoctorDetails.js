import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const { id } = useParams();

  const [doc, setDoc] = useState(null);
  const [app, setApp] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/doctor/${id}`)
      .then((res) => setDoc(res.data.counsellor));
  }, [id]);

const findappointment = async () => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/docappoint/${id}`
  );

  if (res.data.appointments.length === 0) {
    alert("No Appointments");
  } else {
    setApp(res.data.appointments);
  }

  setLoaded(true);
};


  return (
  <div className="page">

  {doc && (
    <div className="card-stack">
      <div className="card two"></div>

      <div className="card main">
        <div className="inner">
          <h3>{doc.name}</h3>
          <h2>{doc.speciality}</h2>
          <h2>Experience:  <span>{doc.experience} </span></h2>
          <h2>Mobile:  <span>{doc.phone}</span></h2>
          <h2>Email:  <span>{doc.email}</span></h2>
<button class="btn-12" onClick={findappointment}><span>Get Appointments</span></button>
        </div>
      </div>
    </div>
  )}

  {app.map(a => (
    <div className="card-stack" key={a._id}>
      <div className="card one"></div>

      <div className="card main">
        <div className="inner">
          <h3>Appointment</h3>
          <h2>Date: {a.date}</h2>
          <h2>Time: {a.time}</h2>
          <h2>Status: {a.status}</h2>
          <h2>Patient: {a.userId?.name}</h2>
        </div>
      </div>
    </div>
  ))}

</div>

  );
};

export default DoctorDetails;
