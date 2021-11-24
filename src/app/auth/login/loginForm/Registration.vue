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
      Already have an account?<span @click="$emit('changeTypeForm','login')">Log in</span>
    </div>
  </form>
</template>

<script>
import LoginFormInput from "@/app/auth/login/loginForm/LoginFormInput";

export default {
  name: "register",
  components: {
    LoginFormInput
  },
  data() {
    return {
      credentials: {
        email: '',
        name:'',
        password: ''
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

      &:hover {
        background-color: #61dd93;
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

    > span {
      font-weight: 500;
      color: #0AB258;

      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>