import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";


const Pending = () => {
  const [result, setResult] = useState([]);
    const navigate = useNavigate();
  
    const[open,setOpen]=useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login", { replace: true });
    };

  const fetchPending = async () => {
    const res = await axios.get("https://mental-health-hf3c.onrender.com/api/v1/pending");
    setResult(res.data.pending);
  };
console.log(result)
  const updateStatus=async(id,status)=>{
   const dataa= await axios.put(
        `https://mental-health-hf3c.onrender.com/api/v1/update/${id}`,
        {status}
    )
    setResult(prev=>prev.filter(item=>item._id!==id))
    
  }
  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <>
     <div className="navcontent">
        <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
      <Link to="/admindash"><p>Home</p></Link>
  <Link to="/attend"><p>Users</p></Link>
  <Link to="/getcounsellist"><p>Counsellors</p></Link>
  <Link to="/pend"><p>Requests</p></Link>  
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



      <div className="pending-wrapper">
      {result.map((item) => (
        <div key={item._id} className="notification">
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>

          <div className="notititle">
            Pending Appointment
          </div>

          <div className="notibody">
            <p><b>User:</b> {item.userId?.name}</p>
            <p><b>Counsellor:</b> {item.counsellorId?.name}</p>
            <p><b>Email:</b> {item.counsellorId?.email}</p>
            <p><b>Status:</b> {item.status}</p>
          </div>


<div className="btnss">
  <button onClick={()=>updateStatus(item._id,"approved")} className="approve">Approve</button>
          <button onClick={()=>updateStatus(item._id,"cancelled")} className="approve">Reject</button>
</div>
          
        </div>
      ))}
    </div></>
  
  );
};

export default Pending;
