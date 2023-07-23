import axios from 'axios'
import router from '@/router/router'
import { useUserStore } from '@/store/modules/user'
import { toast } from 'vue3-toastify'

export class Axios {
  axiosInstance

  #controller = new AbortController()

  constructor(options) {
    this.axiosInstance = axios.create(options)

    this.setupInterceptors()
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config) => {
      config.signal = this.#controller.signal
      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const userStore = useUserStore()

        this.showErrorMessage(error)

        const errorStatus = error.response?.status

        if (
          (errorStatus === 401 || errorStatus === 403) &&
          !error.config.url.includes('signout')
        ) {
          this.#controller.abort()

          await userStore.logout(false)
          await router.push('/login-page')

          this.#controller = new AbortController()
        }

        return Promise.reject(error)
      }
    )
  }

  showErrorMessage(error) {
    if (!axios.isCancel(error)) {
      const isInterceptErrorMessage =
        error.response.config.interceptErrorMessage

      if (isInterceptErrorMessage) {
        const errorMessage =
          error.response.data.message || 'Something went wrong'

        toast.error(errorMessage)
      }
    }
  }

  get(url, config, interceptErrorMessage = true) {
    return this.request({
      ...config,
      url,
      method: 'GET',
      interceptErrorMessage,
    })
  }

  post(url, config, interceptErrorMessage = true) {
    return this.request({
      ...config,
      url,
      method: 'POST',
      interceptErrorMessage,
    })
  }

  patch(url, config, interceptErrorMessage = true) {
    return this.request({
      ...config,
      url,
      method: 'PATCH',
      interceptErrorMessage,
    })
  }

  put(url, config, interceptErrorMessage = true) {
    return this.request({
      ...config,
      url,
      method: 'PUT',
      interceptErrorMessage,
    })
  }

  delete(url, config, interceptErrorMessage) {
    return this.request({
      ...config,
      url,
      method: 'DELETE',
      interceptErrorMessage,
    })
  }

  async request(config) {
    const data = await this.axiosInstance.request(config)
    return data.data
  }
}
