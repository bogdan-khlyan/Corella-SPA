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
.table-items {
  &__header {
    display: flex;
    justify-content: space-between;
    background-color: #F8F8F8;
    padding: 12px 34px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    span {
      font-family: "Rubik";
      color: #7C7B86;
      font-size: 14px;
    }
  }
  &__body {
    padding-right: 20px;
    padding-left: 20px;
  }

  li {
    padding: 16px 14px;
    border-bottom: 1px solid #E7E7E7;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      transition: all 0.3s ease 0s;
      z-index: 2;
      top: 50%;
      transform: translate(0, -50%) scale(0);
      left: -3px;
      width: 3px;
      height: calc(100% + 2px);
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: #06A680;

    }
    @media (any-hover: hover) {
      &:hover {
        background-color: #FAFAFA;
        &:before {
          transform: translate(0, -50%) scale(1);
        }
      }
    }
  }
}
</style>
