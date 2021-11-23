<template>
  <form class="login-form">
    <login-form-input class="login-form__input"
                      placeholder="Email or username"
                      v-model="credentials.email"/>
    <login-form-input class="login-form__input"
                      placeholder="Password"
                      type="password"
                      v-model="credentials.email"/>

    <div class="login-form__forgot">
      <a href="#">Forgot my password?</a>
    </div>
    <div class="login-form__button">
      <button>Log in</button>
    </div>
  </form>
</template>

<script>
import LoginFormInput from "@/app/auth/login/loginForm/LoginFormInput";

export default {
  name: 'login-form',
  components: {
    LoginFormInput
  },
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {

  &__input {
    &:first-child {
      margin-bottom: 30px;
    }
  }

  &__forgot {
    margin-top: 24px;
    text-align: right;

    > a {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      text-decoration: none;

      color: #878787;
    }
  }

  &__button {
    text-align: left;
    margin-top: 50px;

    @media screen and (max-height: 920px) {
      margin-top: 30px;
    }

    > button {
      width: 335px;
      height: 86px;

      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 37px;

      color: #FFFFFF;

      border-radius: 8px;
      border: none;
      background-color: #20C462;

      cursor: pointer;
      transition: 200ms;

      @media screen and (max-height: 920px) {
        width: 280px;
        height: 70px;
        font-size: 24px;
      }

      &:hover {
        background-color: #61dd93;
      }

    }
  }

}
</style>
