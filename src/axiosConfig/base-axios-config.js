import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_HOST
})

http.defaults.headers.common['Content-Type'] = 'application/json'

http.interceptors.request.use( async function (config) {
    return config
})

http.interceptors.response.use((response) => {
    return response
}, (error) => {
    throw error
})

export default http
