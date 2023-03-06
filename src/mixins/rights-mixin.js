import { mapState } from 'pinia'
import { useUserStore } from '@/store/modules/user'
import rightsList from '@/utils/rightsList'

export default {
  /*computed: {
    ...mapState(useUserStore, ['userRightList']),

    isAllowDeleteTask() {
      return this.userRightList.includes(rightsList.manageProjectTasks.id)
    },

    isAllowEditTask() {
      return this.userRightList.includes(rightsList.manageProjectTasks.id)
    },
  },*/
}
