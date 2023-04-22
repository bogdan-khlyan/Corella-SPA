<template>
  <div class="upload-files">
    <div v-if="!hasFiles && !isViewMode" class="upload-files__button">
      <upload-file-button @click="clickUpload" />
      <div class="upload-files__button--text">
        Or drag and drop the file here
      </div>
    </div>

    <div v-else class="upload-files__files-list">
      <files-list
        :files="files"
        :max-file-count="maxFileCount"
        :is-view-mode="isViewMode"
        @upload-file="clickUpload"
        @remove-file="removeFile"
      />
    </div>

    <input
      ref="input"
      type="file"
      style="display: none"
      multiple
      @change="uploadFiles"
    />
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

import { mapState } from 'pinia'
import { useDragStore } from '@/store/modules/drag'

// import { notificationsHelper } from '@/helpers/notifications.helper'
// import { tasksController } from '@/app/projects/tasks/tasks.controller'
// import { baseWrapperState } from '@/app/common/base-wrapper/base-wrapper.state'

import UploadFileButton from '@/components/upload-files/components/buttons/UploadFileButton'
import FilesList from '@/components/upload-files/components/files-list/FilesList'

export default {
  name: 'UploadFiles',
  components: {
    FilesList,
    UploadFileButton,
  },
  props: {
    modelValue: {
      type: Array,
    },
    isViewMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'add', 'remove'],
  data() {
    return {
      maxFileSize: 104857600,
      maxFileCount: 10,
      dragStore: useDragStore(),
    }
  },
  computed: {
    ...mapState(useDragStore, ['dropFiles']),

    files: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },

    hasFiles() {
      return this.files.length !== 0
    },
  },
  watch: {
    dropFiles(newVal) {
      this.uploadFiles({
        target: {
          files: newVal,
        },
      })
    },
  },
  methods: {
    clickUpload() {
      this.$refs.input.click()
    },
    uploadFiles(e) {
      const fileList = e.target.files
      const addedFiles = []

      for (const file of Array.from(fileList)) {
        /* if (this.maxFileSize < file.size) {
          notificationsHelper.error({
            message: `File ${file.name} is too large`,
          })
          continue
        } */
        if (this.files.length >= this.maxFileCount) {
          return
        }

        const type = file.type.split('/')[0]
        const extension = file.name.split('.').pop()
        const { name } = file
        const link = window.URL.createObjectURL(file)

        const newFile = {
          id: uuid(),
          $file: file,
          link,
          type,
          extension,
          name,
        }

        addedFiles.push(newFile)
      }

      this.files = this.files.concat(addedFiles)
      this.$emit('add', addedFiles)

      e.target.value = null
    },
    removeFile(fileId) {
      // tasksController.removeFile(1, fileId)
      const index = this.files.findIndex((file) => file.id === fileId)
      URL.revokeObjectURL(this.files[index].$file)
      this.files.splice(index, 1)
      this.$emit('remove', fileId)
    },
  },
}
</script>

<style scoped lang="scss">
.upload-files {
  &__button {
    width: 100%;
    //max-width: 454px;
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
