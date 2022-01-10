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
import { v4 as uuid } from 'uuid';

export default class UserInstanceRepository {

    async updateProfile(profile) {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        userInfo = {
            ...userInfo,
            ...profile
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        return userInfo
    }

    async getMe() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            userInfo = {
                id: uuid(),
                name: 'Lana-lana',
                email: 'default@gmail.com',
                avatar: uuid()
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
        return userInfo
        // const response = await http.get(`/me`)
        // return response.data
    }
    
    /**
     * @param {object} credentials
     * @param {string} credentials.login
     * @param {string} credentials.password
     * @returns {Promise<any>}
     */
    async login(credentials) {
        const response = await http.post(`/api/user/signin`, credentials)
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
