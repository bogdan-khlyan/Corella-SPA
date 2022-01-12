import http from '@/axiosConfig/base-axios-config'

export default class UserManagementRepository {

    async getUsers(params) {
        const { limit = 10, page = 1 } = params
        return await http.get(`/api/users?limit=${limit}&page=${page}`)
    }

    async createUser(user) {
        const {username, email, password} = user

        return await http.post('/api/user', {username, email, role, password})
    }

    async updateUser(user) {
        const { username, password, email, role, _id } = user
        return http.patch('/api/user', { username, password, email, role, _id })
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
