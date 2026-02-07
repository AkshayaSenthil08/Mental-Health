import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const CounsellorDashboard = () => {
  const [docdata, setDocData] = useState([]);
  const mails = localStorage.getItem("email");
    const navigate = useNavigate();
  const[open,setOpen]=useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login", { replace: true });
    };
  

  useEffect(() => {
     const getlist = async () => {
    try {
      const res = await axios.get("https://mental-health-hf3c.onrender.com/api/v1/counsellor");
      const datas = res.data.counsellors;
      const selected = datas.filter((p) => p.email === mails);
      setDocData(selected);
    } catch (err) {
      console.log(err);
    }
  };
   
  getlist()

  }, [mails]);

  return (
    <div className="dashboard-container">
       <div className="navcontent">
              <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
                <Link to="/login"><p>Login</p></Link>
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


      {docdata.length > 0 && (
        <div className="rcard-wrapper">
          <div className="rcard">
            <h2 className="rcard-title">{docdata[0].name}</h2>

            <div className="small-desc">
              <h3><strong>Email:</strong> {docdata[0].email}</h3>
              <h3><strong>Speciality:</strong> {docdata[0].speciality}</h3>
              <h3><strong>Role:</strong> Counsellor</h3>
            </div>

            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounsellorDashboard;
