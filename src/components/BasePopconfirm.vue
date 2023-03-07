<template>
  <el-popconfirm
    :title="title"
    class="base-popconfirm-reference"
    :confirm-button-text="confirmButtonText"
    :cancel-button-text="cancelButtonText"
    :disabled="disabled"
    @confirm="$emit('confirm', $event)"
  >
    <template #reference>
      <button :class="referenceClass">
        <svg-icon :icon="require('@/assets/images/icons/tasks/delete.svg')" />
      </button>
    </template>
  </el-popconfirm>
</template>

<script>
export default {
  name: 'BasePopconfirm',
  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    referenceClass: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['confirm'],
}
</script>

<style scoped lang="scss">
.base-popconfirm-reference {
  background-color: transparent;
  border: none;
}
</style>
