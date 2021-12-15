<template>
<div class="user-management-modal">
  <base-modal v-model="visible"
              :title="titleModal"
              :image="iconModal"
              @submit="submitUserModal">
    <div>
    </div>
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
      userInfo ? this.userInfo = userInfo : this.userInfo = null
      this.visible = true
    },
    submitUserModal(e){
      console.log('submit',e)
    }
  }
}
</script>

<style scoped>

</style>