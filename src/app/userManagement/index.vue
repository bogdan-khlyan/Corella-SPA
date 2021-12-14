<template>
  <div class="user-management">

    <div class="user-management__header">
      <div class="user-management__header-title">User Management</div>
      <button @click="openModal">
        <img src="@/assets/images/icons/buttons/icon-plus.svg" alt="add">
        Add user
      </button>
    </div>

    <div class="user-management__table">
      <el-table :data="dataTable">

        <el-table-column prop="name" label="Name" min-width="200">
          <template #default="scope">
            <img class="user-management__avatar" src="@/assets/images/corella_icon.svg" alt="">
            {{scope.row.name}}
          </template>
        </el-table-column>

        <el-table-column prop="email" label="E-mail" min-width="200"/>

        <el-table-column prop="isBan" label="Ban" width="200px">
          <template #default="scope">
            <el-switch v-model="scope.row.isBan" active-color="#F32B2A" inactive-color="#BDBCC8" />
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="Actions" width="230px">
          <template #default="scope">
            <button @click="editUser(scope.row.id)" class="user-management__edit-btn">
              <img src="@/assets/images/icons/buttons/icon-edit.svg" alt="add">
            </button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <div class="user-management__pagination">
      <el-pagination
          v-model:currentPage="currentPage3"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="41"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>

<script>

export default {
  name: 'user-management',
  data(){
    return {
      dataTable:[
        {
          id: 0,
          avatar: null,
          name: 'Lana',
          email: 'superadmin2021@gmail.com',
          isBan: false,
        },
        {
          id: 1,
          avatar: null,
          name: 'Lana',
          email: 'superadmin2021@gmail.com',
          isBan: true,
        },
        {
          id: 2,
          avatar: null,
          name: 'Lana',
          email: 'superadmin2021@gmail.com',
          isBan: false,
        },
        {
          id: 3,
          avatar: null,
          name: 'Lana',
          email: 'superadmin2021@gmail.com',
          isBan: false,
        },
        {
          id: 4,
          avatar: null,
          name: 'Lana',
          email: 'superadmin2021@gmail.com',
          isBan: false,
        }
      ]
    }
  },
  methods: {
    openModal(){
      console.log('openModal')
      alert('openModal')
    },
    editUser(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/user-management.scss";
</style>
