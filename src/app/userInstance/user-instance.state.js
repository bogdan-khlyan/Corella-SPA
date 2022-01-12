import {reactive} from 'vue'
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

let isLoggedIn = !!localStorage.getItem('isLoggedIn')

export const userInstanceState = reactive({
    isLoggedIn,
    info: {
        _id: null,
        avatar: null,
        createdAt: null,
        email: null,
        role: null,
        updatedAt: null,
        username: null
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
    if (!userInstanceState.info._id) {
        return userInstanceController.getMe()
    } else {
        return null
    }
}
