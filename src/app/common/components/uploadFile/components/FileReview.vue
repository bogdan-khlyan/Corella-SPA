<template>
  <div class="file-review">
      <div :key="file.id" v-for="(file, index) in files" class="file-review__item">
          <upload-file-item :file="file" />
      </div>
    <div class="file-review__item">
      <input 
        @change="$emit('load-file', $event)" 
        type="file" name="upload-file" 
        id="upload-more-files" 
        multiple 
        class="file-review__input">
      <label for="upload-more-files" class="file-review__button">
        <svg-icon 
          :custom-class="'file-review__icon'" 
          :icon="require('@/assets/images/icons/common/upload.svg')"
          :height="18"
          :width="18"
        />
        <span class="file-review__count"><span>{{ filesCount }}</span></span>
      </label>
    </div>
  </div>
</template>

<script>
import UploadFileItem from './UploadFileItem';

  export default {
    name: "file-review",
    components: {
      UploadFileItem,
    },
    emits: ['remove-image', 'load-file'],
    props: {
      files: { type: Array }
    },
    computed: {
      filesCount() {
        return this.files.length;
      }
    },
  }
</script>

<style lang="scss">

.file-review {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
  &__item {
    flex: 0 0 92px;
    padding: 0px 6px;
    margin: 0px 0px 16px 0px;
  }
  &__input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  &__button {
    border: 1px solid #0AB258;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -12px;
      right: -12px;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: transparent;

    }
  }
  &__icon {
    fill: #212121;
  }
  &__count {
    width: 32px;
    height: 32px;
    position: absolute;
    top: -15px;
    right: -15px;
    min-width: 35px;
    height: 35px;
    background-color: #0AB258;
    color: #fff; 
    font-family: "OpenSans";
    font-size: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
}

</style>