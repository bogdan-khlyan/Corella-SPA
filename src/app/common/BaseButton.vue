<template>
  <button :class="['save-button', type]">
    <template #icon></template>
    <span>{{ text }}</span>
  </button>
</template>


<script>

export default {
  name: "base-button",
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: 'success'
    }
  },
}
</script>

<style scoped lang="scss">
.save-button {
  display: flex;
  min-height: 56px;
  width: 100%;
  border: none;

  span {
    margin-left: 11px;
  }

  &.success {
    background-color: #0AB258;
  }

  .el-icon {
    color: #fff;
  }
}
</style>
