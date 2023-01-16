<template>
  <div class="profile-settings">
    <div class="profile-settings__info">
      <div class="profile-settings-info">
        <div class="profile-settings-info__avatar">
          <profile-avatar />
        </div>
        <div class="profile-settings-info__name">
          {{ userInfo.username }}
        </div>
      </div>
    </div>
    <div class="profile-settings__actions">
      <div class="profile-settings-actions">
        <div class="profile-settings-actions__row">
          <div class="profile-settings-actions__column">
            <h3>Account settings</h3>
            <profile-account-settings-form />
          </div>
          <div class="profile-settings-actions__column">
            <h3>Change password</h3>
            <profile-change-password-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from '@/app/userInstance/profile/profileSettings/components/ProfileAvatar'
import ProfileChangePasswordForm from '@/app/userInstance/profile/profileSettings/components/ProfileChangePasswordForm'
import ProfileAccountSettingsForm from '@/app/userInstance/profile/profileSettings/components/ProfileAccountSettingsForm'
import { userInstanceState } from '@/app/userInstance/user-instance.state'

export default {
  name: 'ProfileSettings',
  components: { ProfileAccountSettingsForm, ProfileChangePasswordForm, ProfileAvatar },
  computed: {
    userInfo() {
      return userInstanceState.info
    },
  },
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

    > h3 {
      font-family: Rubik, sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #212121;
    }

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
