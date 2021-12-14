<template>
<div class="user-management-modal">
  <base-modal :visible="visible" @close="visible = false"/>
</div>
</template>

<script>
import BaseModal from "@/app/base/BaseModal";

export default {
  name: "user-management-modal",
  components: {
    BaseModal
  },
  props: {
    userInfo: Object
  },
  data(){
    return {
      newUserInfo: {
        avatar: null,
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
      },
      visible: false
    }
  },
  mounted() {
    if(this.userInfo)
      this.newUserInfo = this.userInfo
  },
  methods: {
    openModal(){
      console.log('openModal')
      this.visible = true
    }
  }
}
</script>

<style scoped>

</style>