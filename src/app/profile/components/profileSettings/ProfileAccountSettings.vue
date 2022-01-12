<template>
  <form class="profile-account-settings"
        v-loading="loading"
        @submit.prevent="submit">
    <div class="profile-account-settings__input">
      <base-input
          :model-value="userInfo.email"
          label="E-mail"
          placeholder="Your email"
          disabled/>
    </div>
    <div class="profile-account-settings__input">
      <base-input
          v-model="profile.username"
          label="Username"
          placeholder="Your name"
          :error="errors.username"
          @input="validateName"/>
    </div>
    <div class="profile-account-settings__submit">
      <button :disabled="!isChangeData">Save</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/app/common/BaseInput";
import {userInstanceState} from "@/app/userInstance/user-instance.state";
import {userInstanceController} from "@/app/userInstance/user-instance.controller";

export default {
  name: "profile-account-settings",
  components: {BaseInput},
  computed: {
    isChangeData() {
      return this.profile.username !== this.userInfo.username
    },
    userInfo() {
      return userInstanceState.info
    }
  },
  data() {
    return {
      loading: false,
      profile: {
        username: ''
      },
      errors: {
        username: false
      }
    }
  },
  watch: {
    userInfo: {
      handler: function () {
        this.profile.username = this.userInfo.username
      },
      deep: true
    }
  },
  mounted() {
    this.profile.username = this.userInfo.username
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.loading = true
        userInstanceController.updateProfile(this.profile)
            .finally(() => this.loading = false)
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
      if (isEmit && !this.errors.username) {
        return
      }
      if (this.profile.username && this.profile.username.length > 4) {
        this.errors.username = false
        return true
      } else {
        this.errors.username = true
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