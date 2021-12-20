<template>
  <div class="change-password-profile">
    <div class="change-password-profile__input">
      <base-input
          :label="'Current password'"
          :model-value="oldPassword"
          :placeholder="'Your password'"
      />
    </div>
    <div class="change-password-profile__input">
      <base-input
          :type="'password'"
          :label="'New password'"
          :model-value="oldPassword"
          :placeholder="'New password'"
      />
    </div>
    <div class="change-password-profile__input">
      <base-input
          :type="'password'"
          :label="'Confirm password'"
          :model-value="oldPassword"
          :placeholder="'Confirmed password'"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/app/common/BaseInput";

export default {
  name: "profile-security",
  components: {BaseInput},
  data() {
    return {
      newPassword: "",
      confirmedPassword: ""
    }
  },
  computed: {
    isConfirmPasswordValid() {
      return this.confirmedPassword === this.newPassword
    }
  },
  props: {
    oldPassword: { type: String }
  }
}
</script>