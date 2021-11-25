<template>
  <div class="login-form-wrapper"
       v-loading="loading"
       element-loading-background="rgba(0, 0, 0, 0.6)">
    <div class="login-form-wrapper__content">
      <div class="login-form-wrapper__logo">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <h1>Corella</h1>
      </div>

      <transition appear name="el-fade-in" mode="out-in">
        <div class="login-form-wrapper__oauth" v-if="showOauthButtons">
          <socials/>
        </div>
      </transition>

      <div class="login-form-wrapper__form">
        <transition appear name="el-fade-in" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from "../../oauth/Socials";
import {loginPageState} from "@/app/auth/loginPage/login-page.state";

export default {
  name: 'login-form-wrapper',
  components: {
    Socials
  },
  computed: {
    loading() {
      return loginPageState.loading
    },
    showOauthButtons() {
      return this.$route.name !== 'recover-form'
    }
  }
}
</script>

<style scoped lang="scss">
.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50vw;
  min-height: 100vh;
  height: 100%;

  @media screen and (max-width: 1500px) {
    width: 60vw;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 auto;
    width: 700px;
    background-color: #FFFFFF;
  }

  &__content {
    padding: 60px 20px;
    max-width: 720px;
    width: 100%;

    @media screen and (max-width: 1760px) {
      padding: 60px 40px;
    }
    @media screen and (max-width: 1620px) {
      padding: 60px 60px;
    }

  }

  &__logo {
    display: flex;
    align-items: center;

    > h1 {
      margin-left: 40px;

      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 46px;
      line-height: 56px;

      color: #1B1A18;
    }

  }

  &__oauth {
    margin-top: 60px;
  }

  &__form {
    margin-top: 50px;

    @media screen and (max-height: 920px) {
      margin-top: 60px;
    }
  }

}
</style>
