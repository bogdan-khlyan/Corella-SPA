import User from './components/user/index'
import Project from './components/project/index'

export default class Api {

    constructor() {
        this.user = new User()
        this.project = new Project()
    }

}
