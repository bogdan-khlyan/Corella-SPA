import UserInstanceService from '@/app/userInstance/user-instance.service'
import router from '@/router/router'

class UserInstanceController {
  #service = new UserInstanceService()

  async logout() {
    try {
      return await this.#service.logout()
    } finally {
      router.push('/login')
    }
  }

  async changePassword(viewData) {
    return await this.#service.changePassword({
      password: viewData.newPassword,
      oldPassword: viewData.currentPassword,
    })
  }

  async updateProfile(profile) {
    return await this.#service.updateProfile(profile)
  }

  async getMe() {
    return await this.#service.getMe()
  }

  async login(credentials) {
    const data = await this.#service.login(credentials)
    router.push('/')
    return data
  }

  async register(user) {
    return await this.#service.register(user)
  }
}

export const userInstanceController = new UserInstanceController()
