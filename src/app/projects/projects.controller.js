import ProjectsService from "@/app/projects/projects.service";

class ProjectsController {

    #service = new ProjectsService()

    async getProjects() {
        return await this.#service.getProjects()
    }

    async getProjectById(id) {
        return await this.#service.getProjectById(id)
    }

    getProjectTemplate() {
        return [
            {tasks: [{}, {}]},
            {tasks: [{}, {}]},
            {tasks: [{}, {}]}
        ]
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
