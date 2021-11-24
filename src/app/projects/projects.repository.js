// import http from "@/app/httpConfig/base-axios-config";

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
    
}
