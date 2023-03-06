<template>
  <div class="members">
    <div class="members__column">
      <roles-table-column></roles-table-column>
    </div>
    <div class="members__column">
      <members-table-column :show-members="true" />
    </div>
  </div>
</template>

<script>
import MembersTableColumn from '@/views/projects/project-editor/components/members-table/components/MembersTableColumn'
import RolesTableColumn from '@/views/projects/project-editor/components/members-table/components/RolesTableColumn'

export default {
  name: 'Members',
  components: { MembersTableColumn, RolesTableColumn },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.members {
  display: flex;
  margin: 0 -12px;

  &__column {
    flex: 0 1 50%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
  }
}
</style>
