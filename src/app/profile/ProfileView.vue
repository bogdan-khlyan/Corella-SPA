<template>
  <div class="profile">
    <h1 class="profile__title">Account settings</h1>
    <div class="profile__description">Change your account settings</div>
    <div class="profile__tabs">
      <profile-tabs @select-tab="selectTab" :tabs="tabs" :selected-tab-index="selectedTabIndex" />
    </div>
    <div class="profile__content">
      <profile-settings
        :user-data="userData"
        v-show="selectedTabName === 'Profile'" 
      />
      <profile-notification v-show="selectedTabName === 'Notification'" />
    </div>
  </div>
</template>

<script>
import ProfileSettings from "@/app/profile/components/profileSettings/ProfileSettings";
import ProfileTabs from "@/app/profile/components/ProfileTabs";
import ProfileNotification from "@/app/profile/components/ProfileNotification";

export default {
  name: "profile-view",
  data() {
    return {
      selectedTabName: "Profile",
      selectedTabIndex: 0,
      tabs: ["Profile", "Notification"],
      userData: {
        id: 1,
        name: "Robert Cordona",
        email: "robertCordona2023@gmail.com",
        password: "passwordforcorella"
      }
    }
  },
  methods: {
    selectTab(tabName, tabIndex) {
      this.selectedTabName = tabName;
      this.selectedTabIndex = tabIndex;
      console.log(this.$refs)
    }
  },
  components: {
    ProfileTabs,
    ProfileNotification,
    ProfileSettings,
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

  &__tabs {
    margin: 0px 0px 48px 0px;
  }
  &__info {
    margin: 0px 0px 58px 0px;
  }
}
</style>