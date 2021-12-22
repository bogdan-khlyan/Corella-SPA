<template>
  <div class="edit-task-description">
    <div class="edit-task-description__title">
      <span>Task Description</span>
    </div>
    <quill-editor :options="options"/>
  </div>
</template>

<script>
import { quillEditor } from 'vue3-quill'

export default {
  name: 'edit-task-description',
  components: { quillEditor },
  data() {
    return {
      options: {
        placeholder: 'Enter a description of the task'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.edit-task-description {
  margin-top: 12px;
  margin-bottom: 12px;

  &__title {
    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #7B7B7B;
    }
  }

}
</style>

<style lang="scss">
.edit-task-description {
  .ql-toolbar {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  > .ql-container {
    min-height: 300px;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    > .ql-editor {
      min-height: 300px;
    }
  }
}
</style>
