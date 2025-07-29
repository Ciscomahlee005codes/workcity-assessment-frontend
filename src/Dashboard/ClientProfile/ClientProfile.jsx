import React from 'react';
import './ClientProfile.css';
import { useAuth } from '../../Context/AuthContext';

const ClientProfile = () => {
  const { user } = useAuth(); 

  if (!user) return <p>Loading...</p>;

  const fullName = user.name || user.fullName || "Anonymous";
  const abbreviation = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  const email = user.email || "Not provided";
  const phone = user.phone || '+234 000 000 0000';
  const role = user.role || "Client";

  return (
    <div className="client-profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <span>{abbreviation}</span> {/* Profile initials */}
        </div>
        <div className="profile-info">
          <h2>{fullName}</h2>
          <p className="role">{role} - Premium Member</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      <div className="profile-contact">
        <h3>Contact Information</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <h4>Projects</h4>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h4>Tasks</h4>
          <p>23</p>
        </div>
        <div className="stat-card">
          <h4>Status</h4>
          <p>Active</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
