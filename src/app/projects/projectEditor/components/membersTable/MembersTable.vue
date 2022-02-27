<template>
  <div class="members">
    <div class="members__column">
      <members-table-column />
    </div>
    <div class="members__column">
      <members-table-column :show-members="true" />
    </div>
  </div>
</template>

<script>
import MembersTableColumn from "@/app/projects/projectEditor/components/membersTable/components/MembersTableColumn";

export default {
  name: 'members',
  components: {MembersTableColumn},
  data() {
    return {

    }
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

