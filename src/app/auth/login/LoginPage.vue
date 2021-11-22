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
import LoginFormWrapper from "@/app/auth/login/loginForm/LoginFormWrapper";
import Banner from "@/app/auth/login/banner/Banner";

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
    display: flex;
  }

  &__column {

  }

}
</style>
