<template>
  <form @submit.prevent="submitForm" class="register-form">
    <login-form-input class="register-form__input"
                      placeholder="E-mail"
                      v-model="credentials.email"/>
    <login-form-input class="register-form__input"
                      placeholder="User name"
                      v-model="credentials.name"/>
    <login-form-input class="register-form__input"
                      placeholder="Password"
                      type="password"
                      v-model="credentials.password"/>

    <div class="register-form__button">
      <button>Registration</button>
    </div>
    <div class="register-form__login">
      Already have an account?
      <router-link to="/login">Log in</router-link>
    </div>
  </form>
</template>

<script>
import LoginFormInput from "@/app/auth/loginPage/components/common/LoginFormInput";

export default {
  name: "register-form",
  components: {
    LoginFormInput
  },
  data() {
    return {
      credentials: {
        email: String(),
        name: String(),
        password: String()
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.credentials)
    }
  }
}
</script>

<style lang="scss" scoped>
.register-form {

  &__input {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0px;
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

  &__login {
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #393939;

    margin-top: 18px;
    @media screen and (max-width: 1280.98px) {
      font-size: 16px;
    }
    > a {
      font-weight: 500;
      color: #0AB258;
      text-decoration: none;

      margin-left: 10px;
      cursor: pointer;
      @media screen and (max-width: 1280.98px) {
        margin-left: 6px;
      }
    }
  }
}
</style>
