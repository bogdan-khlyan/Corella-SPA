import ProjectsService from "@/app/projects/projects.service";

class ProjectsController {

    #service = new ProjectsService()

    async getProjects() {
        return await this.#service.getProjects()
    }

    async getProjectsById(id) {
        return await this.#service.getProjectById(id)
    }

    async createProject(project) {
        return await this.#service.createProject(project)
    }

    async updateProject(project) {
        return await this.#service.updateProject(project)
    }

    async deleteProject(projectId) {
        return await this.#service.deleteProject(projectId)
    }

}

export const projectsController = new ProjectsController()
