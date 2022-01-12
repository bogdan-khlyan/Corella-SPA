/**
 * ОБРАБАТЫВАЕМ ДАННЫЕ В НУЖНЫЙ ВИД ДЛЯ ПРИЛОЖЕНИЯ И СОХРАНЯЕМ
 *
 * Слой сервиса предназначен для обработки данных полученных репозиторием или выполнения бизнес-логики.
 *
 * В этом слое преобразуем данные, которые пришли из репозитория в нужный вид.
 * Взаиможействие со стором (сохранение, удаление, преобразование данных) так же происходит тут.
 * Обработка специфических ошибок, которые не может обработать стандартный обработчик HTTP-ошибок
 * так же производятся тут.
 *
 * Экземпляр сервиса является приватным полем контроллера, вызывать методы сервиса может только контроллер.
 */
import UserInstanceRepository from "@/app/userInstance/user-instance.repository";
import {setIsLoggedIn, userInstanceState} from "@/app/userInstance/user-instance.state";
import {notificationsHelper} from "@/helpers/notifications.helper";

export default class UserInstanceService {

    #repository = new UserInstanceRepository()

    async logout() {
        try {
            const data = await this.#repository.logout()
            setIsLoggedIn(false)
            notificationsHelper.success({ message: 'You have successfully logged out of your account' })
            return data
        } catch (error) {
            console.log(error)
            throw error
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
            notificationsHelper.success({ message: 'Profile has been successfully updated' })
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
