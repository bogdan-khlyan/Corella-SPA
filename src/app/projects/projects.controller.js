import ProjectsService from "@/app/projects/projects.service";

class ProjectsController {
    
    #service = new ProjectsService()
    
    getProjects() {
        return this.#service.getProjects()
    }
    
}

export const projectsController = new ProjectsController()
