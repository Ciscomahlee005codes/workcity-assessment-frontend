import React, { useEffect, useState } from "react";
import { getProjects } from "../../../projectApi";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import "./Projects.css"


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="project-dashboard">
      <h2>Project Dashboard</h2>
      <ProjectForm setProjects={setProjects} />
      <ProjectTable projects={projects} setProjects={setProjects} />
    </div>
  );
};

export default Projects;
