import {reactive} from 'vue'
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

let isLoggedIn = !!localStorage.getItem('isLoggedIn')

export const userInstanceState = reactive({
    isLoggedIn,
    info: {
        id: null,
        avatar: null,
        email: null,
        name: null
    }
})

export function setIsLoggedIn(isLoggedIn) {
    if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', isLoggedIn)
        userInstanceState.isLoggedIn = true
    } else {
        localStorage.removeItem('isLoggedIn')
    }
}

export function userInstanceStateInit() {
    if (!userInstanceState.info.id) {
        return userInstanceController.getMe()
    } else {
        return null
    }
}
