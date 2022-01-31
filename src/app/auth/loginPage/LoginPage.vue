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
import {userInstanceState} from "@/app/userInstance/user-instance.state";

export default {
  name: 'login',
  components: {
    LoginFormWrapper,
    Banner
  },
  created() {
    if (userInstanceState.isLoggedIn) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {

  &__content {
    @media (max-width: 1280px) {
      background: linear-gradient(218.31deg, #20C560 0%, #05A580 100%);
      min-height: 100vh;
      padding: 20px;
    }
    @media (min-width: 1280px) {
      position: relative;
      display: flex;
    }
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
