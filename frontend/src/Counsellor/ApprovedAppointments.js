import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const ApprovedAppointments = () => {
    const[lists,setLists]=useState([])
      const navigate = useNavigate();
  const[open,setOpen]=useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login", { replace: true });
    };
  

     const email = localStorage.getItem("email");
     console.log(email)

    const got=async()=>{
const approve=await axios.get(`https://mental-health-hf3c.onrender.com/api/v1/getapprove`)
const dataa=approve.data.approved
console.log(dataa)

const filtered=dataa.filter((p)=>{
   return p.counsellorId.email===email
})
console.log(filtered)
setLists(filtered)
    }

    useEffect(()=>{
        got();
    },[email])
  return (
   <div className="wholecard">
     <div className="navcontent">
              <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
        <Link to="/counsellordashboard"><p>Home</p></Link>
        <Link to="/counsellorAppointment"><p>Pending </p></Link>
        <Link to="/approvedAppointments"><p>Approved </p></Link>
        <Link to="/counsellorCall"><p>Calls</p></Link>  
        <p onClick={handleLogout} className="logout-text">Logout</p>
      </div>
        <div className="menubar">
          <h3>Admin</h3>
          <GiHamburgerMenu
        className="bar"
        onClick={() => setOpen(!open)}
      />
        </div>
      
      
      </div>
    <div className="card-wrapper">
  {lists.length>0?(lists.map((p) => (
    <div className="gcard" key={p._id}>
      <div className="gcontent">
        <div className="footer">
          <p className="gpara"><b>Name:</b> {p.userId?.name}</p>
          <p className="gpara"><b>Email:</b> {p.userId?.email}</p>
          <p className="gpara"><b>Date:</b> {new Date(p.date).toLocaleDateString()}</p>
          <p className="gpara"><b>Time:</b> {p.time}</p>
          <p className="gpara"><b>Status:</b> {p.status}</p>
        </div>

      </div>
    </div>
  ))):(
    <h1>No Appointemnts</h1>
  )}
</div>
  </div>
  )
}

export default ApprovedAppointments
