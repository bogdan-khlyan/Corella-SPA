<template>
  <div v-loading="loading" class="profile-account-settings">
    <div class="profile-account-settings__input">
      <base-input
          :model-value="userInfo.email"
          label="E-mail"
          placeholder="Your email"
          disabled/>
    </div>
    <div class="profile-account-settings__input">
      <base-input
          v-model="profile.name"
          label="Username"
          placeholder="Your name"
          :error="errors.name"
          @input="validateName"/>
    </div>
    <div class="profile-account-settings__submit">
      <button @click="submit">Save</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import {userInstanceState} from "@/app/userInstance/user-instance.state";
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

export default {
  name: "profile-account-settings",
  components: {BaseInput},
  computed: {
    userInfo() {
      return userInstanceState.info
    }
  },
  data() {
    return {
      loading: false,
      profile: {
        name: ''
      },
      errors: {
        name: false
      }
    }
  },
  watch: {
    userInfo: {
      handler: function () {
        this.profile.name = this.userInfo.name
      },
      deep: true
    }
  },
  mounted() {
    this.profile.name = this.userInfo.name
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.loading = true
        setTimeout(() => {
          userInstanceController.updateProfile(this.profile)
              .finally(() => this.loading = false)
        }, 700)
      }
    },
    validate() {
      let error = false

      if (!this.validateName()) {
        error = true
      }

      return !error
    },
    validateName(isEmit) {
      if (isEmit && !this.errors.name) {
        return
      }
      if (this.profile.name && this.profile.name.length > 4) {
        this.errors.name = false
        return true
      } else {
        this.errors.name = true
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-account-settings {
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

      &:hover {
        background: #2bc271;
      }

    }
  }
}
</style>