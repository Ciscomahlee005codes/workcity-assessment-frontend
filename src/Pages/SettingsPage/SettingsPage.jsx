import React from 'react'
import "./SettingsPage.css"
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import Settings from '../../Dashboard/Settings/Settings'

const SettingsPage = () => {
  return (
    <div className='settings-wrapper'>
        <Sidebar />
        <div className="settings-content">
            <Settings />
        </div>
    </div>
  )
}

export default SettingsPage