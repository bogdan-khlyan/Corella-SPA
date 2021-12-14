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

<style lang="scss" scoped>
.user-management {

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;

    &-title{
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
    margin-top: 50px;

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
