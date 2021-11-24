import ProjectsRepository from "@/app/projects/projects.repository";
import {projectsState} from "@/app/projects/projects.state";

export default class ProjectsService {
    
    #repository = new ProjectsRepository()
    
    async getProjects() {
        const projects = await this.#repository.getProjects()
        projectsState.projects = projects
        return projects
    }
    
}
