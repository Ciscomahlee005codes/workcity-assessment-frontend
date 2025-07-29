import React from "react";

const ProjectTable = ({ projects }) => {
  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Client</th>
          <th>Status</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
       {projects?.length > 0 ? (
  projects.map((p) => (
    <tr key={p._id}>
      <td>{p.title}</td>
      <td>{p.client}</td>
      <td>{p.status}</td>
      <td>{p.deadline}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="4">No projects found.</td>
  </tr>
)}

      </tbody>
    </table>
  );
};

export default ProjectTable;
