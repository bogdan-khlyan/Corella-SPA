import User from './components/user'
import Project from './components/project'

export default class Api {

    constructor() {
        this.user = new User()
        this.project = new Project()
    }

}
