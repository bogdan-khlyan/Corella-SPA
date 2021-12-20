<template>
  <label class="base-input-password"
         :class="{'base-input-password__error': error}">
    <span v-if="label">{{ label }}</span>
    <input
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)">

    <svg @click="showPassword = !showPassword"
         class="base-input-password__eye"
         :class="{'base-input-password__eye--active': showPassword}"
         width="24" height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M2.2231 12.6115C3.52862 14.2475 7.41214 18.6103 12.0063 18.6103C16.6004 18.6103 20.4839 14.2477 21.7894 12.6115C22.0702 12.2479 22.0702 11.7356 21.7894 11.3887C20.4839 9.75269 16.6004 5.38992 12.0063 5.38992C7.41214 5.3734 3.52862 9.73616 2.2231 11.3722C1.92563 11.7358 1.92563 12.2479 2.2231 12.6115ZM12.0063 8.0175C14.2042 8.0175 15.9724 9.78574 15.9724 11.9836C15.9724 14.1816 14.2042 15.9498 12.0063 15.9498C9.80835 15.9498 8.04011 14.1816 8.04011 11.9836C8.04011 9.78574 9.80835 8.0175 12.0063 8.0175Z" fill="#BDBCC8"/>
      <path d="M12.0063 13.9668C13.1015 13.9668 13.9893 13.079 13.9893 11.9837C13.9893 10.8885 13.1015 10.0007 12.0063 10.0007C10.911 10.0007 10.0232 10.8885 10.0232 11.9837C10.0232 13.079 10.911 13.9668 12.0063 13.9668Z" fill="#BDBCC8"/>
    </svg>
  </label>
</template>

<script>
export default {
  name: "BaseInputPassword",
  model: { prop: 'modelValue', event: 'input' },
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: { type: String, default: 'Please input' },
    error: { type: Boolean, default: false }
  },
  data(){
    return {
      showPassword: false
    }
  },
  computed: {
    inputType() {
      return !this.showPassword ? 'password' : 'text'
    }
  }
}
</script>

<style lang="scss">
.base-input-password {
  display: block;
  position: relative;
  margin-top: 12px;
  margin-bottom: 12px;
  
  &__error {
    input {
      border-color: $text-error!important;
    }
  }

  > span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;
  }

  input {
    padding-left: 20px;
    padding-right: 50px;

    width: 100%;
    height: 56px;

    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #3D3D3D;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #BDBCC8;
    }

    &:focus {
      border-color: $fields-stroke-focused;
    }

  }

  &__eye {
    position: absolute;
    right: 15px;
    bottom: 16px;
    cursor: pointer;
    path {
      transition: 0.1s ease-in;
    }
    &--active {
      path {
        fill: #0AB258;
      }
    }
  }
}

</style>