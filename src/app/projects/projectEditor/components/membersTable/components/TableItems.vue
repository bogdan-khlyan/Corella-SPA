<!--<template>-->
<!--  <div class="table-items">-->
<!--    <div class="table-items__header">-->
<!--      <span v-for="columnName in columnNames">{{ columnName }}</span>-->
<!--    </div>-->
<!--    <div class="table-items__body">-->
<!--      <ul class="table-items__list">-->
<!--        <li v-for="tableItem in tableData">-->
<!--          <table-member-->
<!--            :username="tableItem.username"-->
<!--            :role="tableItem.role"-->
<!--          />-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="table-items__header">
    <div v-if="showMembers" class="table-items__header--item">Member</div>
    <div class="table-items__header--item">Role</div>
  </div>
  <div class="table-items__body">
    <ul class="table-items__list">
      <li v-for="member in members" :key="member.id">
        <div class="table-items__member">
          <div class="table-items__member--avatar">
            <img src="@/assets/images/profile/default-avatar.jpg" alt="">
          </div>
          <div class="table-items__member--username">{{ member.username }}</div>
          <div class="table-items__member--select">
            <base-select
                @update:modelValue="updateRole"
                :options="options"
                :modelValue="member.role"
                :id="member.id"
            />
          </div>
          <button type="button" class="table-items__btn-delete">
            <svg-icon :icon="require('@/assets/images/icons/tasks/delete.svg')"></svg-icon>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TableMember from "@/app/projects/projectEditor/components/membersTable/components/TableMember";
import BaseSelect from "@/app/common/BaseSelect";

export default {
  name: "table-items",
  components: {BaseSelect, TableMember},

  props: {
    columnNames: Array,
    tableData: Array,
    tableName: String,
    showMembers: {type: Boolean, default: true},
    members: {type: Array, required: true}
  },
  data() {
    return {
      options: [
        {value: "Owner", label: "Owner"},
        {value: "Admin", label: "Admin"},
        {value: "Moderator", label: "Moderator"},
        {value: "Developer", label: "Developer"},
        {value: "Guest", label: "Guest"},
      ]
    }
  },
  methods: {
    updateRole(value, id) {
      console.log(value)
    }
  }
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

    &--item {
      font-family: Rubik, sans-serif;
      color: #7C7B86;
      font-size: 14px;
    }
  }
  &__body {
    padding-right: 20px;
    padding-left: 20px;
  }
  &__member {
    display: flex;
    &--username {
      flex: 1 1 auto;
      padding-left: 16px;
      padding-right: 10px;
      color: #212121;
      font-family: Rubik, sans-serif;
    }
    &--avatar {
      flex: 0 0 32px;

      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
  }

  &__list {
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
  &__btn-delete {
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    margin-left: 41px;
    border: none;
    padding: 0;

  }

}
</style>

<style lang="scss">
.table-items {
  &__btn-delete {
    svg {
      fill: #F32B2A;
      width: 22px;
      height: 22px;
    }
  }
  &__member--select {
    .el-input {
      width: 80px;
      &__inner {
        padding: 0;
        background-color: transparent;
        line-height: 1;
        height: auto;
        border: none;
        text-align: right;
      }

      &__suffix {
        right: 0;
        top: 50%;
        transform: translate(100%, -50%);
        background-color: transparent;
      }
    }
  }

}

</style>
