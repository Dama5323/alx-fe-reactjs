import React, { useState } from 'react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    language: 'en',
    autoSave: true
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChange = (e) => {
    setSettings(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      
      <div className="settings-form">
        <div className="setting-group">
          <h3>Preferences</h3>
          
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
              Email Notifications
            </label>
          </div>

          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
              Dark Mode
            </label>
          </div>

          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={() => handleToggle('autoSave')}
              />
              Auto-save Changes
            </label>
          </div>
        </div>

        <div className="setting-group">
          <h3>Language</h3>
          
          <div className="setting-item">
            <select 
              name="language" 
              value={settings.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <button onClick={handleSave} className="save-btn">
          Save Settings
        </button>
      </div>

      <div className="info-box">
        <h3>Nested Route Demo</h3>
        <p>This is the ProfileSettings component, rendered at the nested route (/profile/settings).</p>
        <p>Notice how the URL changes while the parent Profile component layout remains.</p>
      </div>
    </div>
  );
};

export default ProfileSettings;