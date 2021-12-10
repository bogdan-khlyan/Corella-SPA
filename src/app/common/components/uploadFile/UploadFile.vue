<template>
  <div class="upload-file" >
    <div class="upload-file__button">
      <upload-file-button v-if="!hasFiles" @load-file="loadFile" />
    </div>
    <div class="upload-file__more">Or drag and drop the file here</div>
    <div class="upload-file__desc">You can upload up to 10 files with a maximum size of 100MB</div>
    <div class="upload-file__items">
      <file-review v-if="hasFiles" @remove-image="removeImage" @load-file="loadFile"  :filesSrc="filesSrc" />
    </div>
  </div>
</template>

<script>
import UploadFileButton from './components/UploadFileButton';
import FileReview from './components/FileReview';

export default {
  name: 'upload-file',
  data() {
    return {
      filesSrc: []
    }
  },
  components: {
    FileReview,
    UploadFileButton,
  },
  emits: ['load-file', 'remove-image'],
  methods: {
    loadFile(event) {
      const files = Array.from(event.target.files);

      files.forEach(file => {
        const src = URL.createObjectURL(file);

        if (!src) return;

        this.filesSrc.push(src);
      });

    },
    removeImage(fileSrc, fileSrcIndex) {
      this.filesSrc.splice(fileSrcIndex, 1);
      URL.revokeObjectURL(fileSrc)
    }
  },
  computed: {
    hasFiles() {
      return this.filesSrc.length !== 0;
    }
  }
}
</script>

<style scoped lang="scss">

.upload-file {
  max-width: 454px;

  &__desc {

  }
  &__button {
    &:not(:last-child) {
      margin: 0px 0px 8px 0px;
    }
  }
  &__more {
    font-family: "Rubik";
    text-align: center;
    font-size: 12px;
    color: #7C7B86;
    &:not(:last-child) {
      margin: 0px 0px 8px 0px;
    }
  }
  &__desc {
    font-family: "Rubik";
    font-size: 12px;
    color: #7C7B86;
    &:not(:last-child) {
      margin: 0px 0px 16px 0px;
    }


  }
}
</style>