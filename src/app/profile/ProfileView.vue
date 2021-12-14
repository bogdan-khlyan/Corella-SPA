<template>
  <div class="profile">
    <h1 class="profile__title">Account settings</h1>
    <div class="profile__description">Change your account settings</div>
    <div class="profile__menu">
      <nav class="menu-profile">
        <ul class="menu-profile__list">
          <li class="menu-profile__item"><a href="" class="menu-profile__link">Profile</a></li>
          <li class="menu-profile__item"><a href="" class="menu-profile__link">Notification</a></li>
        </ul>
      </nav>
    </div>
    <div class="profile__info">
      <div class="info-profile">
        <div class="info-profile__avatar">
          <div class="profile-avatar">
            <div class="profile-avatar__image">
              <img class="" src="@/assets/images/profile/avatar.jpg" alt="User Avatar">
            </div>
<!--            <svg class="profile-avatar__edit"></svg>-->
          </div>
        </div>
        <div class="info-profile__name">Robert Cordona</div>
      </div>
    </div>
    <div class="profile__actions">
      <div class="actions-profile">
        <div class="actions-profile__top">
          <h2 class="actions-profile__title">Account settings</h2>
<!--          <svg class="actions-profile__edit"></svg>-->
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
  </div>
</template>

<script>
import BaseInput from '@/app/common/components/BaseInput';
export default {
  name: "profile-view",
  components: {
    BaseInput
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
    font-size: 18px;
  }

  &__menu {
    margin: 0px 0px 48px 0px;
  }
  &__info {
    margin: 0px 0px 58px 0px;
  }
}

.menu-profile {


  &__list {
    min-height: 52px;
    display: flex;
    background-color: rgba(10, 178, 88, 0.08);
    border-radius: 4px;
  }

  &__item {
    margin: 0px 80px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;

    &:last-child {
      margin: 0;
    }

  }

  &__link {
    font-family: "Rubik";
    color: #212121;
    font-size: 18px;
    text-decoration: none;
    display: block;
    padding: 0px 16px;
    font-weight: 400;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
    }

    span {

    }
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
.profile-avatar {

  &__image {
    width: 90px;
    height: 90px;
    object-fit: cover;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid #20C560;
    }
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