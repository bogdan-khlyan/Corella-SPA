<template>
  <label class="base-input"
         :class="{'base-input__error': error}">
    <div v-if="label" class="base-input__label">
      <div class="label">{{label}}</div>
      <div v-if="error && typeof error === 'string'" class="error">{{error}}</div>
    </div>

    <textarea
        cols="30"
        rows="10"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"/>
  </label>
</template>

<script>
export default {
  name: 'base-textarea',
  model: { prop: 'modelValue', event: 'input' },
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: { type: String, default: 'Please input' },

    error: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="scss">
.base-input {
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;

  &__error {
    .label, .error {
      color: $text-error!important;
    }
    textarea {
      border-color: $text-error!important;
    }
  }

  &__label {
    padding-top: 4px;
    padding-bottom: 4px;

    display: flex;
    width: 100%;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;

    .error {
      margin-left: auto;
    }
  }

  textarea {
    padding: 16px 20px;

    width: 100%;
    height: 150px;

    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #3D3D3D;
    resize: vertical;

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

}
</style>
