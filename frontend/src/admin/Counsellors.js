import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate,Link } from "react-router-dom";

const Counsellors = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
    const[open,setOpen]=useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/counsellor")
      .then((res) => setData(res.data.counsellors))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="counsellor-pages">
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
      <h2 className="heading">Counsellors</h2>

      <div className="counsellor-grid">
        {data.map((c) => (
          <div className="card-client" key={c._id}>
            <div className="user-picture">
              <span className="avatar-text">
                {c.name.charAt(0).toUpperCase()}
              </span>
            </div>

            <p className="name-client">
             <h2> {c.name}</h2>
              <span>{c.speciality}</span>
            </p>

            <div className="social-media">
              <button
                className="view"
                onClick={() => navigate(`/doctor/${c._id}`)}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counsellors;
