import {reactive} from 'vue'
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

export const userInstanceState = reactive({
    isLoggedIn: false,
    info: {
        id: null,
        avatar: null,
        email: null,
        name: null
    }
})

export function userInstanceStateInit() {
    return userInstanceController.getMe()
}
