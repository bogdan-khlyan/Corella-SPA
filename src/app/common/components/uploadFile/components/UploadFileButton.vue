<template>
  <div class="upload-file-button">
    <div class="upload-file-button__body">
      <input @change="$emit('load-file', $event)" type="file" name="upload-file" id="upload-file" multiple class="upload-file-button__input">
      <label for="upload-file" class="upload-file-button__item">
        <svg-icon class="upload-file-button__icon" :icon="require('@/assets/images/icons/common/upload.svg')"/>
        <span class="upload-file-button__text">Select a file</span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "upload-file-button",
}
</script>


<style  lang="scss">
.upload-file-button {
  &__wrapper {
    width: 100%;
    position: relative;
  }
  &__input {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
  &__text  {
    font-size: 14px;
    font-weight: 400;
    margin: 0px 0px 0px 11px;
    color: #212121;
  }

  &__item {
    padding: 0px 25px;
    border: 1px solid #0AB258;
    min-height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    font-family: "Rubik";
    cursor: pointer;
  }

}
</style>