<template>
  <div class="upload-file" >
    <div v-if="!hasFiles" class="upload-file__top">
      <div class="upload-file__button">
        <upload-file-button @upload-file="uploadFile" />
      </div>
      <div class="upload-file__more">Or drag and drop the file here</div>
      <div class="upload-file__desc">You can upload up to {{ maxFileCount }} files with a maximum size of 100MB</div>
    </div>
    <div v-else class="upload-file__review">
      <file-review 
        v-if="hasFiles" 
        @remove-file="removeFile" 
        @upload-file="uploadFile"  
        :files="files"
        :maxFileCount="maxFileCount"
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
      maxFileSize: 104857600,
      maxFileCount: 10
    }
  },
  components: {
    FileReview,
    UploadFileButton,
  },
  methods: {
    uploadFile(files) {
      Array.from(files).forEach(file => {
        if (this.maxFileSize < file.size) return;
        if (this.files.length === this.maxFileCount) return;
        if (files.length > this.maxFileCount) return;
        const src = URL.createObjectURL(file);

        if (!src) return;

        const lastFileIndex = this.files.length - 1;

        const id = this.files[lastFileIndex] ? this.files[lastFileIndex].id + 1 : 1;
        const type = file.type.split('/')[0];
        const extension = file.name.split('.').pop();
        const name = file.name;
        this.files.push({ id, type, extension, name, src });
      });
    },

    removeFile(file) {
      const target = this.files.findIndex(el => file.id === el.id);
      this.files.splice(target, 1);
      URL.revokeObjectURL(file.src);
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


  &__desc {

  }
  &__top {
    max-width: 454px;
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
    color: $text-grey;
    &:not(:last-child) {
      margin: 0px 0px 8px 0px;
    }
  }
  &__desc {
    font-family: "Rubik";
    font-size: 12px;
    color: $text-grey;
    &:not(:last-child) {
      margin: 0px 0px 16px 0px;
    }


  }
}
</style>