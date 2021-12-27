<template>
  <div class="profile-settings">
    <div class="profile-settings__info">
      <div class="profile-settings-info">
        <div class="profile-settings-info__avatar">
          <profile-avatar/>
        </div>
        <div class="profile-settings-info__name">{{ userInfo.name }}</div>
      </div>
    </div>
    <div class="profile-settings__actions">
      <div class="profile-settings-actions">
        <div class="profile-settings-actions__row">
          <div class="profile-settings-actions__column">
            <profile-actions-title
                title="Account settings"
                settingsName="account-settings"
                :isEditingMode="editAccountSettings"
                @toggle-edit-mode="toggleEditMode"/>
            <profile-account-settings/>
          </div>
          <div class="profile-settings-actions__column">
            <profile-actions-title
                title="Change password"
                settingsName="security"
                :isEditingMode="editSecurity"
                @toggle-edit-mode="toggleEditMode"/>
            <profile-security/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from "@/app/profile/components/ProfileAvatar";
import ProfileSecurity from "@/app/profile/components/profileSettings/ProfileSecurity";
import ProfileAccountSettings from "@/app/profile/components/profileSettings/ProfileAccountSettings";
import ProfileActionsTitle from "@/app/profile/components/profileSettings/ProfileActionsTitle";
import {userInstanceState} from "@/app/userInstance/user-instance.state";

export default {
  name: "profile-settings",
  computed: {
    userInfo() {
      return userInstanceState.info
    }
  },
  data() {
    return {
      editAccountSettings: false,
      editSecurity: false
    }
  },
  methods: {
    toggleEditMode(settingsName) {

      switch (settingsName) {
        case 'account-settings':
          this.editAccountSettings = !this.editAccountSettings
          return
        case 'security':
          this.editSecurity = !this.editSecurity
          return
      }

    }
  },
  components: {
    ProfileActionsTitle,
    ProfileAccountSettings,
    ProfileSecurity,
    ProfileAvatar,
  }
}
</script>

<style lang="scss">
.profile-settings {
  &__info {
    margin: 0px 0px 58px 0px;
  }
  &__actions {
    max-width: 1400px;
  }
}
.profile-settings-info {
  display: flex;

  &__name {
    font-family: "Rubik";
    padding: 20px 0px 0px 28px;
    font-size: 18px;
    font-weight: 500;
    flex: 1 1 auto;
  }
}

.profile-settings-actions {

  &__row {
    display: flex;
    margin: 0px -16px;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
  }

  &__column {
    flex: 0 1 50%;
    padding: 0px 16px;

    @media screen and (max-width: 600px) {
      flex: unset;
      width: 100%;
    }
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
}
</style>