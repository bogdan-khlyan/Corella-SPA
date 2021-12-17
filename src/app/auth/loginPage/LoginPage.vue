<template>
  <div class="login-page">
    <div class="login-page__content">
      <div class="login-page__column">
        <login-form-wrapper/>
      </div>
      <div class="login-page__column">
        <banner/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginFormWrapper from "@/app/auth/loginPage/components/common/LoginPageWrapper";
import Banner from "@/app/auth/loginPage/components/banner/Banner";

// TODO если юзер уже авторизован переводить его на домашнюю страницу
export default {
  name: 'login',
  components: {
    LoginFormWrapper,
    Banner
  }
}
</script>

<style scoped lang="scss">
.login-page {

  &__content {
    position: relative;
    display: flex;
  }

  &__column {
    &:first-child {
      @media screen and (max-width: 1280px) {
        width: 100%;
      }
    }
  }

}
</style>
