import { baseSidebarState } from '@/app/common/baseWrapper/baseSidebar/base-sidebar.state'

const sidebarCollapse = {
  computed: {
    isCollapse() {
      return baseSidebarState.isCollapse
    },
    isDrawer() {
      return baseSidebarState.isDrawer
    },
  },
}

export default sidebarCollapse
