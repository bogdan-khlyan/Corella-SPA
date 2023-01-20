import { ElNotification } from 'element-plus'

class NotificationsHelper {
  success(options) {
    ElNotification.success({
      title: 'Success',
      message: 'Completed successfully',
      ...options,
    })
  }

  warning(options) {
    ElNotification.warning({
      title: 'Warning',
      message: '',
      ...options,
    })
  }

  error(options) {
    ElNotification.error({
      title: 'Error',
      message: 'Something went wrong',
      ...options,
    })
  }

  /**
   * @param {Object} options
   * @param {Boolean|String|{find: String, set: String}} options.backend
   * @param {Boolean|String} options.base
   * */
  fromHttpError(error, options = null) {
    if (options) {
      options = {
        base: true,
        backend: true,
        ...options,
      }
    } else {
      options = {
        base: true,
        backend: true,
      }
    }

    const backendMessage = this._getBackendErrorMessage(error)

    if (typeof error.code === 'string') {
      ElNotification.error({
        title: 'Error',
        message: 'Internet connection error',
      })
      console.error(error)
    } else if (options.backend && backendMessage) {
      if (
        typeof options.backend === 'object' &&
        options.backend.find === backendMessage
      ) {
        ElNotification.error({
          title: 'Error',
          message: options.backend.set,
        })
      } else {
        ElNotification.error({
          title: 'Error',
          message: backendMessage,
        })
      }
    } else if (options.base) {
      if (typeof options.base === 'string') {
        ElNotification.error({
          title: 'Error',
          message: options.base,
        })
      } else {
        ElNotification.error({
          title: 'Error',
          message: 'Something went wrong',
        })
      }
    }
  }

  _getBackendErrorMessage(error) {
    if (error.response?.data?.reasons?.[0]) {
      return error.response.data.reasons[0]
    }
    if (error.response?.data?.message) {
      return error.response.data.message
    }
    if (error.response?.data?.error?.errors?.[0]?.message) {
      return error.response.data.error.errors[0].message
    }
    if (error.response?.data?.error?.message) {
      return error.response.data.error.message
    }
    return null
  }
}

export const notificationsHelper = new NotificationsHelper()
