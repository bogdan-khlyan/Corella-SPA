export default (http) => ({
  loadProjects() {
    return http.get('/projects')
  },

  loadProjectById(projectId) {
    return http.get(`/projects/${projectId}`)
  },

  updateProject(projectId, data) {
    return http.put(`/projects/${projectId}`, { data })
  },

  deleteProject(projectId) {
    return http.delete(`/projects/${projectId}`)
  },

  createProject(data) {
    return http.post('/projects', { data })
  },

  loadProjectStages(projectId) {
    return http.get(`/projects/${projectId}/stages`)
  },

  createStage(projectId, data) {
    return http.post(`/projects/${projectId}/stages`, { data })
  },

  deleteStage(projectId, stageId) {
    return http.delete(`/projects/${projectId}/stages/${stageId}`)
  },

  patchStage(projectId, stageId, data) {
    return http.patch(`/projects/${projectId}/stages/${stageId}`, { data })
  },

  createTask(projectId, data) {
    return http.post(`/projects/${projectId}/stages/tasks`, { data })
  },

  loadTaskById(taskId) {
    return http.get(`/projects/stages/tasks/${taskId}`)
  },

  addTaskAttachments(taskId, data) {
    return http.post(`/projects/stages/tasks/${taskId}/attachments`, { data })
  },

  patchTask(taskId, data) {
    return http.put(`/projects/stages/tasks/${taskId}`, { data })
  },
})
