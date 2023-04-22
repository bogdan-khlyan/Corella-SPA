<template>
  <div class="base-select">
    <el-select
      v-model="selectedItem"
      :placeholder="placeholder"
      :disabled="disabled"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  model: { prop: 'modelValue', event: 'change' },
  props: {
    placeholder: { type: String, default: 'Select' },
    options: { type: Array, required: true },
    modelValue: String,
    disabled: {
      type: Boolean,
    },
    id: String,
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    selectedItem: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
        this.$emit('change', value)
      },
    },
  },
}
</script>

<style lang="scss">
.base-select {
  input {
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #212121;

    &::placeholder {
      color: #bdbcc8;
    }
  }

  .el-input.is-disabled .el-input__inner {
    background-color: transparent;
  }
}
</style>
