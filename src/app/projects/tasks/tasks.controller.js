import TasksService from '@/app/projects/tasks/tasks.service'

class TasksController {
  #service = new TasksService()

  async getTaskById(taskId) {
    return await this.#service.getTaskById(taskId)
  }

  async updateTask(task) {
    return this.#service.updateTask(task)
  }

  async getUploadedFiles(id) {
    const data = await this.#service.getUploadedFiles(id)
    return data
  }

  async removeFile(taskId, fileId) {
    const data = await this.#service.removeFile(taskId, fileId)
    return data
  }

  async getSelectedMembers(id) {
    const data = await this.#service.getSelectedMembers(id)
    return data
  }

  async getIssues(id) {
    const data = await this.#service.getIssues(id)
    return data
  }

  async getMembers(id) {
    const data = await this.#service.getMembers(id)
    return data
  }

  async uploadFiles(files) {
    const data = await this.#service.uploadFiles(files)
    return data
  }

  async updateSelectedMembers(members) {
    const data = await this.#service.updateSelectedMembers(members)
    return data
  }
}

export const tasksController = new TasksController()
