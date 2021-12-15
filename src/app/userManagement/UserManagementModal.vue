<template>
<div class="user-management-modal">
  <base-modal v-model="visible"
              :title="titleModal"
              :image="iconModal"
              @submit="submitUserModal">
    <base-input v-model="userInfo.name" label="Name" placeholder="Enter name user"/>
    <base-input v-model="userInfo.email" label="E-mail" placeholder="Enter e-mail"/>
    <base-input-password v-model="userInfo.password" label="Password" placeholder="Enter password"/>
    <base-input-password v-model="userInfo.repeatPassword" label="Confirm password" placeholder="Enter password"/>

  </base-modal>
</div>
</template>

<script>
import BaseModal from "@/app/base/BaseModal";
import BaseInput from "@/app/common/components/BaseInput";
import BaseInputPassword from "@/app/common/components/BaseInputPassword";

export default {
  name: "user-management-modal",
  components: {
    BaseModal,
    BaseInput,
    BaseInputPassword
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
      return this.userInfo.id ? require('@/assets/images/icons/modals/icon-edit.svg') : require('@/assets/images/icons/modals/icon-user.svg')
    }
  },
  methods: {
    openModal(userInfo = null){
      if(userInfo){
        this.userInfo = JSON.parse(JSON.stringify(userInfo))
      } else
        this.userInfo = {
          avatar: null,
          name: '',
          email: null,
          password: null,
          repeatPassword: null,
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

<style lang="scss">
.user-management-modal {
  .base-input {
    display: block;
  }
}
</style>