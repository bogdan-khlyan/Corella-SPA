<template>
  <div class="invite-member-popup">
    <base-popup
      v-model="visible"
      title="Invite a member to the Project"
      :show-btn="false"
      width="556px"
      @submit="submitHandler"
    >
      <div class="invite-member-popup__content">
        <base-input v-model.trim="userLogin" />
        <base-button width="106px" title="Invite" :disabled="!userLogin" />
      </div>
    </base-popup>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'

import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'

export default {
  name: 'InviteMemberModal',
  components: {
    BaseButton,
    BaseInput,
    BasePopup,
  },
  emits: ['add'],
  data() {
    return {
      visible: false,
      userLogin: '',
    }
  },
  methods: {
    openModal() {
      this.visible = true
    },
    closeModal() {
      this.visible = false
      this.userLogin = ''
    },
    submitHandler() {
      if (this.userLogin) {
        this.inviteMember()
      }
    },
    async inviteMember() {
      try {
        const newMember = await this.$api.projects.inviteMember(
          this.$route.params.projectId,
          this.userLogin
        )

        toast.success('Member successfully added')
        this.$emit('add', newMember)
        this.closeModal()
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss">
.invite-member-popup {
  &__content {
    display: flex;
    align-items: center;
    border: 1px solid #e7e7e7;
    padding-right: 4px;
  }

  .base-input {
    margin: 0;
    flex: 1 1 auto;

    input {
      border: none;
    }
  }

  .base-button {
    min-height: 48px;
  }

  .el-dialog__body {
    padding: 40px 20px 20px 20px;
  }
}

//.base-popup
</style>
