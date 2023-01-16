<template>
  <div class="role-popup">
    <base-popup
      v-model="visible"
      width="556px"
      :image="iconModal"
      :title="titleModal"
    >
      <base-input
        v-model.trim="roleName"
        label="Name"
        placeholder="Enter name role"
      />
      <base-checkbox
        label="Role features"
        :checkbox-values="checkboxValues"
      />
    </base-popup>
  </div>
</template>
<script>
import BasePopup from '@/app/common/BasePopup'
import BaseInput from '@/app/common/BaseInput'
import BaseCheckbox from '@/app/common/BaseCheckbox'

const iconEdit = require('@/assets/images/icons/modals/icon-edit.svg')
const iconUsers = require('@/assets/images/icons/modals/icon-users.svg')

export default {
  name: 'RoleModal',
  components: { BaseCheckbox, BaseInput, BasePopup },
  data() {
    return {
      visible: false,
      isEdit: false,
      roleName: '',
      checkboxValues: ['Creating tasks', 'Editing tasks', 'Deleting tasks'],
    }
  },
  computed: {
    iconModal() {
      return this.isEdit ? iconEdit : iconUsers
    },
    titleModal() {
      return this.isEdit ? 'Edit role' : 'Add role'
    },
  },
  methods: {
    openModal() {
      this.visible = true
    },
  },
}
</script>

<style lang="scss">
.role-popup {
  .base-input {
    margin-bottom: 24px;
  }
}

</style>
