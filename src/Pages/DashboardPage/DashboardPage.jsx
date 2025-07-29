import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import "./DashboardPage.css";
import DashboardOverview from '../../Dashboard/DashboardOverview/DashboardOverview';
import ProjectTable from '../../Dashboard/Projects/ProjectTable';
import { getProjects } from "../../../projectApi";

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className='dashboard-wrapper'>
      <Sidebar />
      <div className="dashboard-content">
        <DashboardOverview />
        <ProjectTable projects={projects} />
      </div>
    </div>
  );
};

export default DashboardPage;
