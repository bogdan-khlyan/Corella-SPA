<template>
  <div class="upload-files">

    <div v-if="!hasFiles && showButton"
         class="upload-files__button">
      <upload-file-button
          @click="clickUpload"/>
      <div class="upload-files__button--text">Or drag and drop the file here</div>
    </div>

    <div v-else
         class="upload-files__files-list">
      <files-list
        :files="files"
        :max-file-count="maxFileCount"
        @upload-file="clickUpload"
        @remove-file="removeFile"/>
    </div>

    <input
        type="file"
        style="display: none"
        ref="input"
        multiple
        @change="uploadFiles">
  </div>
</template>

<script>
import UploadFileButton from './components/buttons/UploadFileButton';
import FilesList from './components/filesList/FilesList';
import { v4 as uuid } from 'uuid';
import {notificationsHelper} from "@/helpers/notifications.helper";
import {baseWrapperState} from "@/app/common/baseWrapper/base-wrapper.state";

export default {
  name: 'upload-files',
  components: { FilesList, UploadFileButton },
  computed: {
    hasFiles() {
      return this.files.length !== 0
    },
    dragFiles() {
      return baseWrapperState.dragFiles
    }
  },
  props: {
    showButton: { type: Boolean, default: true }
  },
  watch: {
    dragFiles(newVal) {
      console.log('watch')
      console.log(newVal)
      this.uploadFiles({
        target: {
          files: newVal
        }
      })
    }
  },
  data() {
    return {
      files: [],
      maxFileSize: 104857600,
      maxFileCount: 10
    }
  },
  methods: {
    clickUpload() {
      this.$refs.input.click()
    },
    uploadFiles($event) {
      const fileList = $event.target.files

      for (let file of Array.from(fileList)) {
        if (this.maxFileSize < file.size) {
          notificationsHelper.error({ message: `File ${file.name} is too large` })
          continue
        }
        if (this.files.length >= this.maxFileCount) {
          return
        }

        const type = file.type.split('/')[0]
        const extension = file.name.split('.').pop()
        const name = file.name

        this.files.push({
          id: uuid(),
          link: window.URL.createObjectURL(file),
          $file: file,
          type,
          extension,
          name
        })
      }

      $event.target.value = null
    },
    removeFile(fileId) {
      const index = this.files.findIndex(file => file.id === fileId)
      URL.revokeObjectURL(this.files[index].$file)
      this.files.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.upload-files {

  &__button {
    max-width: 454px;
    text-align: center;

    &--text {
      padding-top: 8px;
      padding-bottom: 8px;

      font-family: Rubik, sans-serif;
      text-align: center;
      font-size: 12px;
      color: $text-grey;
    }

  }

}
</style>