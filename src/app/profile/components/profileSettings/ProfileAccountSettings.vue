<template>
  <div class="profile-account-settings">
    <div class="profile-account-settings__input">
      <base-input
          @update:modalValue="$emit('update:modalValue')"
          :label="'Username'"
          :model-value="userData.name"
          :placeholder="'Your name'"
      />
    </div>
    <div class="profile-account-settings__input">
      <base-input
          @update:modalValue="$emit('update:modalValue')"
          :label="'E-mail'"
          :model-value="userData.email"
          :placeholder="'Your email'"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/app/common/BaseInput";

export default {
  name: "profile-account-settings",
  components: {BaseInput},
  props: {
    userData: { type: Object }
  }
}
</script>