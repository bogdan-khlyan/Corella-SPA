<template>
  <div class="profile-page">
    <h1 class="profile-page__title">Account settings</h1>
    <div class="profile-page__description">Change your account settings</div>
    <div class="profile-page__content">
      <profile-settings/>
    </div>
  </div>
</template>

<script>
import ProfileSettings from "@/app/userInstance/profile/profileSettings/ProfileSettings";

export default {
  name: "profile-page",
  components: {
    ProfileSettings
  }
}
</script>

<style lang="scss">
.profile-page {
  &__title {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0px 12px 0px;
  }

  &__description {
    font-family: Rubik, sans-serif;
    margin: 0px 0px 32px 0px;
    font-size: 16px;
  }
}
</style>