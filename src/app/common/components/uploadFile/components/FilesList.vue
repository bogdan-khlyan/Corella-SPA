<template>
  <div class="files-list">
    <div class="files-list__item">
      <file-preview/>
    </div>
    <div class="files-list__item">
      <add-file-button/>
    </div>
  </div>
<!--  <ul class="file-review">-->
<!--    <li :key="file.id" v-for="(file, index) in files" class="file-review__item">-->
<!--        <upload-file-item @remove-file="$emit('remove-file', file)" :file="file" />-->
<!--    </li>-->
<!--    <li class="file-review__item">-->
<!--      <input -->
<!--        @change="$emit('upload-file', $event.target.files)" -->
<!--        type="file" name="upload-file" -->
<!--        id="upload-more-files" multiple -->
<!--        class="file-review__input">-->
<!--      <label -->
<!--        @dragover.prevent="dragOver" -->
<!--        @dragleave="dragLeave"-->
<!--        @drop.prevent="dropFile"-->
<!--        v-if="files.length < maxFileCount"-->
<!--        for="upload-more-files" -->
<!--        class="file-review__button"-->
<!--        :class="{ 'file-review__button&#45;&#45;active': isActive }"-->
<!--      >-->
<!--        <svg-icon-->
<!--          :custom-class="'file-review__icon'" -->
<!--          :icon="require('@/assets/images/icons/common/upload.svg')"-->
<!--          :height="18" :width="18"-->
<!--        />-->
<!--        <span class="file-review__count"><span>{{ filesCount }}</span></span>-->
<!--      </label>-->
<!--    </li>-->
<!--  </ul>-->
</template>

<script>
import FilePreview from './FilePreview';
import AddFileButton from "@/app/common/components/uploadFile/components/AddFileButton";

  export default {
    name: "file-review",
    components: { FilePreview, AddFileButton },
    props: {
      files: { type: Array },
      maxFileCount: { type: Number }
    },
    emits: ['remove-file', 'upload-file'],
    data() {
      return {
        isActive: false
      }
    }
  }

</script>

<style lang="scss">

.file-review {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
    border: 1px solid $secondary-stroke-default;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all 400ms ease-in-out;
    &:before {
      content: '';
      position: absolute;
      top: -12px;
      right: -12px;
      border-radius: 50%;
      width: 33px;
      height: 33px;
      background-color: transparent;
      transition: all 400ms ease-in-out;
    }
    &--active {
      background-color: $primary-bg-hover;
      border-color: transparent;
      &:before {
        background-color: $bg-white;
      }
      .file-review__icon {
        fill: $text-white;
      }
      .file-review__count {
        background-color: $text-black;
      }
    }
    @media (any-hover: hover) {
      &:hover {
        background-color: $primary-bg-hover;
        border-color: transparent;
        &:before {
          background-color: $text-white;
        }
        .file-review__icon {
          fill: $primary-text-hover;
        }
        .file-review__count {
          background-color: $text-black;
        }
      }
    }
  }
  &__icon {
    fill: $text-black;
    transition: all 400ms ease-in-out;
  }
  &__count {
    width: 32px;
    height: 32px;
    position: absolute;
    top: -16px;
    right: -16px;
    min-width: 35px;
    height: 35px;
    background-color: $primary-bg-default;
    transition: all 400ms ease-in-out;
    color: $primary-text-default; 
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