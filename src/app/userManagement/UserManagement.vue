<template>
  <div class="user-management">

    <div class="user-management__header">
      <div class="user-management__header-title">User Management</div>
      <button @click="addNewUser">
        <img src="@/assets/images/icons/buttons/icon-plus.svg" alt="add">
        <span>Add user</span>
      </button>
    </div>

    <div class="user-management__table">
      <el-table v-loading="loading" :data="users">

        <el-table-column prop="username" label="username" min-width="200">
          <template #default="scope">
            <img class="user-management__avatar" src="@/assets/images/corella_icon.svg" alt="">
            {{ scope.row.username }}
          </template>
        </el-table-column>

        <el-table-column prop="email" label="E-mail" min-width="200"/>

        <el-table-column prop="isBan" label="Ban" width="200px">
          <template #default="scope">
            <el-switch
                v-model="scope.row.isBan"
                active-color="#F32B2A"
                inactive-color="#BDBCC8"
                @change="changeBanSwitch(scope.row.id, scope.row.isBan)"/>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="Actions" width="120px">
          <template #default="scope">
            <button @click="editUser(scope.row)" class="user-management__edit-btn">
              <img src="@/assets/images/icons/buttons/icon-edit.svg" alt="add">
            </button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class="user-management__pagination">
      <el-pagination
          v-model:currentPage="pagination.page"
          :page-size="pagination.limit"
          layout="prev, pager, next, jumper, sizes"
          :page-sizes="[10, 20, 30, 40, 50, 100]"
          @current-change="changeCurrentPage"
          @size-change="handleSizeChange"
          :total="total"/>
    </div>

    <user-management-modal
        @update="getUsers"
        ref="userManagementModal"/>
  </div>
</template>

<script>
import UserManagementModal from "@/app/userManagement/UserManagementPopup";
import {userManagementController} from "@/app/userManagement/user-management.controller";

export default {
  name: 'user-management',
  components: {
    UserManagementModal
  },
  data() {
    return {
      total: 0,
      users: [],
      loading: false,
      pagination: {
        page: 1,
        limit: 10
      }
    }
  },
  watch: {
    '$route'() {
      if (this.$route.query['create-user'] === null) {
        this.$refs.userManagementModal.openModal()
      }
    },
  },
  created() {
    this.getUsers()
  },
  methods: {
    changeBanSwitch(userId, isBanned) {
      userManagementController.banUser(userId, isBanned)
    },
    async handleSizeChange(limit) {
      this.pagination.limit = limit
      await this.getUsers()
    },
    async getUsers() {
      this.loading = true
      const limit = this.pagination.limit
      const page = this.pagination.page
      const result = await userManagementController.getUsers({limit, page})

      this.users = result.data.data
      this.total = result.data.total
      this.loading = false
    },
    async changeCurrentPage(page) {
      this.pagination.page = page

      await this.getUsers()
    },
    addNewUser() {
      this.$refs.userManagementModal.openModal()
    },
    editUser(user) {
      this.$refs.userManagementModal.openModal(user)
    },

  }
}
</script>

<style lang="scss" scoped>
.user-management {

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;

    &-title {
      font-family: Rubik, sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0;
      text-align: left;
      color: $text-title;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      color: $text-white;

      border: none;

      width: 220px;
      height: 56px;

      background: $primary-bg-default;
      border-radius: 4px;
      cursor: pointer;

      img {
        margin-right: 8px;
      }

      transition: .3s ease-in;

      &:hover {
        background: $primary-bg-hover;
      }
    }
  }

  &__edit-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 42px;
    width: 42px;

    border: none;
    background: rgba(32, 197, 97, 0.75);
    border-radius: 6px;
    cursor: pointer;

    transition: .3s ease-in;

    &:hover {
      background: $primary-bg-hover;
    }
  }

  &__avatar {
    width: 36px;
    height: 36px;

    object-fit: cover;
    border-radius: 100%;
    margin-right: 16px;
  }

}</style>

<style lang="scss">
.user-management {
  &__table {
    thead tr th {
      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: $text-title;

      border-bottom: 1px solid #06A680 !important;
    }

    .el-table__row {
      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: $text-black;

      .el-table__cell:first-child .cell {
        display: flex;
        align-items: center;
      }
    }
  }

  &__pagination {
    margin-top: 20px;

    .el-pagination, .el-pager {
      display: flex;
    }

    .el-pager li.number {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 32px;
      width: 32px;
      min-width: 32px;

      font-family: Rubik, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;
      color: $text-black;
    }

    .el-pager li.active {
      color: $text-white;
      background: linear-gradient(180deg, #20C560 0%, #04A481 100%);
      border-radius: 100%;
      cursor: default;
    }
  }
}</style>
