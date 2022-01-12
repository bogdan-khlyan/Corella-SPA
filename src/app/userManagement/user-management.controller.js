import UserManagementService from "@/app/userManagement/user-management.service";
import http from '@/axiosConfig/base-axios-config'
import {notificationsHelper} from "@/helpers/notifications.helper";

class UserInstanceController {

    #service = new UserManagementService()

    async getUsers() {
        // return this.#service.getUsers()
        const response = await http.get('/api/users?pageda=5')
        return response
    }

    async createUser(user) {
        const {name, email, password} = user
        const role = "USER"
        try {
            const response = await http.post('/api/user', {
                username: "user",
                email: "user@nowhere.com",
                role: "USER",
                password: "string"
            })
            console.log(response.data)
            return response
        } catch (e) {
            console.log(e);
            notificationsHelper.error()
        }

        // http.post('/api/user', {
        //     username: "user",
        //     email: "user@nowhere.com",
        //     role: "USER",
        //     password: "string"
        // })
        //     .catch(result => {
        //         console.log(result)
        //     })




    }

    async updateUser(user) {
        return this.#service.updateUser(user)
    }

    async banUser(userId, isBanned) {
        return this.#service.banUser(userId, isBanned)
    }

}

export const userManagementController = new UserInstanceController()
