import React, { useState } from "react";
import { createProject } from "../../../projectApi";

const ProjectForm = ({ setProjects }) => {
  const [form, setForm] = useState({
    title: "",
    client: "",
    description: "",
    status: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProject(form);
      setProjects((prev) => [...prev, res.data]);
      setForm({
        title: "",
        client: "",
        description: "",
        status: "",
        deadline: "",
      });
    } catch (err) {
      console.error("Error creating project:", err);
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <label htmlFor="title">Title:</label>
      <input name="title" value={form.title} onChange={handleChange} required />

      <label htmlFor="client">Client:</label>
      <input name="client" value={form.client} onChange={handleChange} required />

      <label htmlFor="description">Description:</label>
      <textarea name="description" value={form.description} onChange={handleChange} required />

      <label htmlFor="status">Status:</label>
      <input name="status" value={form.status} onChange={handleChange} required />

      <label htmlFor="deadline">Deadline:</label>
      <input type="date" name="deadline" value={form.deadline} onChange={handleChange} required />

      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
