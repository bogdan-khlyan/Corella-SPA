import TasksService from "@/app/projects/tasks/tasks.service";

class TasksController {
    
    #service = new TasksService()
    
    async getUploadedFiles(id) {
    	const data = await this.#service.getUploadedFiles(id);
    	return data;
    }
    async getIssues(id) {
    	const data = await this.#service.getIssues(id);
    	return data;
    }
   async getMember(id) {
    	const data = await this.#service.getMember(id);
    	return data;
    }
    async addFile(newFile) {
    	const data = await this.#service.addFile(newFile);
    	return data;
    }
   async updateMembers(newMember) {
    	const data = await this.#service.updateMembers(newFile);
    	return data;
    }

}

export const tasksController = new TasksController()
