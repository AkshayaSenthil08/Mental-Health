import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Counsellor = () => {
  const [counsellors, setCounsellors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mental-health-hf3c.onrender.com/api/v1/counsellor")
      .then((res) => setCounsellors(res.data.counsellors))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pro-wrapper">
      <h2 className="pro-title">Our Counsellors</h2>

      <div className="pro-grid">
        {counsellors.map((c) => (
          <div
            key={c._id}
            className="glass-container"
            onClick={() => navigate(`/details/${c._id}`)}
          >
            <div className="glass-cards">
              <div className="pro-avatar">
                {c.name?.charAt(4)}
              </div>

              <h3>{c.name}</h3>
              <p className="spec">{c.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counsellor;
