<template>
  <label class="login-form-input">
    <input
        :type="visible ? 'text' : type"
        :placeholder="placeholder">

    <img v-if="type === 'password'"
         v-show="!visible"
         @click="visible = !visible"
         class="login-form-input__eye"
         src="@/assets/images/icons/login/visible-eye.svg"
         alt="">
    <img v-if="type === 'password'"
         v-show="visible"
         @click="visible = !visible"
         class="login-form-input__eye"
         src="@/assets/images/icons/login/no-visible-eye.svg"
         alt="">
  </label>
</template>

<script>
export default {
  name: 'login-form-input',
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: 'Enter' }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped lang="scss">
.login-form-input {
  position: relative;
  display: block;
  padding-top: 10px;

  > input {
    width: 100%;
    height: 52px;

    padding-left: 12px;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #C4C4C4;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #000000;

    transition: 0.2s;

    &::placeholder {
      position: absolute;
      bottom: 9px;

      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;

      transition: 0.2s;
      color: #878787;
    }

    &:focus {
      border-color: #20C561;

      &::placeholder {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;

        bottom: 32px;
        left: 0px;
        color: #878787;
      }
    }

  }

  &__eye {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
  }

  // todo move to global styles ?
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }

}
</style>
