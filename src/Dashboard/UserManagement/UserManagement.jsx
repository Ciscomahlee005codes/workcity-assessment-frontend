import React, { useState } from 'react';
import './UserManagement.css';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Client', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
  { id: 3, name: 'Tony Blake', email: 'tony@example.com', role: 'Client', status: 'Suspended' },
  { id: 4, name: 'Sarah Lee', email: 'sarah@example.com', role: 'Manager', status: 'Active' },
  { id: 5, name: 'Michael Cruz', email: 'mike@example.com', role: 'Client', status: 'Active' },
  { id: 6, name: 'Ada Obi', email: 'ada@example.com', role: 'Client', status: 'Suspended' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Client' });

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const suspendUser = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' } : user
    ));
  };

  const handleAddUser = () => {
    const newId = users.length + 1;
    setUsers([...users, { ...newUser, id: newId, status: 'Active' }]);
    setShowModal(false);
    setNewUser({ name: '', email: '', role: 'Client' });
  };

  return (
    <div className="user-management-container">
      <div className="header">
        <h2>User Management</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>+ Add New User</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className={user.status === 'Suspended' ? 'suspended' : ''}>
              <td data-label="Name">{user.name}</td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Role">{user.role}</td>
              <td  data-label="Status">{user.status}</td>
              <td data-label="Actions" className="actions-cell">
                <button className="suspend-btn" onClick={() => suspendUser(user.id)}>
                  {user.status === 'Active' ? 'Suspend' : 'Activate'}
                </button>
                <button className="remove-btn" onClick={() => removeUser(user.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New User</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="Client">Client</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
            </select>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="save-btn" onClick={handleAddUser}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
