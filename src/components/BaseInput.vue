<template>
  <label class="base-input" :class="{ 'base-input__error': error }">
    <div v-if="label" class="base-input__label">
      <div class="label">{{ label }}</div>
      <div v-if="error && typeof error === 'string'" class="error">
        {{ error }}
      </div>
    </div>

    <input
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  model: { prop: 'modelValue', event: 'input' },
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: { type: String, default: 'Please input' },
    disabled: { type: Boolean, default: false },
    type: { type: String },
    error: { type: [Boolean, String], default: false },
  },
}
</script>

<style scoped lang="scss">
.base-input {
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;

  &__error {
    .label,
    .error {
      color: $text-error !important;
    }

    input {
      border-color: $text-error !important;
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

    color: #7b7b7b;

    .error {
      margin-left: auto;
    }
  }

  > span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7b7b7b;
  }

  input {
    padding-left: 20px;
    padding-right: 20px;

    width: 100%;
    height: 56px;

    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #3d3d3d;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #bdbcc8;
    }

    &:focus {
      border-color: $fields-stroke-focused;
    }
  }
}
</style>
