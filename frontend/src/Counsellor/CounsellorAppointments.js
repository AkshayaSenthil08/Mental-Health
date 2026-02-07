import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const CounsellorAppointments = () => {
  const [list, setList] = useState([]);
  const email = localStorage.getItem("email");
   const navigate = useNavigate();
  const[open,setOpen]=useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login", { replace: true });
    };
  

  useEffect(() => {

   const gets = async () => {
    const res = await axios.get("https://mental-health-hf3c.onrender.com/api/v1/pending");
    const dataa = res.data.pending;

    const selected = dataa.filter(
      (p) =>
        p.counsellorId?.email === email &&
        (p.status === "pending" || p.status === "accepted")
    );

    setList(selected);
    console.log(selected)
  };

    gets();
  }, [email]);

return (
  <>
 <div className="navcontent">
              <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
        <Link to="/counsellordashboard"><p>Home</p></Link>
        <Link to="/counsellorAppointment"><p>Pending </p></Link>
        <Link to="/approvedAppointments"><p>Approved</p></Link>
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

   <div className="wholecard">
    <h1>My Appointments</h1>
    <div className="card-wrapper">
  {list.length>0?(list.map((p) => (
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
  </>
 


);


};

export default CounsellorAppointments;
