<template>
  <div
    v-loading="loading"
    class="login-form-wrapper"
    element-loading-background="rgba(0, 0, 0, 0.6)"
  >
    <div class="login-form-wrapper__content">
      <div class="login-form-wrapper__logo">
        <img src="@/assets/images/corella_icon.svg" alt="" />
        <h1>Corella</h1>
      </div>

      <transition appear name="el-fade-in" mode="out-in">
        <div v-if="showOauthButtons" class="login-form-wrapper__oauth">
          <socials />
        </div>
      </transition>

      <div class="login-form-wrapper__form">
        <router-view v-slot="{ Component }">
          <transition appear name="el-fade-in" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { loginPageState } from '@/app/auth/loginPage/login-page.state'
import Socials from '@/views/login-page/components/common/Socials'

export default {
  name: 'LoginFormWrapper',
  components: {
    Socials,
  },
  computed: {
    loading() {
      return loginPageState.loading
    },
    showOauthButtons() {
      return this.$route.name !== 'recover-form'
    },
  },
}
</script>

<style scoped lang="scss">
.login-form-wrapper {
  background-color: #ffffff;
  @media screen and (min-width: 1280.98px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50vw;
    min-height: 100vh;
    height: 100%;
  }
  @media screen and (max-width: 1280.98px) {
    border-radius: 8px;
  }
  @media screen and (max-width: 560.98px) {
    border-radius: 0;
  }
  @media screen and (max-width: 1500px) {
    width: 60vw;
  }
  @media screen and (max-width: 1280.98px) {
    margin: 0 auto;
    width: 100%;
    max-width: 700px;
  }

  &__content {
    padding: 30px 35px;
    max-width: 720px;
    width: 100%;
    @media screen and (max-width: 1280.98px) {
      margin: 0 auto;
    }
    @media screen and (min-width: 1280.98px) {
      padding: 60px 40px;
    }
    @media screen and (max-width: 1760px) {
    }
    @media screen and (min-width: 1620px) {
      padding: 60px 60px;
    }
    @media screen and (max-width: 560.98px) {
      padding: 30px 20px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 60px;
    }

    @media screen and (max-width: 1280.98px) {
      &:not(:last-child) {
        margin-bottom: 27px;
      }
    }

    img {
      @media screen and (max-width: 1280.98px) {
        max-width: 75px;
      }
      @media screen and (max-width: 560.98px) {
        max-width: 60px;
      }
    }

    > h1 {
      margin-left: 40px;

      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 46px;
      line-height: calc(56 / 46 * 100%);

      color: #1b1a18;
      @media screen and (max-width: 1280.98px) {
        margin-left: 25px;
        font-size: 30px;
      }
      @media screen and (max-width: 560.98px) {
        font-size: 27px;
      }
    }
  }

  &__oauth {
    margin-bottom: 40px;
    @media screen and (min-height: 1280.98px) {
      margin-bottom: 60px;
    }
  }

  &__form {
  }
}
</style>
