/**
 * Слой репозитория предназначен для получения данных с API
 * В этом слое так же реализуем кеширование, если данные есть в сторе отдаем их, если это необходимо.
 * Взаимодействие с конфигом запроса/ответа так же оставляем тут.
 *
 * Экземпляр репозитория является приватным полем сервиса, вызывать методы репозитория может только сервис.
 */
import http from "@/app/httpConfig/base-axios-config";

export default class UserInstanceRepository {
    
    /**
     * @param {object} credentials
     * @param {string} credentials.email
     * @param {string} credentials.password
     * @returns {Promise<any>}
     */
    async login(credentials) {
        const response = await http.post(`/login`, credentials)
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
