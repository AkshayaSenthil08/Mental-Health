import { useState } from "react";

const NotificationSettings = () => {
  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleSave = () => {
    if (!changed) {
      alert("No changes to save ");
      return;
    }

    alert("Notification settings saved ");
    setChanged(false);
  };

  return (
    <div className="settings-section">
      <h3> Notification Settings</h3>

      <div className="toggle-row">
        <span>Push Notifications</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={push}
            onChange={() => {
              setPush(!push);
              setChanged(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="toggle-row">
        <span>Email Notifications</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={email}
            onChange={() => {
              setEmail(!email);
              setChanged(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>

      <button onClick={handleSave}>Save Notifications</button>
    </div>
  );
};

export default NotificationSettings;
