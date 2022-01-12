import http from '@/axiosConfig/base-axios-config'

export default class UserManagementRepository {

    async getUsers() {
        // if (!localStorage.getItem('users')) {
        //     localStorage.setItem('users', '[]')
        // }
        // const users = JSON.parse(localStorage.getItem('users'))
        // return {
        //     total: users.length,
        //     users: users
        // }

    }

    async createUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        return user
    }

    async updateUser(user) {
        const users = JSON.parse(localStorage.getItem('users'))
        const index = users.findIndex(item => item.id === user.id)
        users[index] = user
        localStorage.setItem('users', JSON.stringify(users))
        return user
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
