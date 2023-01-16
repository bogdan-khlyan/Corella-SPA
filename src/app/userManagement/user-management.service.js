import UserManagementRepository from '@/app/userManagement/user-management.repository'
import { notificationsHelper } from '@/helpers/notifications.helper'

export default class UserManagementService {
  #repository = new UserManagementRepository()

  async getUsers(params) {
    try {
      return await this.#repository.getUsers(params)
    } catch (error) {
      notificationsHelper.fromHttpError(error)
      throw error
    }
  }

  async createUser(user) {
    try {
      const data = await this.#repository.createUser(user)
      notificationsHelper.success({ message: 'User has been successfully created' })
      return data
    } catch (error) {
      notificationsHelper.fromHttpError(error)
      throw error
    }
  }

  async updateUser(user) {
    try {
      const data = await this.#repository.updateUser(user)
      notificationsHelper.success({ message: 'User has been successfully updated' })
      return data
    } catch (error) {
      notificationsHelper.fromHttpError(error)
      throw error
    }
  }

  async banUser(userId, isBanned) {
    try {
      const data = await this.#repository.banUser(userId, isBanned)
      notificationsHelper.success()
      return data
    } catch (error) {
      console.log(error)
      notificationsHelper.error()
      throw error
    }
  }
}
