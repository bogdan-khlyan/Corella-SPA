<template>
  <div class="view-task-description">
    <base-title text="Task Description" />
    <div class="view-task-description__content">
      <quill-editor
        v-model:value="test"
        :disabled="true"
      />
    </div>
  </div>
</template>

<script>
import BaseTitle from '@/app/common/BaseTitle'
import { quillEditor } from 'vue3-quill'

export default {
  name: 'ViewTaskDescription',
  components: { BaseTitle, quillEditor },
  props: {
    description: { type: String },
  },
  data() {
    return {
      test: null,
    }
  },
  created() {
    this.test = this.description
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
    background-color: #FBFBFB;
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
