import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h2 className="settings-header">Settings</h2>

      <div className="settings-section">
        <h3>Account Preferences</h3>
        <label>
          <span>Language:</span>
          <select>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </label>

        <label>
          <span>Time Zone:</span>
          <select>
            <option>GMT+1 (West Africa Time)</option>
            <option>GMT (Greenwich Mean Time)</option>
            <option>UTC</option>
          </select>
        </label>
      </div>

      <div className="settings-section">
        <h3>Security Settings</h3>
        <button className="settings-btn">Change Password</button>
        <button className="settings-btn danger">Enable Two-Factor Authentication</button>
      </div>

      <div className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input type="checkbox" defaultChecked />
          Email Notifications
        </label>
        <label>
          <input type="checkbox" />
          SMS Alerts
        </label>
      </div>

      <div className="settings-section danger-zone">
        <h3>Danger Zone</h3>
        <button className="settings-btn danger">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
