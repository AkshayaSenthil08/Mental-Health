import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminEmergencies = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchEmergencies = async () => {
    try {
      const res = await axios.get(
        "https://mental-health-hf3c.onrender.com/api/v1/emergency",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setEmergencies(res.data.emergencies);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Failed to load emergencies");
      setLoading(false);
    }
  };

  const markResolved = async (id) => {
    try {
      await axios.put(
        `https://mental-health-hf3c.onrender.com/api/v1/emergency/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      fetchEmergencies();
    } catch (err) {
      console.error(err);
      alert("Error while updating status");
    }
  };

  useEffect(() => {
    fetchEmergencies();
  }, []);

  if (loading) {
    return <h3>Loading emergencies...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2> Emergency Alerts</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {emergencies.length === 0 ? (
            <tr>
              <td colSpan="4">No emergencies found</td>
            </tr>
          ) : (
            emergencies.map((emergency) => (
              <tr key={emergency._id}>
                <td>{emergency._id}</td>
                <td>{emergency.message}</td>
                <td>{emergency.status}</td>
                <td>
                  {emergency.status === "pending" ? (
                    <button
                      onClick={() =>
                        markResolved(emergency._id)
                      }
                    >
                      Mark Resolved
                    </button>
                  ) : (
                    <span>Resolved</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEmergencies;
