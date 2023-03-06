<template>
  <div class="base-checkbox">
    <base-title v-if="label" :text="label" />
    <div class="base-checkbox__group">
      <el-checkbox
        v-for="option in options"
        :key="option.value"
        :label="option.label"
      />
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/app/common/BaseTitle'

export default {
  name: 'BaseCheckbox',
  components: { BaseTitle },
  props: {
    value: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
    },
    label: String,
  },
  data() {
    return {
      checkList: [],
    }
  },
  watch: {
    checkList() {
      console.log(this.checkList)
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
