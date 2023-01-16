import axios from 'axios'
// import store from '@/store'
// import Cookies from 'js-cookie'

export class Axios {
  axiosInstance

  constructor(options) {
    this.axiosInstance = axios.create(options)

    this.setupInterceptors()
  }

  setupInterceptors() {
    /* this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401
                    && !error.config.url.includes('signout')) {
                    Cookies.set('redirectAfterLogin', window.location.href)
                    store.dispatch('user/logout')
                    window.location.href = `${store.state.appUrl}/login`
                }

                return Promise.reject(error)
            },
        ) */
  }

  get(url, config) {
    return this.request({
      ...config,
      url,
      method: 'GET',
    })
  }

  post(url, config) {
    return this.request({
      ...config,
      url,
      method: 'POST',
    })
  }

  patch(url, config) {
    return this.request({
      ...config,
      url,
      method: 'PATCH',
    })
  }

  put(url, config) {
    return this.request({
      ...config,
      url,
      method: 'PUT',
    })
  }

  delete(url, config) {
    return this.request({
      ...config,
      url,
      method: 'DELETE',
    })
  }

  async request(config) {
    const data = await this.axiosInstance.request(config)
    return data.data
  }
}
