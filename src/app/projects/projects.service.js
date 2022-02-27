import ProjectsRepository from "@/app/projects/projects.repository";
import {projectsState} from "@/app/projects/projects.state";
import {notificationsHelper} from "@/helpers/notifications.helper";

export default class ProjectsService {

    #repository = new ProjectsRepository()

    async getProjects() {
        return await this.#repository.getProjects()
    }

    async getProjectById(id) {
        return await this.#repository.getProjectById(id)
    }

    async createProject(project) {
        try {
            const createdProject = await this.#repository.createProject(project)
            // projectsState.projects.push(createdProject)
            notificationsHelper.success({ message: 'Successfully created' })
            return createdProject
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }

    async updateProject(project) {
        try {
            const updatedProject = await this.#repository.updateProject(project)
            const index = projectsState.projects.findIndex(item => item.id === project.id)
            if (index !== -1) {
                projectsState.projects[index] = updatedProject
            }
            notificationsHelper.success({ message: 'Successfully updated' })
            return updatedProject
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }

    async deleteProject(projectId) {
        try {
            const updatedProject = await this.#repository.deleteProject(projectId)
            const index = projectsState.projects.findIndex(item => item.id === projectId)
            projectsState.projects.splice(index, 1)
            notificationsHelper.success({ message: 'Successfully deleted' })
            return updatedProject
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }

}
