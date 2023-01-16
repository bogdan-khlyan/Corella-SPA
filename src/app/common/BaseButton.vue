<template>
  <button
    :style="{ maxWidth: width}"
    :class="['base-button', type]"
  >
    <slot />
    <span>{{ title }}</span>
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
    type: {
      type: String,
      default: 'success',
    },
  },
}
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  border-radius: 4px;
  border: none;
  width: 100%;
  padding: 2px 10px;
  font-size: 16px;
  transition: all 0.3s ease 0s;
  color: #fff;
  cursor: pointer;
  font-family: "Rubik", sans-serif;

  span {
    line-height: 24px;

    &:not(:first-child) {
      margin-left: 11px;
    }
  }

  &.success {
    background-color: #0AB258;
  }

  &.danger {
    background-color: transparent;
    font-size: 16px;
    color: #F61414;
  }

  &.outline {
    border: 1px solid #0AB258;
    background-color: #fff;
    color: #3B3B3B;
    @media (any-hover: hover) {
      &:hover {
        background-color: #0AB258;
        color: #fff;
      }
    }
  }

  .el-icon {
    color: #fff;
  }
}
</style>
