import UserInstanceRepository from '@/app/userInstance/user-instance.repository'
import {
  setIsLoggedIn,
  userInstanceState,
} from '@/app/userInstance/user-instance.state'
import { notificationsHelper } from '@/helpers/notifications.helper'

export default class UserInstanceService {
  #repository = new UserInstanceRepository()

  logoutPromise = null

  async logout() {
    try {
      if (this.logoutPromise) {
        return this.logoutPromise
      }
      this.logoutPromise = this.#repository.logout()
      const data = await this.logoutPromise
      notificationsHelper.success({
        message: 'You have successfully logged out of your account',
      })
      return data
    } finally {
      notificationsHelper.success({ message: 'Session time expired' })
      setIsLoggedIn(false)
      this.logoutPromise = null
    }
  }

  async changePassword(requestData) {
    try {
      const data = await this.#repository.changePassword(requestData)
      notificationsHelper.success({ message: 'Password changed successfully' })
      return data
    } catch (error) {
      const errorData = error.response.data.error
      if (errorData.code === 2005) {
        throw { currentPassword: errorData.message }
      } else {
        notificationsHelper.error()
      }
      throw error
    }
  }

  async updateProfile(profile) {
    try {
      const userInfo = await this.#repository.updateProfile(profile)
      userInstanceState.info = userInfo
      notificationsHelper.success({
        message: 'Profile has been successfully updated',
      })
      return userInfo
    } catch (error) {
      console.log(error)
      notificationsHelper.error()
      throw error
    }
  }

  async getMe() {
    const userInfo = await this.#repository.getMe()
    userInstanceState.info = userInfo
    return userInfo
  }

  async login(credentials) {
    try {
      const data = await this.#repository.login(credentials)
      setIsLoggedIn(true)
      userInstanceState.info = data
      notificationsHelper.success({ message: 'Authorization is successful' })
      return data
    } catch (error) {
      console.log(error)
      notificationsHelper.error()
      throw error
    }
  }

  async register(user) {
    return await this.#repository.register(user)
  }
}
