import React from 'react'
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import "./ProjectPage.css"
import Projects from '../../Dashboard/Projects/Projects'

const ProjectPage = () => {
  return (
    <div className='project-wrapper'>
        <Sidebar />
      <div className="project-content">
        <Projects />
      </div>
    </div>
  )
}

export default ProjectPage