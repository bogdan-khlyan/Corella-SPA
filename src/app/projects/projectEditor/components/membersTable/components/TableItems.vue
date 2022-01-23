<template>
  <div class="table-items">
    <div class="table-items__header">
      <span v-for="columnName in columnNames">{{ columnName }}</span>
    </div>
    <div class="table-items__body">
      <ul class="table-items__list">
        <li v-for="tableItem in tableData">
          <table-member
            :username="tableItem.username"
            :role="tableItem.role"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TableMember from "@/app/projects/projectEditor/components/membersTable/components/TableMember";
export default {
  name: "table-items",
  components: {TableMember},

  props: {
    columnNames: Array,
    tableData: Array,
    tableName: String,
  },
}
</script>


<style scoped lang="scss">

</style>
