
export default class UserManagementRepository {

    async getUsers() {
        const users = JSON.parse(localStorage.getItem('users'))
        return {
            total: users.length,
            users: users
        }
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

}
