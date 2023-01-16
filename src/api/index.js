import http from '../utils/http'
import authModule from './modules/auth'

export const createApi = () => {
    return {
        auth: authModule(http)
    }
}
