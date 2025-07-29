import React from 'react'
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import './ManagementPage.css'
import UserManagement from '../../Dashboard/UserManagement/UserManagement'

const ManagementPage = () => {
  return (
    <div className='manage-wrapper'>
      <Sidebar />
      <div className="manage-content">
        <UserManagement />
      </div>
    </div>
  )
}

export default ManagementPage