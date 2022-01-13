<template>
  <div class="user-management-popup">
    <base-popup v-model="visible"
                :title="titleModal"
                :image="iconModal"
                :loading="loading"
                @submit="submitUserModal"
                @update:modelValue="changeVisible"
                ref="baseModal">
      <base-input
          v-model="userInfo.email"
          label="E-mail"
          placeholder="Enter e-mail"
          :error="errors.email"
          :disabled="isEdit"
          @input="validateEmail"/>
      <base-input
          v-model="userInfo.username"
          label="Name"
          placeholder="Enter name user"
          :error="errors.username"
          @input="validateUsername"/>
      <base-input-password
          v-model="userInfo.password"
          label="Password"
          placeholder="Enter password"
          :error="errors.password"
          @input="validatePassword"/>
      <base-input-password
          v-model="userInfo.repeatPassword"
          label="Confirm password"
          placeholder="Enter password"
          :error="errors.password"
          @input="validatePassword"/>
    </base-popup>
  </div>
</template>

<script>
import BasePopup from "@/app/common/BasePopup";
import BaseInput from "@/app/common/BaseInput";
import BaseInputPassword from "@/app/common/BaseInputPassword";
import {userManagementController} from "@/app/userManagement/user-management.controller";
import * as EmailValidator from 'email-validator';

const iconEdit = require('@/assets/images/icons/modals/icon-edit.svg')
const iconUser = require('@/assets/images/icons/modals/icon-user.svg')

export default {
  name: "user-management-popup",
  components: {
    BasePopup,
    BaseInput,
    BaseInputPassword
  },
  data() {
    return {
      isEdit: false,
      loading: false,
      userInfo: {
        username: null,
        email: null,
        password: null,
        repeatPassword: null,
        role: "USER",
        id: null,
      },
      errors: {
        email: false,
        username: false,
        password: false
      },
      visible: false
    }
  },
  computed: {
    titleModal() {
      return this.isEdit ? 'Edit User' : 'Add user'
    },
    iconModal() {
      return this.isEdit ? iconEdit : iconUser
    }
  },
  methods: {
    validate() {
      let error = false

      if (!this.validateEmail()) {
        error = true
      }
      if (!this.validateUsername()) {
        error = true
      }
      if (!this.validatePassword()) {
        error = true
      }

      return !error
    },
    validateEmail(isEmit) {
      if (isEmit && !this.errors.email) {
        return
      }
      if (EmailValidator.validate(this.userInfo.email) && this.userInfo.email.length < 1024) {
        this.errors.email = false
        return true
      } else {
        this.errors.email = true
        return false
      }
    },
    validateUsername(isEmit) {
      if (isEmit && !this.errors.name) {
        return
      }
      if (this.userInfo.username && this.userInfo.username.length < 24) {
        this.errors.username = false
        return true
      } else {
        this.errors.username = true
        return false
      }
    },
    validatePassword() {
      if (!this.userInfo.password && !this.userInfo.repeatPassword) {
        this.errors.password = true
        return false
      } else if (this.userInfo.password && this.userInfo.password.length > 6 && this.userInfo.password.length < 1024) {
        this.errors.password = false
        return true
      } else if (this.userInfo.password !== this.userInfo.repeatPassword) {
        this.errors.password = true
        return false
      } else {
        this.errors.password = false
        return true
      }
    },
    openModal(user = null) {
      if (user) {
        this.isEdit = true
        this.userInfo = {
          username: user.username,
          email: user.email,
          role: "USER",
          id: user._id
        }
      } else {
        this.isEdit = false
        this.userInfo = {
          username: '',
          email: null,
          password: null,
          repeatPassword: null,
          role: "USER",
        }
      }
      this.errors = {
        email: false,
        username: false,
        password: false
      }
      this.visible = true
    },
    changeVisible() {
      if (!this.visible) {
        this.$router.replace({
          query: {
            'create-user': undefined
          }
        })
      }
    },
    async submitUserModal() {
      if (this.validate()) {
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
      }
    },
    clearUserInfo() {
      this.userInfo = {
        username: '',
        email: null,
        password: null,
        repeatPassword: null,
        role: "USER"
      }
    }
  }
}
</script>

<style lang="scss">
.user-management-popup {
  .base-input {
    display: block;
  }
}
</style>
