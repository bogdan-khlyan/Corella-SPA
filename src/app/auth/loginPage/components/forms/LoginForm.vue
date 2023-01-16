<template>
  <form
    class="login-form"
    @submit.prevent="submitForm"
  >
    <login-form-input
      v-model="credentials.login"
      class="login-form__input"
      placeholder="Email or username"
      :error="errors.login"
      @input="validateLogin"
    />
    <login-form-input
      v-model="credentials.password"
      class="login-form__input"
      placeholder="Password"
      type="password"
      :error="errors.password"
      @input="validatePassword"
    />

    <router-link
      to="/login/recover"
      class="login-form__forgot"
    >
      Forgot my password?
    </router-link>
    <div class="login-form__button">
      <button>Log in</button>
    </div>
    <div class="login-form__register">
      Don't have an account yet?<router-link to="/login/register">
        Register
      </router-link>
    </div>
  </form>
</template>

<script>
import LoginFormInput from '@/app/auth/loginPage/components/common/LoginFormInput'
import { loginPageState } from '@/app/auth/loginPage/login-page.state'
import { userInstanceController } from '@/app/userInstance/user-instance.controller'

export default {
  name: 'LoginForm',
  components: {
    LoginFormInput,
  },
  data() {
    return {
      credentials: {
        login: String(),
        password: String(),
      },
      errors: {
        login: false,
        password: false,
      },
    }
  },
  methods: {
    submitForm() {
      if (this.validate()) {
        loginPageState.loading = true
        userInstanceController.login(this.credentials)
          .finally(() => loginPageState.loading = false)
      }
    },
    validate() {
      let error = false

      if (!this.validateLogin()) {
        error = true
      }
      if (!this.validatePassword()) {
        error = true
      }

      return !error
    },
    validateLogin(isEmit) {
      if (isEmit && !this.errors.login) {
        return
      }
      if (this.credentials.login.length > 4) {
        this.errors.login = false
        return true
      } 
      this.errors.login = true
      return false
    },
    validatePassword(isEmit) {
      if (isEmit && !this.errors.password) {
        return
      }
      if (this.credentials.password.length >= 6) {
        this.errors.password = false
        return true
      } 
      this.errors.password = true
      return false
    },
  },
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
    @media (any-hover: hover) {
      &:hover {
        color: #0AB258;
      }
    }
    @media (max-width: 1280.98px) {
      font-size: 16px;
    }
  }

  &__button {
    text-align: left;
    margin-top: 50px;
    &:not(:last-child) {
      margin-bottom: 18px;
    }

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
      @media (max-width: 1280.98px) {
        height: 60px;
        font-size: 20px;
      }
      @media (max-width: 560.98px) {
        width: 100%;
      }
      @media (any-hover: hover) {
        &:hover {
          background-color: #61dd93;
        }
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
    @media (max-width: 1280.98px) {
      font-size: 16px;
    }

    > a {
      font-weight: 500;
      color: #0AB258;
      text-decoration: none;

      margin-left: 10px;
      cursor: pointer;
      @media (max-width: 1280.98px) {
        margin-left: 6px;
      }
    }
  }
}
</style>
