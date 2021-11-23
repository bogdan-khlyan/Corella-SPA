<template>
  <div class="login-form-wrapper">
    <div class="login-form-wrapper__content">
      <div class="login-form-wrapper__logo">
        <img src="@/assets/images/corella_icon.svg" alt="">
        <h1>Corella</h1>
      </div>
      <div class="login-form-wrapper__oauth">
        <div class="login-form-wrapper__oauth--title">
          <span>Submit your profile</span>
        </div>
        <div class="login-form-wrapper__oauth--buttons">
          <button class="login-form-wrapper__oauth--google">Google</button>
          <button class="login-form-wrapper__oauth--telegram">Telegram</button>
        </div>
      </div>
      <div class="login-form-wrapper__form">
        <login-form/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/app/auth/login/loginForm/LoginForm";

export default {
  name: 'login-form-wrapper',
  components: {
    LoginForm
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
    width: 100%;

    &--title {
      margin-top: 80px;
      margin-bottom: 40px;
      text-align: left;

      @media screen and (max-height: 920px) {
        margin-top: 40px;
      }

      > span {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 37px;

        color: #393939;
      }
    }

    &--buttons {
      width: 100%;
      display: flex;

      > button {
        width: 100%;
        height: 73px;

        border: none;
        border-radius: 8px;

        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 33px;

        color: #FFFFFF;

        cursor: pointer;
        transition: 200ms;

        @media screen and (max-height: 920px) {
          height: 63px;
        }
      }

    }

    &--google {
      margin-right: 12px;

      background: #EA4436;

      &:hover {
        background: #ea7167;
      }
    }

    &--telegram {
      margin-left: 12px;

      background: #2EA6E2;

      &:hover {
        background: #5db2dd;
      }

    }

  }

  &__form {
    margin-top: 100px;

    @media screen and (max-height: 920px) {
      margin-top: 60px;
    }
  }

}
</style>
