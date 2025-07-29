// Mock delay function
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let mockProjects = [
  {
    _id: "1",
    title: "Website Redesign",
    client: "Cisco Inc.",
    description: "Modernize UI for better UX.",
    status: "In Progress",
    deadline: "2025-08-15",
  },
];

export const getProjects = async () => {
  await delay(500); // simulate API delay
  return { data: mockProjects };
};

export const createProject = async (project) => {
  await delay(500);
  const newProject = { ...project, _id: Date.now().toString() };
  mockProjects.push(newProject);
  return { data: newProject };
};

export const updateProject = async (id, updated) => {
  await delay(500);
  mockProjects = mockProjects.map((p) => (p._id === id ? { ...p, ...updated } : p));
  return { data: updated };
};

export const deleteProject = async (id) => {
  await delay(500);
  mockProjects = mockProjects.filter((p) => p._id !== id);
  return { data: { success: true } };
};

export const getProjectsByClient = async (clientId) => {
  await delay(500);
  const filtered = mockProjects.filter((p) => p.client === clientId);
  return { data: filtered };
};
