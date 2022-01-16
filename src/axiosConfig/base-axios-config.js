import axios from 'axios'

const http = axios.create({ })

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
