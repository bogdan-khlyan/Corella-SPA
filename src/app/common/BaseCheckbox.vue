<template>
  <div class="base-checkbox">
    <base-title v-if="label" :text="label" />
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="value in checkboxValues" :key="value" :label="value"/>
    </el-checkbox-group>
  </div>
</template>

<script>
import BaseTitle from "@/app/common/BaseTitle";

export default {
  name: "base-checkbox",
  components: {BaseTitle},
  props: {
    checkboxValues: {type: Array, required: true},
    label: String
  },
  data() {
    return {
      checkList: []
    }
  }
}
</script>


<style lang="scss">
.el-checkbox {
  height: auto;
  font-weight: 400;
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