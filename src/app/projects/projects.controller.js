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
            {column: Math.random(), tasks: [{order: 1}, {order: 2}]},
            {column: Math.random(), tasks: [{order: 1}, {order: 2}]},
            {column: Math.random(), tasks: [{order: 1}, {order: 2}]}
        ]
    }

    async createProject(project) {
        return project
        // return await this.#service.projectEditor(project)
    }

    async updateProject(project) {
        return await this.#service.updateProject(project)
    }

    async deleteProject(projectId) {
        return await this.#service.deleteProject(projectId)
    }

}

export const projectsController = new ProjectsController()
