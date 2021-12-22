import TasksRepository from "@/app/projects/tasks/tasks.repository";

export default class TasksService {
    
    #repository = new TasksRepository()
       
    
    async getUploadedFiles(id) {
    	const data = await this.#repository.getUploadedFiles(id);
    	return data;
    }
    async getIssues(id) {
    	const data = await this.#repository.getIssues(id);
    	return data;
    }
   // async getMember(id) {
   //  	const data = await this.#repository.getMember(id);
   //  	return data;
   //  }
    async addFile(newFile) {
    	const data = await this.#repository.addFile(newFile);
    	return data;
    }
   async updateMembers(newMember) {
    	const data = await this.#repository.updateMembers(newFile);
    	return data;
    } 
}
