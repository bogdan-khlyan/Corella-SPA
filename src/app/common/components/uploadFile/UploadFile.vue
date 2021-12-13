<template>
  <div class="upload-files">
    <div v-if="!hasFiles"
         class="upload-file__top">
      <div class="upload-file__button">
        <upload-file-button @click="clickUpload" />
      </div>
      <div class="upload-file__more">Or drag and drop the file here</div>
<!--      <div class="upload-file__desc">You can upload up to {{ maxFileCount }} files with a maximum size of 100MB</div>-->
    </div>
    <div v-else class="upload-file__review">
      <files-list
        v-if="hasFiles"
        :files="files"
        :maxFileCount="maxFileCount"/>
    </div>
    <input
        type="file"
        style="display: none"
        ref="input"
        @change="uploadFiles">
  </div>
</template>

<script>
import UploadFileButton from './components/UploadFileButton';
import FilesList from './components/FilesList';
import { v4 as uuid } from 'uuid';

export default {
  name: 'upload-file',
  components: { FilesList, UploadFileButton },
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
      console.log($event.target.files)
      const fileList = $event.target.files
      Array.from(fileList).forEach(file => {
        this.files.push({
          id: uuid(),
          link: window.URL.createObjectURL(file),
          file
        })
      })
      // $event.target.files.forEach(file => {
      //   console.log(file)
      // })
      // this.files.push()
    }
    // uploadFile(files) {
    //   Array.from(files).forEach(file => {
    //     if (this.maxFileSize < file.size) return;
    //     if (this.files.length === this.maxFileCount) return;
    //     if (files.length > this.maxFileCount) return;
    //     const src = URL.createObjectURL(file);
    //
    //     if (!src) return;
    //
    //     const lastFileIndex = this.files.length - 1;
    //
    //     const id = this.files[lastFileIndex] ? this.files[lastFileIndex].id + 1 : 1;
    //     const type = file.type.split('/')[0];
    //     const extension = file.name.split('.').pop();
    //     const name = file.name;
    //     this.files.push({ id, type, extension, name, src });
    //   });
    // },
    //
    // removeFile(file) {
    //   const target = this.files.findIndex(el => file.id === el.id);
    //   this.files.splice(target, 1);
    //   URL.revokeObjectURL(file.src);
    // }
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