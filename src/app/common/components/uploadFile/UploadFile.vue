<template>
  <div class="upload-file" >
    <div class="upload-file__button">
      <upload-file-button v-if="!hasFiles" @load-file="loadFile" />
    </div>
    <div v-if="!hasFiles" class="upload-file__more">Or drag and drop the file here</div>
    <div v-if="!hasFiles" class="upload-file__desc">You can upload up to 10 files with a maximum size of 100MB</div>
    <div class="upload-file__items">
      <file-review 
        v-if="hasFiles" 
        @remove-image="removeImage" 
        @load-file="loadFile"  
        :files="files" 
      />
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
      files: [],
      maxFileSize: 104857600
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
        if (this.maxFileSize < file.size) return;
        if (this.files.length === 10) return;

        const src = URL.createObjectURL(file);

        if (!src) return;

        const lastFileIndex = this.files.length - 1;

        const id = this.files[lastFileIndex] ? this.files[lastFileIndex].id + 1 : 0;
        const type = file.type.split('/')[0];
        const extension = file.name.split('.').pop();
        const name = file.name;

        this.files.push({ id, type, extension, name, src });
      });
    },

    removeImage(fileSrc, fileSrcIndex) {
      this.files.splice(fileSrcIndex, 1);
      URL.revokeObjectURL(fileSrc)
    }
  },
  computed: {
    hasFiles() {
      return this.files.length !== 0;
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