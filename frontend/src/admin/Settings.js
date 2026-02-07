import React, { useState } from "react";

import PrivacySettings from "./PrivacySettings";
import NotificationSettings from "./NotificationSettings";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import AdminSystemSettings from "./AdminSystemSettings";

const Settings = () => {
  const [tab, setTab] = useState("profile");

  const user = { role: "admin" };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-layout">
        <div className="settings-tabs">
          <button onClick={() => setTab("profile")}>Profile</button>
          <button onClick={() => setTab("notifications")}>Notifications</button>
          <button onClick={() => setTab("privacy")}>Privacy</button>
          <button onClick={() => setTab("security")}>Security</button>

          {user.role === "admin" && (
            <button onClick={() => setTab("system")}>System</button>
          )}
        </div>

        <div className="settings-content">
          {tab === "profile" && <ProfileSettings />}
          {tab === "notifications" && <NotificationSettings />}
          {tab === "privacy" && <PrivacySettings />}
          {tab === "security" && <SecuritySettings />}
          {tab === "system" && user.role === "admin" && (
            <AdminSystemSettings />
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
