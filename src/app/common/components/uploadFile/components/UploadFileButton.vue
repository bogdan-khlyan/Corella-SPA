<template>
  <div class="upload-file-button">
    <div class="upload-file-button__body">
      <input 
        @change="$emit('upload-file', $event.target.files)" 
        type="file" name="upload-file" 
        id="upload-file" multiple 
        class="upload-file-button__input"
      >
      <label 
        @dragover.prevent="dragOver" 
        @dragleave="dragLeave"
        @drop.prevent="dropFile"
        for="upload-file" class="upload-file-button__item"
        :class="{ 'upload-file-button__item--active': isActive }"
      >
        <svg-icon 
          :custom-class="'upload-file-button__icon'" 
          :icon="require('@/assets/images/icons/common/upload.svg')"
          :height="14" :width="14"
        />
        <span class="upload-file-button__text">Select a file</span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "upload-file-button",
  emits: ['upload-file'],
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    dragOver() {
      this.isActive = true;
    },
    dragLeave() {
      this.isActive = false;
    },
    dropFile(event) {
      this.$emit('upload-file', event.dataTransfer.files);
      this.isActive = false;
    }
  }
}
</script>


<style lang="scss">
.upload-file-button {
  &__input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  &__text  {
    font-size: 14px;
    font-weight: 400;
    margin: 0px 0px 0px 11px;
    color: $text-black;
    transition: all 400ms ease-in-out;
  }
  &__icon {
    fill: $text-black;
    transition: all 400ms ease-in-out;
  }
  &__item {
    padding: 0px 25px;
    border: 1px solid $secondary-stroke-hover;
    min-height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    font-family: "Rubik";
    cursor: pointer;
    transition: all 400ms ease-in-out;
    @media (any-hover: hover) {
      &:hover {
        background-color: $secondary-text-hover;
        border-color: transparent;
        .upload-file-button__icon {
          fill: $primary-text-hover;
        }
        .upload-file-button__text {
          color: $primary-text-hover;
        }
      }

    }
    &--active {
      background-color: $secondary-text-active;
      border-color: transparent;
      .upload-file-button__icon {
        fill: $primary-text-active;
      }
      .upload-file-button__text {
        color: $primary-text-active;
      }
    }
  }

}
</style>