<template>
  <div class="file-preview">
    <button
      v-if="!isViewMode"
      class="file-preview__btn-delete"
      @click="$emit('remove-file', file.id)"
    >
      <el-icon><close /></el-icon>
    </button>

    <el-image
      v-if="isImage"
      :src="file.link"
      :preview-src-list="[file.link]"
      :initial-index="1"
    />
    <a
      v-else
      class="file-preview__file--wrapper"
      :href="file.link"
      :download="file.name"
    >
      <div class="file-preview__file">
        <svg-icon
          :width="48"
          :height="48"
          :icon="icon"
        />
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
    file: { type: Object, required: true },
    isViewMode: { type: Boolean, default: false },
  },
  data() {
    return {
      imageExtensions: ['png', 'jpg', 'jpeg'],
      knownFileExtensions: [
        'html', 'css', 'pdf', 'doc',
        'docx', 'txt', 'json', 'svg',
        'xls', 'xml', 'psd', 'js',
      ],
    }
  },
  computed: {
    icon() {
      if (this.knownFileExtensions.find((item) => this.file.extension === item)) {
        return require(`@/assets/images/icons/extensions/${this.file.extension}.svg`)
      } 
      return require('@/assets/images/icons/extensions/stub.svg')
    },
    isImage() {
      return (
        this.imageExtensions.indexOf(this.file.extension) !== -1
          && this.file.type === 'image'
      )
    },
    fileName() {
      if (this.file.name.length > 10) {
        return `${this.file.name.slice(0, 6)}...${this.file.name.split('.').pop()}`
      } 
      return this.file.name
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

    background: #F32B2A;
    border: 2px solid #FFFFFF;
    border-radius: 50%;

    z-index: 2;

    cursor: pointer;
    transition: 200ms;

    opacity: 0;

    .el-icon {
      color: #FFFFFF;
    }

  }

  .el-image {
    .el-image__preview {
      width: 100px;
      height: 100px;
      border: 1px solid #E7E7E7;
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

      background: #FFFFFF;
      border: 1px solid #EDEDED;
      border-radius: 4px;

      text-decoration: none;
    }

  }

}
</style>
