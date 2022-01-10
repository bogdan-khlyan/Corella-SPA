<template>
  <label class="login-form-input"
         :class="{'login-form-input__error': error}">

      <input required
             :type="visible ? 'text' : type"
             @input="inputTemp">
      <span class="login-form-input__bar"></span>
      <label class="login-form-input__placeholder">{{ placeholder }}</label>


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
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  props: {
    modelValue: String,
    type: {type: String, default: 'text'},
    placeholder: {type: String, default: 'Enter'},
    error: { type: Boolean, default: false }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    inputTemp($event) {
      this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.login-form-input {
  position: relative;
  display: block;
  padding-top: 10px;

  &__error {
    input {
      border-color: red!important;
    }
    label {
      color: red!important;
    }
  }

  input:-webkit-autofill {
    & ~ label {
      top: -5px;
      left: 2px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  > input {
    width: 100%;
    height: 52px;

    padding-left: 12px;

    border: none;

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #000000;
    border-bottom: 1px solid #C4C4C4;

    transition: 0.2s;

    &:focus ~ label, &:valid ~ label {
      top: -5px;
      left: 2px;
      font-size: 18px;
      line-height: 24px;
    }

    &:focus .login-form-input__input-container:after {
      top: -5px;
      left: 2px;
      font-size: 18px;
      line-height: 24px;
    }
    &:focus ~ .login-form-input__bar:after {
      left: 0;
      width: 100%;
      height: 2px;
      background: #20C561;
    }
  }

  .login-form-input__bar {
    &:after {
      position: absolute;
      content: '';
      width: 0px;
      height: 1px;

      background: #C4C4C4;

      left: 49%;
      right: 0;
      bottom: 0;
      transition: all 0.4s ease-in-out;
    }
  }

  label {
    position: absolute;
    left: 11px;
    top: 26px;

    pointer-events: none;

    font-family: Rubik,sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;

    color: #878787;

    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;

    @media screen and (max-width: 420px) {
      font-size: 14px;
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
