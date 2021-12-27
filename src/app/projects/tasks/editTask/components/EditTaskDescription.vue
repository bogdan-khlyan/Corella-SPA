<template>
  <div class="edit-task-description">
    <base-title text="Task Description" />
    <quill-editor :options="options"/>
  </div>
</template>

<script>
import { quillEditor } from 'vue3-quill'
import BaseTitle from "@/app/common/BaseTitle";

export default {
  name: 'edit-task-description',
  components: {BaseTitle, quillEditor },
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
