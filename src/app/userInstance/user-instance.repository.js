/**
 * ПОЛУЧАЕМ ДАННЫЕ
 *
 * Слой репозитория предназначен для получения данных с API
 * В этом слое так же реализуем кеширование, если данные есть в сторе отдаем их, если это необходимо.
 * Взаимодействие с конфигом запроса/ответа так же оставляем тут.
 *
 * Экземпляр репозитория является приватным полем сервиса, вызывать методы репозитория может только сервис.
 */
import http from "@/axiosConfig/base-axios-config";

export default class UserInstanceRepository {

    async logout() {
        let config = null
        if (process.env.NODE_ENV === 'development') {
            config = {
                headers: { 'x-localhost': 'true' } // добавляю дев-хедер для прохождения авторизации с localhost
            }
        }
        const response = await http.delete('/api/user/signout', config)
        return response.data
    }

    async changePassword(requestData) {
        const response = await http.patch('/api/user/password', requestData)
        return response.data
    }

    async updateProfile(profile) {
        const response = await http.patch(`/api/user`, profile)
        return response.data.user
    }

    async getMe() {
        const response = await http.get(`/api/user`)
        return response.data.user
    }
    
    /**
     * @param {object} credentials
     * @param {string} credentials.login
     * @param {string} credentials.password
     * @returns {Promise<any>}
     */
    async login(credentials) {
        let config = null
        if (process.env.NODE_ENV === 'development') {
            config = {
                headers: { 'x-localhost': 'true' } // добавляю дев-хедер для прохождения авторизации с localhost
            }
        }
        const response = await http.post(`/api/user/signin`, credentials, config)
        return response.data
    }
    
    /**
     * @param {object} user
     * @param {object} user.email
     * @param {object} user.password
     * @returns {Promise<any>}
     */
    async register(user) {
        const response = await http.post(`/register`, user)
        return response.data
    }
    
}
