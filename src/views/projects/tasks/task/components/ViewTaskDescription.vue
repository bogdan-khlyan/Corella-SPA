<template>
  <div class="view-task-description">
    <base-title text="Task Description" />
    <div class="view-task-description__content">
      <quill-editor v-model:value="taskDescription" :disabled="true" />
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/components/BaseTitle'
import { quillEditor } from 'vue3-quill'

export default {
  name: 'ViewTaskDescription',
  components: {
    BaseTitle,
    quillEditor,
  },
  props: {
    description: { type: String },
  },
  computed: {
    taskDescription: {
      get() {
        return this.description
      },
      set(value) {},
    },
  },
}
</script>

<style lang="scss" scoped>
.view-task-description {
  display: flex;
  height: 100%;
  flex-direction: column;

  &__content {
    flex: 1 1 auto;
    //padding: 16px 20px;
    background-color: #fbfbfb;
    border-radius: 4px;
  }
}
</style>

<style lang="scss">
.view-task-description__content {
  .ql-toolbar {
    display: none;
  }

  .ql-container {
    border: none;
  }
}
</style>
