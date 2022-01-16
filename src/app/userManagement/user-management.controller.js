import UserManagementService from "@/app/userManagement/user-management.service";

class UserInstanceController {

    #service = new UserManagementService()

    async getUsers(params) {
        return this.#service.getUsers(params)
    }

    async createUser(user) {
        return this.#service.createUser(user)
    }

    async updateUser(user) {
        return this.#service.updateUser(user)
    }

    async banUser(userId, isBanned) {
        return this.#service.banUser(userId, isBanned)
    }

}

export const userManagementController = new UserInstanceController()
