import { ElNotification } from 'element-plus'


class NotificationsHelper {
    
    success(options) {
        ElNotification.success({
            title: 'Success',
            message: 'Completed successfully',
            ...options
        })
    }
    
    warning(options) {
        ElNotification.warning({
            title: 'Warning',
            message: '',
            ...options
        })
    }
    
    error(options) {
        ElNotification.error({
            title: 'Error',
            message: 'Something went wrong',
            ...options
        })
    }
    
    /**
     * @param {Object} options
     * @param {Boolean|String|{find: String, set: String}} options.backend
     * @param {Boolean|String} options.base
     * */
    fromHttpError(error, options = null) {
        if (options) options = { base: true, backend: true, ...options }
        else options = { base: true, backend: true }
        
        const backendMessage = this._getBackendErrorMessage(error)
        if (typeof error.code === 'string') {
            ElNotification.error({title: 'Ошибка', message: 'Проверьте подключение к интернету'})
            console.error(error)
        } else if (options.backend && backendMessage) {
            if (typeof options.backend === 'object' && options.backend.find === backendMessage) {
                ElNotification.error({title: 'Ошибка', message: options.backend.set})
            } else {
                ElNotification.error({title: 'Ошибка', message: backendMessage})
            }
        } else if (options.base) {
            if (typeof options.base === 'string') {
                ElNotification.error({title: 'Ошибка', message: options.base})
            } else {
                ElNotification.error({title: 'Ошибка', message: 'Что-то пошло не так'})
            }
        }
    }
    
    _getBackendErrorMessage(error) {
        if (error.response?.data?.reasons?.[0]) {
            return error.response.data.reasons[0]
        } else if(error.response?.data?.message) {
            return error.response.data.message
        } else if(error.response?.data?.errors?.[0]?.message) {
            return error.response.data.errors[0].message
        } else return null
    }
    
}

export const notificationsHelper = new NotificationsHelper()
