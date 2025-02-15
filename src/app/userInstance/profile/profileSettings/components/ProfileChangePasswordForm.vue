<template>
  <form class="change-password-profile"
        v-loading="loading"
        @submit.prevent="submit">
    <div class="change-password-profile__input">
      <base-input-password
          label="Current password"
          v-model="form.currentPassword"
          placeholder="Your password"
          :error="errors.currentPassword"
          @input="validateBasePassword($event, 'currentPassword')"/>
    </div>
    <div class="change-password-profile__input">
      <base-input-password
          label="New password"
          v-model="form.newPassword"
          placeholder="New password"
          :error="errors.newPassword || errors.matchPasswords"
          @input="handleInput"/>
    </div>
    <div class="change-password-profile__input">
      <base-input-password
          label="Confirm password"
          v-model="form.confirmedPassword"
          placeholder="Confirmed password"
          :error="errors.confirmedPassword || !!errors.matchPasswords"
          @input="handleInput"/>
    </div>
    <div class="change-password-profile__submit">
      <button :disabled="isDisabledSubmitButton">Change password</button>
    </div>
  </form>
</template>

<script>
import BaseInputPassword from "@/app/common/BaseInputPassword";
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

export default {
  name: "profile-security",
  components: {BaseInputPassword},
  data() {
    return {
      loading: false,
      form: {
        currentPassword: '',
        newPassword: '',
        confirmedPassword: ''
      },
      errors: {
        currentPassword: null,
        newPassword: null,
        confirmedPassword: null,

        matchPasswords: null
      }
    }
  },
  computed: {
    isDisabledSubmitButton() {
      return !(this.form.currentPassword && this.form.newPassword && this.form.confirmedPassword)
    }
  },
  methods: {
    clearData() {
      Object.keys(this.form).forEach(key => this.form[key] = '')
      Object.keys(this.errors).forEach(key => this.errors[key] = null)
    },
    submit() {
      if (this.validate()) {
        this.loading = true
        userInstanceController.changePassword(this.form)
            .then(() => this.clearData())
            .catch(error => {
              this.errors = {
                ...this.errors,
                ...error
              }
            })
            .finally(() => this.loading = false)
      }
    },
    handleInput($event) {
      this.validateBasePassword($event, 'newPassword')
      this.validateBasePassword($event, 'confirmedPassword')
      this.validateMatch($event)
    },
    validate() {
      let error = false

      if (!this.validateBasePassword(null, 'currentPassword')) {
        error = true
      }
      if (!this.validateBasePassword(null, 'newPassword')) {
        error = true
      }
      if (!this.validateBasePassword(null, 'confirmedPassword')) {
        error = true
      }

      if (!error) {
        if (!this.validateMatch()) {
          error = true
        }
      }

      return !error
    },
    validateBasePassword(isEmit, fieldName) {
      if (isEmit && !this.errors[fieldName]) {
        return
      }
      if (this.form[fieldName] && this.form[fieldName].length > 5) {
        this.errors[fieldName] = false
        return true
      } else {
        this.errors[fieldName] = 'Must be at least 6 characters long'
        return false
      }
    },
    validateMatch(isEmit) {
      if (isEmit && !this.errors.matchPasswords) {
        return
      }
      if (this.form.newPassword === this.form.confirmedPassword) {
        this.errors.matchPasswords = false
        return true
      } else {
        this.errors.matchPasswords = 'Passwords don\'t match'
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.change-password-profile {
  &__submit {
    > button {
      width: 306px;
      height: 56px;

      background: #0AB258;
      border-radius: 4px;
      border: none;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;

      color: #FFFFFF;

      cursor: pointer;
      transition: 200ms;

      &:disabled {
        background-color: #7B7B7B;
        cursor: no-drop;
        &:hover {
          background-color: #7B7B7B;
        }
      }

      &:hover {
        background: #2bc271;
      }

    }
  }
}
</style>