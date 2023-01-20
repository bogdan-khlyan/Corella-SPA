<template>
  <div class="login-page">
    <div class="login-page__content">
      <div class="login-page__column">
        <login-form-wrapper />
      </div>
      <div class="login-page__column">
        <banner />
      </div>
    </div>
  </div>
</template>

<script>
import LoginFormWrapper from '@/app/auth/loginPage/components/common/LoginPageWrapper'
import Banner from '@/app/auth/loginPage/components/banner/Banner'
import { userInstanceState } from '@/app/userInstance/user-instance.state'

export default {
  name: 'Login',
  components: {
    LoginFormWrapper,
    Banner,
  },
  created() {
    if (userInstanceState.isLoggedIn) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped lang="scss">
.login-page {
  &__content {
    @media screen and (max-width: 1280.98px) {
      background: linear-gradient(218.31deg, #20c560 0%, #05a580 100%);
      min-height: 100vh;
      padding: 20px;
    }
    @media screen and (min-width: 1280.98px) {
      position: relative;
      display: flex;
    }
    @media screen and (max-width: 560.98px) {
      background: none;
      padding: 0;
    }
  }

  &__column {
    &:first-child {
      @media screen and (max-width: 1280.98px) {
        width: 100%;
      }
    }
  }
}
</style>
