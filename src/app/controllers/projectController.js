const projects = [];

class ProjectController {
  index(req, res) {
    return res.json(projects);
  }

  store(req, res) {
    const project = req.body;
    projects.push(project);
    return res.json(project);
  }

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).json('projeto não encontrado');
    }

    project.title = title;
    const index = projects.indexOf(project);

    projects[index] = project;

    return res.json(project);
  }

  delete(req, res) {
    const { id } = req.params;
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).json('projeto não encontrado');
    }
    const index = projects.indexOf(project);

    const deletedProject = projects.splice(index, 1);

    return res.json(deletedProject);
  }

  addTask(req, res) {
    const { id } = req.params;
    const tasks = req.body;
    const project = projects.find(p => p.id === id);
    if (!project) {
      return res.status(404).json('projeto não encontrado');
    }

    project.tasks.push(tasks);

    return res.json(project);
  }
}

export default new ProjectController();
