<template>
  <form class="recovery-form" @submit.prevent="submitForm">
    <div class="recovery-form__title">Forgot your password?</div>
    <div class="recovery-form__description">
      Please, enter your email address
    </div>

    <login-form-input
      v-model="email"
      class="recovery-form__input"
      placeholder="E-mail"
    />

    <div class="recovery-form__button">
      <button>Continue</button>
    </div>

    <router-link to="/login" class="recovery-form__login">
      Go back to the sign in page
    </router-link>
  </form>
</template>

<script>
import LoginFormInput from '../common/LoginFormInput'

export default {
  name: 'RecoveryPasswordForm',
  components: { LoginFormInput },
  data() {
    return {
      email: String(),
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.credentials)
    },
  },
}
</script>

<style lang="scss" scoped>
.recovery-form {
  &__title {
    font-family: Rubik, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(38 / 32 * 100%);
    letter-spacing: 0em;
    text-align: left;
    color: #393939;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    @media screen and (max-width: 1280.98px) {
      font-size: 22px;
      &:not(:last-child) {
        margin-bottom: 33px;
      }
    }
  }

  &__description {
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #878787;

    &:not(:last-child) {
      margin-bottom: 52px;
    }

    @media screen and (max-width: 1280.98px) {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }

  &__button {
    text-align: left;
    margin-top: 100px;
    margin-bottom: 18px;

    @media screen and (max-height: 920px) {
      margin-top: 50px;
    }

    > button {
      width: 335px;
      height: 86px;

      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: calc(37 / 32 * 100%);

      color: #ffffff;

      border-radius: 8px;
      border: none;
      background-color: #20c462;

      cursor: pointer;
      transition: 200ms;

      @media screen and (max-height: 920px) {
        width: 280px;
        height: 70px;
        font-size: 24px;
      }
      @media screen and (any-hover: hover) {
        &:hover {
          background-color: #61dd93;
        }
      }
      @media screen and (max-width: 1280.98px) {
        height: 60px;
        font-size: 20px;
      }
      @media screen and (max-width: 560.98px) {
        width: 100%;
      }
    }
  }

  &__login {
    font-family: Rubik, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(24 / 16 * 100%);
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
    color: #393939;

    cursor: pointer;
    transition: 0.2s;
    @media screen and (max-width: 1280.98px) {
      font-size: 16px;
    }
    @media screen and (any-hover: hover) {
      &:hover {
        color: #0ab258;
      }
    }
  }
}
</style>
