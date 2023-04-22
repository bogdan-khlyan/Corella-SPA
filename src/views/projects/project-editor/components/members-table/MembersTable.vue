<template>
  <div class="members">
    <div class="members__column">
      <roles-table-column
        v-if="isAllowManageRoles"
        @update="updateRoleHandler"
      ></roles-table-column>
    </div>
    <div class="members__column">
      <members-table-column
        v-if="isAllowManageMembers"
        ref="membersTableColumn"
        :show-members="true"
      />
    </div>
  </div>
</template>

<script>
import rightsList from '@/utils/rightsList'

import { useUserStore } from '@/store/modules/user'
import { mapState } from 'pinia'

import MembersTableColumn from '@/views/projects/project-editor/components/members-table/components/MembersTableColumn'
import RolesTableColumn from '@/views/projects/project-editor/components/members-table/components/RolesTableColumn'

export default {
  name: 'Members',
  components: { MembersTableColumn, RolesTableColumn },
  computed: {
    ...mapState(useUserStore, ['projectRoles']),

    currentRole() {
      return this.projectRoles.get(this.$route.params.projectId)
    },

    isAllowManageRoles() {
      return this.currentRole.rightIds.includes(
        rightsList.manageProjectRoles.id
      )
    },

    isAllowManageMembers() {
      return this.currentRole.rightIds.includes(
        rightsList.manageProjectMembers.id
      )
    },
  },
  data() {
    return {}
  },
  methods: {
    updateRoleHandler() {
      this.$refs.membersTableColumn.getProjectMembersAndRoles()
    },
  },
}
</script>

<style scoped lang="scss">
.members {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  //margin: 0 -12px;

  &__column {
    //flex: 0 1 50%;
    //padding: 0 12px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}
</style>
