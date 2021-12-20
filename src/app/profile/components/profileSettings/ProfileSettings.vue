<template>
  <form action="#" class="profile-settings">
    <div class="profile-settings__info">
      <div class="profile-settings-info">
        <div class="profile-settings-info__avatar">
          <profile-avatar/>
        </div>
        <div class="profile-settings-info__name">{{ userData.name }}</div>
      </div>
    </div>
    <div class="profile-settings__actions">
      <div class="profile-settings-actions">
        <div class="profile-settings-actions__row">
          <div class="profile-settings-actions__column">
            <profile-actions-title
                :isEditingMode="editAccountSettings"
                @toggle-edit-mode="toggleEditMode"
                :title="'Account settings'"
                :settingsName="'account-settings'"
            />
            <profile-account-settings :userData="userData"/>
          </div>
          <div class="profile-settings-actions__column">
            <profile-actions-title
                :isEditingMode="editSecurity"
                @toggle-edit-mode="toggleEditMode"
                :title="'Security'"
                :settingsName="'security'"
            />
            <profile-security :userData="userData" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import ProfileAvatar from "@/app/profile/components/ProfileAvatar";
import ProfileSecurity from "@/app/profile/components/profileSettings/ProfileSecurity";
import ProfileAccountSettings from "@/app/profile/components/profileSettings/ProfileAccountSettings";
import ProfileActionsTitle from "@/app/profile/components/profileSettings/ProfileActionsTitle";

export default {
  name: "profile-settings",
  data() {
    return {
      userData: {
        id: 1,
        name: "Robert Cordona",
        email: "robertCordona2023@gmail.com",
        password: "passwordforcorella",
      },
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
  }

  &__column {
    flex: 0 1 50%;
    padding: 0px 16px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
}
</style>