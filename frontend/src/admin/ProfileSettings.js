import { useState } from "react";

const ProfileSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!name || !email) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Profile saved successfully ");
  };

  return (
    <div className="settings-section">
      <h3> Profile Settings</h3>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {error && <p className="error-text"> {error}</p>}

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default ProfileSettings;
