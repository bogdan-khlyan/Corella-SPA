<template>
<div class="user-management-modal">
  <base-modal v-model="visible"
              :title="titleModal"
              :image="iconModal"
              :loading="loading"
              @submit="submitUserModal"
              ref="baseModal">
    <base-input v-model="userInfo.name" label="Name" placeholder="Enter name user"/>
    <base-input v-model="userInfo.email" label="E-mail" placeholder="Enter e-mail"/>
    <base-input-password v-model="userInfo.password" label="Password" placeholder="Enter password"/>
    <base-input-password v-model="userInfo.repeatPassword" label="Confirm password" placeholder="Enter password"/>

  </base-modal>
</div>
</template>

<script>
import BaseModal from "@/app/base/BaseModal";
import BaseInput from "@/app/common/BaseInput";
import BaseInputPassword from "@/app/common/BaseInputPassword";
import {userManagementController} from "@/app/userManagement/user-management.controller";

export default {
  name: "user-management-modal",
  components: {
    BaseModal,
    BaseInput,
    BaseInputPassword
  },
  data(){
    return {
      isEdit: false,
      loading: false,
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
      return this.isEdit ? 'Edit User' : 'Add user'
    },
    iconModal() {
      return this.isEdit ? require('@/assets/images/icons/modals/icon-edit.svg') : require('@/assets/images/icons/modals/icon-user.svg')
    }
  },
  methods: {
    openModal(userInfo = null){
      if(userInfo){
        this.isEdit = true
        this.userInfo = JSON.parse(JSON.stringify(userInfo))
      } else {
        this.isEdit = false
        this.userInfo = {
          avatar: null,
          name: '',
          email: null,
          password: null,
          repeatPassword: null,
        }
      }
      this.visible = true
    },
    submitUserModal(){
      this.loading = true
      setTimeout(() => {
        if (this.isEdit) {
          userManagementController.updateUser(this.userInfo)
              .then(() => this.$refs.baseModal.handleClose())
              .finally(() => this.loading = false)
        } else {
          userManagementController.createUser(this.userInfo)
              .then(() => this.$refs.baseModal.handleClose())
              .finally(() => this.loading = false)
        }
      }, 700)
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

<style lang="scss">
.user-management-modal {
  .base-input {
    display: block;
  }
}
</style>