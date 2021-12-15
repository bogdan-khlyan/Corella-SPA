<template>
  <form action="#" class="profile-settings">
     <div class="profile__info">
      <div class="info-profile">
        <div class="info-profile__avatar">
          <profile-avatar />
        </div>
        <div class="info-profile__name">{{ userData.name }}</div>
      </div>
    </div>
    <div class="profile__actions">
      <div class="actions-profile">
        <div class="actions-profile__top">
          <h2 class="actions-profile__title">Account settings</h2>
          <div class="actions-profile__row">
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input 
                  :label="'Username'" 
                  :model-value="userData.name" 
                  :placeholder="'Your name'" 
                />
              </div>
              <div class="actions-profile__input">
                <base-input 
                  :label="'E-mail'" 
                  :model-value="userData.email" 
                  :placeholder="'Your email'" 
                />
              </div>
            </div>
            <div class="actions-profile__column">
              <div class="actions-profile__input">
                <base-input 
                  :label="'Current password'" 
                  :model-value="userData.password" 
                  :placeholder="'Your password'" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from '@/app/common/components/BaseInput';
import ProfileAvatar from "@/app/profile/components/ProfileAvatar";

export default {
  name: "profile-settings",
  props: {
    userData: { type: Object }
  },
  data() {
    return {
      selectedTabIndex: 0,
      tabs: ["Profile", "Notification"]
    }
  },
  methods: {
    selectTab(tabIndex) {
      this.selectedTabIndex = tabIndex;
      console.log(this.$data)
    }
  },
  components: {
    ProfileAvatar,
    BaseInput,
  }
}
</script>

<style lang="scss">
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