<template>
  <div class="files-list">
    <div class="files-list__item"
         v-for="file in files" :key="file.id">
      <file-preview
          :file="file"
          @remove-file="$emit('remove-file', $event)"/>
    </div>
    <div v-if="showAddFileButton"
         class="files-list__item">
      <add-file-button @click="$emit('upload-file', $event)"/>
    </div>
  </div>
</template>

<script>
import FilePreview from './FilePreview';
import AddFileButton from "@/app/common/components/uploadFiles/components/buttons/AddFileButton";

export default {
  name: "files-list",
  components: {FilePreview, AddFileButton},
  emits: ['remove-file', 'upload-file'],
  props: {
    files: { type: Array, required: true },
    maxFileCount: { type: Number, default: 10 }
  },
  computed: {
    showAddFileButton() {
      return this.files.length < this.maxFileCount
    }
  }
}

</script>

<style scoped lang="scss">
.files-list {
  display: flex;
  flex-wrap: wrap;
}
</style>