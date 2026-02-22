import React from 'react';
import useAuth from '../hooks/useAuth';  // Import useAuth hook
import './ProfileDetails.css';

const ProfileDetails = () => {
  const { user } = useAuth();  // Use the custom hook

  return (
    <div className="profile-details">
      <h2>Profile Details</h2>
      
      <div className="details-grid">
        <div className="detail-item">
          <label>Username:</label>
          <span>{user?.username}</span>
        </div>
        
        <div className="detail-item">
          <label>Email:</label>
          <span>{user?.email}</span>
        </div>
        
        <div className="detail-item">
          <label>User ID:</label>
          <span>{user?.id}</span>
        </div>
        
        <div className="detail-item">
          <label>Member Since:</label>
          <span>February 2026</span>
        </div>
        
        <div className="detail-item">
          <label>Account Status:</label>
          <span className="badge active">Active</span>
        </div>
        
        <div className="detail-item">
          <label>Role:</label>
          <span className="badge user">User</span>
        </div>
      </div>

      <div className="info-box">
        <h3>Nested Route Demo</h3>
        <p>This is the ProfileDetails component, rendered at the index route (/profile).</p>
        <p>Click on "Settings" to see nested routing in action.</p>
      </div>
    </div>
  );
};

export default ProfileDetails;