import axios from 'axios'
import { userInstanceController } from '@/app/userInstance/user-instance.controller'

const http = axios.create({ })

http.defaults.headers.common['Content-Type'] = 'application/json'

http.interceptors.request.use(async (config) => config)

http.interceptors.response.use((response) => response, (error) => {
  if (error.response?.status === 401 && error.response.config.url !== '/api/user/signout') {
    userInstanceController.logout()
  }
  throw error
})

export default http
