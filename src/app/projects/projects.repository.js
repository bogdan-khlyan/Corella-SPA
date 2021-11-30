import http from "@/app/httpConfig/base-axios-config";

export default class ProjectsRepository {

    async getProjects() {
        // const response = await http.get('/projects')
        // return response.data
        return [{
            id: 1,
            name: 'JuicyData',
            description: 'The work of the artist Martin',
            membersCount: 10,
            tasksCount: 10
        }, {
            id: 2,
            name: 'Buyrem',
            description: 'OLX for the poor',
            membersCount: 6,
            tasksCount: 8
        }, {
            id: 3,
            name: 'UppBe',
            description: 'Project about courses',
            membersCount: 7,
            tasksCount: 0
        }, {
            id: 4,
            name: 'Bets',
            description: 'Sports betting!!',
            membersCount: 7,
            tasksCount: 0
        }]
    }

    async getProjectById() {
        const project = [
            {
                column: 'Backlog',
                tasks: [
                    {
                        id: 182,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                column: 'Discussion',
                tasks: []
            },
            {
                column: 'In Progress',
                tasks: [
                    {
                        id: 183,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 184,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 185,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 186,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 187,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 189,
                        description: 'As user i want X in order to Y'
                    },
                    {
                        id: 190,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                column: 'Review',
                tasks: [
                    {
                        id: 184,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
            {
                column: 'Done',
                tasks: [
                    {
                        id: 185,
                        description: 'As user i want X in order to Y'
                    }
                ]
            },
        ]

        return new Promise(resolve => setTimeout(() => resolve(project), 2000))
    }

    async createProject(project) {
        const response = await http.post('/project', project)
        return response.data
    }

    async updateProject(project) {
        const response = await http.patch('/project', project)
        return response.data
    }

    async deleteProject(projectId) {
        const response = await http.delete('/project', projectId)
        return response.data
    }

}
