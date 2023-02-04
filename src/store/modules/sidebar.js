import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: () => ({
    isDrawer: false,
    isCollapse: !!localStorage.getItem('sidebarCollapse'),
  }),
  actions: {
    setSidebarCollapse(isCollapse) {
      if (isCollapse) {
        localStorage.setItem('sidebarCollapse', isCollapse.toString())
      } else {
        localStorage.removeItem('sidebarCollapse')
      }

      this.isCollapse = isCollapse
    },
  },
})
