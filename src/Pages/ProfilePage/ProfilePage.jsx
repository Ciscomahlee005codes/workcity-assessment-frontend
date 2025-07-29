import React from 'react'
import "./ProfilePage.css"
import ClientProfile from '../../Dashboard/ClientProfile/ClientProfile'
import Sidebar from '../../Dashboard/Sidebar/Sidebar'

const ProfilePage = () => {
  return (
    <div className='profile-wrapper'>
         <Sidebar />
         <div className="profile-content">
            <ClientProfile />
         </div>
        
    </div>
  )
}

export default ProfilePage