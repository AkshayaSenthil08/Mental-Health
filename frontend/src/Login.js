import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://mental-health-hf3c.onrender.com/api/v1/login",
        formData
      );

      console.log(res.data)

      if (res.data.success) {
        
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("userId", res.data.user.id);
        localStorage.setItem("email",res.data.user.email)

        setFormData({
          email: "",
          password: "",
        });

        if (res.data.role === "admin") {
          navigate("/admindash");
        } else if (res.data.role === "counsellor") {
            localStorage.setItem(  "counsellorId", res.data.user.id);
        localStorage.setItem( "demail",  res.data.user.email);
          navigate("/CounsellorDashboard");
        } else {
          navigate("/dash");
        }
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
