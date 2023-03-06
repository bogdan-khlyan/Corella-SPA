<template>
  <div class="role-popup">
    <base-popup
      v-model="visible"
      width="556px"
      :image="iconModal"
      :title="titleModal"
      :loading="loading"
      @submit="submitHandler"
      @close="closeModal"
    >
      <base-input
        v-model.trim="roleName"
        label="Name"
        placeholder="Enter name role"
      />
      <base-checkbox
        v-model="selectedRights"
        :options="rights"
        label="Role features"
      />
    </base-popup>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'

import rightsList from '@/utils/rightsList'

import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
import BaseCheckbox from '@/components/BaseCheckbox'

const iconEdit = require('@/assets/images/icons/modals/icon-edit.svg')
const iconUsers = require('@/assets/images/icons/modals/icon-users.svg')

export default {
  name: 'RoleModal',
  components: {
    BaseCheckbox,
    BaseInput,
    BasePopup,
  },
  emits: ['add', 'update'],
  data() {
    return {
      visible: false,
      isEdit: false,
      loading: false,
      roleName: '',
      roleId: null,
      rights: [
        {
          label: rightsList.manageProjectTasks.name,
          value: rightsList.manageProjectTasks.id,
        },
        {
          label: rightsList.manageProjectSettings.name,
          value: rightsList.manageProjectSettings.id,
        },
        {
          label: rightsList.manageProjectStages.name,
          value: rightsList.manageProjectStages.id,
        },
        {
          label: rightsList.manageProjectRoles.name,
          value: rightsList.manageProjectRoles.id,
        },
        {
          label: rightsList.manageProjectMembers.name,
          value: rightsList.manageProjectMembers.id,
        },
      ],
      selectedRights: [],
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
    openModal(editRole) {
      this.visible = true
      if (editRole) {
        this.roleName = editRole.name
        this.selectedRights = editRole.rightIds
        this.roleId = editRole.id
        this.isEdit = true
      }
    },
    closeModal() {
      this.roleName = ''
      this.selectedRights = []
      this.roleId = null
      this.isEdit = false
      this.visible = false
    },
    submitHandler() {
      if (!this.isEdit) {
        this.createRole()
      } else {
        this.updateRole()
      }
    },
    async createRole() {
      this.loading = true

      try {
        const newRole = await this.$api.projects.addProjectRole(
          this.$route.params.projectId,
          {
            name: this.roleName,
            rightIds: this.selectedRights,
          }
        )

        toast.success('Role successfully created')

        this.$emit('add', newRole)
        this.closeModal()
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async updateRole() {
      this.loading = true

      try {
        const updatedRole = await this.$api.projects.patchProjectRole(
          this.$route.params.projectId,
          this.roleId,
          {
            name: this.roleName,
            rightIds: this.selectedRights,
          }
        )

        toast.success('Role successfully updated')

        this.$emit('update', updatedRole)
        this.closeModal()
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
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
