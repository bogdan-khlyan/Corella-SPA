<template>
  <div class="change-password-profile">
    <div class="change-password-profile__input">
      <base-input-password
          :label="'Current password'"
          v-model="currentPassword"
          :placeholder="'Your password'"
      />
    </div>
    <div class="change-password-profile__input">
      <base-input-password
          :label="'New password'"
          :model-value="newPassword"
          :placeholder="'New password'"
      />
    </div>
    <div class="change-password-profile__input">
      <base-input-password
          :label="'Confirm password'"
          :model-value="confirmedPassword"
          :placeholder="'Confirmed password'"
      />
    </div>
    <div class="change-password-profile__submit">
      <button>Change password</button>
    </div>
  </div>
</template>

<script>
import BaseInputPassword from "@/app/common/BaseInputPassword";

export default {
  name: "profile-security",
  components: {BaseInputPassword},
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmedPassword: ''
    }
  },
  computed: {
    isConfirmPasswordValid() {
      return this.confirmedPassword === this.newPassword
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

      &:hover {
        background: #2bc271;
      }

    }
  }
}
</style>