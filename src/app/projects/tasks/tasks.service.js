import TasksRepository from "@/app/projects/tasks/tasks.repository"

export default class TasksService {

    #repository = new TasksRepository()


    async getUploadedFiles(id) {
        const data = await this.#repository.getUploadedFiles(id)
        return data
    }

    async getIssues(id) {
        const data = await this.#repository.getIssues(id)
        return data
    }
    async getMembers(id) {
        const data = await this.#repository.getMembers(id)
        return data
    }
    async getSelectedMembers(id) {
        const data = await this.#repository.getSelectedMembers(id);
        return data;
    }
    async removeFile(taskId, fileId) {
        const data = await this.#repository.removeFile(taskId, fileId);
        return data;
    }
    async uploadFiles(files) {
        const data = await this.#repository.uploadFiles(files)
        return data
    }

    async updateSelectedMembers(members) {
        try {
            const data = await this.#repository.updateSelectedMembers(members)
            return data
        } catch (err) {
            console.log(err)
        }


    }
}
