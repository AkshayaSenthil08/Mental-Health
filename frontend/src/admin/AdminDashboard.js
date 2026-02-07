import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const[open,setOpen]=useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  return (
    <div className="admin-container">
   <div className="navcontent">
        <div className={`navbar ${open ? "slide-in" : "slide-out"}`}>
                          <Link to="/login"><p>Login</p></Link>
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

      <div className="admin-content">
<h1 className="outline-title">Welcome Admin</h1>

        <p className="outline-p">System overview & quick actions</p>

      <div className="admin-cards">
 <Link to="/attend" style={{ textDecoration: "none", color: "inherit" }}>
  <div className="uiverse-card">
    <div className="number">
      <p className="text">01</p>
    </div>

    <div className="icon"></div>
    <p className="heading">Total Users</p>
    <p className="content">Registered platform users</p>
  </div>
</Link>

<Link to="/getcounsellist"  style={{ textDecoration: "none", color: "inherit" }}>
  <div className="uiverse-card">
    <div className="number">
      <p className="text">02</p>
    </div>

    <div className="icon"></div>
    <p className="heading">Counsellors</p>
    <p className="content">Active counsellor accounts</p>
  </div>
</Link>

<Link to="/pend" style={{ textDecoration: "none", color: "inherit" }}>
  <div className="uiverse-card">
    <div className="number">
      <p className="text">03</p>
    </div>

    <div className="icon"></div>
    <p className="heading">Pending Requests</p>
    <p className="content">Submitted user requests</p>
  </div></Link>

</div>

      </div>
    </div>
  );
};

export default AdminDashboard;
