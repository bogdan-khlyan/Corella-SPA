<template>
  <div class="invite-member-popup">
    <base-popup
      v-model="visible"
      title="Invite a member to &quot;Corella&quot; Project"
      :show-btn="false"
      width="556px"
    >
      <div class="invite-member-popup__content">
        <base-input
          v-model.trim="usernameOrEmail"
        />
        <base-button
          width="106px"
          title="Invite"
        />
      </div>
    </base-popup>
  </div>
</template>

<script>
import BasePopup from '@/app/common/BasePopup'
import BaseInput from '@/app/common/BaseInput'
import BaseButton from '@/app/common/BaseButton'

export default {
  name: 'InviteMemberModal',
  components: { BaseButton, BaseInput, BasePopup },
  data() {
    return {
      visible: false,
      usernameOrEmail: '',
    }
  },
  methods: {
    openModal() {
      this.visible = true
    },
  },
}
</script>

<style lang="scss">
.invite-member-popup {
  &__content {
    display: flex;
    align-items: center;
    border: 1px solid #E7E7E7;
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
