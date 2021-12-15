<template>
<div class="user-management-modal">
  <base-modal v-model="visible"
              :title="titleModal"
              :image="iconModal"
              @submit="submitUserModal"
              @close="clearUserInfo">
    <el-input v-model="userInfo.name" placeholder="Enter name user" />
    <el-input v-model="userInfo.email" placeholder="Enter e-mail" />
    <el-input v-model="userInfo.password" placeholder="Enter password" />
    <el-input v-model="userInfo.repeatPassword" placeholder="Enter password" />

  </base-modal>
</div>
</template>

<script>
import BaseModal from "@/app/base/BaseModal";

export default {
  name: "user-management-modal",
  components: {
    BaseModal
  },
  data(){
    return {
      userInfo: {
        avatar: null,
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
      },
      visible: false
    }
  },
  computed:{
    titleModal() {
      return this.userInfo ? 'Edit User' : 'Add user'
    },
    iconModal() {
      return this.userInfo ? require('@/assets/images/icons/modals/icon-edit.svg') : require('@/assets/images/icons/modals/icon-user.svg')
    }
  },
  methods: {
    openModal(userInfo = null){
      if(userInfo){
        this.userInfo = JSON.parse(JSON.stringify(userInfo))
      }
      this.visible = true
    },
    submitUserModal(e){
      console.log('submit',e)
    },
    clearUserInfo() {
      this.userInfo = {
        avatar: null,
        name: '',
        email: null,
        password: null,
        repeatPassword: null,
      }
    }
  }
}
</script>

<style scoped>

</style>