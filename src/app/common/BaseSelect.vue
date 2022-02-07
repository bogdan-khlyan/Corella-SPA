<template>
  <div class="base-select">
    <el-select
        :model-value="modelValue"
        :placeholder="placeholder"
        @change="$emit('update:modelValue', $event, id)"
    >
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'base-select',
  props: {
    placeholder: {type: String, default: 'Select'},
    options: {type: Array, required: true},
    modelValue: String,
    id: String
  },
  model: {prop: 'modelValue', event: "change"},
  data() {
    return {
      // value: '', // TODO modelValue
    }
  }
}
</script>

<style lang="scss">
.base-select {

  input {
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #212121;

    &::placeholder {
      color: #BDBCC8;
    }
  }
}
</style>
