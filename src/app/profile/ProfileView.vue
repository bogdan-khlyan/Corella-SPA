<template>
  <div class="profile">
    <h1 class="profile__title">Account settings</h1>
    <div class="profile__description">Change your account settings</div>
    <div class="profile__tabs">
      <profile-tabs @set-current-tab="setCurrentTab" :tabs="tabs" />
    </div>
    <div class="profile__info">
      <div class="info-profile">
        <div class="info-profile__avatar">
          <profile-avatar />
        </div>
        <div class="info-profile__name">Robert Cordona</div>
      </div>
    </div>
    <div class="profile__actions">
      <div class="actions-profile">
        <div class="actions-profile__top">
          <h2 class="actions-profile__title">Account settings</h2>
          <div class="actions-profile__row">
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input :label="'Username'" :model-value="''" :placeholder="'Your name'" />
              </div>
              <div class="actions-profile__input">
                <base-input :label="'E-mail'" :model-value="''" :placeholder="'Your email'" />
              </div>
            </div>
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input :label="'Current password'" :model-value="''" :placeholder="'Your password'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile__notification">
      <profile-notification v-if="currentTab === 'Notification'" />
    </div>
  </div>
</template>

<script>
import BaseInput from '@/app/common/components/BaseInput';
import ProfileAvatar from "@/app/profile/components/ProfileAvatar";
import ProfileTabs from "@/app/profile/components/ProfileTabs";
import ProfileNotification from "@/app/profile/components/ProfileNotification";

export default {
  name: "profile-view",
  data() {
    return {
      currentTab: "",
      tabs: ["Profile", "Notification"]
    }
  },
  methods: {
    setCurrentTab(tabName) {
      this.currentTab = tabName;
      console.log(this.$data)
    }
  },
  components: {
    ProfileAvatar,
    BaseInput,
    ProfileTabs,
    ProfileNotification
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


.info-profile {
  display: flex;
  &__name {
    font-family: "Rubik";
    padding: 20px 0px 0px 28px;
    font-size: 18px;
    font-weight: 500;
    flex: 1 1 auto;
  }
}
.actions-profile {
  &__title {
    font-family: "Rubik";
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    margin: 0px 0px 16px 0px;
  }
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