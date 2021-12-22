<template>
  <form @submit.prevent="submitForm" class="login-form">
    <login-form-input class="login-form__input"
                      placeholder="Email or username"
                      v-model="credentials.email"/>
    <login-form-input class="login-form__input"
                      placeholder="Password"
                      type="password"
                      v-model="credentials.password"/>

    <router-link to="/login/recover" class="login-form__forgot">
      Forgot my password?
    </router-link>
    <div class="login-form__button">
      <button>Log in</button>
    </div>
    <div class="login-form__register">
      Don't have an account yet?<router-link to="/login/register">Register</router-link>
    </div>
  </form>
</template>

<script>
import LoginFormInput from "@/app/auth/loginPage/components/common/LoginFormInput";
import {loginPageState} from "@/app/auth/loginPage/login-page.state";

// TODO добавить валидацию
// TODO проходить авторизацию на бэке используя user-service.controller
export default {
  name: 'login-form',
  components: {
    LoginFormInput
  },
  data() {
    return {
      credentials: {
        email: String(),
        password: String()
      }
    }
  },
  methods: {
    submitForm() {
      loginPageState.loading = true
      setTimeout(() => {
        loginPageState.loading = false
        this.$router.push('/')
      }, 2000)
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
    display: block;

    margin-top: 24px;
    margin-left: auto;

    width: max-content;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-decoration: none;

    color: #878787;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      color: #0AB258;
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

  &__register {
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #393939;

    margin-top: 18px;

    > a {
      font-weight: 500;
      color: #0AB258;
      text-decoration: none;

      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
