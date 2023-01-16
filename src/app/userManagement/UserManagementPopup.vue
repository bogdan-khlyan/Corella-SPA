<template>
  <div class="user-management-popup">
    <base-popup
      ref="baseModal"
      v-model="visible"
      :title="titleModal"
      :image="iconModal"
      :loading="loading"
      @submit="submitUserModal"
      @update:modelValue="changeVisible"
    >
      <base-input
        v-model.trim="userInfo.email"
        label="E-mail"
        placeholder="Enter e-mail"
        :error="v$.userInfo.email.$error"
        :disabled="isEdit"
      />
      <base-input
        v-model.trim="userInfo.username"
        label="Name"
        placeholder="Enter name user"
        :error="v$.userInfo.username.$error"
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
import BasePopup from '@/app/common/BasePopup'
import BaseInput from '@/app/common/BaseInput'
import BaseInputPassword from '@/app/common/BaseInputPassword'
import { userManagementController } from '@/app/userManagement/user-management.controller'

import useVuelidate from '@vuelidate/core'
import {
  email, maxLength, minLength, required, sameAs, 
} from '@vuelidate/validators'

const iconEdit = require('@/assets/images/icons/modals/icon-edit.svg')
const iconUser = require('@/assets/images/icons/modals/icon-user.svg')

export default {
  name: 'UserManagementPopup',
  components: {
    BasePopup,
    BaseInput,
    BaseInputPassword,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      isEdit: false,
      loading: false,
      userInfo: {
        username: null,
        email: null,
        password: null,
        repeatPassword: null,
        role: 'USER',
        id: null,
      },
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
  },
  validations() {
    return {
      userInfo: {
        email: {
          minLength: minLength(6),
          maxLength: maxLength(1024),
          required,
          email,
        },
        username: {
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
          username: user.username,
          email: user.email,
          role: 'USER',
          id: user._id,
        }
      } else {
        this.isEdit = false
        this.userInfo = {
          username: '',
          email: null,
          password: null,
          repeatPassword: null,
          role: 'USER',
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
        userManagementController.updateUser(this.userInfo)
          .then(() => {
            this.$refs.baseModal.handleClose()
            this.$emit('update')
          })
          .finally(() => this.loading = false)
      } else {
        userManagementController.createUser(this.userInfo)
          .then(() => {
            this.$refs.baseModal.handleClose()
            this.$emit('update')
          })
          .finally(() => this.loading = false)
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
