import {reactive} from 'vue'

export const baseSidebarState = reactive({
    isCollapse: !!localStorage.getItem('sidebarCollapse')
})

export function setSidebarCollapse(isCollapse) {
    if (isCollapse) {
        localStorage.setItem('sidebarCollapse', isCollapse.toString())
    } else {
        localStorage.removeItem('sidebarCollapse')
    }
    baseSidebarState.isCollapse = isCollapse
}
