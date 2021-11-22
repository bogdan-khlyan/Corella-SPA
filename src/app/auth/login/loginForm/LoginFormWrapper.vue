<template>
  <div class="login-form-wrapper">
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
  width: 50vw;
  padding: 120px;
  box-sizing: border-box;

  &__logo {
    display: flex;

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
    }

    &--google {
      margin-right: 12px;
      width: 100%;
      height: 73px;
      border: none;

      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 33px;

      color: #FFFFFF;

      background: #EA4436;
      border-radius: 8px;

      cursor: pointer;
      transition: 200ms;

      &:hover {
        background: #ea7167;
      }
    }

    &--telegram {
      margin-left: 12px;
      width: 100%;
      height: 73px;
      border: none;

      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 33px;

      color: #FFFFFF;

      background: #2EA6E2;
      border-radius: 8px;

      cursor: pointer;
      transition: 200ms;

      &:hover {
        background: #5db2dd;
      }

    }

  }

  &__form {
    margin-top: 100px;
  }

}
</style>
