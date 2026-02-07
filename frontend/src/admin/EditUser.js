import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();           
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    axios
      .get(`https://mental-health-hf3c.onrender.com/api/v1/user/${id}`)
      .then(res => {
        setForm({
          name: res.data.user.name,
          email: res.data.user.email,
          role: res.data.user.role
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://mental-health-hf3c.onrender.com/api/v1/updates/${id}`,
        form
      );

      alert("User updated successfully");
      navigate("/attend");   
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
      <div className="edit-container">
      <div className="container">
        <div className="heading">Edit User</div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <select
            className="input"
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="submit"
            value="Update User"
            className="login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default EditUser;
