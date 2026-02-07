import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, role } = formData;

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    axios
      .post("http://localhost:5000/api/v1/register", formData)
      .then((res) => {
        if (res.data.success) {
          alert("Registered successfully");

           setFormData({
      name: "",
      email: "",
      password: "",
      role: "user",
    });

          if (role === "counsellor") {
            navigate("/login");
          } else {
            navigate("/login");
          }
        } else {
          setError(res.data.message || "Registration failed");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Server error. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="counsellor">Counsellor</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
