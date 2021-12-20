import UserManagementRepository from "@/app/userManagement/user-management.repository";
import {notificationsHelper} from "@/helpers/notifications.helper";

export default class UserManagementService {

    #repository = new UserManagementRepository()

    async getUsers() {
        return await this.#repository.getUsers()
    }

    async createUser(user) {
        try {
            const data = await this.#repository.createUser(user)
            notificationsHelper.success({ message: 'User has been successfully created' })
            return data
        } catch (error) {
            console.log(error)
            notificationsHelper.error()
            throw error
        }
    }

    async updateUser(user) {
        try {
            const data = await this.#repository.updateUser(user)
            notificationsHelper.success({ message: 'User has been successfully updated' })
            return data
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}
