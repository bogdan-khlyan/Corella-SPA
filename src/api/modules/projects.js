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

  loadProjectStagesWithTasks(projectId) {
    return http.get(`/projects/${projectId}/stages/tasks`)
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

  removeTaskAttachments(taskId, attachmentIds) {
    const params = new URLSearchParams()

    attachmentIds.forEach((id) => {
      params.append('ids', id)
    })

    return http.delete(`/projects/stages/tasks/${taskId}/attachments`, {
      params,
    })
  },

  patchTask(taskId, data) {
    return http.patch(`/projects/stages/tasks/${taskId}`, { data })
  },

  getProjectRole(projectId) {
    return http.get(`/projects/${projectId}/roles/me`)
  },

  getProjectRoles(projectId) {
    return http.get(`/projects/${projectId}/roles`)
  },

  addProjectRole(projectId, data) {
    return http.post(`/projects/${projectId}/roles`, { data })
  },

  patchProjectRole(projectId, roleId, data) {
    return http.patch(`/projects/${projectId}/roles/${roleId}`, { data })
  },

  deleteProjectRole(projectId, roleId) {
    return http.delete(`/projects/${projectId}/roles/${roleId}`)
  },
})
