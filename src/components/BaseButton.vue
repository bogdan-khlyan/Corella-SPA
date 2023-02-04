<template>
  <button
    :style="{ maxWidth: width }"
    :class="['base-button', type, loading ? 'base-button--loading' : '']"
    :disabled="disabled || loading"
  >
    <template v-if="!loading">
      <slot />
      <span>{{ title }}</span>
    </template>
    <loading
      v-else
      class="base-button__loading"
      :class="{ rotate: loading }"
    ></loading>
  </button>
</template>

<script>
import { Loading } from '@element-plus/icons-vue'

export default {
  name: 'BaseButton',
  components: { Loading },
  props: {
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
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
  font-family: 'Rubik', sans-serif;

  span {
    line-height: 24px;

    &:not(:first-child) {
      margin-left: 11px;
    }
  }

  &.success {
    background-color: #0ab258;
  }

  &.danger {
    background-color: transparent;
    font-size: 16px;
    color: #f61414;
  }

  &.outline {
    border: 1px solid #0ab258;
    background-color: #fff;
    color: #3b3b3b;

    @media (any-hover: hover) {
      &:hover {
        background-color: #0ab258;
        color: #fff;
      }
    }
  }

  &--loading {
    cursor: not-allowed;
  }

  .el-icon {
    color: #fff;
  }

  &__loading {
    height: calc(100% - 20px);
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.9;
  }
}
</style>
