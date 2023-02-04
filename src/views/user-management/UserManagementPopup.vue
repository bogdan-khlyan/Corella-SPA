<template>
  <div class="user-management-popup">
    <base-popup
      ref="baseModal"
      v-model="visible"
      :title="titleModal"
      :image="iconModal"
      :loading="loading"
      :disabled-btn="!hasChanges"
      @submit="submitUserModal"
      @update:modelValue="changeVisible"
    >
      <base-input
        v-model.trim="userInfo.login"
        label="Login"
        placeholder="Enter login"
        :error="v$.userInfo.login.$error"
      />
      <base-input
        v-model.trim="userInfo.name"
        label="Name"
        placeholder="Enter name user"
        :error="v$.userInfo.name.$error"
      />
      <base-input-password
        v-model.trim="userInfo.password"
        label="Password"
        placeholder="Enter password"
        :error="v$.userInfo.password.$error"
      />
      <base-input-password
        v-model.trim="userInfo.repeatPassword"
        label="Confirm password"
        placeholder="Enter password"
        :error="v$.userInfo.repeatPassword.$error"
      />
    </base-popup>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'

import BasePopup from '@/components/BasePopup'
import BaseInput from '@/components/BaseInput'
import BaseInputPassword from '@/components/BaseInputPassword'

import useVuelidate from '@vuelidate/core'

import { maxLength, minLength, required, sameAs } from '@vuelidate/validators'

const iconEdit = require('@/assets/images/icons/modals/icon-edit.svg')
const iconUser = require('@/assets/images/icons/modals/icon-user.svg')

export default {
  name: 'UserManagementPopup',
  components: {
    BasePopup,
    BaseInput,
    BaseInputPassword,
  },
  emits: ['success', 'add', 'update'],
  data() {
    return {
      isEdit: false,
      loading: false,
      v$: useVuelidate(),
      userInfo: {
        name: null,
        login: null,
        password: null,
        repeatPassword: null,
        role: 'USER',
        id: null,
      },
      savedUserInfo: null,
      visible: false,
    }
  },
  computed: {
    titleModal() {
      return this.isEdit ? 'Edit User' : 'Add user'
    },
    iconModal() {
      return this.isEdit ? iconEdit : iconUser
    },
    hasChanges() {
      if (!this.isEdit) {
        return true
      }

      return !!(
        this.isChangedLogin ||
        this.isChangedName ||
        this.userInfo.password
      )
    },

    isChangedLogin() {
      return this.userInfo.login !== this.savedUserInfo.login
    },

    isChangedName() {
      return this.userInfo.name !== this.savedUserInfo.name
    },
  },
  validations() {
    return {
      userInfo: {
        login: {
          minLength: minLength(6),
          maxLength: maxLength(1024),
          required,
        },
        name: {
          maxLength: maxLength(24),
          required,
        },
        password: {
          minLength: minLength(6),
          maxLength: maxLength(1024),
          required() {
            return this.isEdit ? true : !!this.userInfo.password
          },
        },
        repeatPassword: {
          required() {
            return this.isEdit ? true : !!this.userInfo.password
          },
          sameAs: sameAs(this.userInfo.password),
        },
      },
    }
  },
  methods: {
    openModal(user = null) {
      if (user) {
        this.isEdit = true
        this.userInfo = {
          name: user.name,
          login: user.login,
          id: user.id,
        }
        this.savedUserInfo = { ...this.userInfo }
      } else {
        this.isEdit = false
        this.userInfo = {
          name: '',
          login: null,
          password: null,
          repeatPassword: null,
          roleId: 4,
          // role: 'USER',
        }
      }
      this.visible = true
    },
    changeVisible() {
      if (!this.visible) {
        this.v$.userInfo.$reset()
        this.$router.replace({
          query: {
            'create-user': undefined,
          },
        })
      }
    },
    async submitUserModal() {
      this.v$.userInfo.$touch()
      if (this.v$.userInfo.$invalid) return

      this.loading = true

      if (this.isEdit) {
        try {
          const updateData = {}
          if (this.isChangedLogin) {
            updateData.login = this.userInfo.login
          }

          if (this.isChangedName) {
            updateData.name = this.userInfo.name
          }

          if (this.userInfo.password) {
            updateData.password = this.userInfo.password
          }

          await this.$api.users.patchUser(this.userInfo.id, updateData)

          toast.success('User successfully updated')
          this.$emit('update', this.userInfo)
          this.visible = false
        } finally {
          this.loading = false
        }
        /* userManagementController
          .updateUser(this.userInfo)
          .then(() => {
            this.$refs.baseModal.handleClose()
            this.$emit('update')
          })
          .finally(() => (this.loading = false))*/
      } else {
        try {
          await this.$api.users.createUser(this.userInfo)
          this.$emit('add')
          toast.success('User successfully added')
          this.visible = false
        } finally {
          this.loading = false
        }
        /*userManagementController
          .createUser(this.userInfo)
          .then(() => {
            this.$refs.baseModal.handleClose()
            this.$emit('update')
          })
          .finally(() => (this.loading = false))*/
      }

      this.v$.$reset()
    },
    clearUserInfo() {
      this.userInfo = {
        username: '',
        email: null,
        password: null,
        repeatPassword: null,
        role: 'USER',
      }
    },
  },
}
</script>

<style lang="scss">
.user-management-popup {
  .base-input {
    display: block;
  }
}
</style>
