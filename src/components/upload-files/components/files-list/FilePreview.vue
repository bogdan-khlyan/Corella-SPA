<template>
  <div class="file-preview">
    <button
      v-if="!isViewMode"
      class="file-preview__btn-delete"
      @click="$emit('remove-file', file.id)"
    >
      <el-icon>
        <close />
      </el-icon>
    </button>

    <el-image
      v-if="isImage"
      :src="fileInfo.link"
      :preview-src-list="[fileInfo.link]"
      :initial-index="1"
    />
    <a
      v-else
      class="file-preview__file--wrapper"
      :href="fileInfo.link"
      :download="file.name"
    >
      <div class="file-preview__file">
        <svg-icon :width="48" :height="48" :icon="icon" />
        <div class="file-preview__file--name">{{ fileName }}</div>
      </div>
    </a>
  </div>
</template>

<script>
import { Close } from '@element-plus/icons-vue'

export default {
  name: 'FilePreview',
  components: { Close },
  props: {
    file: {
      type: Object,
      required: true,
    },
    isViewMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['remove-file'],
  data() {
    return {
      imageExtensions: ['png', 'jpg', 'jpeg'],
      knownFileExtensions: [
        'html',
        'css',
        'pdf',
        'doc',
        'docx',
        'txt',
        'json',
        'svg',
        'xls',
        'xml',
        'psd',
        'js',
      ],
      fileInfo: {
        extension: '',
        type: '',
        name: '',
        link: '',
      },
      isLoadedFile: false,
    }
  },
  computed: {
    icon() {
      if (
        this.knownFileExtensions.find(
          (item) => this.fileInfo.extension === item
        )
      ) {
        // eslint-disable-next-line import/no-dynamic-require
        return require(`@/assets/images/icons/extensions/${this.fileInfo.extension}.svg`)
      }
      return require('@/assets/images/icons/extensions/stub.svg')
    },

    isImage() {
      return (
        this.imageExtensions.indexOf(this.fileInfo.extension) !== -1 &&
        this.fileInfo.type === 'image'
      )
    },

    fileName() {
      if (this.fileInfo.name.length > 10) {
        return `${this.fileInfo.name.slice(0, 6)}...${this.fileInfo.name
          .split('.')
          .pop()}`
      }
      return this.fileInfo.name
    },
  },
  created() {
    console.log(this.file)
    this.createFileInfo()
  },
  methods: {
    createFileInfo() {
      if (!this.file.path) {
        this.fileInfo = this.file
      } else {
        this.fileInfo.name = this.file.name
        this.fileInfo.link = `${process.env.VUE_APP_BACKEND_HOST}${this.file.path}`
        const extension = this.file.name.split('.').pop()
        this.fileInfo.extension = extension
        if (this.imageExtensions.includes(extension)) {
          this.fileInfo.type = 'image'
        }
      }
    },
  },
}
</script>

<style lang="scss">
.file-preview {
  position: relative;
  margin: 6px;

  &:hover {
    .file-preview__btn-delete {
      opacity: 1;
    }
  }

  &__btn-delete {
    position: absolute;
    top: -12px;
    right: -12px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    background: #f32b2a;
    border: 2px solid #ffffff;
    border-radius: 50%;

    z-index: 2;

    cursor: pointer;
    transition: 200ms;

    opacity: 0;

    .el-icon {
      color: #ffffff;
    }
  }

  .el-image {
    .el-image__preview {
      width: 100px;
      height: 100px;
      border: 1px solid #e7e7e7;
      border-radius: 4px;
    }
  }

  &__file {
    text-align: center;

    &--name {
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;

      color: #707070;
    }

    &--wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 100px;

      background: #ffffff;
      border: 1px solid #ededed;
      border-radius: 4px;

      text-decoration: none;
    }
  }
}
</style>
