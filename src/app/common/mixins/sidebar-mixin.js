import {baseSidebarState} from "@/app/common/components/baseWrapper/baseSidebar/base-sidebar.state";

const sidebarCollapse = {
    computed: {
        isCollapse() {
            return baseSidebarState.isCollapse;
        }
    }
}

export default sidebarCollapse;
