import { useState } from "react";

const AdminSystemSettings = () => {
  const [criticalAlerts, setCriticalAlerts] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleSave = () => {
    if (!changed) {
      alert("No changes to save ");
      return;
    }

    alert("System settings saved ");
    setChanged(false);
  };

  return (
    <div className="settings-section">
      <h3> System Settings</h3>

      <div className="toggle-row">
        <span>Enable Critical Alerts</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={criticalAlerts}
            onChange={() => {
              setCriticalAlerts(!criticalAlerts);
              setChanged(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>

      <button onClick={handleSave}>Save System Settings</button>
    </div>
  );
};

export default AdminSystemSettings;
