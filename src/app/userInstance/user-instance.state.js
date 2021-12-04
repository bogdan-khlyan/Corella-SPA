import {reactive} from 'vue'

export const userInstanceState = reactive({
    isLoggedIn: false,
    info: {
        id: null,
        avatar: null,
        email: null,
        fullName: null
    }
})
