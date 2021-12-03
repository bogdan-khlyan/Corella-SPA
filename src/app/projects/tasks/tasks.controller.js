import TasksService from "@/app/projects/tasks/tasks.service";

class TasksController {
    
    #service = new TasksService()
    
}

export const tasksController = new TasksController()
