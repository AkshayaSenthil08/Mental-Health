import { useState } from "react";

const SecuritySettings = () => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");

  const handlePassword = () => {
    if (!current || !newPass) {
      alert("All password fields required ");
      return;
    }

    if (newPass.length < 6) {
      alert("Password must be at least 6 characters ");
      return;
    }

    alert("Password changed successfully ");
  };

  return (
    <div>
      <h3> Security</h3>

      <input
        type="password"
        placeholder="Current Password"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
      />

      <button onClick={handlePassword}>Change Password</button>
    </div>
  );
};

export default SecuritySettings;
