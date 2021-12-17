<template>
  <button class="upload-file-button">
    <svg-icon
        :icon="require('@/assets/images/icons/common/upload.svg')"
        :height="14" :width="14"/>
    <span class="upload-file-button__text">Select a file</span>
  </button>
</template>

<script>
export default {
  name: "upload-file-button"
}
</script>

<style lang="scss">
.upload-file-button {
  width: 454px;
  height: 56px;

  background-color: transparent;

  border: 1px solid #0AB258;
  border-radius: 4px;
  box-sizing: border-box;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: #0AB258;

    > span {
      color: #FFFFFF;
    }
    svg path {
      fill: #FFFFFF;
    }

  }

  > span {
    margin-left: 11px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #3B3B3B;
  }

}
</style>