import http from "@/axiosConfig/base-axios-config";
import { v4 as uuid } from 'uuid';

export default class ProjectsRepository {

    async getProjects() {
        // const response = await http.get('/projects')
        // return response.data
        // return []
        // console.log(JSON.parse(localStorage.getItem('projects')))
        let projects = JSON.parse(localStorage.getItem('projects'))
        if (!projects) {
            projects = [{
                id: uuid(),
                name: 'Test project',
                description: 'Test project description',
                membersCount: 3,
                tasksCount: 5
            }]
            localStorage.setItem('projects', JSON.stringify(projects))
        }
        return projects ? projects : []
    }

    async getProjectById() {
        const project = [
            {
                id: uuid(),
                column: 'Backlog',
                tasks: [
                    {
                        id: 1,
                        order: 0,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                id: uuid(),
                column: 'Discussion',
                tasks: []
            },
            {
                id: uuid(),
                column: 'In Progress',
                tasks: [
                    {
                        id: 183,
                        order: 0,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 184,
                        order: 1,
                        description: 'As user i want X in order to Y As user i want X in order to Y'
                    },
                    {
                        id: 185,
                        order: 2,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 186,
                        order: 3,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 187,
                        order: 4,
                        description: 'As user i want X in order to Y As user i want X in order to Y As user ' +
                            'i want X in order to Y As user i want X in order to Y'
                    },
                    {
                        id: 189,
                        order: 5,
                        description: 'As user i want X in order to Y As user i want X in order to Y As user ' +
                            'i want X in order to Y'
                    },
                    {
                        id: 190,
                        order: 6,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 191,
                        order: 7,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 192,
                        order: 8,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 193,
                        order: 9,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 194,
                        order: 10,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 195,
                        order: 11,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 196,
                        order: 12,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                id: uuid(),
                column: 'Review',
                tasks: [
                    {
                        id: 2,
                        order: 0,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                id: uuid(),
                column: 'Done',
                tasks: [
                    {
                        id: 3,
                        order: 0,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
        ]

        return new Promise(resolve => setTimeout(() => resolve(project), 2000))
    }

    async createProject(project) {
        project = {
            id: uuid(),
            ...project
        }
        let projects = JSON.parse(localStorage.getItem('projects'))
        if (projects) {
            projects.push(project)
        } else {
            projects = [project]
        }
        localStorage.setItem('projects', JSON.stringify(projects))
        return project
        // const response = await http.post('/project', project)
        // return response.data
    }

    async updateProject(project) {
        const response = await http.patch('/project', project)
        return response.data
    }

    async deleteProject(projectId) {
        const projects = JSON.parse(localStorage.getItem('projects'))
        const index = projects.findIndex(project => project.id === projectId)
        projects.splice(index, 1)
        localStorage.setItem('projects', JSON.stringify(projects))
        return projects
        // const response = await http.delete('/project', projectId)
        // return response.data
    }

}
