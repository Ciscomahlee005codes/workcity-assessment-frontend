import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaSignOutAlt,
  FaTimes
} from 'react-icons/fa';
import { FaUsers, FaBarsStaggered } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from '../../Context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (nameOrEmail) => {
    if (!nameOrEmail) return 'U';
    return nameOrEmail
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes className="close" /> : <FaBarsStaggered />}
      </div>

      {/* Sidebar Panel */}
      <aside className={`client-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <h2>Work<span>City.</span></h2>
        </div>

        {/* User Info */}
        <div className="user-info">
          <div className="avatar">
            {getInitials(user?.fullName || user?.email)}
          </div>
          <div className="details">
            <p className="full-name">{user?.fullName || "User"}</p>
            <p className="email">{user?.email}</p>
            <p className="role">Client</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <NavLink to="/dashboard/home" onClick={closeSidebar}><FaHome /> Dashboard</NavLink>
          <NavLink to="/dashboard/profile" onClick={closeSidebar}><FaUserAlt /> Profile</NavLink>
          <NavLink to="/dashboard/userManagement" onClick={closeSidebar}><FaUsers /> Users Management</NavLink>
          <NavLink to="/dashboard/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</NavLink>
          <NavLink to="/dashboard/settings" onClick={closeSidebar}><IoMdSettings /> Settings</NavLink>
        </nav>

        {/* Logout */}
        <div className="logout-section">
          <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <h3>Are you sure you want to logout?</h3>
            <div className="logout-actions">
              <button className="confirm-btn" onClick={handleLogout}>Yes, Logout</button>
              <button className="cancel-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
