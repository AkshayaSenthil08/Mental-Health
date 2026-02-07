import { useState } from "react";

const PrivacySettings = () => {
  const [shareReports, setShareReports] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleSave = () => {
    if (!changed) {
      alert("No changes to save ");
      return;
    }

    alert("Privacy settings saved ");
    setChanged(false);
  };

  return (
    <div className="settings-section">
      <h3>Privacy Settings</h3>

      <div className="toggle-row">
        <span>Share reports with counsellor</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={shareReports}
            onChange={() => {
              setShareReports(!shareReports);
              setChanged(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="toggle-row">
        <span>Anonymous mode</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={() => {
              setAnonymous(!anonymous);
              setChanged(true);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>

      <button onClick={handleSave}>Save Privacy</button>
    </div>
  );
};

export default PrivacySettings;
