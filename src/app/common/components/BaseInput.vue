<template>
  <label class="base-input">
    <span v-if="label">{{ label }}</span>
    <input
        type="text"
        :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  name: 'base-input',
  props: {
    label: { type: String },
    placeholder: { type: String, default: 'Please input' }
  }
}
</script>

<style scoped lang="scss">
.base-input {

  > span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #7B7B7B;
  }

  input {
    padding-left: 20px;
    padding-right: 20px;

    width: 100%;
    height: 56px;

    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    color: #BDBCC8;

    &::placeholder {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;

      color: #BDBCC8;
    }


  }

}
</style>
