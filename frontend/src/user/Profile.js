import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/profile");
        setUser(res.data.userfetch[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <div className="loading">Loading…</div>;

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <div className="avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1>{user.name}</h1>
            <p className="email">{user.email}</p>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <span>Role</span>
            <strong>{user.role}</strong>
          </div>

          <div className="row">
            <span>Age</span>
            <strong>{user.age || "—"}</strong>
          </div>

          <div className="row">
            <span>Status</span>
            <strong>{user.isActive ? "Active" : "Inactive"}</strong>
          </div>

          <div className="row">
            <span>Joined</span>
            <strong>
              {new Date(user.createdAt).toDateString()}
            </strong>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
