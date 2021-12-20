import UserManagementService from "@/app/userManagement/user-management.service";

class UserInstanceController {

    #service = new UserManagementService()

    async getUsers() {
        return this.#service.getUsers()
    }

    async createUser(user) {
        return this.#service.createUser(user)
    }

    async updateUser(user) {
        return this.#service.updateUser(user)
    }

}

export const userManagementController = new UserInstanceController()
