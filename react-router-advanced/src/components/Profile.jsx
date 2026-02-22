import React, { useContext } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../App';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import './Profile.css';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <p className="welcome-message">Welcome back, {user?.username}!</p>
      
      {/* Nested navigation */}
      <nav className="profile-nav">
        <NavLink 
          to="/profile" 
          end
          className={({ isActive }) => 
            isActive ? 'profile-link active' : 'profile-link'
          }
        >
          Profile Details
        </NavLink>
        <NavLink 
          to="/profile/settings" 
          className={({ isActive }) => 
            isActive ? 'profile-link active' : 'profile-link'
          }
        >
          Settings
        </NavLink>
      </nav>

      {/* Nested Routes */}
      <div className="profile-content">
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;