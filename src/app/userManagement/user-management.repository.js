import http from '@/axiosConfig/base-axios-config'

export default class UserManagementRepository {

    async getUsers(params) {
        const { limit = 10, page = 1 } = params
        const response = await http.get(`/api/admin/users`, {
            params: { limit, page }
        })
        return response.data
    }

    async createUser(user) {
        const {username, email, password, role} = user
        const response = await http.post('/api/admin/user', {username, email, role, password})
        return response.data
    }

    async updateUser(user) {
        const { username, password, email, role, id } = user
        const response = await http.patch(`/api/admin/user/${id}`, { username, password, email, role })
        return response.data
    }

    async banUser(userId, isBanned) {
        const users = JSON.parse(localStorage.getItem('users'))
        const index = users.findIndex(item => item.id === userId)
        users[index] = {
            ...users[index],
            isBan: isBanned
        }
        localStorage.setItem('users', JSON.stringify(users))
        return isBanned
    }

}
