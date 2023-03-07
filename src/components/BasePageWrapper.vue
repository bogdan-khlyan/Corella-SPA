<template>
  <div
    v-loading="loading"
    class="task-page-wrapper"
    element-loading-background="rgba(0, 0, 0, 0.6)"
  >
    <div class="task-page-wrapper__header">
      <div class="task-page-wrapper__header--icon">
        <img src="@/assets/images/icons/sidebar/icon-projects.svg" alt="" />
      </div>
      <div class="task-page-wrapper__header--text">
        <span>{{ title }}</span>
      </div>
      <div class="task-page-wrapper__header--actions">
        <div
          v-if="showEditButton"
          class="task-page-wrapper__header--actions-item"
        >
          <button @click="$emit('edit', $event)">
            <img src="@/assets/images/icons/tasks/edit.svg" alt="" />
          </button>
        </div>
        <div
          v-if="showDeleteButton"
          class="task-page-wrapper__header--actions-item"
        >
          <base-popconfirm
            :title="deleteButtonText"
            confirm-button-text="Delete"
            cancel-button-text="Cancel"
            reference-class="red"
            @confirm="$emit('delete', $event)"
          >
            <template>
              <svg-icon
                :icon="require('@/assets/images/icons/tasks/delete.svg')"
              />
            </template>
          </base-popconfirm>
        </div>
      </div>
    </div>
    <div class="task-page-wrapper__content">
      <slot />
    </div>
  </div>
</template>

<script>
import BasePopconfirm from '@/components/BasePopconfirm'

export default {
  name: 'TaskPageWrapper',
  components: { BasePopconfirm },
  props: {
    title: {
      type: String,
      required: true,
    },

    showEditButton: {
      type: Boolean,
      default: false,
    },

    showDeleteButton: {
      type: Boolean,
      default: false,
    },

    deleteButtonText: {
      type: String,
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.task-page-wrapper {
  padding: 0 16px 16px 16px;

  width: 100%;

  background: #ffffff;
  border-radius: 8px;

  &__header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    border-bottom: 1px solid #eeeeee;

    &--icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 42px;
      height: 42px;

      background: #323232;
      border-radius: 8px;
    }

    &--text {
      margin-left: 16px;

      > span {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;

        color: #212121;
      }
    }

    &--actions {
      display: flex;
      margin-left: auto;

      &-item {
        margin-left: 6px;
        margin-right: 6px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        :deep > button {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 48px;
          height: 48px;

          border: none;
          fill: #fff;
          background: #20c561;
          border-radius: 8px;

          cursor: pointer;
          transition: 200ms;

          &:hover {
            background: #5ce091;
          }

          &.red {
            background: #f97066;

            &:hover {
              background: #ff9b95;
            }
          }
        }
      }
    }
  }

  &__content {
    //padding-top: 16px;
  }
}
</style>

<style lang="scss">
.task-page-wrapper {
  .el-loading-mask {
    border-radius: 10px !important;
  }
}
</style>
