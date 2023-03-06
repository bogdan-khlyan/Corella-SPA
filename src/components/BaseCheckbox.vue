<template>
  <div class="base-checkbox">
    <base-title v-if="label" :text="label" />
    <div class="base-checkbox__group">
      <el-checkbox
        v-for="option in checkBoxes"
        :key="option.value"
        v-model="option.selected"
        :label="option.label"
        @change="changeHandler(option, $event)"
      />
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle'

export default {
  name: 'BaseCheckbox',
  components: { BaseTitle },
  props: {
    modelValue: {
      type: Array,
    },
    options: {
      type: Array,
    },
    label: String,
  },
  emits: ['update:modelValue'],
  computed: {
    checkBoxes() {
      return this.options.map((option) => ({
        ...option,
        selected: this.modelValue.includes(option.value),
      }))
    },
  },
  methods: {
    changeHandler(option, value) {
      let newModelValue = [...this.modelValue]
      if (value) {
        newModelValue.push(option.value)
      } else {
        newModelValue = newModelValue.filter((item) => item !== option.value)
      }

      this.$emit('update:modelValue', newModelValue)
    },
  },
}
</script>

<style lang="scss">
.base-checkbox {
  &__group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

.el-checkbox {
  height: auto;
  font-weight: 400;
  margin: 0;

  &__label {
    font-size: 16px;
  }

  &__inner {
    width: 32px;
    height: 32px;
    font-size: 16px;

    &::after {
      width: 8px;
      height: 15px;
      font-weight: 700;
      border-width: 2px;
      top: 4px;
      left: 10px;
    }
  }
}
</style>
