<template>
  <div class="profile">
    <h1 class="profile__title">Account settings</h1>
    <div class="profile__description">Change your account settings</div>
    <div class="profile__content">
      <profile-settings/>
    </div>
  </div>
</template>

<script>
import ProfileSettings from "@/app/profile/components/profileSettings/ProfileSettings";

export default {
  name: "profile-view",
  components: {
    ProfileSettings
  }
}
</script>

<style lang="scss">
.profile {
  &__title {
    font-family: "Rubik";
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0px 12px 0px;
  }

  &__description {
    font-family: "Rubik";
    margin: 0px 0px 32px 0px;
    font-size: 16px;
  }
}
</style>