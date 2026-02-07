import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const Attenders = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  const[open,setOpen]=useState(false)
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login", { replace: true });
    };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/getusers");
    setUsers(res.data.users);
  };

  const editUsers=async(id)=>{
navigate(`/edit-user/${id}`)

  }
  const handleRemove = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await axios.delete(`http://localhost:5000/api/v1/deletes/${id}`);
    fetchUsers();
    console.log("hello")
  };

  return (
    <div className="whole">
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
      <h1>Users</h1>
       <div className="ucard-grid">
      {users.map((u) => (
        <div key={u._id} className="ucard">
          <div className="blob"></div>

          <div className="img">
            <span className="letter">{u.name.charAt(0).toUpperCase()}</span>
          </div>

          <div className="thumb-details">
            <h3>{u.name}</h3>
            <p> {u.email}</p>

            <div className="thumb-actions">
              <button onClick={() =>editUsers(u._id)}>Edit</button>
              <button className="danger" onClick={() => handleRemove(u._id)}>
                Delete
              </button>
            </div>
          </div>

          <h2 className="caps">
           <p>{u.name}</p> 
            <span>{u.role}</span>
          </h2>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Attenders;
