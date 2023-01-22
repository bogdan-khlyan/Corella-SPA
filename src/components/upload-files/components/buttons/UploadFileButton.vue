<template>
  <button class="upload-file-button">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2999 6.29998H7.70002V0.699955C7.70002 0.31364 7.38638 0 6.99994 0C6.61362 0 6.29998 0.31364 6.29998 0.699955V6.29998H0.699955C0.31364 6.29998 0 6.61362 0 6.99994C0 7.38638 0.31364 7.70002 0.699955 7.70002H6.29998V13.2999C6.29998 13.6864 6.61362 14 6.99994 14C7.38638 14 7.70002 13.6864 7.70002 13.2999V7.70002H13.2999C13.6864 7.70002 14 7.38638 14 6.99994C14 6.61362 13.6864 6.29998 13.2999 6.29998Z"
      />
    </svg>

    <span class="upload-file-button__text">Select a file</span>
  </button>
</template>

<script>
export default {
  name: 'UploadFileButton',
}
</script>

<style lang="scss">
.upload-file-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;

  background-color: transparent;

  border: 1px solid #0ab258;
  border-radius: 4px;
  box-sizing: border-box;

  transition: 200ms;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background-color: #0ab258;

    > span {
      color: #ffffff;
    }

    svg path {
      fill: #ffffff;
    }
  }

  > span {
    margin-left: 11px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #3b3b3b;
  }
}
</style>
