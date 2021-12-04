<template>
  <div class="task-page-wrapper">
    <div class="task-page-wrapper__header">
      <div class="task-page-wrapper__header--icon">
        <img src="@/assets/images/icons/sidebar/icon-projects.svg" alt="">
      </div>
      <div class="task-page-wrapper__header--text">
        <span>Task #267</span>
      </div>
      <div class="task-page-wrapper__header--actions">
        <div class="task-page-wrapper__header--actions-item">
          <button @click="$emit('edit', $event)">
            <img src="@/assets/images/icons/tasks/edit.svg" alt="">
          </button>
        </div>
        <div class="task-page-wrapper__header--actions-item">
          <button class="red"
                  @click="$emit('delete', $event)">
            <img src="@/assets/images/icons/tasks/delete.svg" alt="">
          </button>
        </div>
      </div>
    </div>
    <div class="task-page-wrapper__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-page-wrapper'
}
</script>

<style scoped lang="scss">
.task-page-wrapper {
  padding: 0 16px 16px 16px;

  width: 100%;

  background: #FFFFFF;
  border-radius: 8px;

  &__header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 80px;

    border-bottom: 1px solid #EEEEEE;

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
        > button {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 48px;
          height: 48px;

          border: none;

          background: #20C561;
          border-radius: 8px;

          cursor: pointer;
          transition: 200ms;

          &:hover {
            background: #5ce091;
          }

          &.red {
            background: #F97066;
            &:hover {
              background: #ff9b95;
            }
          }

        }
      }

    }

  }

  &__content {
    padding-top: 16px;
  }

}
</style>
