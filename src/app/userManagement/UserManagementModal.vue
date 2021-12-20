<template>
  <div class="user-management-modal">
    <base-modal v-model="visible"
                :title="titleModal"
                :image="iconModal"
                :loading="loading"
                @submit="submitUserModal"
                ref="baseModal">
      <base-input
          v-model="userInfo.email"
          label="E-mail"
          placeholder="Enter e-mail"
          :error="errors.email"
          :disabled="isEdit"
          @input="validateEmail"/>
      <base-input
          v-model="userInfo.name"
          label="Name"
          placeholder="Enter name user"
          :error="errors.name"
          @input="validateName"/>
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
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "@/app/base/BaseModal";
import BaseInput from "@/app/common/BaseInput";
import BaseInputPassword from "@/app/common/BaseInputPassword";
import {userManagementController} from "@/app/userManagement/user-management.controller";
import * as EmailValidator from 'email-validator';

export default {
  name: "user-management-modal",
  components: {
    BaseModal,
    BaseInput,
    BaseInputPassword
  },
  data() {
    return {
      isEdit: false,
      loading: false,
      userInfo: {
        avatar: null,
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
      },
      errors: {
        email: false,
        name: false,
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
      return this.isEdit ? require('@/assets/images/icons/modals/icon-edit.svg') : require('@/assets/images/icons/modals/icon-user.svg')
    }
  },
  methods: {
    validate() {
      let error = false

      if (!this.validateEmail()) {
        error = true
      }
      if (!this.validateName()) {
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
      if (EmailValidator.validate(this.userInfo.email)) {
        this.errors.email = false
        return true
      } else {
        this.errors.email = true
        return false
      }
    },
    validateName(isEmit) {
      if (isEmit && !this.errors.name) {
        return
      }
      if (this.userInfo.name && this.userInfo.name.length > 4) {
        this.errors.name = false
        return true
      } else {
        this.errors.name = true
        return false
      }
    },
    validatePassword() {
      if (!this.userInfo.password && !this.userInfo.repeatPassword) {
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
    openModal(userInfo = null) {
      if (userInfo) {
        this.isEdit = true
        this.userInfo = JSON.parse(JSON.stringify(userInfo))
      } else {
        this.isEdit = false
        this.userInfo = {
          avatar: null,
          name: '',
          email: null,
          password: null,
          repeatPassword: null,
        }
      }
      this.errors = {
        email: false,
        name: false,
        password: false
      }
      this.visible = true
    },
    submitUserModal() {
      if (this.validate()) {
        this.loading = true
        setTimeout(() => {
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
        }, 700)
      }
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